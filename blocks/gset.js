//WaPENで使用できる
Blockly.Blocks['gscolor'] = {
  init: function() {
    this.appendDummyInput()
      //.appendField(new Blockly.FieldDropdown([["線", "gSetLineColor("], ["塗りつぶし", "gSetFillColor("]]), "color")
        .appendField(new Blockly.FieldDropdown([["線", "線色設定("], ["塗りつぶし", "塗色設定("]]), "color")
        .appendField("の色を赤:");
    this.appendValueInput("r")
        .setCheck(null);
	this.appendDummyInput()
        .appendField("、緑:");
    this.appendValueInput("g")
        .setCheck(null);
	this.appendDummyInput()
        .appendField("、青:");
    this.appendValueInput("b")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("にセットする");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip('');
  }
};

Blockly.Blocks['gsstyle'] = {
  init: function() {
    this.appendDummyInput()
      //.appendField(new Blockly.FieldDropdown([["線の太さ", "gSetLineWidth("], ["フォントサイズ", "gSetFontSize("]]), "style")
        .appendField(new Blockly.FieldDropdown([["線の太さ", "線太さ設定("], ["フォントサイズ", "文字サイズ設定("]]), "style")
        .appendField("を");
    this.appendValueInput("style")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("にセットする");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip('');
  }
};

//-------------------------------------------------------------------------------------

//未使用
Blockly.Blocks['gslinecolor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("線の色を");
    this.appendValueInput("r")
        .setCheck(null);
    this.appendValueInput("g")
        .setCheck(null);
    this.appendValueInput("b")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("にセットする");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip('');
  }
};

Blockly.Blocks['gslineshape'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("線の種類を");
    this.appendValueInput("type")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("にセットする");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip('');
  }
};

Blockly.Blocks['gslinewidth'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("線の太さを");
    this.appendValueInput("width")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("にセットする");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip('');
  }
};

Blockly.Blocks['gsfillcolor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("塗りつぶしの色を");
    this.appendValueInput("r")
        .setCheck(null);
    this.appendValueInput("g")
        .setCheck(null);
    this.appendValueInput("b")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("にセットする");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip('');
  }
};

Blockly.Blocks['gsdotshape'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("点の種類を");
    this.appendValueInput("type")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("にセットする");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip('');
  }
};

Blockly.Blocks['gstextcolor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("文字の色を");
    this.appendValueInput("r")
        .setCheck(null);
    this.appendValueInput("g")
        .setCheck(null);
    this.appendValueInput("b")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("にセットする");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip('');
  }
};

Blockly.Blocks['gsfont'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("フォントを");
    this.appendValueInput("type")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("にセットする");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip('');
  }
};

Blockly.Blocks['gsfonttype'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("フォントスタイルを");
    this.appendValueInput("type")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("にセットする");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip('');
  }
};

Blockly.Blocks['gsfontsize'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("フォントサイズを");
    this.appendValueInput("type")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("にセットする");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip('');
  }
};

Blockly.Blocks['gsarrowtype'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("矢印の種類を");
    this.appendValueInput("type")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("にセットする");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip('');
  }
};

Blockly.Blocks['gsarrowdir'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("矢印の向きを");
    this.appendValueInput("edge")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("にセットする");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip('');
  }
};

Blockly.Blocks['gsorigin'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("原点をx");
    this.appendValueInput("x")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(",y");
    this.appendValueInput("y")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("にセットする");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip('');
  }
};

Blockly.Blocks['gsetmap'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("xの領域を");
    this.appendValueInput("x1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("～");
    this.appendValueInput("x2")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("、yの領域を");
    this.appendValueInput("y1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("～");
    this.appendValueInput("y2")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("にセットする");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip('');
  }
};

Blockly.Blocks['gsfontts'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["フォント", "gSetFont("], ["フォントスタイル", "gSetFontType("], ["フォントサイズ", "gSetFontSize("]]), "font")
        .appendField("を");
    this.appendValueInput("font")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("にセットする");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip('');
  }
};

Blockly.Blocks['gsarrow'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("矢印の")
        .appendField(new Blockly.FieldDropdown([["種類", "gSetArrowType("], ["向き", "gSetArrowDir("]]), "arrow")
        .appendField("を");
    this.appendValueInput("type")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("にセットする");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip('');
  }
};
