Blockly.Blocks['declare_variable'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["整数","整数"], ["実数","実数"], ["文字列","文字列"], ["真偽","真偽"]]), "datatype")
        .appendField(new Blockly.FieldTextInput("≪変数≫"), "name")
        .appendField("を宣言");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

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
