//WaPENで使用できる
Blockly.Blocks['gdtext'] = {
  init: function() {
    this.appendValueInput("x")
        .setCheck(null)
        .appendField("x");
    this.appendValueInput("y")
        .setCheck(null)
        .appendField("，y");
    this.appendValueInput("text")
        .setCheck(null)
        .appendField("に文字列");
    this.appendDummyInput()
        .appendField("を描画する");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip('');
  }
};

Blockly.Blocks['gdline'] = {
  init: function() {
    this.appendValueInput("x1")
        .setCheck(null)
        .appendField("x");
    this.appendValueInput("y1")
        .setCheck(null)
        .appendField("，y");
    this.appendValueInput("x2")
        .setCheck(null)
        .appendField("からx");
    this.appendValueInput("y2")
        .setCheck(null)
        .appendField("，y");
    this.appendDummyInput()
        .appendField("に線を描画する");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip('');
  }
};

Blockly.Blocks['gdbox'] = {
  init: function() {
    this.appendValueInput("x")
        .setCheck(null)
        .appendField("x");
    this.appendValueInput("y")
        .setCheck(null)
        .appendField("，y");
    this.appendValueInput("height")
        .setCheck(null)
        .appendField("から縦幅");
    this.appendValueInput("width")
        .setCheck(null)
        .appendField("，横幅");
    this.appendDummyInput()
        .appendField("の矩形を描画する");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip('');
  }
};

Blockly.Blocks['gfbox'] = {
  init: function() {
    this.appendValueInput("x")
        .setCheck(null)
        .appendField("x");
    this.appendValueInput("y")
        .setCheck(null)
        .appendField("，y");
    this.appendValueInput("height")
        .setCheck(null)
        .appendField("から縦幅");
    this.appendValueInput("width")
        .setCheck(null)
        .appendField("，横幅");
    this.appendDummyInput()
        .appendField("の塗りつぶした矩形を描画する");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip('');
  }
};

Blockly.Blocks['gdcircle'] = {
  init: function() {
    this.appendValueInput("x")
        .setCheck(null)
        .appendField("x");
    this.appendValueInput("y")
        .setCheck(null)
        .appendField("，y");
    this.appendValueInput("r")
        .setCheck(null)
        .appendField("を中心に半径");
    this.appendDummyInput()
        .appendField("の円を描画する");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip('');
  }
};

Blockly.Blocks['gfcircle'] = {
  init: function() {
    this.appendValueInput("x")
        .setCheck(null)
        .appendField("x");
    this.appendValueInput("y")
        .setCheck(null)
        .appendField("，y");
    this.appendValueInput("r")
        .setCheck(null)
        .appendField("を中心に半径");
    this.appendDummyInput()
        .appendField("の塗りつぶした円を描画する");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip('');
  }
};

//-------------------------------------------------------------------------------------

//未使用
Blockly.Blocks['gdpoint'] = {
  init: function() {
    this.appendValueInput("x")
        .setCheck(null)
        .appendField("x");
    this.appendValueInput("y")
        .setCheck(null)
        .appendField("，y");
    this.appendDummyInput()
        .appendField("に点を描画する");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip('');
  }
};

Blockly.Blocks['gdoval'] = {
  init: function() {
    this.appendValueInput("x1")
        .setCheck(null)
        .appendField("x");
    this.appendValueInput("y1")
        .setCheck(null)
        .appendField("，y");
    this.appendValueInput("height")
        .setCheck(null)
        .appendField("から縦幅");
    this.appendValueInput("width")
        .setCheck(null)
        .appendField("，横幅");
    this.appendDummyInput()
        .appendField("の円形を描画する");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip('');
  }
};

Blockly.Blocks['gdarc'] = {
  init: function() {
    this.appendValueInput("x1")
        .setCheck(null)
        .appendField("x");
    this.appendValueInput("y1")
        .setCheck(null)
        .appendField("，y");
    this.appendValueInput("height")
        .setCheck(null)
        .appendField("から縦幅");
    this.appendValueInput("width")
        .setCheck(null)
        .appendField("，横幅");
    this.appendValueInput("start")
        .setCheck(null)
        .appendField("の円弧を");
    this.appendValueInput("end")
        .setCheck(null)
        .appendField("°から");
    this.appendValueInput("type")
        .setCheck(null)
        .appendField("°まで");
    this.appendDummyInput()
        .appendField("で閉じて描画する");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip('');
  }
};

Blockly.Blocks['gdpolygon'] = {
  init: function() {
    this.appendValueInput("x1")
        .setCheck(null)
        .appendField("x(配列)");
    this.appendValueInput("y1")
        .setCheck(null)
        .appendField("，y(配列)");
    this.appendValueInput("top")
        .setCheck(null)
        .appendField("に頂点数");
    this.appendDummyInput()
        .appendField("の多角形を描画する");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip('');
  }
};

Blockly.Blocks['gdpolyline'] = {
  init: function() {
    this.appendValueInput("x1")
        .setCheck(null)
        .appendField("x(配列)");
    this.appendValueInput("y1")
        .setCheck(null)
        .appendField("，y(配列)");
    this.appendValueInput("top")
        .setCheck(null)
        .appendField("に，繋がった");
    this.appendDummyInput()
        .appendField("本の直線を描画する");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip('');
  }
};

Blockly.Blocks['gdimage'] = {
  init: function() {
    this.appendValueInput("x1")
        .setCheck(null)
        .appendField("x");
    this.appendValueInput("y1")
        .setCheck(null)
        .appendField("，y");
    this.appendValueInput("img")
        .setCheck(null)
        .appendField("に");
    this.appendDummyInput()
        .appendField("の画像を描画する");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip('');
  }
};

Blockly.Blocks['gdimage2'] = {
  init: function() {
    this.appendValueInput("x1")
        .setCheck(null)
        .appendField("x");
    this.appendValueInput("y1")
        .setCheck(null)
        .appendField("，y");
    this.appendValueInput("height")
        .setCheck(null)
        .appendField("に縦幅");
    this.appendValueInput("width")
        .setCheck(null)
        .appendField("，横幅");
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("のサイズで");
    this.appendDummyInput()
        .appendField("の画像を描画する");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip('');
  }
};
