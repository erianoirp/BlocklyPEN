goog.provide('Blockly.Blocks.logic');
goog.provide('Blockly.Constants.Logic');

goog.require('Blockly.Blocks');
goog.require('Blockly');

Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT
  {
    "type": "define_function",
    "message0": "関数名 %1",
    "args0": [
      {
        "type": "field_input",
        "name": "func_name",
        "text": "≪関数≫"
      }
    ],
    "message1": "戻り値の型 %1",
    "args1": [
      {
        "type": "field_dropdown",
        "name": "return_value",
        "options": [["整数", "整数"], ["実数", "実数"], ["文字列", "文字列"], ["真偽", "真偽"]]
      }
    ],
    "message2": "仮引数 なし %1",
    "args2": [
      {
        "type": "input_dummy",
        "name": "PARAM0"
      }
    ],
    "message3": "%1",
    "args3": [
      {
        "type": "input_statement",
        "name": "STATEMENTS"
      }
    ],
    "message4": "関数終了 %1",
    "args4": [
      {
        "type": "input_dummy",
        "name": "define_end"
      }
    ],
    "inputsInline": false,
    "colour": 160,
    "tooltip": "",
    "helpUrl": "",
    "mutator": "define_function_mutator"
  }
  /* 横長バージョン
  {
    "type": "define_function",
    "message0": "関数 %1 %2 (",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "return_value",
        "options": [["整数", "整数"], ["実数", "実数"], ["文字列", "文字列"], ["真偽", "真偽"]]
      },
      {
        "type": "field_input",
        "name": "func_name",
        "text": "≪関数≫"
      }
    ],
    "message1": "%1",
    "args1": [
      {
        "type": "input_dummy",
        "name": "PARAM0"
      }
    ],
    "message2": ") %1",
    "args2": [
      {
        "type": "input_dummy",
        "name": "close_parenthesis"
      }
    ],
    "message3": "%1",
    "args3": [
      {
        "type": "input_statement",
        "name": "STATEMENTS"
      }
    ],
    "message4": "関数終了 %1",
    "args4": [
      {
        "type": "input_dummy",
        "name": "define_end"
      }
    ],
    "inputsInline": true,
    "colour": 160,
    "tooltip": "",
    "helpUrl": "",
    "mutator": "define_function_mutator"
  }
  */
]);

Blockly.defineBlocksWithJsonArray([ // Mutator blocks. Do not extract.
  /*
  {
    "type": "parameters",
    "message0": "( %1",
    "args0": [
      {
        "type": "input_dummy"
      }
    ],
    "message1": "%1 )",
    "args1": [
      {
        "type": "input_statement",
        "name": "parameters"
      }
    ],
    "enableContextMenu": false,
    "colour": 160,
    "tooltip": ""
  },
  */
  {
    "type": "parameters",
    "message0": "仮引数たち",
    "nextStatement": null,
    "enableContextMenu": false,
    "colour": 160,
    "tooltip": ""
  },
  {
    "type": "parameter",
    "message0": "仮引数",
    "previousStatement": null,
    "nextStatement": null,
    "enableContextMenu": false,
    "colour": 160,
    "tooltip": ""
  }
]);

