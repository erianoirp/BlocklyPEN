//WaPENで使用できる
Blockly.Blocks['conditions'] = {
  init: function() {
    this.appendValueInput("argument1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["=", "="], ["≠", "!="], ["<", "<"], ["≦", "<="], [">", ">"], ["≧", ">="]]), "comparisonOperator");
    this.appendValueInput("argument2")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, "Moziretu");
    this.setColour(190);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['if'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("もし");
    this.appendValueInput("conditions")
        .setCheck("Moziretu");
    this.appendDummyInput()
        .appendField("ならば");
    this.appendStatementInput("exe")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("を実行する");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(190);
    this.setTooltip('');
  }
};

Blockly.Blocks['ifelse'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("もし");
    this.appendValueInput("conditions")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("ならば");
    this.appendStatementInput("exe1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("を実行し，そうでなければ");
    this.appendStatementInput("exe2")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("を実行する");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(190);
    this.setTooltip('');
  }
};

Blockly.Blocks['ifelseif'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("もし");
    this.appendValueInput("conditions1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("ならば");
    this.appendStatementInput("exe1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("を実行し，そうでなくもし");
    this.appendValueInput("conditions2")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("ならば");
    this.appendStatementInput("exe2")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("を実行する");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(190);
    this.setTooltip('');
  }
};

Blockly.Blocks['ifelseifelse'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("もし");
    this.appendValueInput("conditions1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("ならば");
    this.appendStatementInput("exe1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("を実行し，そうでなくもし");
    this.appendValueInput("conditions2")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("ならば");
    this.appendStatementInput("exe2")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("を実行し，そうでなければ");
    this.appendStatementInput("exe3")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("を実行する");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(190);
    this.setTooltip('');
  }
};
