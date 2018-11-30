Blockly.Blocks['define_function'] = {
  init: function() {
    this.appendValueInput("parameters")
        .setCheck(["Parameter", "CloseParenthesis"])
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
        .setCheck(["Parameter", "CloseParenthesis"])
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

Blockly.Blocks['parameter'] = {
  init: function() {
    this.appendValueInput("parameter")
        .setCheck(["Parameter", "CloseParenthesis"])
        .appendField(new Blockly.FieldDropdown([["整数","整数"], ["実数","実数"], ["文字列","文字列"], ["真偽","真偽"]]), "datatype")
        .appendField(new Blockly.FieldVariable("≪仮引数≫"), "name");
    this.setOutput(true, "Parameter");
    this.setColour(160);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['call_step'] = {
  init: function() {
    this.appendValueInput("arguments")
        .setCheck(["argument", "CloseParenthesis"])
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
        .setCheck(["argument", "CloseParenthesis"])
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
        .setCheck(["argument", "CloseParenthesis"])
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
    this.setOutput(true, "CloseParenthesis");
    this.setColour(160);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