Blockly.Constants.Logic.DEFINE_FUNCTION_MUTATOR_MIXIN = {
  parameterCount: 0,

  /**
   * Create XML to represent the number of else-if and else inputs.
   * @return {Element} XML storage element.
   * @this Blockly.Block
   */
  mutationToDom: function() {
    if (!this.parameterCount) {
      return null;
    }
    var container = document.createElement('mutation');
    container.setAttribute('parameter', this.parameterCount);
    return container;
  },
  /**
   * Parse XML to restore the else-if and else inputs.
   * @param {!Element} xmlElement XML storage element.
   * @this Blockly.Block
   */
  domToMutation: function(xmlElement) {
    this.parameterCount = parseInt(xmlElement.getAttribute('parameter'), 10) || 0;
    this.updateShape_();
  },
  /**
   * Populate the mutator's dialog with this block's components.
   * @param {!Blockly.Workspace} workspace Mutator's workspace.
   * @return {!Blockly.Block} Root block in mutator.
   * @this Blockly.Block
   */
  decompose: function(workspace) {
    var containerBlock = workspace.newBlock('parameters');
    containerBlock.initSvg();
    var connection = containerBlock.nextConnection;
    for (var i = 1; i <= this.parameterCount; i++) {
      var parameterBlock = workspace.newBlock('parameter');
      parameterBlock.initSvg();
      connection.connect(parameterBlock.previousConnection);
      connection = parameterBlock.nextConnection;
    }
    return containerBlock;
  },
  /**
   * Reconfigure this block based on the mutator dialog's components.
   * @param {!Blockly.Block} containerBlock Root block in mutator.
   * @this Blockly.Block
   */
  compose: function(containerBlock) {
    var clauseBlock = containerBlock.nextConnection.targetBlock();
    this.parameterCount = 0;
    var statementConnection = containerBlock.statementConnection_;
    while (clauseBlock) {
      switch (clauseBlock.type) {
        case 'parameter':
          this.parameterCount++;
          break;
        default:
          throw 'Unknown block type.';
      }
      clauseBlock = clauseBlock.nextConnection &&
          clauseBlock.nextConnection.targetBlock();
    }
    this.updateShape_();
    Blockly.Mutator.reconnect(statementConnection, this, 'STATEMENTS');
  },
  /**
   * Store pointers to any connected child blocks.
   * @param {!Blockly.Block} containerBlock Root block in mutator.
   * @this Blockly.Block
   */
  saveConnections: function(containerBlock) {
    var clauseBlock = containerBlock;
    var inputStatement = this.getInput('STATEMENTS');
    clauseBlock.statementConnection_ =
        inputStatement && inputStatement.connection.targetConnection;
    clauseBlock = clauseBlock.nextConnection &&
        clauseBlock.nextConnection.targetBlock();
  },
  /**
   * Modify this block to have the correct number of inputs.
   * @this Blockly.Block
   * @private
   */
  updateShape_: function() {
    this.removeInput('define_end');
    this.removeInput('STATEMENTS');
    if (this.getInput('PARAM0')) {
      this.removeInput('PARAM0');
    } else {
      var i = 1;
      while (this.getInput('PARAM' + i)) {
        this.removeInput('PARAM' + i);
        i++;
      }
    }
    // Rebuild block.
    if (!this.parameterCount) {
      this.appendDummyInput('PARAM0')
          .appendField('仮引数 なし');
    } else {
      for (var i = 1; i <= this.parameterCount; i++) {
        this.appendDummyInput('PARAM' + i)
            .appendField(i > 1 ? '      ' : '仮引数')
            .appendField(new Blockly.FieldDropdown([["整数","整数"], ["実数","実数"], ["文字列","文字列"], ["真偽","真偽"]]), "DATATYPE" + i)
            .appendField(new Blockly.FieldTextInput("≪仮引数" + i + '≫'), "NAME" + i);
      }
    }
    this.appendStatementInput('STATEMENTS');
    this.appendDummyInput('define_end')
        .appendField('関数終了');
    /* 横長バージョン
    // Delete until parameter part.
    this.removeInput('define_end');
    this.removeInput('STATEMENTS');
    this.removeInput('close_parenthesis');
    var i = 1;
    while (this.getInput('PARAM' + i)) {
      this.removeInput('PARAM' + i);
      i++;
    }
    var i = 2;
    while (this.getInput('COMMA' + i)) {
      this.removeInput('COMMA' + i);
      i++;
    }
    // Rebuild block.
    for (var i = 1; i <= this.parameterCount; i++) {
      if (i > 1) {
        this.appendDummyInput('COMMA' + i)
            .appendField(',');
      }
      this.appendDummyInput('PARAM' + i)
          .appendField(new Blockly.FieldDropdown([["整数","整数"], ["実数","実数"], ["文字列","文字列"], ["真偽","真偽"]]), "DATATYPE" + i)
          .appendField(new Blockly.FieldTextInput("≪仮引数≫"), "NAME" + i);
    }
    this.appendDummyInput('close_parenthesis')
        .appendField(')');
    this.appendStatementInput('STATEMENTS');
    this.appendDummyInput('define_end')
        .appendField('関数終了');
    */
  }
};

Blockly.Extensions.registerMutator(
  'define_function_mutator',
  Blockly.Constants.Logic.DEFINE_FUNCTION_MUTATOR_MIXIN,
  null,
  ['parameter']
);

