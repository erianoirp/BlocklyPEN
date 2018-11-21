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
Blockly.Blocks['variable'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("≪変数≫"), "name");
    this.setOutput(true, "variable");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['variable2'] = {
  init: function() {
    this.appendDummyInput()
//        .appendField(new Blockly.FieldVariable("≪変数≫"), "namae");
        .appendField(new Blockly.FieldVariable("hensuu"), "namae");
    this.setOutput(true, "variable");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
