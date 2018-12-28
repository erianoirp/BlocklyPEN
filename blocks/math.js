//WaPENで使用できる
Blockly.Blocks['calculation'] = {
  init: function() {
    this.appendValueInput("val1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["＋", "+"], ["－", "-"], ["×", "*"], ["÷", "/"], ["%", "%"]]), "calculation");
    this.appendValueInput("val2")
        .setCheck(null);
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip('');
  }
};

Blockly.Blocks['random'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("0から");
    this.appendValueInput("val")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("までのランダムな数");
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip('');
  }
};

Blockly.Blocks['abs'] = {
  init: function() {
    this.jsonInit({
      "message0": "%1 の絶対値",
      "args0": [
        {
          "type": "input_value",
          "name": "VALUE",
          "check": ["Number","Variable"]
        }
      ],
      "inputsInline": true,
      "output": null,
      "colour": 230,
      "tooltip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Blocks['round'] = {
  init: function() {
    this.jsonInit({
      "message0": "%1 を %2 する",
      "args0": [
        {
          "type": "input_value",
          "name": "VALUE",
          "check": ["Number","Variable"]
        },
        {
          "type": "field_dropdown",
          "name": "KIND",
          "options": [["切り上げ","ceil"],["切り捨て","floor"],["四捨五入","round"]]
        }
      ],
      "inputsInline": true,
      "output": null,
      "colour": 230,
      "tooltip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Blocks['trigonometric'] = {
  init: function() {
    this.jsonInit({
      "message0": "%1 ( %2 )",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "KIND",
          "options": [["sin","sin"],["cos","cos"],["tan","tan"]]
        },
        {
          "type": "input_value",
          "name": "VALUE",
          "check": ["Number","Variable"]
        }
      ],
      "inputsInline": true,
      "output": null,
      "colour": 230,
      "tooltip": "",
      "helpUrl": ""
    });
  }
};

//-------------------------------------------------------------------------------------

//未使用
Blockly.Blocks['decimal'] = {
  init: function() {
    this.appendValueInput("val")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("の小数点以下を")
        .appendField(new Blockly.FieldDropdown([["切り捨てる", "floor"], ["切り上げる", "ceil"], ["四捨五入する", "round"]]), "decimal");
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip('');
  }
};

Blockly.Blocks['other'] = {
  init: function() {
    this.appendValueInput("val")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("の")
        .appendField(new Blockly.FieldDropdown([["絶対値", "abs"], ["整数化", "int"], ["平方根", "sqrt"], ["対数", "log"]]), "other");
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip('');
  }
};