Blockly.defineBlocksWithJsonArray([ // Mutator blocks. Do not extract.
  {
    "type": "arguments",
    "message0": "実引数たち",
    "nextStatement": null,
    "enableContextMenu": false,
    "colour": 160,
    "tooltip": ""
  },
  {
    "type": "argument",
    "message0": "実引数",
    "previousStatement": null,
    "nextStatement": null,
    "enableContextMenu": false,
    "colour": 160,
    "tooltip": ""
  }
]);

Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT
  {
    "type": "call_function",
    "message0": "%1 (",
    "args0": [
      {
        "type": "field_input",
        "name": "func_name",
        "text": "≪関数≫"
      }
    ],
    "message1": "%1",
    "args1": [
      {
        "type": "input_dummy",
        "name": "ARG0"
      }
    ],
    "message2": ") %1",
    "args2": [
      {
        "type": "input_dummy",
        "name": "CLOSE_PARENTHESIS"
      }
    ],
    "inputsInline": true,
    "output": null,
    "colour": 160,
    "tooltip": "",
    "helpUrl": "",
    "mutator": "call_function_mutator"
  }
]);

Blockly.Constants.Logic.CALL_FUNCTION_MUTATOR_MIXIN = {
  argumentCount: 0,

  /**
   * Create XML to represent the number of else-if and else inputs.
   * @return {Element} XML storage element.
   * @this Blockly.Block
   */
  mutationToDom: function() {
    if (!this.argumentCount) {
      return null;
    }
    var container = document.createElement('mutation');
    container.setAttribute('argument', this.argumentCount);
    return container;
  },
  /**
   * Parse XML to restore the else-if and else inputs.
   * @param {!Element} xmlElement XML storage element.
   * @this Blockly.Block
   */
  domToMutation: function(xmlElement) {
    this.argumentCount = parseInt(xmlElement.getAttribute('argument'), 10) || 0;
    this.updateShape_();
  },
  /**
   * Populate the mutator's dialog with this block's components.
   * @param {!Blockly.Workspace} workspace Mutator's workspace.
   * @return {!Blockly.Block} Root block in mutator.
   * @this Blockly.Block
   */
  decompose: function(workspace) {
    var containerBlock = workspace.newBlock('arguments');
    containerBlock.initSvg();
    var connection = containerBlock.nextConnection;
    for (var i = 1; i <= this.argumentCount; i++) {
      var argumentBlock = workspace.newBlock('argument');
      argumentBlock.initSvg();
      connection.connect(argumentBlock.previousConnection);
      connection = argumentBlock.nextConnection;
    }
    return containerBlock;
  },
  /**
   * Reconfigure this block based on the mutator dialog's components.
   * @param {!Blockly.Block} containerBlock Root block in mutator.
   * @this Blockly.Block
   */
  compose: function(containerBlock) {
    var clauseBlock = containerBlock.nextConnection.targetBlock();
    this.argumentCount = 0;
    while (clauseBlock) {
      switch (clauseBlock.type) {
        case 'argument':
          this.argumentCount++;
          break;
        default:
          throw 'Unknown block type.';
      }
      clauseBlock = clauseBlock.nextConnection &&
          clauseBlock.nextConnection.targetBlock();
    }
    this.updateShape_();
  },
  /**
   * Store pointers to any connected child blocks.
   * @param {!Blockly.Block} containerBlock Root block in mutator.
   * @this Blockly.Block
   */
  saveConnections: function(containerBlock) {
  },
  /**
   * Modify this block to have the correct number of inputs.
   * @this Blockly.Block
   * @private
   */
  updateShape_: function() {
    this.removeInput('CLOSE_PARENTHESIS');
    if (this.getInput('ARG0')) {
      this.removeInput('ARG0');
    } else {
      var i = 1;
      while (this.getInput('ARG' + i)) {
        this.removeInput('ARG' + i);
        i++;
      }
    }
    // Rebuild block.
    if (!this.argumentCount) {
      this.appendDummyInput('ARG0')
          .appendField('');
    } else {
      for (var i = 1; i <= this.argumentCount; i++) {
        this.appendValueInput('ARG' + i)
            .appendField(i > 1 ? ',' : '')
      }
    }
    this.appendDummyInput('CLOSE_PARENTHESIS')
        .appendField(')');
  }
};

Blockly.Extensions.registerMutator(
  'call_function_mutator',
  Blockly.Constants.Logic.CALL_FUNCTION_MUTATOR_MIXIN,
  null,
  ['argument']
);

Blockly.Blocks['return_block'] = {
  init: function() {
    this.appendValueInput("return_value")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("を返す");
    this.setPreviousStatement(true, null);
    this.setColour(160);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

