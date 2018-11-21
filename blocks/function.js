Blockly.Blocks['define_function'] = {
  init: function() {
    this.appendValueInput("parameters")
        .setCheck(["parameter", "close_parenthesis"])
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

Blockly.Blocks['define_step'] = {
  init: function() {
    this.appendValueInput("parameters")
        .setCheck(["parameter", "close_parenthesis"])
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
        .setCheck(["parameter", "close_parenthesis"])
        .appendField(new Blockly.FieldDropdown([["整数","整数"], ["実数","実数"], ["文字列","文字列"], ["真偽","真偽"]]), "datatype")
        .appendField(new Blockly.FieldTextInput("≪値≫"), "variable");
    this.setOutput(true, "parameter");
    this.setColour(160);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['call_step'] = {
  init: function() {
    this.appendValueInput("arguments")
        .setCheck(["argument", "close_parenthesis"])
        .appendField(new Blockly.FieldTextInput("≪手続き≫"), "step_name")
        .appendField("(");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['call_function'] = {
  init: function() {
    this.appendValueInput("arguments")
        .setCheck(["argument", "close_parenthesis"])
        .appendField(new Blockly.FieldTextInput("≪関数≫"), "func_name")
        .appendField("(");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(160);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['argument'] = {
  init: function() {
    this.appendValueInput("arg_or_cp")
        .setCheck(["argument", "close_parenthesis"])
        .appendField(new Blockly.FieldTextInput("≪値≫"), "value");
    this.setOutput(true, "argument");
    this.setColour(160);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['close_parenthesis'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, "close_parenthesis");
    this.setColour(160);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
