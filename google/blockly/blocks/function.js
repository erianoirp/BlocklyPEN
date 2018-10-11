Blockly.Blocks['function_block'] = {
  init: function() {
    this.appendValueInput("function_decleration")
        .setCheck(["arg", "args_end"])
        .appendField("関数")
        .appendField(new Blockly.FieldDropdown([["整数","int"], ["実数","real"], ["文字列","string"], ["真偽","boolean"]]), "return_value")
        .appendField(new Blockly.FieldTextInput("≪関数≫"), "func_name")
        .appendField("(");
    this.appendStatementInput("statements")
        .setCheck(null);
    this.setInputsInline(false);
    this.setColour(160);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['args_end'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(false);
    this.setOutput(true, "args_end");
    this.setColour(160);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['arg'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(["arg", "args_end"])
        .appendField(new Blockly.FieldVariable("item"), "NAME")
        .appendField(new Blockly.FieldTextInput("default"), "NAME");
    this.setOutput(true, "arg");
    this.setColour(160);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['step_block'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(["arg", "args_end"])
        .appendField("手続き")
        .appendField(new Blockly.FieldTextInput("≪手続き≫"), "step_name")
        .appendField("(");
    this.appendStatementInput("statements")
        .setCheck(null);
    this.setInputsInline(false);
    this.setColour(160);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
