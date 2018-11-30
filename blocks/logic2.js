Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT
  {
    "type": "if",
    "message0": "もし %1 ならば",
    "args0": [
      {
        "type": "input_value",
        "name": "value"
      }
    ],
    "message1": "%1",
    "args1": [
      {
        "type": "input_statement",
        "name": "statements"
      }
    ],
    "message2": "を実行する",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 190,
    "tooltip": "",
    "helpUrl": ""
    "mutator": "if_mutator"
  }
]);

Blockly.defineBlocksWithJsonArray([ // Mutator blocks. Do not extract.
  // 条件ブロックの「if」部分のmutator
  {
    "type": "if_if"
    "message0": "もし",
    "nextStatement": null,
    "enableContextMenu": false,
    "colour": 190,
    "tooltip": "",
  },
  // 条件ブロックの「elseif」部分のmutator
  {
    "type": "if_elseif"
    "message0": "そうでなくてもし",
    "previousStatement": null,
    "nextStatement": null,
    "enableContextMenu": false,
    "colour": 190,
    "tooltip": "",
  },
  // 条件ブロックの「else」部分のmutator
  {
    "type": "if_else"
    "message0": "そうでなければ",
    "previousStatement": null,
    "enableContextMenu": false,
    "colour": 190,
    "tooltip": "",
  }
]);

