Blockly.Blocks['integer'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldNumber(0, -9007199254740991, 9007199254740991, 1), "value");
    this.setOutput(true, "Number");
    this.setColour(290);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['float'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldNumber(0, -Infinity, Infinity, 1), "integerValue")
        .appendField(".")
        .appendField(new Blockly.FieldNumber(0, -Infinity, Infinity, 1), "fractionalValue");
    this.setOutput(true, "Number");
    this.setColour(290);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['string'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("「")
        .appendField(new Blockly.FieldTextInput("≪文字列≫"), "value")
        .appendField("」");
    this.setOutput(true, "String");
    this.setColour(290);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['value_2_string'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("「");
    this.appendValueInput("value")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("」");
    this.setInputsInline(true);
    this.setOutput(true, "String");
    this.setColour(290);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks['boolean'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["真","真"], ["偽","偽"]]), "value");
    this.setOutput(true, "Boolean");
    this.setColour(290);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

