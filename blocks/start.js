Blockly.Blocks['start'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("スタート");
    this.appendStatementInput('main')
        .setCheck(null);
    this.appendDummyInput()
        .appendField("ゴール");
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
