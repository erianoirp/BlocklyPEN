//WaPENで使用できる
Blockly.Blocks['calculation'] = {
  init: function() {
    this.appendValueInput("val1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["＋", "+"], ["－", "-"], ["×", "*"], ["÷", "/"], ["%", "%"]]), "calculation");
    this.appendValueInput("val2")
        .setCheck(null);
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip('');
  }
};

Blockly.Blocks['assign'] = {
  init: function() {
    this.appendValueInput("to")
        .setCheck("variable");
    this.appendDummyInput()
        .appendField(" ← ");
    this.appendValueInput("from")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("左辺の変数に右辺の値を代入する");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['random'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("0から");
    this.appendValueInput("val")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("までのランダムな数");
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip('');
  }
};

//-------------------------------------------------------------------------------------

//未使用
Blockly.Blocks['decimal'] = {
  init: function() {
    this.appendValueInput("val")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("の小数点以下を")
        .appendField(new Blockly.FieldDropdown([["切り捨てる", "floor"], ["切り上げる", "ceil"], ["四捨五入する", "round"]]), "decimal");
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip('');
  }
};

Blockly.Blocks['trigonometric'] = {
  init: function() {
    this.appendValueInput("val")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("の")
        .appendField(new Blockly.FieldDropdown([["サイン(正弦)", "sin"], ["コサイン(余弦)", "cos"], ["タンジェント(正接)", "tan"]]), "trigonometric");
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip('');
  }
};

Blockly.Blocks['other'] = {
  init: function() {
    this.appendValueInput("val")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("の")
        .appendField(new Blockly.FieldDropdown([["絶対値", "abs"], ["整数化", "int"], ["平方根", "sqrt"], ["対数", "log"]]), "other");
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip('');
  }
};
