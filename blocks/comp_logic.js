Blockly.Blocks['comparison'] = {
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
          "options": [["＝", "="], ["≠", "!="], ["＜", "<"], ["≦", "<="], ["＞", ">"], ["≧", ">="]]
        },
        {
          "type": "input_value",
          "name": "VALUE2"
        }
      ],
      "inputsInline": true,
      "output": "Boolean",
      "colour": 105,
      "helpUrl": "",
      "tooltip": ""
    });
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
      "output": "Boolean",
      "colour": 105,
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
      "inputsInline": true,
      "output": "Boolean",
      "colour": 105,
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
      "inputsInline": true,
      "output": "Boolean",
      "colour": 105,
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
      "inputsInline": true,
      "output": "Boolean",
      "colour": 105,
      "helpUrl": "",
      "tooltip": ""
    });
  }
};

Blockly.Blocks['even_odd'] = {
  init: function() {
    this.jsonInit({
      "message0": "%1 が %2",
      "args0": [
        {
          "type": "input_value",
          "name": "VALUE1"
        },
        {
          "type": "field_dropdown",
          "name": "VALUE2",
          "options": [["偶数","EVEN"],["奇数","ODD"]]
        }
      ],
      "inputsInline": true,
      "output": "Boolean",
      "colour": 105,
      "helpUrl": "",
      "tooltip": ""
    });
  }
};

