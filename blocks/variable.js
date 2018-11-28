/*
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
*/

Blockly.Blocks['declare_variable'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["整数","整数"], ["実数","実数"], ["文字列","文字列"], ["真偽","真偽"]]), "datatype");
    this.appendValueInput("name")
        .setCheck("Variable");
    this.appendDummyInput()
        .appendField("を宣言");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['assign'] = {
  init: function() {
    this.appendValueInput("to")
        .setCheck("Variable");
    this.appendDummyInput()
        .appendField(" ← ");
    this.appendValueInput("from")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("左辺の変数に右辺の値を代入する");
 this.setHelpUrl("");
  }
};

/*
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
*/

Blockly.Blocks['variable'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("≪変数≫"), "name");
    this.setOutput(true, "Variable");
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

