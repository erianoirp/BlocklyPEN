Blockly.Blocks['declare_variable'] = {
  init: function() {
    this.jsonInit({
      "message0": "%1 %2 の変数を宣言",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "DATATYPE",
          "options": [["整数","整数"],["実数","実数"],["文字列","文字列"],["真偽","真偽"]]
        },
        {
          "type": "field_input",
          "name": "VARIABLE",
          "text": "≪変数≫"
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

Blockly.Blocks['declare_array1'] = {
  init: function() {
    this.jsonInit({
      "message0": "%1 %2 大きさ %3 の配列を宣言",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "DATATYPE",
          "options": [["整数","整数"],["実数","実数"],["文字列","文字列"],["真偽","真偽"]]
        },
        {
          "type": "field_input",
          "name": "VARIABLE",
          "text": "≪変数≫"
        },
        {
          "type": "field_number",
          "name": "SIZE1",
          "check": "Number",
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

Blockly.Blocks['declare_array2'] = {
  init: function() {
    this.jsonInit({
      "message0": "%1 %2 大きさ %3, %4 の配列を宣言",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "DATATYPE",
          "options": [["整数","整数"],["実数","実数"],["文字列","文字列"],["真偽","真偽"]]
        },
        {
          "type": "field_input",
          "name": "VARIABLE",
          "text": "≪変数≫"
        },
        {
          "type": "field_number",
          "name": "SIZE1",
          "check": "Number",
          "value": 1,
          "min": 1,
          "precision": 1
        },
        {
          "type": "field_number",
          "name": "SIZE2",
          "check": "Number",
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
    this.jsonInit({
      "message0": "%1 の値を %2 にする",
      "args0": [
        {
          "type": "field_input",
          "name": "VARIABLE",
          "text": "≪変数≫"
        },
        {
          "type": "input_value",
          "name": "VALUE1"
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

Blockly.Blocks['variable'] = {
  init: function() {
    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_input",
          "name": "VARIABLE",
          "text": "≪変数≫"
        }
      ],
      "output": "Variable",
      "colour": 330,
      "helpUrl": "",
      "tooltip": ""
    });
  }
};

Blockly.Blocks['array1'] = {
  init: function() {
    this.jsonInit({
      "message0": "%1 の %2 番目",
      "args0": [
        {
          "type": "field_input",
          "name": "VARIABLE",
          "text": "≪変数≫"
        },
        {
          "type": "input_value",
          "name": "INDEX1",
          "check": ["Number","Variable"]
        }
      ],
      "inputsInline": true,
      "output": "Variable",
      "colour": 330,
      "tooltip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Blocks['array2'] = {
  init: function() {
    this.jsonInit({
      "message0": "%1 の %2 %3 番目",
      "args0": [
        {
          "type": "field_input",
          "name": "VARIABLE",
          "text": "≪変数≫"
        },
        {
          "type": "input_value",
          "name": "INDEX1",
          "check": ["Number","Variable"]
        },
        {
          "type": "input_value",
          "name": "INDEX2",
          "check": ["Number","Variable"]
        }
      ],
      "inputsInline": true,
      "output": "Variable",
      "colour": 330,
      "tooltip": "",
      "helpUrl": ""
    });
  }
};

/*
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
*/

Blockly.Blocks['increment_decrement'] = {
  init: function() {
    this.jsonInit({
      "message0": "%1 の値を %2 %3",
      "args0": [
        {
          "type": "field_input",
          "name": "VARIABLE",
          "text": "≪変数≫"
        },
        {
          "type": "input_value",
          "name": "VALUE1",
          "check": ["Number","Variable"]
        },
        {
          "type": "field_dropdown",
          "name": "VALUE2",
          "options": [["増やす","増やす"],["減らす","減らす"]]
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

Blockly.Blocks['postfix_increment_decrement'] = {
  init: function() {
    this.jsonInit({
      "message0": "%1 %2",
      "args0": [
        {
          "type": "field_input",
          "name": "VARIABLE",
          "text": "≪変数≫"
        },
        {
          "type": "field_dropdown",
          "name": "OPERATOR",
          "options": [['++','+'],['--','-']]
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

Blockly.Blocks['shortening_calculation'] = {
  init: function() {
    this.jsonInit({
      "message0": "%1 %2 %3",
      "args0":[
        {
          "type": "field_input",
          "name": "VARIABLE",
          "text": "≪変数≫"
        },
        {
          "type": "field_dropdown",
          "name": "OPERATOR",
          "options": [['+=','+'],['-=','-'],['*=','*'],['/=','/'],['%=','%']]
        },
        {
          "type": "input_value",
          "name": "VALUE1"
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
