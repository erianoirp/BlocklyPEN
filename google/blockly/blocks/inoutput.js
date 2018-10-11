Blockly.Blocks['input'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("キーボードから、変数");
    this.appendValueInput("val")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("に入力");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
  }
};

Blockly.Blocks['output'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("コンソールに")
        .appendField(new Blockly.FieldTextInput("≪出力文≫"), "val")
        .appendField("を出力");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
  }
};

Blockly.Blocks['outputno'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("コンソールに")
        .appendField(new Blockly.FieldTextInput("≪出力文≫"), "val")
        .appendField("を改行なしで出力");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
  }
};

Blockly.Blocks['valoutput'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("コンソールに");
    this.appendValueInput("val")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("を出力");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
  }
};

Blockly.Blocks['valoutputno'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("コンソールに");
    this.appendValueInput("val")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("を改行なしで出力");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
  }
};