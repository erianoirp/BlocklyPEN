Blockly.Blocks['while'] = {
  init: function() {
    this.appendValueInput("conditions")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("の間，");
    this.appendStatementInput("exe")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("を繰り返す");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(190);
    this.setTooltip('');
  }
};

Blockly.Blocks['while_simplified'] = {
  init: function() {
    this.jsonInit({
      "message0": "%1 回",
      "args0": [
        {
          "type": "input_value",
          "name": "VALUE1"
        }
      ],
      "message1": "%1",
      "args1": [
        {
          "type": "input_statement",
          "name": "STATEMENTS1"
        }
      ],
      "message2": "を繰り返す",
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 190,
      "tooltip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Blocks['repeat_until'] = {
  init: function() {
    this.jsonInit({
      "message0": "繰り返し，",
      "message1": "%1",
      "args1": [
        {
          "type": "input_statement",
          "name": "STATEMENTS"
        }
      ],
      "message2": "を， %1 になるまで実行する",
      "args2": [
        {
          "type": "input_value",
          "name": "CONDITION"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 190,
      "tooltip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Blocks['for'] = {
  init: function() {
    this.jsonInit({
      "message0": "%1 を %2 から %3 まで %4 ずつ %5 ながら",
      "args0": [
        {
          "type": "field_input",
          "name": "VARIABLE",
          "text": "≪変数≫"
        },
        {
          "type": "input_value",
          "name": "FROM"
        },
        {
          "type": "input_value",
          "name": "TO"
        },
        {
          "type": "input_value",
          "name": "BY"
        },
        {
          "type": "field_dropdown",
          "name": "WHILE",
          "options": [["増やし", "増やし"], ["減らし", "減らし"]]
        },
      ],
      "message1": "%1",
      "args1": [
        {
          "type": "input_statement",
          "name": "STATEMENTS"
        }
      ],
      "message2": "を繰り返す",
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 190,
      "tooltip": "",
      "helpUrl": ""
    });
  }
};

