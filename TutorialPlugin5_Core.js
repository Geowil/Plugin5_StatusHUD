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
	TutorialCore.core._tutorialNoteTagsProcessed = false;


	/* Plugin Functions */
	TutorialCore.core.processNoteTags = function(dataObject) {
		const enabledPlugins = TutorialCore.helpers.getEnabledPlugins();
		if (dataObject && dataObject.note) {
			dataObject._tutorialNoteTagData = dataObject._tutorialNoteTagData || {};
			enabledPlugins.forEach(pluginName => {
				let normalizedPluginName = pluginName.replace("TutorialPlugin", "tutorialPlugin");
				normalizedPluginName = pluginName.replace("_", "");
				const startTag = `<${pluginName}>`;
				const endTag = `</${pluginName}>`;
				dataObject._tutorialNoteTagData[`_${normalizedPluginName}`] =
					TutorialCore.core.parseNoteTags(dataObject.note, startTag, endTag, pluginName);
			});
		}
	};

	TutorialCore.core.parseNoteTags = function(note, startTag, endTag, pluginName) {
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
						const propertyName = TutorialCore.core.dynamicMapping(nestedTag);
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
				const mappedKey = TutorialCore.core.dynamicMapping(key);
				result[mappedKey] = TutorialCore.core.convertValue(value);
			}
		}

		return result;
	};

	TutorialCore.core.dynamicMapping = function(key) {
		return `_${key.charAt(0).toLowerCase()}${key.slice(1)}`;
	};

	TutorialCore.core.convertValue = function(value) {
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

	TutorialCore.core.getDatabaseEntry = function(databaseType, id) {
		const database = window[databaseType];
		if (!database) {
			console.error(`Database "${databaseType}" not found.`);
			return undefined;
		}

		const entry = database[id];
		if (!entry) {
			console.warn(`Entry with ID ${id} not found in "${databaseType}".`);
		}

		return entry;
	};

	TutorialCore.core.canParseJSON = function(jsonString) {
		try {
			JSON.parse(jsonString);
			return true;
		} catch (error) {
			//Output into console
			return false;
		}
	}

	TutorialCore.core.isANumber = function(value) {
		if (isNaN(value)) {
			//Error handling
			return false;
		} else {
			return true;
		}
	}


	/* Helper Functions */
	TutorialCore.helpers.getEnabledPlugins = function() {
		return $plugins.filter(plugin => plugin.status && plugin.name.startsWith("TutorialPlugin")).map(plugin => plugin.name);
	};

	TutorialCore.helpers.processDatabaseNoteTags = function() {
		const databaseObjects = [
			$dataActors, $dataClasses, $dataSkills, $dataItems,
			$dataWeapons, $dataArmors, $dataEnemies, $dataTroops,
			$dataStates, $dataTilesets
		];

		databaseObjects.forEach(dataArray => {
			if (dataArray) {
				dataArray.forEach(entry => {
					TutorialCore.core.processNoteTags(entry);
				});
			}
		});
	};

	TutorialCore.helpers.processMapNoteTags = function(){
		TutorialCore.core.processNoteTags($dataMap);
	}

	TutorialCore.helpers.rejoinArguments = function(args, startIndex) {
		return args.slice(startIndex).join(" ");
	};

	TutorialCore.helpers.getActorById = function(id) {
		return TutorialCore.core.getDatabaseEntry("$dataActors", id);
	};

	TutorialCore.helpers.getClassById = function(id) {
		return TutorialCore.core.getDatabaseEntry("$dataClasses", id);
	}

	TutorialCore.helpers.getSkillById = function(id) {
		return TutorialCore.core.getDatabaseEntry("$dataSkills", id);
	};

	TutorialCore.helpers.getItemById = function(id) {
		return TutorialCore.core.getDatabaseEntry("$dataItems", id);
	};

	TutorialCore.helpers.getWeaponById = function(id) {
		return TutorialCore.core.getDatabaseEntry("$dataWeapons", id);
	}

	TutorialCore.helpers.getArmorById = function(id) {
		return TutorialCore.core.getDatabaseEntry("$dataArmors", id);
	}

	TutorialCore.helpers.getEnemyById = function(id) {
		return TutorialCore.core.getDatabaseEntry("$dataEnemies", id);
	};

	TutorialCore.helpers.getTroopById = function(id) {
		return TutorialCore.core.getDatabaseEntry("$dataTroops", id);
	}

	TutorialCore.helpers.getStatusById = function(id) {
		return TutorialCore.core.getDatabaseEntry("$dataStates", id);
	}

	TutorialCore.helpers.parseJSONList = function(jsonList) {
		let finalObject = [];
		let parsedList = this.parseJSON(jsonList);
		for (let object of parsedList) {
			finalObject.push(TutorialCore.helpers.recursiveJSONParse(object));
		}

		return finalObject;
	}

	TutorialCore.helpers.recursiveJSONParse = function(prasableObject) {		
		let data = JSON.parse(prasableObject);
		for (let key in data) {
			let value = data[key];
			if (value.substr(0, 2) == '[\"' ||
				value.substr(0,2) == '["' ||
				value.substr(0, 2) == '[]' ||
				value.substr(0, 2) == '{\"' ||
				value.substr(0,2) == '{"' ||
				value.substr(0, 2) == '{}')
			{
				console.log("found parsable string: ", value);
				data[key] = TutorialCore.helpers.recursiveJSONParse(value);
			}
		}
	
		return data;
	}

	TutorialCore.helpers.parseJSON = function(jsonString) {
		let jsonObject = {};
		if (TutorialCore.core.canParseJSON(jsonString)) {
			jsonObject = JSON.parse(jsonString);
		}

		return jsonObject;
	}

	TutorialCore.helpers.getNumber = function(value) {
		let returnValue = 0;
		if (TutorialCore.core.isANumber(value)) {
			returnValue = Number(value);
		}

		return returnValue;
	}

	TutorialCore.helpers.orderData = function(data, property, direction) {
		//Error handling for property and direction params
		data.sort((a, b) => {
			return (a[property] < b[property] && direction == "desc" ? 1 : (
				a[property] < b[property] && direction == "asc" ? -1 : (
					a[property] > b[property] && direction == "desc" ? -1 : (
						a[property] > b[property] && direction == "asc" ? 1 : 0		
			))));
		});
	}

	TutorialCore.helpers.clamp = function(value, min, max) {
		return Math.max(min, Math.min(value, max));
	}


	/* Alias Functions */
	const TutorialCore_DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
	DataManager.isDatabaseLoaded = function() {
		if (!TutorialCore_DataManager_isDatabaseLoaded.call(this)) {
			return false;
		}

		if (!TutorialCore.core._tutorialNoteTagsProcessed) {
			TutorialCore.helpers.processDatabaseNoteTags();
			TutorialCore.core._tutorialNoteTagsProcessed = true;
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
					TutorialCore.helpers.processMapNoteTags();
				}
			};
		}
	};


	/* Override Functions */
})();