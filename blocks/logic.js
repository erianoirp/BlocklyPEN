goog.provide('Blockly.Blocks.logic');
goog.provide('Blockly.Constants.Logic');

goog.require('Blockly.Blocks');
goog.require('Blockly');

//WaPENで使用できる
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

Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT
  {
    "type": "if",
    "message0": "もし %1",
    "args0": [
      {
        "type": "input_value",
        "name": "IF0"
      }
    ],
    "message1": "ならば %1",
    "args1": [
      {
        "type": "input_dummy",
        "name": "THEN0"
      }
    ],
    "message2": "%1",
    "args2": [
      {
        "type": "input_statement",
        "name": "DO0"
      }
    ],
    "message3": "を実行する %1",
    "args3": [
      {
        "type": "input_dummy",
        "name": "DO"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 190,
    "tooltip": "",
    "helpUrl": "",
    "mutator": "if_mutator"
  }
]);

Blockly.defineBlocksWithJsonArray([ // Mutator blocks. Do not extract.
  // 条件ブロックの「if」部分のmutator
  {
    "type": "if_if",
    "message0": "もし",
    "nextStatement": null,
    "enableContextMenu": false,
    "colour": 190,
    "tooltip": ""
  },
  // 条件ブロックの「elseif」部分のmutator
  {
    "type": "if_elseif",
    "message0": "そうでなくもし",
    "previousStatement": null,
    "nextStatement": null,
    "enableContextMenu": false,
    "colour": 190,
    "tooltip": ""
  },
  // 条件ブロックの「else」部分のmutator
  {
    "type": "if_else",
    "message0": "そうでなければ",
    "previousStatement": null,
    "enableContextMenu": false,
    "colour": 190,
    "tooltip": ""
  }
]);

Blockly.Constants.Logic.IF_MUTATOR_MIXIN = {
  elseifCount_: 0,
  elseCount_: 0,

  /**
   * Create XML to represent the number of else-if and else inputs.
   * @return {Element} XML storage element.
   * @this Blockly.Block
   */
  mutationToDom: function() {
    if (!this.elseifCount_ && !this.elseCount_) {
      return null;
    }
    var container = document.createElement('mutation');
    if (this.elseifCount_) {
      container.setAttribute('elseif', this.elseifCount_);
    }
    if (this.elseCount_) {
      container.setAttribute('else', 1);
    }
    return container;
  },
  /**
   * Parse XML to restore the else-if and else inputs.
   * @param {!Element} xmlElement XML storage element.
   * @this Blockly.Block
   */
  domToMutation: function(xmlElement) {
    this.elseifCount_ = parseInt(xmlElement.getAttribute('elseif'), 10) || 0;
    this.elseCount_ = parseInt(xmlElement.getAttribute('else'), 10) || 0;
    this.updateShape_();
  },
  /**
   * Populate the mutator's dialog with this block's components.
   * @param {!Blockly.Workspace} workspace Mutator's workspace.
   * @return {!Blockly.Block} Root block in mutator.
   * @this Blockly.Block
   */
  decompose: function(workspace) {
    var containerBlock = workspace.newBlock('if_if');
    containerBlock.initSvg();
    var connection = containerBlock.nextConnection;
    for (var i = 1; i <= this.elseifCount_; i++) {
      var elseifBlock = workspace.newBlock('if_elseif');
      elseifBlock.initSvg();
      connection.connect(elseifBlock.previousConnection);
      connection = elseifBlock.nextConnection;
    }
    if (this.elseCount_) {
      var elseBlock = workspace.newBlock('if_else');
      elseBlock.initSvg();
      connection.connect(elseBlock.previousConnection);
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
    // Count number of inputs.
    this.elseifCount_ = 0;
    this.elseCount_ = 0;
    var valueConnections = [null];
    var statementConnections = [null];
    var elseStatementConnection = null;
    while (clauseBlock) {
      switch (clauseBlock.type) {
        case 'if_elseif':
          this.elseifCount_++;
          valueConnections.push(clauseBlock.valueConnection_);
          statementConnections.push(clauseBlock.statementConnection_);
          break;
        case 'if_else':
          this.elseCount_++;
          elseStatementConnection = clauseBlock.statementConnection_;
          break;
        default:
          throw 'Unknown block type.';
      }
      clauseBlock = clauseBlock.nextConnection &&
          clauseBlock.nextConnection.targetBlock();
    }
    this.updateShape_();
    // Reconnect any child blocks.
    for (var i = 1; i <= this.elseifCount_; i++) {
      Blockly.Mutator.reconnect(valueConnections[i], this, 'IF' + i);
      Blockly.Mutator.reconnect(statementConnections[i], this, 'DO' + i);
    }
    Blockly.Mutator.reconnect(elseStatementConnection, this, 'ELSE');
  },
  /**
   * Store pointers to any connected child blocks.
   * @param {!Blockly.Block} containerBlock Root block in mutator.
   * @this Blockly.Block
   */
  saveConnections: function(containerBlock) {
    var clauseBlock = containerBlock.nextConnection.targetBlock();
    var i = 1;
    while (clauseBlock) {
      switch (clauseBlock.type) {
        case 'if_elseif':
          var inputIf = this.getInput('IF' + i);
          var inputDo = this.getInput('DO' + i);
          clauseBlock.valueConnection_ =
              inputIf && inputIf.connection.targetConnection;
          clauseBlock.statementConnection_ =
              inputDo && inputDo.connection.targetConnection;
          i++;
          break;
        case 'if_else':
          var inputDo = this.getInput('ELSE');
          clauseBlock.statementConnection_ =
              inputDo && inputDo.connection.targetConnection;
          break;
        default:
          throw 'Unknown block type.';
      }
      clauseBlock = clauseBlock.nextConnection &&
          clauseBlock.nextConnection.targetBlock();
    }
  },
  /**
   * Modify this block to have the correct number of inputs.
   * @this Blockly.Block
   * @private
   */
  updateShape_: function() {
    // Delete everything.
    this.removeInput('DO');
    if (this.getInput('ELSE')) {
      this.removeInput('ELSE_THEN');
      this.removeInput('ELSE');
    }
    var i = 1;
    while (this.getInput('IF' + i)) {
      this.removeInput('IF' + i);
      this.removeInput('IF_THEN' + i);
      this.removeInput('DO' + i);
      i++;
    }
    // Rebuild block.
    for (var i = 1; i <= this.elseifCount_; i++) {
      this.appendValueInput('IF' + i)
          .appendField('を実行し、そうでなくもし');
      this.appendDummyInput('IF_THEN' + i)
          .appendField('ならば');
      this.appendStatementInput('DO' + i);
    }
    if (this.elseCount_) {
      this.appendDummyInput('ELSE_THEN')
          .appendField('を実行し、そうでなければ');
      this.appendStatementInput('ELSE');
    }
    this.appendDummyInput('DO')
        .appendField('を実行する');
  }
};

Blockly.Extensions.registerMutator(
  'if_mutator',
  Blockly.Constants.Logic.IF_MUTATOR_MIXIN,
  null,
  ['if_elseif', 'if_else']
);

