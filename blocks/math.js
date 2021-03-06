Blockly.Blocks['calculation'] = {
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
          "name": "OPERATOR1",
          "options": [["＋", "+"],["－", "-"],["×", "*"],["÷", "/"],["%", "%"]]
        },
        {
          "type": "input_value",
          "name": "VALUE2"
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

Blockly.Blocks['calculation_with_parentheses'] = {
  init: function() {
    this.jsonInit({
      "message0": "( %1 %2 %3 )",
      "args0": [
        {
          "type": "input_value",
          "name": "VALUE1"
        },
        {
          "type": "field_dropdown",
          "name": "OPERATOR1",
          "options": [["＋", "+"],["－", "-"]]
        },
        {
          "type": "input_value",
          "name": "VALUE2"
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
      "message0": "%1 %2",
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

Blockly.Blocks['sqrt'] = {
  init: function() {
    this.jsonInit({
      "message0": "%1 の平方根",
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

Blockly.Blocks['log'] = {
  init: function() {
    this.jsonInit({
      "message0": "log %1",
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

Blockly.Blocks['exp'] = {
  init: function() {
    this.jsonInit({
      "message0": "Eの %1 乗",
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

Blockly.Blocks['pow'] = {
  init: function() {
    this.jsonInit({
      "message0": "%1 の %2 乗",
      "args0": [
        {
          "type": "input_value",
          "name": "VALUE1",
          "check": ["Number","Variable"]
        },
        {
          "type": "input_value",
          "name": "VALUE2",
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

Blockly.Blocks['formula'] = {
  init: function() {
    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_input",
          "name": "VALUE1",
          "text": "《数式》"
        }
      ],
      "output": null,
      "colour": 230,
      "tooltip": "",
      "helpUrl": ""
    });
  }
};
