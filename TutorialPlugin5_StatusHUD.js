/*:
* @plugindesc Status HUD plugin for RPG Maker MV - Shows various status information for lead character with additional options that can be configured by the developer or player.
* @author LMPGames
*
* @param General Settings
*
* @param statusUIEnabled
* @text Enable Status UI
* @desc When enabled, the status UI element will be shown.
* @type boolean
* @on Enable
* @off Disable
* @default false
* @parent General Settings
*
*
* @param Gauge Color Settings
*
* @param hpGaugeColorSettings
* @text HP Gauge Color Settings
* @desc Sets the starting and ending color for the HP gauge.  This is an object.
* @type struct<GaugeColorSettings>
* @parent Gauge Color Settings
*
*
* @param mpGaugeColorSettings
* @text MP Gauge Color Settings
* @desc Sets the starting and ending color for the MP gauge.  This is an object.
* @type struct<GaugeColorSettings>
* @parent Gauge Color Settings
*
*
* @param expGaugeColorSettings
* @text EXP Gauge Color Settings
* @desc Sets the starting and ending color for the EXP gauge.  This is an object.
* @type struct<GaugeColorSettings>
* @parent Gauge Color Settings
*
*
* @param Display Settings
*
* @param gaugeMode
* @text Gauge Mode
* @desc Sets the visual style of the HP/MP gauges.
* @type select
* @option Circular
* @value 1
* @option Semi-Circular 
* @value 2
* @default 1
* @parent Display Settings
*
*
* @param uiPosition
* @text UI Position
* @desc Sets the default position the UI element will be placed.  This can be changed by the player in-game.
* @type select
* @option Top Left
* @value 1
* @option Top Center
* @value 2
* @option Top Right
* @value 3
* @option Middle Left
* @value 4
* @option Middle Right
* @value 5
* @option Bottom Left
* @value 6
* @option Bottom Center
* @value 7
* @option Bottom Right
* @value 8
* @default 1
* @parent Display Settings
*
*
* @param uiConfiguration
* @text UI Position Configuration
* @desc Sets the position for UI elements per UI Position option.  See Github for important info.
* @type struct<UIPositionConfiguration>[]
* @default []
* @parent Display Settings
*
*
* @param showLevelExpElement
* @text Display Level/EXP UI Element
* @desc Sets the default visibility for the Level/EXP UI element.  This can be changed by the player in-game.
* @type boolean
* @on Enable
* @off Disable
* @default false
* @parent Display Settings
*
*
* @param showClassNameElement
* @text Display Class Name Element
* @desc Sets the default visibility for the Class Name UI element.  This can be changed by the player in-game.
* @type boolean
* @on Enable
* @off Disable
* @default false
* @parent Display Settings
*
*
* @param showStatusIconElement
* @text Display Status Icon Bar Element
* @desc Sets the default visibility for the Status Icon UI element.  This can be changed by the player in-game.
* @type boolean
* @on Enable
* @off Disable
* @default false
* @parent Display Settings
*
*
* @param statusIconLimit
* @text Status Icon Bar Limit
* @desc Sets the maximum number of status icons to show in the Status Icon UI element.  Statuses are ordered by priority setting.
* @type number
* @min 1
* @max 5
* @default 3
* @parent Display Settings
*
*
* @param statusIconBarLocation
* @text Status Icon Bar Location
* @desc Sets the display location for the Status Icon Bar when it is displayed next to the ring gauges.
* @type select
* @option Top
* @value 1
* @option Center
* @value 2
* @option Bottom
* @value 3
* @option Stacked
* @value 4
* @default 2
* @parent Display Settings
*
*
* @param Other Settings
*
* @param showDownedCharacter
* @text Show Downed Character
* @desc When the lead character is downed, when enabled, this will keep displaying their information.  When disabled, the next party member will be shown.
* @type boolean
* @on Enable
* @off Disable
* @default false
* @parent Other Settings
*
*
* @param onScreenBattleUiSupport
* @text On-Screen Battle UI Support
* @desc When enabled, will hide this plugin's elements. If your on-screen battle plugin has it's own UI, enable this option.  See Github for more info.
* @type boolean
* @on Enable
* @off Disable
* @default false
* @parent Other Settings
*
*
* @param enableImageBasedArrows
* @text Enable Image Based Arrows
* @desc When enabled, will use system image files to display arrow icons in options menu.
* @type boolean
* @on Enabled
* @off Disabled
* @default false
* @parent Other Settings
*
*
* @param Animation Settings
*
* @param gaugeAnimationSpeed
* @text Gauge Animation Speed
* @desc Sets the gauge animation speed.  Higher is slower.
* @type number
* @min 1
* @max 20
* @default 15
* @parent Animation Settings
*
*
* @param iconSlideAnimationSpeed
* @text Icon Slide Animation Speed
* @desc Sets the speed at which icons will move during update animations.  Higher is slower.
* @type number
* @min 1
* @max 20
* @default 4
* @parent Animation Settings
*
*
* @param iconMoveAnimationSpeed
* @text Move Icon Animation Speed
* @desc Sets the speed at which icon animation updates will happen when moving.  Lower is smoother.
* @type number
* @min 10
* @max 40
* @default 20
* @parent Animation Settings
*
*
* @param iconFadeOutAndRemoveAnimationSpeed
* @text Icon Fade Out Animation Speed
* @desc Sets the speed at which icons will fade out when being removed.  Lower is smoother.
* @type number
* @min 100
* @max 1200
* @default 300
* @parent Animation Settings
*
*
* @param iconFadeInAnimationSpeed
* @text Icon Fade In Animation Speed
* @desc Sets the speed at which icons will fade in when being added.  Lower is smoother.
* @type number
* @min 10
* @max 90
* @default 30
* @parent Animation Settings
*
*
*
* @help
* ==========================
* Status HUD v0.1
* ==========================
*
* This plugin display a UI element that shows the lead character HP/MP, Character Portrait, Class Name, Level, EXP, and Statuses.
*
* Features:
* - HP/MP Gauges have two display modes, circular and semi-circular.
* - Level/EXP, Class Name, and Status Icon elements are displayed dymacially based on plugin settings and in-game options.
* - UI element position is configurable by the develop and the player.
* - When UI element is hidden or shown, it will fade in or out.  Hides automatically in certain situations, other times plugin command should be called.
* - Gauge colors are configurable by the developer.
* 
* For full details, see GitHub page: https://github.com/Geowil/Plugin5_StatusHUD
*/

/*~struct~GaugeColorSettings:
* @param startColor
* @text Start Color
* @desc Sets the starting color for a gauge
* @type text
* 
*
* @param endColor
* @text End Color
* @desc Sets the ending color for a gauge
* @type text
*/

/*~struct~UIPositionConfiguration:
* @param uiPositionIndex
* @text UI Position Setting
* @desc This sets the UI Position value the coordinate settings will be appled to.
* @type number
* @min 1
* @max 8
* @default 1
*
*
* @param uiElementConfiguration
* @text UI Element Configuration
* @desc This allows you to create new position coordinate settings for each element for this option.  See GitHub for important info.
* @type struct<UIElementConfiguration>[]
* @default []
*/


/*~struct~UIElementConfiguration:
* @param elementName
* @text Element Name
* @desc Name of the element this set of coordinates will apply to.
* @type text
* @default
*
*
* @param elementCoordinates
* @text Element Coordinates
* @desc Sets the x and y position for this element.
* @type struct<Coordinates>[]
* @default []
*/

/*~struct~Coordinates:
* @param xCoordinate
* @text X
* @desc This sets the horizontal position of the UI element.
* @type number
* @default 0
*
*
* @param yCoordinate
* @text Y
* @desc This sets the vertical position of the UI element.
* @type number
* @default 0
*/

