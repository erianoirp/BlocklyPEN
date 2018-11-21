//WaPENで使用できる
Blockly.Blocks['str'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("「")
        .appendField(new Blockly.FieldTextInput("≪文字列≫"), "str")
        .appendField("」");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(160);
    this.setTooltip('');
  }
};

//-------------------------------------------------------------------------------------

//未使用
Blockly.Blocks['strsubstitution'] = {
  init: function() {
    this.appendValueInput("val")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("に");
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("≪文字列≫"), "str")
        .appendField("を代入");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip('');
  }
};

Blockly.Blocks['str1'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("文字列");
    this.appendValueInput("str")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("の")
        .appendField(new Blockly.FieldDropdown([["長さ", "length"], ["一文字目のASCIIコード", "str2int"]]), "drop");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(160);
    this.setTooltip('');
  }
};

Blockly.Blocks['int2str'] = {
  init: function() {
    this.appendValueInput("str")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("をASCIIコードと見なした文字");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(160);
    this.setTooltip('');
  }
};

Blockly.Blocks['compare'] = {
  init: function() {
    this.appendValueInput("str1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("と");
    this.appendValueInput("str2")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("を比較");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(160);
    this.setTooltip('');
  }
};

Blockly.Blocks['append'] = {
  init: function() {
    this.appendValueInput("str1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("と");
    this.appendValueInput("str2")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("を結合");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(160);
    this.setTooltip('');
  }
};

Blockly.Blocks['substring'] = {
  init: function() {
    this.appendValueInput("str")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("の");
    this.appendValueInput("val")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("文字目以降の文字列");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(160);
    this.setTooltip('');
  }
};

Blockly.Blocks['substring2'] = {
  init: function() {
    this.appendValueInput("str")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("の");
    this.appendValueInput("val1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("文字目以降の");
    this.appendValueInput("val2")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("文字");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(160);
    this.setTooltip('');
  }
};

Blockly.Blocks['insert'] = {
  init: function() {
    this.appendValueInput("str1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("の");
    this.appendValueInput("val")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("文字目以降に");
    this.appendValueInput("str2")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("を挿入する");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(160);
    this.setTooltip('');
  }
};

Blockly.Blocks['replace'] = {
  init: function() {
    this.appendValueInput("str1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("の");
    this.appendValueInput("val1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("文字目以降の");
    this.appendValueInput("val2")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("文字分を");
    this.appendValueInput("str2")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("に置き換える");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(160);
    this.setTooltip('');
  }
};

Blockly.Blocks['extract'] = {
  init: function() {
    this.appendValueInput("str1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("を");
    this.appendValueInput("val")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("で区切って「");
    this.appendValueInput("str2")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("+1」個目にある文字");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(160);
    this.setTooltip('');
  }
};
