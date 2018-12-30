Blockly.Blocks['declare_array'] = {
  init: function() {
    this.jsonInit({
      "message0": "%1 %2 大きさ %3 の配列を宣言",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "datatype",
          "options": [["整数","整数"],["実数","実数"],["文字列","文字列"],["真偽","真偽"]]
        },
        {
          "type": "input_value",
          "name": "NAME",
          "check": "Variable"
        },
        {
          "type": "field_number",
          "name": "SIZE",
          "value": 1,
          "min": 1,
          "precision": 1
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 330,
      "tooltip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Blocks['assign'] = {
  init: function() {
    this.appendValueInput("to")
        .setCheck("Variable");
    this.appendDummyInput()
        .appendField(" ← ");
    this.appendValueInput("from")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("左辺の変数に右辺の値を代入する");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['variable_declare'] = {
  init: function() {
    this.jsonInit({
      "message0": "%1 型の変数 %2 を作成する",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "TYPE",
          "options": [["整数","整数"],["実数","実数"],["文字列","文字列"],["真偽","真偽"]]
        },
        {
          "type": "field_variable",
          "name": "VAR",
          "variable": "≪変数≫"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 330,
      "helpUrl": "",
      "tooltip": ""
    });
  }
};

Blockly.Blocks['variable_get'] = {
  init: function() {
    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_variable",
          "name": "VAR",
          "variable": "≪変数≫"
        }
      ],
      "output": null,
      "colour": 330,
      "helpUrl": "",
      "tooltip": ""
    });
  }
};

Blockly.Blocks['variable_set'] = {
  init: function() {
    this.jsonInit({
      "message0": "%1 の値を %2 にする",
      "args0": [
        {
          "type": "field_variable",
          "name": "VAR",
          "variable": "≪変数≫"
        },
        {
          "type": "input_value",
          "name": "VALUE"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 330,
      "helpUrl": "",
      "tooltip": ""
    });
  }
};

Blockly.Blocks['array'] = {
  init: function() {
    this.jsonInit({
      "message0": "%1 の %2 番目",
      "args0": [
        {
          "type": "field_variable",
          "name": "NAME",
          "variable": "≪変数≫"
        },
        {
          "type": "input_value",
          "name": "INDEX"
        }
      ],
      "inputsInline": true,
      "output": null,
      "colour": 330,
      "tooltip": "",
      "helpUrl": ""
    });
  }
};

