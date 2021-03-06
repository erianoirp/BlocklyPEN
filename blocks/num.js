//WaPENで使用できる
Blockly.Blocks['num'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldNumber(0), "num");
    this.setOutput(true, "Number");
    this.setColour(230);
    this.setTooltip('');
  }
};

Blockly.Blocks['cnum'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldNumber(0,0,255), "cnum");
    this.setOutput(true, "CNumber");
    this.setColour(230);
    this.setTooltip('');
  }
};

/*
Blockly.Blocks['val'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("≪変数≫"), "val");
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip('');
  }
};
*/