(function() {
	const pluginParams = PluginManager.parameters("TutorialPlugin5_StatusHUD");
	var statusUIEnabled = (pluginParams["statusUIEnabled"] === "true");
	var hpGaugeColorSettings = TutorialCore.helpers.parseJSON(pluginParams["hpGaugeColorSettings"]);
	var mpGaugeColorSettings = TutorialCore.helpers.parseJSON(pluginParams["mpGaugeColorSettings"]);
	var expGaugeColorSettings = TutorialCore.helpers.parseJSON(pluginParams["expGaugeColorSettings"]);
	var gaugeMode = TutorialCore.helpers.getNumber(pluginParams["gaugeMode"]);
	var uiPosition = TutorialCore.helpers.getNumber(pluginParams["uiPosition"]);
	var showLevelExpElement = (pluginParams["showLevelExpElement"] === "true");
	var showClassNameElement = (pluginParams["showClassNameElement"] === "true");
	var showStatusIconElement = (pluginParams["showStatusIconElement"] === "true");
	var statusIconLimit = TutorialCore.helpers.getNumber(pluginParams["statusIconLimit"]);
	var statusIconBarLocation = TutorialCore.helpers.getNumber(pluginParams["statusIconBarLocation"]);
	var showDownedCharacter = (pluginParams["showDownedCharacter"] === "true");
	var onScreenBattleUiSupport = (pluginParams["onScreenBattleUiSupport"] === "true");
	var enableImageBasedArrows = (pluginParams["enableImageBasedArrows"] === "true");
	var gaugeAnimationSpeed = TutorialCore.helpers.getNumber(pluginParams["gaugeAnimationSpeed"]);
	var iconSlideAnimationSpeed = TutorialCore.helpers.getNumber(pluginParams["iconSlideAnimationSpeed"]);
	var iconMoveAnimationSpeed = TutorialCore.helpers.getNumber(pluginParams["iconMoveAnimationSpeed"]);
	var iconFadeOutAndRemoveAnimationSpeed = TutorialCore.helpers.getNumber(pluginParams["iconFadeOutAndRemoveAnimationSpeed"]);
	var iconFadeInAnimationSpeed =  TutorialCore.helpers.getNumber(pluginParams["iconFadeInAnimationSpeed"]);
	var uiConfiguration = TutorialCore.helpers.parseJSONList(pluginParams["uiConfiguration"]);
	castUiConfigValues(uiConfiguration);
	console.log("parsed: ", JSON.stringify(uiConfiguration));
	console.log('HP X Coord: ', getUIElementXCoordinate("HP"));
	console.log('HP Y Coord: ', getUIElementYCoordinate("HP"));
	console.log("HP Coords: ", getElementCoordinates("HP"));

	/* Plugin Functions */
	function castUiConfigValues(data) {
		for (let key in data) {
			if (data[key].constructor != Object && data[key].constructor != Array) {
			  	if (!isNaN(data[key])) {
					data[key] = Number(data[key]);
				}
			} else {
				castUiConfigValues(data[key]);
			}
		}
	}


	/*
		Potential Updates for Half-Cicle Gauges:
			Add a plugin setting for the line cap (butt, round, square)
				This another multi-option like UI Position with int value and a text label
			
			Add a plugin command to change the line cap

			Update the element positioning for Status Icon Bar, EXP Bar, and Class Name to bring
			them up underneath the guage component in Half-Circle mode.

			Shrink the portrait in Half-Circle mode

			Add a option menu option to change the line cap type
				Would need to be disabled when using Full-Circle gaguges
	*/

	/*
		Making Max HP/MP changes animate smoothly
			You would need to implement a newMaxValue and targetMaxValue into the update functions where update logic exists.
			It would follow the same principle as with newValue, targetValue, and currentValue.
			currentValue would be replaced with maxValue in a new set of if statements.
	*/

	class UIElement extends Sprite {
		constructor() {
			super();
			this._bitmapContext = undefined;
			this._character = undefined;
			this._currentValue = undefined;
			this._targetValue = undefined;
			this._maxValue = undefined;
			this._hpXPosition = 0;
			this._uiElementWillBeRedrawn = false;
		}

		//When/If you update the code to implement animated max value changes, remove this function and references to it as
		//the update function will be handling this.
		updateMaxValue(newMaxValue) {
			this._maxValue = newMaxValue;
			this.redrawUIElement();
		}

		forceUIRedraw() {
			this.redrawUIElement();
		}

		update() {
			super.update();
			this._uiElementWillBeRedrawn = false;
		}

		redrawUIElement() {
			this.bitmap.clear();
			this._bitmapContext = this.bitmap.context
			this.getCharacterData();
			this._hpXPosition = getUIElementXCoordinate("HP");
		}

		getCharacterData() {
			this._character = getCharacter();
		}

		getTextMetrics(text) {
			return this._bitmapContext.measureText(text);
		}
	}

	class GaugeElement extends UIElement {
		constructor() {
			super();
			this._startColor = undefined;
			this._endColor = undefined;
			this._animationInProgress = false;
			this._gaugeRadius = undefined;
		}

		//This is where you would implement max HP/MP updates
		update(executesCode, newValue) {
			super.update();
			if (executesCode) { //If a gauge needs to bypass this update logic
				if (this._targetValue !== newValue) {
					this._targetValue = newValue;
				}

				if (this._currentValue !== this._targetValue) {
					this._currentValue += (this._targetValue - this._currentValue) / gaugeAnimationSpeed; //animation speed could be a gauge specific setting
					if (Math.abs(this._currentValue - this._targetValue) < 0.1) {
						this._currentValue = this._targetValue;
					}

					this._uiElementWillBeRedrawn = true;
				}
			}
		}

		redrawUIElement(executesCode, elementType) {
			super.redrawUIElement();
			if (executesCode) {
				let xPosition = getUIElementXCoordinate(elementType);
				let yPosition = getUIElementYCoordinate(elementType);
				console.log(`X:${xPosition} | Y:${yPosition}`);
				/*
					You could potentially combine these two functions into one by passing in all of the
					values needed to draw the arcs.  I would pass in an object with all the values like:
						{
							xPosition: xPosition,
							yPosition: yPosition,
							lineWidth: lineWidth,
							arcAlpha: arcAlpha,
							strokeStyle: strokeStyle
						}
					
					Leave out anything that is a plugin setting, the values would be passed into the redrawUIElement function OR
					you would construct the object in the child functions and pass the object through super.redrawUIElement.

					The only problem is the end arc calculations are different between the two functions, but this could be
					handled.  The easiest way is probably just a boolean that states if you are drawing a background or
					foreground arc.  Boolean check would go in the gaugeMode if code blocks.
				*/
				this.drawBackgroundArc(xPosition, yPosition);
				this.drawForegroundArc(xPosition, yPosition);
			}
		}

		drawBackgroundArc(xPosition, yPosition) {
			this._bitmapContext.globalAlpha = 0.65; //Another enhancement here could be to make this a plugin setting.
			this._bitmapContext.beginPath();
			let startAngle = Math.PI;
			let endAngle = 0;
			if (gaugeMode == 1) {
				endAngle = Math.PI * 4;
			} else if (gaugeMode == 2) {
				endAngle = Math.PI * 2;
			}

			//The last false param of arc function sets the fill direction of the arc.  It defaults to clockwise if the parameter isn't included in the call.
			//If you wanted to enhance this, you could set the direction as a plugin setting and then use the plugin variable here as the last param.
			//Otherwise you can probably just remove this.
			this._bitmapContext.arc(xPosition, yPosition, this._gaugeRadius, startAngle, endAngle, false);
			this._bitmapContext.lineWidth = 12; //Another enhancement here could be to make this a plugin setting.
			this._bitmapContext.strokeStyle = '#222222'; //Another enhancement here could be to make this a plugin setting.
			this._bitmapContext.lineCap = "square"; 
			this._bitmapContext.stroke();

			this._bitmapContext.globalAlpha = 1.0;
		}

		drawForegroundArc(xPosition, yPosition) {
            const gradient = this.getGradient(xPosition, yPosition);
			let startAngle = 0;
			let endAngle = 0;
			if (gaugeMode == 1) {
				endAngle = (this._currentValue / this._maxValue) * Math.PI * 2
			} else if (gaugeMode == 2) {
				endAngle = Math.PI + (this._currentValue / this._maxValue) * Math.PI;
				startAngle = Math.PI;
			}

            this._bitmapContext.beginPath();
            this._bitmapContext.arc(xPosition, yPosition, this._gaugeRadius, startAngle, endAngle, false);
            this._bitmapContext.lineWidth = 8;
            this._bitmapContext.strokeStyle = gradient;
            this._bitmapContext.lineCap = "square";
            this._bitmapContext.stroke();
		}

		getGradient(xPosition, yPosition) {
			const gradient = this._bitmapContext.createLinearGradient(xPosition - this._gaugeRadius, yPosition, xPosition + this._gaugeRadius, yPosition);
			//You could also set up a gradient to be more than two colors, you would add new color options to the struct and then change the property
			//names to make more sense for that scenario.
			gradient.addColorStop(0, this._startColor); //Color stop decimals could be a plugin setting per gauge, would add to color structs
			gradient.addColorStop(0.9, this._endColor);

			return gradient;
		}
	}

	class HPGauge extends GaugeElement {
		constructor(startGaugeColor, endGaugeColor, gaugeRadius, currentValue, maxValue) {
			super();
			this.bitmap = new Bitmap(Graphics.width, Graphics.height);
			this._startColor = startGaugeColor;
			this._endColor = endGaugeColor;
			this._currentValue = currentValue;
			this._targetValue = currentValue;
			this._maxValue = maxValue;
			this._gaugeRadius = gaugeRadius;

			this.redrawUIElement();
		}

		update() {
			this.getCharacterData();
			let newValue = this._character._hp;
			super.update(true, newValue);
			if (this._uiElementWillBeRedrawn) {
				this.redrawUIElement();
			}
		}

		redrawUIElement() {
			super.redrawUIElement(true, "HP");
		}
	}

	class MPGauge extends GaugeElement {
		constructor(startGaugeColor, endGaugeColor, gaugeRadius, currentValue, maxValue) {
			super();
			this.bitmap = new Bitmap(Graphics.width, Graphics.height);
			this._startColor = startGaugeColor;
			this._endColor = endGaugeColor;
			this._currentValue = currentValue;
			this._targetValue = currentValue;
			this._maxValue = maxValue;
			this._gaugeRadius = gaugeRadius;

			this.redrawUIElement();
		}

		update() {
			this.getCharacterData();
			let newValue = this._character._mp;
			super.update(true, newValue);
			if (this._uiElementWillBeRedrawn) {
				this.redrawUIElement();
			}
		}

		redrawUIElement() {
			super.redrawUIElement(true, "MP");
		}
	}

	class ExpGauge extends GaugeElement {
		constructor(startGaugeColor, endGaugeColor, gaugeWidth, currentValue, currentValue2, maxValue) {
			super();
			this.bitmap = new Bitmap(Graphics.width, Graphics.height);
			this._startColor = startGaugeColor;
			this._endColor = endGaugeColor;
			this._currentValue = currentValue;
			this._currentValue2 = currentValue2;
			this._targetValue = currentValue;
			this._maxValue = maxValue;
			this._gaugeWidth = gaugeWidth;

			this.redrawUIElement();
		}

		update() {
			this.getCharacterData();
			let newValue = this._character._exp[this._character._classId] - this._character.currentLevelExp();
			let newValue2 = this._character._level;
			super.update(true, newValue);

			if (this._targetValue2 !== newValue2) {
				this._targetValue2 = newValue2;
			}

			if (this._currentValue2 !== this._targetValue2) {
				this._currentValue2 = this._targetValue2;
				this._uiElementWillBeRedrawn = true;
			}

			if (this._uiElementWillBeRedrawn) {
				this.redrawUIElement();
			}
		}

		redrawUIElement() {
			super.redrawUIElement(false, undefined);
			let yPosition = getUIElementYCoordinate("EXP");
			let levelText = `Lv. ${this._character._level}`;
			this._bitmapContext.font = "18px GameFont";
			let levelTextMetrics = this.getTextMetrics(levelText);
			let levelTextWidth = levelTextMetrics.width;
			this.drawBackgroundLevelBox(yPosition, levelTextWidth);
			this.drawBackgroundExpBox(yPosition, levelTextWidth);
			this.drawLevelText(yPosition, levelText, levelTextWidth);
			this.drawForegroundExpBox(yPosition, levelTextWidth);
		}

		drawBackgroundLevelBox(yPosition, levelTextWidth) {
			let centerdXPosition = this._hpXPosition - levelTextWidth / 2;
			let finalXPosition = centerdXPosition + levelTextWidth - 106;
			this._bitmapContext.beginPath();
			this._bitmapContext.rect(finalXPosition, yPosition, levelTextWidth + 4, 23);
			this._bitmapContext.fillStyle = "#222222";
			this._bitmapContext.fill();
		}

		drawBackgroundExpBox(yPosition, levelTextWidth) {
			let fullWidth = 118 + levelTextWidth;
			let centerdXPosition = this._hpXPosition - fullWidth / 2;
			let finalXPosition = centerdXPosition + levelTextWidth;
			this._bitmapContext.beginPath();
			this._bitmapContext.rect(finalXPosition, yPosition, this._gaugeWidth, 23);
			this._bitmapContext.fillStyle = "#222222";
			this._bitmapContext.lineCap = "square";
			this._bitmapContext.fill();
		}

		drawLevelText(yPosition, levelText, levelTextWidth) {
			let centerdXPosition = this._hpXPosition - levelTextWidth / 2;
			let finalXPosition = centerdXPosition + levelTextWidth - 106;
			this._bitmapContext.fillStyle = "#FFFFFF";
			this._bitmapContext.fillText(levelText, finalXPosition + 3, yPosition + 18);
		}

		drawForegroundExpBox(yPosition, levelTextWidth) {
			let fullWidth = 118 + levelTextWidth;
			let centerdXPosition = this._hpXPosition - fullWidth / 2;
			let finalXPosition = centerdXPosition + levelTextWidth;
			const gaugeGradient = this.getGradient(finalXPosition, yPosition, 110);

			this._bitmapContext.beginPath();
			let expForThisLevel = this._maxValue - this._character.currentLevelExp(); 
			let expProgress = this._currentValue; //This could potentially be this._currentValue
			let endFill = expProgress / expForThisLevel;
			endFill = TutorialCore.helpers.clamp(endFill, 0.0, 1.0) * 108;
			this._bitmapContext.rect(finalXPosition + 4, yPosition + 2, endFill, 19);
			this._bitmapContext.fillStyle = gaugeGradient;
			this._bitmapContext.fill();
		}

		getGradient(finalXPosition, yPosition, width) {
			const gradient = this._bitmapContext.createLinearGradient(finalXPosition - width, yPosition, finalXPosition + width, yPosition);
			//You could also set up a gradient to be more than two colors, you would add new color options to the struct and then change the property
			//names to make more sense for that scenario.
			gradient.addColorStop(0, this._startColor); //Color stop decimals could be a plugin setting per gauge, would add to color structs
			gradient.addColorStop(0.9, this._endColor);

			return gradient;
		}
	}

	class PortraitElement extends UIElement {
		constructor(portraitScale) {
			super();
			this.bitmap = new Bitmap(Graphics.width, Graphics.height);
			this._portraitScale = portraitScale;

			this.getCharacterData();
			this._currentValue = `${this._character.faceName()} - ${this._character.faceIndex()}`

			this.redrawUIElement();
		}

		update() {
			super.update();
			this.getCharacterData();
			let newValue = `${this._character.faceName()} - ${this._character.faceIndex()}`;
			if (this._currentValue !== newValue) {
				this._currentValue = newValue;
				this._uiElementWillBeRedrawn = true;
			}

			if (this._uiElementWillBeRedrawn) {
				this.redrawUIElement();
			}
		}

		redrawUIElement() {
			super.redrawUIElement();
			let xPosition = getUIElementXCoordinate("Portrait");
			let yPosition = getUIElementYCoordinate("Portrait");
			
			//Portrait scale, the last param in this call, could be a plugin setting and maybe a player option.
			this.redrawCharacterPortrait(xPosition, yPosition, Window_Base._faceWidth, Window_Base._faceHeight, this._portraitScale);
		}

		redrawCharacterPortrait(xPosition, yPosition, width, height, scale) {
			let faceName = this._character.faceName();
			let faceIndex = this._character.faceIndex();			
			var faceBitmap = ImageManager.loadFace(faceName);
			var faceWidth = Window_Base._faceWidth;
			var faceHeight = Window_Base._faceHeight;
			var subWidth = Math.min(width, faceWidth);
			var subHeight = Math.min(height, faceHeight);
			var destX = Math.floor(xPosition + Math.max(width - faceWidth, 0) / 2);
			var destY = Math.floor(yPosition + Math.max(height - faceHeight, 0) / 2);
			var faceSheetX = faceIndex % 4 * faceWidth + (faceWidth - subWidth) / 2;
			var faceSheetY = Math.floor(faceIndex / 4) * faceHeight + (faceHeight - subHeight) / 2;
			var scaledWidth = Math.floor(width * scale);
			var scaledHeight = Math.floor(height * scale);

			faceBitmap.addLoadListener(() => {
				this.bitmap.blt(faceBitmap, faceSheetX, faceSheetY, subWidth, subHeight, destX, destY, scaledWidth, scaledHeight);
			});
		}
	}

	class StatusIconElement extends UIElement {
		constructor() {
			super();
			this._icons = [];
			this._iconSprites = [];
			this._padding = 3;
			this._iconSpacing = 3;
			this._boxHeight = 38;
			this._iconSize = 32; //A potential update is to make icon size larger than 32 so you use custom icon sizes with this plugin
			this.x = this.getStatusIconBoxXCoordinate();
			this.y = getUIElementYCoordinate("Status");
			this.bitmap = new Bitmap(this.calculateWidth(), Graphics.height);
			this.refresh();

			//If the icon size changes, some of the other properties above need to be updated.  You would need to figure out a calculation method to
			//calculate, for example, the box height based on the icon size.  A possible solution is to take the icon size and add padding * 2 to it to
			//get the box height as right now the box height is the icon size plus 3 units of padding on top and bottom.
		}

		getStatusIconBoxXCoordinate(){
			let xPosition = getUIElementXCoordinate("Status");
			if ((uiPosition == "3" || uiPosition == "5" || uiPosition == "8") &&
				statusIconBarLocation != 4
			) {
				xPosition -= this.calculateWidth() - 2;
			} else if (uiPosition == 2 || uiPosition == 7) {
				let hpXPosition = getUIElementXCoordinate("HP");
				let centerdXPosition = hpXPosition - this.calculateWidth() / 2;
				xPosition = centerdXPosition;
			}

			return xPosition;
		}

		calculateWidth() {
			return (statusIconLimit * this._iconSize) + ((statusIconLimit - 1) * this._iconSpacing) + (this._padding * 2);
		}

		refresh() {
			this.bitmap.clear();
			this.getCharacterData();
			this.drawBox();
			this.updateIcons();
		}

		drawBox() {
			this.bitmap.fillRect(0, 0, this.bitmap.width, this._boxHeight, 'rgba(0, 0, 0, 0.5)');
		}

		updateIcons() {
			const newIcons = this.getSortedStatusEffects();
			const newIconsState = JSON.stringify(newIcons);
			if (newIconsState !== this._lastIconsState) {
				this._lastIconsState = newIconsState;
				this._icons = newIcons;
				this.animateIconChanges(newIcons);    
			}
		}

		getSortedStatusEffects() {			
			if (!this._character) {
				return [];
			}
			
			let statuses = this._character.states().map(state => ({
				id: state.id,
				priority: state.priority,
				iconIndex: state.iconIndex
			}));

			statuses.sort((a, b) => b.priority - a.priority);
			return statuses.slice(0, statusIconLimit);
		}

		animateIconChanges(newIcons) {
			const newIds = newIcons.map(icon => icon.id);
			let removedIcons = this._iconSprites.filter(sprite => !newIds.includes(sprite.statusId));
		
			// Fade out removed icons first
			removedIcons.forEach(sprite => this.fadeOutAndRemove(sprite));
		
			setTimeout(() => {
				let startX = this._padding;
				let oldPositions = {};				
				this._icons.forEach((icon, index) => {
					oldPositions[icon.id] = startX + (index * (this._iconSize + this._iconSpacing));
				});
		
				this._icons = newIcons;
		
				// If the icon box is full and a new icon is being added, handle priority check
				if (this._icons.length > statusIconLimit) {
					let lowestPriorityIcon = this._icons[this._icons.length - 1];
					if (newIds.includes(lowestPriorityIcon.id)) {
						this.fadeOutAndRemove(this._iconSprites.find(s => s.statusId === lowestPriorityIcon.id));
						this._icons.pop();
					}
				}
		
				// Slide existing icons to new positions
				this._iconSprites.forEach(sprite => {
					let newIndex = this._icons.findIndex(icon => icon.id === sprite.statusId);
					if (newIndex !== -1) {
						let targetX = startX + (newIndex * (this._iconSize + this._iconSpacing));
						this.moveIcon(sprite, targetX);
					}
				});
		
				this.recreateIcons();
			}, 1500);
		}

		moveIcon(sprite, targetX) {
			let moveInterval = setInterval(() => {
				if (Math.abs(sprite.x - targetX) > iconSlideAnimationSpeed) {
					sprite.x += (sprite.x < targetX) ? iconSlideAnimationSpeed : -iconSlideAnimationSpeed;
				} else {
					sprite.x = targetX;
					clearInterval(moveInterval);
				}
			}, iconMoveAnimationSpeed);
		}
		
		fadeOutAndRemove(sprite) {
			let fadeInterval = setInterval(() => {
				sprite.opacity -= 25;
				if (sprite.opacity <= 0) {
					this.removeChild(sprite);
					clearInterval(fadeInterval);
				}
			}, iconFadeOutAndRemoveAnimationSpeed);
		}

		slideIconsToNewPositions(removedIcons = []) {
			let startX = this._padding;
			this._iconSprites.forEach((sprite, index) => {
				if (!removedIcons.includes(sprite)) {
					let targetX = startX + (index * (this._iconSize + this._iconSpacing));
					if (Math.abs(sprite.x - targetX) > iconSlideAnimationSpeed) {
						let moveInterval = setInterval(() => {
							if (sprite.x < targetX) {
								sprite.x += iconSlideAnimationSpeed;
								if (sprite.x >= targetX) {
									sprite.x = targetX;
									clearInterval(moveInterval);
								}
							} else if (sprite.x > targetX) {
								sprite.x -= iconSlideAnimationSpeed;
								if (sprite.x <= targetX) {
									sprite.x = targetX;
									clearInterval(moveInterval);
								}
							}
						}, iconMoveAnimationSpeed);
					}
				}
			});
		}

		recreateIcons() {
			const startX = this._padding;
			const startY = this._padding;
			for (let i = 0; i < this._icons.length; i++) {
				const iconX = startX + (i * (this._iconSize + this._iconSpacing));
				this.createIconSprite(this._icons[i], iconX, startY, true);
			}
		}

		createIconSprite(status, x, y, animated = false) {
			const sprite = new Sprite();
			sprite.bitmap = new Bitmap(this._iconSize, this._iconSize);
			sprite.x = x;
			sprite.y = y;
			sprite.statusId = status.id;
			this.drawIcon(status.iconIndex, sprite.bitmap, 0, 0);
			this.addChild(sprite);
			this._iconSprites.push(sprite);
			
			if (animated) {
				sprite.opacity = 0;
				let fadeInterval = setInterval(() => {
					sprite.opacity += 25;
					if (sprite.opacity >= 255) {
						sprite.opacity = 255;
						clearInterval(fadeInterval);
					}
				}, iconFadeInAnimationSpeed);
			}
		}

		clearIconSprites() {
			this._iconSprites.forEach(sprite => this.removeChild(sprite));
			this._iconSprites = [];
		}

		drawIcon(iconIndex, bitmap, x, y) {
			const iconSet = ImageManager.loadSystem('IconSet');
			const iconWidth = Window_Base._iconWidth;
			const iconHeight = Window_Base._iconHeight;
			const iconSetX = (iconIndex % 16) * iconHeight;
			const iconSetY = Math.floor(iconIndex / 16) * iconHeight;
			bitmap.blt(iconSet, iconSetX, iconSetY, iconWidth, iconHeight, x, y);
		}
	}

	class ClassElement extends UIElement {
		constructor(currentValue) {
			super();
			this.bitmap = new Bitmap(Graphics.width, Graphics.height);
			this._currentValue = currentValue;

			this.redrawUIElement();
		}

		update() {
			super.update();
			this.getCharacterData();
			let newValue = this._character._classId;
			if (this._currentValue !== newValue) {
				this._uiElementWillBeRedrawn = true;
			}

			if (this._uiElementWillBeRedrawn) {
				this.redrawUIElement();
			}
		}

		redrawUIElement() {
			super.redrawUIElement();
			let yPosition = getUIElementYCoordinate("Class");
			let classData = TutorialCore.helpers.getClassById(this._currentValue);
			if (classData) {
				let className = classData.name;
				this._bitmapContext.font = "18px GameFont";
				let classNameTextMetrics = this.getTextMetrics(className);
				let classNameWidth = classNameTextMetrics.width;
				this.drawClassNameBackgroundBox(yPosition, classNameWidth);
				this.drawClassNameText(yPosition, className, classNameWidth);
			}
		}

		drawClassNameBackgroundBox(yPosition, classNameWidth) {
			let centerdXPosition = this._hpXPosition - classNameWidth / 2;
			this._bitmapContext.beginPath();
			this._bitmapContext.rect(centerdXPosition, yPosition, classNameWidth + 4, 23);
			this._bitmapContext.fillStyle = "#222222";
			this._bitmapContext.fill();
		}

		drawClassNameText(yPosition, className, classNameWidth) {
			let centerdXPosition = this._hpXPosition - classNameWidth / 2;
			this._bitmapContext.fillStyle = "#FFFFFF";
			this._bitmapContext.fillText(className, centerdXPosition + 2, yPosition + 18);
		}
	}

	function getUIElementXCoordinate(elementType) {
		let xPosition = 0;
		let elementCoordinates = getElementCoordinates(elementType);
		if (elementCoordinates.hasOwnProperty("xCoordinate") &&
			elementCoordinates.xCoordinate > -1) {
			xPosition = elementCoordinates.xCoordinate;
		}

		return xPosition;
	}

	function getUIElementYCoordinate(elementType) {
		let yPosition = 0;
		let elementCoordinates = getElementCoordinates(elementType);
		if (elementCoordinates.hasOwnProperty("yCoordinate") &&
			elementCoordinates.yCoordinate > -1) {
				yPosition = elementCoordinates.yCoordinate;
		}

		return yPosition;
	}

	function getElementCoordinates(elementType) {
		if (stackingIsEnabled()) {
			if (showStatusIconElement && showLevelExpElement) {
				if (elementType == "EXP") {
					elementType = "EXPStacked"
				}

				if (elementType == "Class") {
					elementType = "ClassStacked1";
				}
			} else if (showStatusIconElement) {
				if (elementType == "Class") {
					elementType = "ClassStacked2";
				}
			} else if (!showLevelExpElement) {
				if (elementType == "Class") {
					elementType = "ClassStacked3";
				}
			}
		} else {
			if (!showLevelExpElement) {
				if (elementType == "Class") {
					elementType = "ClassStacked3";
				}
			}
		}
		
		let elementCoordinates = {};
		//If you want to make the element coordinate index properly 0-index to match the list format we're using now
		//you will need to change any instead of code that is checking for the statusIconBarLocation value "4"
		//and change it to 3 or else 0 for everything else.
		let elementCoordinateIndex = (
			elementType == "Status" && (uiPosition == 2 || uiPosition == 7) ? 4 :
				(elementType == "Status" ? statusIconBarLocation : 1)
		);

		let uiPositionConfig = uiConfiguration.find(data => data && data.uiPositionIndex == uiPosition);
		if (uiPositionConfig) {
			let elementConfig = uiPositionConfig.uiElementConfiguration.find(data => data && data.elementName == elementType);
			if (elementConfig) {
				elementCoordinates = elementConfig.elementCoordinates[elementCoordinateIndex - 1];
			}
		}

		return elementCoordinates;
	}

	function stackingIsEnabled() {
		return uiPosition == 2 || uiPosition == 7 || statusIconBarLocation == 4;
	}

	let Tutorial_Scene_Map_start = Scene_Map.prototype.start;
	Scene_Map.prototype.start = function() {
		Tutorial_Scene_Map_start.call(this);
		if (!$gameSystem.hasGameStarted()) {
			$gameSystem.setGameState(true);
		}
	}

	let Tutorial_Scene_Map_createSpriteSet = Scene_Map.prototype.createSpriteset;
	Scene_Map.prototype.createSpriteset = function() {
		Tutorial_Scene_Map_createSpriteSet.call(this);
		updatePluginParameterValues(); //Load values from ConfigManager unless they are the same as the plugin settings
		if (statusUIEnabled) {
			let character = getCharacter();

			if (!this._statusHPUIElement) {
				this._statusHPUIElement = new HPGauge(
					hpGaugeColorSettings.startColor,
					hpGaugeColorSettings.endColor,
					65,
					character._hp,
					character.paramBase(0)
				);

				this.addChild(this._statusHPUIElement);
			}

			if (!this._statusMPUIElement) {				
				this._statusMPUIElement = new MPGauge(
					mpGaugeColorSettings.startColor,
					mpGaugeColorSettings.endColor,
					48,
					character._mp, 
					character.paramBase(1)
				);

				this.addChild(this._statusMPUIElement);
			}

			if (!this._statusPortraitUIElement) {
				this._statusPortraitUIElement = new PortraitElement(0.42);
				this.addChild(this._statusPortraitUIElement);
			}

			if (showStatusIconElement) {
				if (!this._statusIconUIElement) {
					this._statusIconUIElement = new StatusIconElement();
					this.addChild(this._statusIconUIElement);
				}
			}

			if (showLevelExpElement) {
				if (!this._statusLvlExpUIElement) {
					let currentExp = character.currentLevelExp();
					let maxExp = character.nextLevelExp();
					this._statusLvlExpUIElement = new ExpGauge(
						expGaugeColorSettings.startColor,
						expGaugeColorSettings.endColor,
						114,
						currentExp,
						character._level,
						maxExp
					);

					this.addChild(this._statusLvlExpUIElement);
				}
			}

			if (showClassNameElement) {
				if (!this._statusClassNameUIElement) {
					let classId = character._classId;
					this._statusClassNameUIElement = new ClassElement(classId);
					this.addChild(this._statusClassNameUIElement);
				}
			}
		}
	}

	Scene_Map.prototype.updateStatusUIElementsOnLevelChange = function() {
		if (statusUIEnabled) {
			let character = getCharacter();
			if (this._statusHPUIElement) {
				this._statusHPUIElement.updateMaxValue(character.paramBase(0));
			}

			if (this._statusMPUIElement) {
				this._statusMPUIElement.updateMaxValue(character.paramBase(1));
			}

			if (showLevelExpElement) {
				if (this._statusLvlExpUIElement) {
					let maxExp = character.nextLevelExp();
					this._statusLvlExpUIElement.updateMaxValue(maxExp);
				}
			}
		}
	}

	Scene_Map.prototype.updateStatusHUDUIElements = function() {
		if (statusUIEnabled) {
			let character = getCharacter();
			if (this._statusHPUIElement) {
				this._statusHPUIElement.forceUIRedraw();
			} else if (!this._statusHPUIElement) {
				this._statusHPUIElement = new HPGauge(
					hpGaugeColorSettings.startColor,
					hpGaugeColorSettings.endColor,
					65,
					character._hp,
					character.paramBase(0)
				);

				this.addChild(this._statusHPUIElement);
			}

			if (this._statusMPUIElement) {
				this._statusMPUIElement.forceUIRedraw();
			} else if (!this._statusMPUIElement) {
				this._statusMPUIElement = new MPGauge(
					mpGaugeColorSettings.startColor,
					mpGaugeColorSettings.endColor,
					48,
					character._mp, 
					character.paramBase(1)
				);
				this.addChild(this._statusMPUIElement);
			}

			if (this._statusPortraitUIElement) {
				this._statusPortraitUIElement.forceUIRedraw();
			} else if (!this._statusPortraitUIElement) {
				this._statusPortraitUIElement = new PortraitElement(0.42);
				this.addChild(this._statusPortraitUIElement);
			}			

			if (showLevelExpElement && this._statusIconUIElement) {
				this._statusIconUIElement.refresh();
			} else if (showStatusIconElement && !this._statusIconUIElement) {
				this._statusIconUIElement = new StatusIconElement();
				this.addChild(this._statusIconUIElement);
			} else if (!showStatusIconElement && this._statusIconUIElement) {
				this.removeChild(this._statusIconUIElement);
				this._statusIconUIElement = undefined;
			}

			if (showLevelExpElement && this._statusLvlExpUIElement) {
				this._statusLvlExpUIElement.forceUIRedraw();
			} else if (showLevelExpElement && !this._statusLvlExpUIElement) {
				let currentExp = character.currentLevelExp();
				let maxExp = character.nextLevelExp();
				this._statusLvlExpUIElement = new ExpGauge(
					expGaugeColorSettings.startColor,
					expGaugeColorSettings.endColor,
					114,
					currentExp,
					character._level,
					maxExp
				);

				this.addChild(this._statusLvlExpUIElement);
			} else if (!showLevelExpElement && this._statusLvlExpUIElement) {
				this.removeChild(this._statusLvlExpUIElement);
				this._statusLvlExpUIElement = undefined;
			}

			if (showClassNameElement && this._statusClassNameUIElement) {
				this._statusClassNameUIElement.forceUIRedraw();
			} else if (showClassNameElement && !this._statusClassNameUIElement) {
				let classId = character._classId;
				this._statusClassNameUIElement = new ClassElement(classId);
				this.addChild(this._statusClassNameUIElement);
			} else if (!showClassNameElement && this._statusClassNameUIElement) {
				this.removeChild(this._statusClassNameUIElement);
				this._statusClassNameUIElement = undefined;
			}
		} else {
			if (this._statusHPUIElement) {
				this.removeChild(this._statusHPUIElement);
				this._statusHPUIElement = undefined;
			}

			if (this._statusMPUIElement) {
				this.removeChild(this._statusMPUIElement);
				this._statusMPUIElement = undefined;
			}

			if (this._statusPortraitUIElement) {
				this.removeChild(this._statusPortraitUIElement);
				this._statusPortraitUIElement = undefined;
			}

			if (this._statusIconUIElement) {
				this.removeChild(this._statusIconUIElement);
				this._statusIconUIElement = undefined;
			}

			if (this._statusLvlExpUIElement) {
				this.removeChild(this._statusLvlExpUIElement);
				this._statusLvlExpUIElement = undefined;
			}

			if (this._statusClassNameUIElement) {
				this.removeChild(this._statusClassNameUIElement);
				this._statusClassNameUIElement = undefined;
			}
		}
	}	

	let Tutorial_Game_Interpreter_command315 = Game_Interpreter.prototype.command315;
	Game_Interpreter.prototype.command315 = function() {
		let oldCharacterData = getCharacter();
		let previousCharacterLevel = oldCharacterData._level;
		let isFinished = Tutorial_Game_Interpreter_command315.call(this);
		if (statusUIEnabled) {
			let newCharacterData = getCharacter();
			let newCharacterLevel = newCharacterData._level;
			if (previousCharacterLevel != newCharacterLevel) {
				let mapScene = SceneManager._scene;
				mapScene.updateStatusUIElementsOnLevelChange();
			}
		}

		return isFinished;
	}

	let Tutorial_Game_Interpreter_command316 = Game_Interpreter.prototype.command316;
	Game_Interpreter.prototype.command316 = function() {
		let oldCharacterData = getCharacter();
		let previousCharacterLevel = oldCharacterData._level;
		let isFinished = Tutorial_Game_Interpreter_command316.call(this);
		if (statusUIEnabled) {
			let newCharacterData = getCharacter();
			let newCharacterLevel = newCharacterData._level;
			if (previousCharacterLevel != newCharacterLevel) {
				let mapScene = SceneManager._scene;
				mapScene.updateStatusUIElementsOnLevelChange();
			}
		}

		return isFinished;
	}

    let Tutorial_SceneMap_update = Scene_Map.prototype.update;
	Scene_Map.prototype.update = function() {
		Tutorial_SceneMap_update.call(this);
		if (this._statusIconUIElement) {
			this._statusIconUIElement.updateIcons();
		}
	};

	let Tutorial_GameBattlerBase_addState = Game_BattlerBase.prototype.addState;
	Game_BattlerBase.prototype.addState = function(stateId) {
		Tutorial_GameBattlerBase_addState.call(this, stateId);
		if (stateId != 1 || showDownedCharacter) {
			let character = getCharacter();
			if (character === this && SceneManager._scene._statusIconUIElement) {
				SceneManager._scene._statusIconBox.updateIcons();
			}
		} else {
			forceUIRefresh();
		}
	};

	let Tutorial_GameBattlerBase_removeState = Game_BattlerBase.prototype.removeState;
	Game_BattlerBase.prototype.removeState = function(stateId) {
		Tutorial_GameBattlerBase_removeState.call(this, stateId);
		if (stateId != 1 || showDownedCharacter) {
			let character = getCharacter();
			if (character === this && SceneManager._scene._statusIconUIElement) {
				SceneManager._scene._statusIconBox.refresh();
			}
		} else {
			forceUIRefresh();
		}
	};

	function getCharacter() {
		let character = $gameParty.members()[0];
		if (!showDownedCharacter && character._hp <= 0) {
			let livingPartyMember = $gameParty.members().find(data => data && data._hp > 0);
			if (livingPartyMember) {
				character = livingPartyMember;
			}
		}

		return character;
	}

	// Plugin Command Handling
	var Tutorial_GameInterpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
	Game_Interpreter.prototype.pluginCommand = function(command, args) {
		if (command === "Tutorial.StatusHUD") {
			switch (args[0]) { // Commands are case-sensitive
				case "ChangeUIPosition":
					if (args[1]) {
						changeUIPosition(TutorialCore.helpers.getNumber(args[1]));
					} else {
						console.error("Missing parameter for StatusHUD ChangeUIPosition command.");
					}

					break;

				case "ChangeStatusIconBarLocation":
					if (args[1]) {
						changeStatusIconBarLocation(TutorialCore.helpers.getNumber(args[1]));
					} else {
						console.error("Missing parameter for StatusHUD ChangeStatusIconBarLocation command.");
					}

					break;

				case "ChangeUIVisibility":
					if (args[1]) {
						changeUIVisibility(args[1]);
					} else {
						console.error("Missing parameter for StatusHUD ChangeUIVisibility command.");
					}

					break;

				case "ChangeLevelExpUIVisibility":
					if (args[1]) {
						changeLevelExpUIVisibility(args[1]);
					} else {
						console.error("Missing parameter for StatusHUD ChangeLevelExpUIVisibility command.");
					}

					break;

				case "ChangeClassNameUIVisibility":
					if (args[1]) {
						changeClassUIVisibility(args[1]);
					} else {
						console.error("Missing parameter for StatusHUD ChangeClassNameUIVisibility command.");
					}

					break;
				default:
					console.error(`Unknown StatusHUD command: ${args[0]}`);
					break;
			}
		} else {
			Tutorial_GameInterpreter_pluginCommand.call(this, command, args);
		}
	};	

	function changeUIPosition(newUIPosition) {
		if (newUIPosition !== 0) {
			uiPosition = newUIPosition;
			forceUIRefresh();
		} else {
			console.error(`Invalid UI Position value detected: ${newUIPosition}`);
		}
	}

	function changeStatusIconBarLocation(newStatusIconBarLocation) {
		if (newStatusIconBarLocation !== 0) {
			statusIconBarLocation = newStatusIconBarLocation;
			forceUIRefresh();
		} else {
			console.error(`Invalid Status Icon Bar Location value detected: ${newStatusIconBarLocation}`);
		}
	}

	function changeUIVisibility(visibilityState) {
		if (visibilityState.toLowerCase() === "show") {
			statusUIEnabled = true;
		} else {
			statusUIEnabled = false;
		}

		forceUIRefresh();
	}

	function changeLevelExpUIVisibility(visibilityState) {
		if (visibilityState.toLowerCase() === "show") {
			showLevelExpElement = true;
		} else {
			showLevelExpElement = false;
		}

		forceUIRefresh();
	}

	function changeClassUIVisibility(visibilityState) {
		if (visibilityState.toLowerCase() === "show") {
			showClassNameElement = true;
		} else {
			showClassNameElement = false;
		}

		forceUIRefresh();
	}

	function forceUIRefresh() {
		let mapScene = SceneManager._scene;
		mapScene.updateStatusHUDUIElements();
	}

	let Tutorial_Game_System_initialize = Game_System.prototype.initialize;
	Game_System.prototype.initialize = function() {
		Tutorial_Game_System_initialize.call(this);
		this._isGameStarted = false;
	}

	Game_System.prototype.hasGameStarted = function() {
		return this._isGameStarted === true;
	}

	Game_System.prototype.setGameState = function(gameState) {
		this._isGameStarted = gameState;
	}
	

	ConfigManager.statusHUDShowUI = statusUIEnabled;
	ConfigManager.statusHUDUIPosition = uiPosition;
	ConfigManager.statusHUDStatusIconBarLocation = statusIconBarLocation;
	ConfigManager.statusHUDGaugeMode = gaugeMode;
	ConfigManager.statusHUDShowStatusIconElement = showStatusIconElement;
	ConfigManager.statusHUDShowLevelExpElement = showLevelExpElement;
	ConfigManager.statusHUDShowClassNameElement = showClassNameElement;

	let Tutorial_Config_Manager_makeData = ConfigManager.makeData;
	ConfigManager.makeData = function() {
		let config = Tutorial_Config_Manager_makeData.call(this);
		config.statusHUDShowUI = this.statusHUDShowUI;
		config.statusHUDUIPosition = this.statusHUDUIPosition;
		config.statusHUDStatusIconBarLocation = this.statusHUDStatusIconBarLocation;
		config.statusHUDGaugeMode = this.statusHUDGaugeMode;
		config.statusHUDShowStatusIconElement = this.statusHUDShowStatusIconElement;
		config.statusHUDShowLevelExpElement = this.statusHUDShowLevelExpElement;
		config.statusHUDShowClassNameElement = this.statusHUDShowClassNameElement;

		return config;
	}

	let Tutorial_Config_Manager_applyData = ConfigManager.applyData;
	ConfigManager.applyData = function(config) {
		Tutorial_Config_Manager_applyData.call(this, config);
		this.statusHUDShowUI = this.readFlag(config, "statusHUDShowUI");
		this.statusHUDUIPosition = this.readNumber(config, "statusHUDUIPosition");
		this.statusHUDStatusIconBarLocation = this.readNumber(config, "statusHUDStatusIconBarLocation");
		this.statusHUDGaugeMode = this.readNumber(config, "statusHUDGaugeMode");
		this.statusHUDShowStatusIconElement = this.readFlag(config, "statusHUDShowStatusIconElement");
		this.statusHUDShowLevelExpElement = this.readFlag(config, "statusHUDShowLevelExpElement");
		this.statusHUDShowClassNameElement = this.readFlag(config, "statusHUDShowClassNameElement");
	}

	ConfigManager.readNumber = function(config, name) {
		return TutorialCore.helpers.getNumber(config[name]);
	}

	ConfigManager.getProperty = function(propertyName) {
		return this[propertyName];
	}

	
	var optionCommandNames = {
		statusHUDShowUI: "Show UI",
		statusHUDUIPosition: "Set Location",
		statusHUDStatusIconBarLocation: "Status Icon Bar Location",
		statusHUDGaugeMode: "HP/MP Gauge Display Mode",
		statusHUDShowStatusIconElement: "Show Status Icon Bar",
		statusHUDShowLevelExpElement: "Show Level/EXP Bar",
		statusHUDShowClassNameElement: "Show Class Name Bar"
	};

	var multiOptionCommands = [
		"statusHUDUIPosition",
		"statusHUDStatusIconBarLocation",
		"statusHUDGaugeMode"
	];

	let multiOptionTextValues = {
		"statusHUDUIPosition" : [
			"",
			"Top Left",
			"Top Center",
			"Top Right",
			"Left Center",
			"Right Center",
			"Bottom Left",
			"Bottom Center",
			"Bottom Right"
		],
		"statusHUDStatusIconBarLocation" : [
			"",
			"Top",
			"Middle",
			"Bottom",
			"Stacked"
		],
		"statusHUDGaugeMode" : [
			"",
			"Full-Circle",
			"Half-Circle"
		]
	};

	let commandStateControllers = {
		"statusHUDShowUI" : [
			"statusHUDUIPosition",
			"statusHUDStatusIconBarLocation",
			"statusHUDGaugeMode",
			"statusHUDShowStatusIconElement",
			"statusHUDShowLevelExpElement",
			"statusHUDShowClassNameElement"
		],
		"statusHUDShowStatusIconElement" : [
			"statusHUDStatusIconBarLocation"
		]
	};

	var centerPositionUIControllers = [
		"statusHUDUIPosition"
	];

	var uiControlOptionsDisabledAtCenterPosition = [
		"statusHUDStatusIconBarLocation"
	];

	/*
		This is a list of controllers that control the state of other fields.
		
		When the option value for this controlling field is true, this controlling field will be overridden.

		Essentially, we are saying that when these controllers are enabled, the fields that they control, if
		they are controlled by other controllers, will be controlled by those other controllers.
	*/
	let overrideableMainControllers = [
		"statusHUDShowUI"
	];

	let Tutorial_Window_Options_initialize = Window_Options.prototype.initialize;
	Window_Options.prototype.initialize = function() {
		this._statusHUDSectionStarted = false;
		this._leftArrowImage = undefined;
		this._rightArrowImage = undefined;
		this._leftArrowPressed = false;
		this._rightArrowPressed = false;
		this._leftArrowBounds = undefined;
		this._rightArrowBounds = undefined;
		if (enableImageBasedArrows) {
			this.createArrows();
		}
		Tutorial_Window_Options_initialize.call(this);
	}

	Window_Options.prototype.createArrows = function() {
		this._leftArrowImage = ImageManager.loadSystem("LeftArrow");
		this._leftArrowPressedImage = ImageManager.loadSystem("LeftArrowPressed");
		this._rightArrowImage = ImageManager.loadSystem("RightArrow");
		this._rightArrowPressedImage = ImageManager.loadSystem("RightArrowPressed");
	}

	Window_Options.prototype.windowWidth = function() {
		return Math.floor(Graphics.boxWidth * 0.8);
	};

	let Tutorial_Window_Options_makeCommandList = Window_Options.prototype.makeCommandList;
	Window_Options.prototype.makeCommandList = function() {
		Tutorial_Window_Options_makeCommandList.call(this);
		this.addStatusHUDCommands();
	}
 
	Window_Options.prototype.addStatusHUDCommands = function() {
		if ($gameSystem.hasGameStarted()) {
			this.addCommand("", "statusHUDTitle");
			this.addCommand(optionCommandNames["statusHUDShowUI"], "statusHUDShowUI", true);
			this.addCommand(optionCommandNames["statusHUDUIPosition"], "statusHUDUIPosition", this.checkIfCommandIsEnabled("statusHUDUIPosition"));
			this.addCommand(optionCommandNames["statusHUDStatusIconBarLocation"], "statusHUDStatusIconBarLocation", this.checkIfCommandIsEnabled("statusHUDStatusIconBarLocation"));
			this.addCommand(optionCommandNames["statusHUDGaugeMode"], "statusHUDGaugeMode", this.checkIfCommandIsEnabled("statusHUDGaugeMode"));
			this.addCommand(optionCommandNames["statusHUDShowStatusIconElement"], "statusHUDShowStatusIconElement", this.checkIfCommandIsEnabled("statusHUDShowStatusIconElement"));
			this.addCommand(optionCommandNames["statusHUDShowLevelExpElement"], "statusHUDShowLevelExpElement", this.checkIfCommandIsEnabled("statusHUDShowLevelExpElement"));
			this.addCommand(optionCommandNames["statusHUDShowClassNameElement"], "statusHUDShowClassNameElement", this.checkIfCommandIsEnabled("statusHUDShowClassNameElement"));
		}
	}

	/* 
		NOTE: Assumes that each command is only controlled by a main overrideable controller and one other controller.
			If there are going to be multiple overrideable controllers, this code needs to be changed to handle
			that scenaio.

		Process to implement checkIfCommandIsEnabled correctly:
			Is this command disableable?
				Get the controlling command for the symbol
				Does one of the controlling commands exist in the overrideableMainControllers list?
					Is overrideable main controller option value true?
						Get the value of the the other controller option
						Set enabled state based on that other option value.
	*/


	Window_Options.prototype.checkIfCommandIsEnabled = function(symbol) {
		if (this.getDisableableCommands().contains(symbol)) {
			if (commandStateControllers['statusHUDShowUI'].contains(symbol) &&
				this.getConfigValue("statusHUDShowUI")
			) {
				if (uiPosition == 2 || uiPosition == 7) {
					if (uiControlOptionsDisabledAtCenterPosition.contains(symbol)) {
						return false;
					}
				}
				
				let otherControllers = Object.keys(commandStateControllers).filter(data => data && data != "statusHUDShowUI");
				for (let otherController of otherControllers) {
					if (commandStateControllers[otherController].contains(symbol)) {
						return this.getConfigValue(otherController);
					}
				}
			} else if (commandStateControllers['statusHUDShowUI'].contains(symbol) &&
				!this.getConfigValue("statusHUDShowUI")
			) {
				return false;			
			}
		} else {
			return true;
		}
	}

	Window_Options.prototype.drawItem = function(index) {
		var rect = this.itemRectForText(index);
		var statusWidth = this.statusWidth();
		var titleWidth = rect.width - statusWidth;
		this.resetTextColor();

		let symbol = this.commandSymbol(index);
		if (symbol == "statusHUDTitle") {
			let sectionTitle = "Status HUD Options";
			let sectionTitleWidth = this.contents.measureTextWidth(sectionTitle);
			let sectionTitleXPosition = (rect.width / 2) - (sectionTitleWidth / 2.05);
			this.drawText(sectionTitle, sectionTitleXPosition, rect.y, sectionTitleWidth);

			let horzLine1Width = sectionTitleXPosition - 12;
			this.drawHorzLine(rect.x, rect.y + rect.height / 2, horzLine1Width);
			let horzLine2XPosition = sectionTitleXPosition + sectionTitleWidth + 6;
			this.drawHorzLine(horzLine2XPosition, rect.y + rect.height / 2, horzLine1Width);
			this._statusHUDSectionStarted = true;
		} else {
			this.changePaintOpacity(this.isCommandEnabled(index));
			if (this._statusHUDSectionStarted) {
				var maxCols = this.maxCols();
				rect.x = (index + 1) % maxCols * (rect.width + this.spacing()) - this._scrollX;
			}

			let optionText = this.commandName(index);
			this.drawText(optionText, rect.x, rect.y, titleWidth, 'left');
			if (this.symbolValueIsBoolean(index)) {
				//this.updateArrowVisibility();
				let checkboxXPosition = rect.x + titleWidth;
				let checkboxYPosition = rect.y;
				this.drawCheckbox(checkboxXPosition, checkboxYPosition, statusWidth, index);
			} else if (this.symbolValueIsNumber(index) && multiOptionCommands.includes(symbol)) {
				this.drawMultiOption(rect, index);
			} else {
				//this.updateArrowVisibility();
				this.drawText(this.statusText(index), titleWidth, rect.y, statusWidth, 'right');
			}
		}
	};

	Window_Options.prototype.drawMultiOption = function(rect, index) {
		let maxWidth = rect.width - 40;
		let displayText = this.statusText(index);
		let displayTextWidth = this.textWidth(displayText);
		let arrowPadding = 15;
		let arrowSize = 20;
		let longestTextWidth = this.getLongestTextWidth(index);
		let totalWidth = Math.max(displayTextWidth, longestTextWidth) + (arrowPadding * 2) + (arrowSize * 2);
		let centerX = rect.x + rect.width - totalWidth - 20;
		let textX = centerX + ((totalWidth - displayTextWidth) / 2);
		let textY = rect.y + rect.height / 2 - this.lineHeight() / 2;
		let arrowLeftX = centerX;
		let arrowRightX = centerX + totalWidth - arrowSize;
		let arrowY = textY;

		this._leftArrowBounds = {
			x: arrowLeftX,
			y: arrowY,
			width: 32,
			height: 32
		};

		this._rightArrowBounds = {
			x: arrowRightX,
			y: arrowY,
			width: 32,
			height: 32
		};

		if (enableImageBasedArrows) {
			if (!this._leftArrowPressed) {
				this._leftArrowImage.addLoadListener(function() {
					this.contents.blt(this._leftArrowImage, 0, 0, 32, 32, arrowLeftX, arrowY);
				}.bind(this));
			} else {
				this._leftArrowPressedImage.addLoadListener(function() {
					this.contents.blt(this._leftArrowPressedImage, 0, 0, 32, 32, arrowLeftX, arrowY);
				}.bind(this));
			}
		} else {
			this.drawText("◀", arrowLeftX, arrowY, arrowSize, 'center');
		}

		this.changePaintOpacity(this.isCommandEnabled(index));
		this.drawText(displayText, textX, textY, displayTextWidth, 'center');
		if (enableImageBasedArrows) {
			if (!this._rightArrowPressed) {
				this._rightArrowImage.addLoadListener(function() {
					this.contents.blt(this._rightArrowImage, 0, 0, 32, 32, arrowRightX, arrowY);
				}.bind(this));
			} else {
				this._rightArrowPressedImage.addLoadListener(function() {
					this.contents.blt(this._rightArrowPressedImage, 0, 0, 32, 32, arrowRightX, arrowY);
				}.bind(this));
			}
		} else {
			this.drawText("▶", arrowRightX, arrowY, arrowSize, 'center');
		}
		this.resetTextColor();
	}

	Window_Options.prototype.getLongestTextWidth = function(index) {
		let symbol = this.commandSymbol(index);
		let textList = multiOptionTextValues[symbol];
		let largestWidth = 0;
		for (let text of textList) {
			let textWidth = this.textWidth(text);
			if (textWidth > largestWidth) {
				largestWidth = textWidth;
			}
		}

		return largestWidth;
	}

	let Tutorial_Window_Options_statusText = Window_Options.prototype.statusText;
	Window_Options.prototype.statusText = function(index) {
		let symbol = this.commandSymbol(index);
		if (multiOptionCommands.contains(symbol)) {
			let configValue = this.getConfigValue(symbol);
			return multiOptionTextValues[symbol][configValue];
		}

		return Tutorial_Window_Options_statusText.call(this, index);
	}

	Window_Options.prototype.drawHorzLine = function(xPosition, yPosition, width) {
	    //this.contents.paintOpacity = 180;
	    this.contents.fillRect(xPosition, yPosition, width, 2, this.normalColor());
	    //this.contents.paintOpacity = 255;
	};

	Window_Options.prototype.drawCheckbox = function(xPosition, yPosition, width, index) {
		let symbol = this.commandSymbol(index);
		let value = ConfigManager.getProperty(symbol);
		let checkboxSize = 24;
		let checkboxCenterXPosition = xPosition + (width - checkboxSize) / 2;
		let checkboxCenterYPosition = yPosition + (this.lineHeight() - checkboxSize) / 2;

		this.contents.context.strokeRect(checkboxCenterXPosition, checkboxCenterYPosition, checkboxSize, checkboxSize, "#FFFFFF");
		if (value) {
			this.contents.context.fillRect(checkboxCenterXPosition + 4, checkboxCenterYPosition + 4, checkboxSize - 8, checkboxSize - 8, "#FFFFFF");
		}
	}

	/*
	Window_Options.prototype.drawCheckbox = function(x, y, width, value) {
		const checkboxImage = ImageManager.loadSystem("Checkbox"); // Load your checkbox image
		const checkedOffset = 32; // Assuming the checked version is offset in the image
		const iconWidth = 32; // Width of one icon in the checkbox image
		const iconHeight = 32; // Height of the checkbox icon
		const srcX = value ? checkedOffset : 0;

		// Adjust checkbox position to center it
		const centerX = x + (width - iconWidth) / 2;
		const centerY = y + (this.lineHeight() - iconHeight) / 2;

		// Draw the appropriate checkbox state
		this.contents.context.blt(checkboxImage, srcX, 0, iconWidth, iconHeight, centerX, centerY);
	};
	*/

	Window_Options.prototype.isCursorVisible = function() {
		let index = this.index();
		if (index && index >= 0 && this._list.length > 0) {
			let symbol = this.commandSymbol(index);
			if (symbol == "statusHUDTitle") {
				return false;
			}
		}

		var row = this.row();
		return row >= this.topRow() && row <= this.bottomRow();
	};

	var Tutorial_Window_Options_cursorRight = Window_Options.prototype.cursorRight;
	Window_Options.prototype.cursorRight = function(wrap) {
		let index = this.index();
		let symbol = this.commandSymbol(index);
		if (symbol == "statusHUDTitle") {
			return;	
		}

		let disableableCommands = this.getDisableableCommands();
		if (disableableCommands.contains(symbol) && !this.isCommandEnabled(index)) {
			return;
		}

		if (multiOptionCommands.includes(symbol)) {
			this.changeSettingValue(symbol, "increase");
		} else {
			Tutorial_Window_Options_cursorRight.call(this, wrap);
		}
	};
	
	var Tutorial_Window_Options_cursorLeft = Window_Options.prototype.cursorLeft;
	Window_Options.prototype.cursorLeft = function(wrap) {
		let index = this.index();
		let symbol = this.commandSymbol(index);
		if (symbol == "statusHUDTitle") {
			return;	
		}

		let disableableCommands = this.getDisableableCommands();
		if (disableableCommands.contains(symbol) && !this.isCommandEnabled(index)) {
			return;
		}

		if (multiOptionCommands.includes(symbol)) {
			this.changeSettingValue(symbol, "decrease");
		} else {
			Tutorial_Window_Options_cursorLeft.call(this, wrap);
		}
	};

	Window_Options.prototype.changeSettingValue = function(symbol, direction, isTouchInput = false) {
		let value = this.getConfigValue(symbol);
		let minValue = 1;
		let maxValue = multiOptionTextValues[symbol].length - 1;
		(direction == "increase" ? value++ : value--);
		if (maxValue > 3) {
			value = value.clamp(minValue, maxValue);
		} else {
			if (value > maxValue) {
				value = minValue;
			} else if (value < minValue) {
				value = maxValue;
			}
		}

		if (direction == "increase") {
			this._rightArrowPressed = true;
			if (!isTouchInput) {			
				setTimeout(() => {
					this._rightArrowPressed = false;
					this.redrawItem(this.index());
				}, 5000);
			}
		} else if (direction == "decrease") {
			this._leftArrowPressed = true;
			if (!isTouchInput) {
				setTimeout(() => {
					this._leftArrowPressed = false;
					this.redrawItem(this.index());
				}, 5000);
			}
		}

		this.changeValue(symbol, value);
	}

	var Tutorial_Window_Options_processTouch = Window_Options.prototype.processTouch;
	Window_Options.prototype.processTouch = function() {
		Tutorial_Window_Options_processTouch.call(this);
		let index = this.index();
		let symbol = this.commandSymbol(index);
		let disableableCommands = this.getDisableableCommands();
		if (disableableCommands.contains(symbol) && !this.isCommandEnabled(index)) {
			return;
		}

		if (enableImageBasedArrows && multiOptionCommands.includes(symbol)) {
			let localX = this.canvasToLocalX(TouchInput.x) - this.padding;
			let localY = this.canvasToLocalY(TouchInput.y) - this.padding;
			
			if (TouchInput.isPressed() && !this._wasPressed) {
				if (this._leftArrowBounds &&
					localX >= this._leftArrowBounds.x && localX <= this._leftArrowBounds.x + this._leftArrowBounds.width &&
					localY >= this._leftArrowBounds.y && localY <= this._leftArrowBounds.y + this._leftArrowBounds.height
				) {
					this.changeSettingValue(symbol, "decrease", true);
					this._wasPressed = true;
				} else if (this._rightArrowBounds &&
					localX >= this._rightArrowBounds.x && localX <= this._rightArrowBounds.x + this._rightArrowBounds.width &&
					localY >= this._rightArrowBounds.y && localY <= this._rightArrowBounds.y + this._rightArrowBounds.height
				) {
					this.changeSettingValue(symbol, "increase", true);
					this._wasPressed = true;
				}
			} else if (TouchInput.isReleased()) {
				this._leftArrowPressed = false;
				this._rightArrowPressed = false;
				this._wasPressed = false;
				this.redrawItem(index);
			}
		}
	};

	Window_Options.prototype.processOk = function() {
		var index = this.index();
		var symbol = this.commandSymbol(index);
		var value = this.getConfigValue(symbol);
		if (this.isVolumeSymbol(symbol)) {
			value += this.volumeOffset();
			if (value > 100) {
				value = 0;
			}
			value = value.clamp(0, 100);
			this.changeValue(symbol, value);
		} else if (this.symbolValueIsNumber(index)) {
			this.changeValue(symbol, value);
		} else if (this.symbolValueIsBoolean(index)) {
			this.changeValue(symbol, !value);
		}
	};

	Window_Options.prototype.symbolValueIsBoolean = function(index) {
		let symbol = this.commandSymbol(index);
		let value = ConfigManager.getProperty(symbol);
		if (value.constructor === Boolean) {
			return true;
		}

		return false;
	}

	Window_Options.prototype.symbolValueIsNumber = function(index) {
		let symbol = this.commandSymbol(index);
		let value = ConfigManager.getProperty(symbol);
		if (!isNaN(value) && value.constructor == Number) {
			return true;
		}

		return false;
	}

	let Tutorial_Window_Options_setConfigValue = Window_Options.prototype.setConfigValue;
	Window_Options.prototype.setConfigValue = function (symbol, value) {
		Tutorial_Window_Options_setConfigValue.call(this, symbol, value);
		if (commandStateControllers.hasOwnProperty(symbol) || centerPositionUIControllers.contains(symbol)) {
			this.updateCommandState(symbol, value)
		}

		updatePluginParameterValues();
	}

	//This function could almost for sure be refactored some how
	Window_Options.prototype.updateCommandState = function(symbol, value) {
		if (symbol == "statusHUDShowUI" && value) {
			for (let controlledField of commandStateControllers[symbol]) {
				let foundField = false;
				if (uiPosition == 2 || uiPosition == 7) {
					if (uiControlOptionsDisabledAtCenterPosition.contains(controlledField)) {
						this.toggleCommandState(controlledField, false);
						foundField = true;
					}
				} else {
					let otherControllers = Object.keys(commandStateControllers).filter(data => data && data != symbol);
					for (let otherController of otherControllers) {
						if (commandStateControllers[otherController].contains(controlledField)) {
							let otherControllerValue = this.getConfigValue(otherController);
							this.toggleCommandState(controlledField, otherControllerValue);
							foundField = true;
							break;
						}
					}
				}

				if (!foundField) {
					this.toggleCommandState(controlledField, symbol);
				}
			}
		} else if (centerPositionUIControllers.contains(symbol)) {
			for (let control of uiControlOptionsDisabledAtCenterPosition) {
				console.log(`control: ${control}`);
				if (value == 2 || value == 7) {
					this.toggleCommandState(control, false);
				} else {
					let otherControllers = Object.keys(commandStateControllers).filter(data => data && data != "statusHUDShowUI");
					for (let otherController of otherControllers) {
						if (commandStateControllers[otherController].contains(control)) {
							let otherControllerValue = this.getConfigValue(otherController);
							this.toggleCommandState(control, otherControllerValue);
							break;
						}
					}
				}
			}
		} else {
			if (uiPosition == 2 || uiPosition == 7) {
				if (uiControlOptionsDisabledAtCenterPosition.contains(symbol)) {
					this.toggleCommandState(symbol, false);
				} else {
					for (let control of commandStateControllers[symbol]) {
						if (!uiControlOptionsDisabledAtCenterPosition.contains(control)) {
							this.toggleCommandState(control, value);
						}
					}
				}
			} else {
				for (let control of commandStateControllers[symbol]) {
					this.toggleCommandState(control, value);
				}
			}
		}
	}
	
	Window_Options.prototype.toggleCommandState = function(symbol, value) {
		let commandIndex = this.findSymbol(symbol);
		this._list[commandIndex].enabled = value;
		this.redrawItem(commandIndex);
	}

	Window_Options.prototype.getDisableableCommands = function() {
		let disableableCommands = [];
		for (let commandController in commandStateControllers) {
			disableableCommands.push(...commandStateControllers[commandController]);
		}

		return [...new Set(disableableCommands)];
	}

	function updatePluginParameterValues() {
		statusUIEnabled = (statusUIEnabled !== ConfigManager.getProperty("statusHUDShowUI") ? ConfigManager.getProperty("statusHUDShowUI") : statusUIEnabled);
		uiPosition = (uiPosition !== ConfigManager.getProperty("statusHUDUIPosition") ? ConfigManager.getProperty("statusHUDUIPosition") : uiPosition);
		statusIconBarLocation = (statusIconBarLocation !== ConfigManager.getProperty("statusHUDStatusIconBarLocation") ? ConfigManager.getProperty("statusHUDStatusIconBarLocation") : statusIconBarLocation);
		gaugeMode = (gaugeMode !== ConfigManager.getProperty("statusHUDGaugeMode") ? ConfigManager.getProperty("statusHUDGaugeMode") : gaugeMode);
		showStatusIconElement = (showStatusIconElement !== ConfigManager.getProperty("statusHUDShowStatusIconElement") ? ConfigManager.getProperty("statusHUDShowStatusIconElement") : showStatusIconElement);
		showLevelExpElement = (showLevelExpElement !== ConfigManager.getProperty("statusHUDShowLevelExpElement") ? ConfigManager.getProperty("statusHUDShowLevelExpElement") : showLevelExpElement);
		showClassNameElement = (showClassNameElement !== ConfigManager.getProperty("statusHUDShowClassNameElement") ? ConfigManager.getProperty("statusHUDShowClassNameElement") : showClassNameElement);
		//forceUIRefresh();
	}
})();