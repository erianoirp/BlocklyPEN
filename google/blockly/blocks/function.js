Blockly.Blocks['function_block'] = {
  init: function() {
    this.appendValueInput("function_decleration")
        .setCheck(["parameter", "params_end"])
        .appendField("関数")
        .appendField(new Blockly.FieldDropdown([["整数","整数"], ["実数","実数"], ["文字列","文字列"], ["真偽","真偽"]]), "return_value")
        .appendField(new Blockly.FieldTextInput("≪関数≫"), "func_name")
        .appendField("(");
    this.appendStatementInput("statements")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("関数終了");
    this.setInputsInline(false);
    this.setColour(160);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['step_block'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(["parameter", "params_end"])
        .appendField("手続き")
        .appendField(new Blockly.FieldTextInput("≪手続き≫"), "step_name")
        .appendField("(");
    this.appendStatementInput("statements")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("手続き終了");
    this.setInputsInline(false);
    this.setColour(160);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['return_block'] = {
  init: function() {
    this.appendValueInput("return_value")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("を返す");
    this.setPreviousStatement(true, null);
    this.setColour(160);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['return_void_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("手続きを抜ける");
    this.setPreviousStatement(true, null);
    this.setColour(160);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['param_block'] = {
  init: function() {
    this.appendValueInput("parameter")
        .setCheck(["parameter", "params_end"])
        .appendField(new Blockly.FieldDropdown([["整数","整数"], ["実数","実数"], ["文字列","文字列"], ["真偽","真偽"]]), "datatype")
        .appendField(new Blockly.FieldTextInput("≪値≫"), "variable");
    this.setOutput(true, "parameter");
    this.setColour(160);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['params_end_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(false);
    this.setOutput(true, "params_end");
    this.setColour(160);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
