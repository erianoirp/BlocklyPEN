//WaPENで使用できる
Blockly.Blocks['int'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("整数")
        .appendField(new Blockly.FieldTextInput("≪変数≫"), "val")
        .appendField("を宣言");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip('');
  }
};

Blockly.Blocks['real'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("実数")
        .appendField(new Blockly.FieldTextInput("≪変数≫"), "val")
        .appendField("を宣言");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip('');
  }
};

Blockly.Blocks['string'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("文字列")
        .appendField(new Blockly.FieldTextInput("≪文字列≫"), "val")
        .appendField("を宣言");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip('');
  }
};
