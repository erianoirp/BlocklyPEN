/*
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
*/

Blockly.Blocks['input'] = {
  init: function() {
    this.appendValueInput("variable")
        .setCheck("Variable");
    this.appendDummyInput()
        .appendField("に値を入力する");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['print_string'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("「")
        .appendField(new Blockly.FieldTextInput("≪文字列≫"), "string")
        .appendField("」を改行")
        .appendField(new Blockly.FieldDropdown([["して","true"], ["しないで","false"]]), "newline")
        .appendField("表示する");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['print_v'] = {
  init: function() {
    this.appendValueInput("v")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("を改行")
        .appendField(new Blockly.FieldDropdown([["して","true"], ["しないで","false"]]), "newline")
        .appendField("表示する");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
 this.setTooltip("");
 this.setHelpUrl("");
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
