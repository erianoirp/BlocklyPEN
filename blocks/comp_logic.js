Blockly.Blocks['conditions'] = {
  init: function() {
    this.appendValueInput("argument1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["=", "="], ["≠", "!="], ["<", "<"], ["≦", "<="], [">", ">"], ["≧", ">="]]), "comparisonOperator");
    this.appendValueInput("argument2")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, "Moziretu");
    this.setColour(190);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['and_or'] = {
  init: function() {
    this.jsonInit({
      "message0": "%1 %2 %3",
      "args0": [
        {
          "type": "input_value",
          "name": "VALUE1"
        },
        {
          "type": "field_dropdown",
          "name": "OPERATOR",
          "option": [["かつ","かつ"],["または","または"]]
        },
        {
          "type": "input_value",
          "name": "VALUE2"
        }
      ],
      "inputsInline": true,
      "colour": 190,
      "helpUrl": "",
      "tooltip": ""
    });
  }
};

Blockly.Blocks['and'] = {
  init: function() {
    this.jsonInit({
      "message0": "%1 かつ %2",
      "args0": [
        {
          "type": "input_value",
          "name": "VALUE1"
        },
        {
          "type": "input_value",
          "name": "VALUE2"
        }
      ],
      "output": null,
      "inputsInline": true,
      "colour": 190,
      "helpUrl": "",
      "tooltip": ""
    });
  }
};

Blockly.Blocks['or'] = {
  init: function() {
    this.jsonInit({
      "message0": "%1 または %2",
      "args0": [
        {
          "type": "input_value",
          "name": "VALUE1"
        },
        {
          "type": "input_value",
          "name": "VALUE2"
        }
      ],
      "output": null,
      "inputsInline": true,
      "colour": 190,
      "helpUrl": "",
      "tooltip": ""
    });
  }
};

Blockly.Blocks['not'] = {
  init: function() {
    this.jsonInit({
      "message0": "%1 でない",
      "args0": [
        {
          "type": "input_value",
          "name": "VALUE1"
        }
      ],
      "output": null,
      "inputsInline": true,
      "colour": 190,
      "helpUrl": "",
      "tooltip": ""
    });
  }
};

