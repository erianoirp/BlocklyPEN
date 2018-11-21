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
    this.setColour(120);
    this.setTooltip('');
  }
};

Blockly.Blocks['forplus'] = {
  init: function() {
    this.appendValueInput("conditions1")
        .setCheck(null)
        .appendField("");
    this.appendValueInput("conditions2")
        .setCheck(null)
        .appendField("を");
    this.appendValueInput("conditions3")
        .setCheck(null)
        .appendField("から");
    this.appendValueInput("conditions4")
        .setCheck(null)
        .appendField("まで");
    this.appendDummyInput()
        .appendField("ずつ増やしながら，");
    this.appendStatementInput("exe")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("を繰り返す");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
  }
};

Blockly.Blocks['forminus'] = {
  init: function() {
    this.appendValueInput("conditions1")
        .setCheck(null)
        .appendField("");
    this.appendValueInput("conditions2")
        .setCheck(null)
        .appendField("を");
    this.appendValueInput("conditions3")
        .setCheck(null)
        .appendField("から");
    this.appendValueInput("conditions4")
        .setCheck(null)
        .appendField("まで");
    this.appendDummyInput()
        .appendField("ずつ減らしながら，");
    this.appendStatementInput("exe")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("を繰り返す");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
  }
};