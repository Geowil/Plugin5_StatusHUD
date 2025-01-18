/*:
* @plugindesc Core Plugin for RPG Maker MV - Fully featured with argument handling, note tag parsing, dynamic mapping, and accessor functions.
* @author LMPGames
*
* @help
* ==========================
* Core Plugin v1.9
* ==========================
*
* This plugin provides shared utilities for other LMPGames plugins.
*
* Features:
* - Dynamically builds start and end tags for note tags based on enabled plugins.
* - Parses and stores note tag data in a structured format for items and other database entries.
* - Dynamically maps note tag attributes to stored data property names using a predictable naming convention.
* - Accessor functions for database entries.
* - Plugin argument rejoining utility.
*/

var TutorialCore = TutorialCore || {};
TutorialCore.core = TutorialCore.core || {};
TutorialCore.helpers = TutorialCore.helpers || {};
TutorialCore.statics = TutorialCore.statics || {};

(function() {
	/* Plugin Properties */
	var _tutorialNoteTagsProcessed = false;


	/* Plugin Functions */
	function processDatabaseNoteTags() {
		const databaseObjects = [
			$dataActors, $dataClasses, $dataSkills, $dataItems,
			$dataWeapons, $dataArmors, $dataEnemies, $dataTroops,
			$dataStates, $dataTilesets
		];

		databaseObjects.forEach(dataArray => {
			if (dataArray) {
				dataArray.forEach(entry => {
					this.processNoteTags(entry);
				});
			}
		});
	};

	function processMapNoteTags(){
		this.processNoteTags($dataMap);
	}

	function processNoteTags(dataObject) {
		const enabledPlugins = this.getEnabledPlugins();
		if (dataObject && dataObject.note) {
			dataObject._tutorialNoteTagData = dataObject._tutorialNoteTagData || {};
			enabledPlugins.forEach(pluginName => {
				const normalizedPluginName = pluginName.replace("TutorialPlugin", "tutorialPlugin");
				normalizedPluginName = pluginName.replace("_", "");
				const startTag = `<${pluginName}>`;
				const endTag = `</${pluginName}>`;
				dataObject._tutorialNoteTagData[`_${normalizedPluginName}`] =
					this.parseNoteTags(dataObject.note, startTag, endTag, pluginName);
			});
		}
	};

	function parseNoteTags(note, startTag, endTag, pluginName) {
		const lines = note.split(/[\r\n]+/);
		let parsing = false;
		let result = {};
		let nestedParsing = false;
		let nestedTag = "";
		let nestedContent = "";

		for (let line of lines) {
			line = line.trim();
			if (line === startTag) {
				parsing = true;
				continue;
			}

			if (line === endTag) {
				break;
			}

			if (parsing) {
				//TODO: move nested note tag handling to a new function that is called from here and bypasses the standard value handling
				//at the bottom of this if block.
				const nestedStartMatch = line.match(/^<(\w+)>$/);
				if (nestedStartMatch) {
					nestedParsing = true;
					nestedTag = nestedStartMatch[1];
					nestedContent = "";
					continue;
				}

				if (nestedParsing && line === `</${nestedTag}>`) {
					try {
						console.log("nested content: ", nestedContent);
						const propertyName = this.dynamicMapping(nestedTag);
						result[propertyName] = JSON.parse(nestedContent);
					} catch (e) {
						console.error(`Failed to parse content for nested tag <${nestedTag}>:`, e);
						result[propertyName] = [];
					}

					nestedParsing = false;
					nestedTag = "";
					continue;
				}

				if (nestedParsing) {
					nestedContent += line;
					continue;
				}

				const [key, value] = line.split(":").map(part => part.trim());
				const mappedKey = this.dynamicMapping(key);
				result[mappedKey] = this.convertValue(value);
			}
		}

		return result;
	};

	function dynamicMapping(key) {
		return `_${key.charAt(0).toLowerCase()}${key.slice(1)}`;
	};

	function convertValue(value) {
		if (!isNaN(value)) {
			return parseFloat(value);
		}

		if (value.toLowerCase() === "true" || value.toLowerCase() === "false") {
			return value.toLowerCase() === "true";
		}

		if (value.toLowerCase() === "yes" || value.toLowerCase() === "no") {
			return value.toLowerCase() === "yes";
		}

		if (value.startsWith("{") || value.startsWith("[")) {
			try {
				return JSON.parse(value);
			} catch (e) {
				console.error(`Failed to parse JSON value: ${value}`, e);
			}
		}

		return value;
	};

	function getDatabaseEntry(databaseType, id) {
		const database = window[databaseType];
		if (!database) {
			console.error(`Database "${databaseType}" not found.`);
			return null;
		}

		const entry = database[id];
		if (!entry) {
			console.warn(`Entry with ID ${id} not found in "${databaseType}".`);
		}

		return entry;
	};


	/* Helper Functions */
	TutorialCore.helpers.getEnabledPlugins = function() {
		return $plugins.filter(plugin => plugin.status && plugin.name.startsWith("TutorialPlugin")).map(plugin => plugin.name);
	};

	TutorialCore.helpers.rejoinArguments = function(args, startIndex) {
		return args.slice(startIndex).join(" ");
	};

	TutorialCore.helpers.getActorById = function(id) {
		return this.getDatabaseEntry("$dataActors", id);
	};

	TutorialCore.helpers.getEnemyById = function(id) {
		return this.getDatabaseEntry("$dataEnemies", id);
	};

	TutorialCore.helpers.getSkillById = function(id) {
		return this.getDatabaseEntry("$dataSkills", id);
	};

	TutorialCore.helpers.getItemById = function(id) {
		return this.getDatabaseEntry("$dataItems", id);
	};


	/* Alias Functions */
	const TutorialCore_DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
	DataManager.isDatabaseLoaded = function() {
		if (!TutorialCore_DataManager_isDatabaseLoaded.call(this)) {
			return false;
		}

		if (!this._tutorialNoteTagsProcessed) {
			this.processDatabaseNoteTags();
			this._tutorialNoteTagsProcessed = true;
		}

		return true;
	};

	const TutorialCore_DataManager_loadMapData = DataManager.loadMapData;
	DataManager.loadMapData = function(mapId) {
		TutorialCore_DataManager_loadMapData.call(this, mapId);
		if (mapId > 0) {
			const TutorialCore_DataManager_onLoad = DataManager.onLoad;
			DataManager.onLoad = function(data) {
				TutorialCore_DataManager_onLoad.call(this, data);
				if (data === $dataMap) {
					this.processMapNoteTags();
				}
			};
		}
	};


	/* Override Functions */
})();