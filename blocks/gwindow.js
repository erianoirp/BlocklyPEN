//WaPENで使用できる
Blockly.Blocks['gopenw'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("横幅");
    this.appendValueInput("width")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("縦幅");
    this.appendValueInput("height")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("の窓を開く");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(10);
    this.setTooltip('');
  }
};

Blockly.Blocks['gclosew'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("窓を閉じる");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(10);
    this.setTooltip('');
  }
};

Blockly.Blocks['gclearw'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("窓を白紙にする");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(10);
    this.setTooltip('');
  }
};

//-------------------------------------------------------------------------------------

//WaPENで使用できない
Blockly.Blocks['gopengraphw'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("横幅");
    this.appendValueInput("width")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("縦幅");
    this.appendValueInput("height")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("のウィンドウをx座標");
    this.appendValueInput("x1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("～");
    this.appendValueInput("x2")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("、y座標");
    this.appendValueInput("y1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("～");
    this.appendValueInput("y2")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("で開く");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(10);
    this.setTooltip('');
  }
};

Blockly.Blocks['gsavew'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ウィンドウを");
    this.appendValueInput("path")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("へ");
    this.appendValueInput("mode")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("モードで保存する");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(10);
    this.setTooltip('');
  }
};
