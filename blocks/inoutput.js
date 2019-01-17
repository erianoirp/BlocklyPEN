Blockly.Blocks['input'] = {
  init: function() {
    this.jsonInit({
      "message0": "%1 に値を入力する",
      "args0": [
        {
          "type": "field_input",
          "name": "VARIABLE",
          "text": "《変数》"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 65,
      "tooltip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Blocks['print_string'] = {
  init: function() {
    this.jsonInit({
      "message0": "「 %1 」を改行 %2 表示する",
      "args0": [
        {
          "type": "field_input",
          "name": "VALUE1",
          "text": "《文字列》"
        },
        {
          "type": "field_dropdown",
          "name": "NEWLINE",
          "options": [["して","true"], ["しないで","false"]]
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 65,
      "tooltip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Blocks['print_v'] = {
  init: function() {
    this.jsonInit({
      "message0": " %1 を改行 %2 表示する",
      "args0": [
        {
          "type": "input_value",
          "name": "VALUE1"
        },
        {
          "type": "field_dropdown",
          "name": "NEWLINE",
          "options": [["して","true"], ["しないで","false"]]
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 65,
      "tooltip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Blocks['newline'] = {
  init: function() {
    this.jsonInit({
      "message0": "改行する",
      "previousStatement": null,
      "nextStatement": null,
      "colour": 65,
      "tooltip": "",
      "helpUrl": ""
    });
  }
};


