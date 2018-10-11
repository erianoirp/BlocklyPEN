//WaPENで使用できる
Blockly.Pen['gopenw'] = function(block) {
  var value_width = Blockly.Pen.valueToCode(block, 'width', Blockly.Pen.ORDER_ATOMIC);
  var value_height = Blockly.Pen.valueToCode(block, 'height', Blockly.Pen.ORDER_ATOMIC);
  // TODO: Assemble Pen into code variable.
  value_width = value_width.substr(1);
  value_width = value_width.substr(0,value_width.length-1);
  value_height = value_height.substr(1);
  value_height = value_height.substr(0,value_height.length-1);
  // var code = 'gOpenWindow(' + value_width + '，' + value_height + ')\n';
  var code = '描画領域開く(' + value_width + '，' + value_height + ')\n';
  return code;
};

Blockly.Pen['gclosew'] = function(block) {
  // TODO: Assemble Pen into code variable.
  // var code = 'gCloseWindow()\n';
  var code = '描画領域閉じる()\n';
  return code;
};

Blockly.Pen['gclearw'] = function(block) {
  // TODO: Assemble Pen into code variable.
  // var code = 'gClearWindow()\n';
  var code = '描画領域全消去()\n';
  return code;
};

//-------------------------------------------------------------------------------------

//未使用
Blockly.Pen['gopengraphw'] = function(block) {
  var value_width = Blockly.Pen.valueToCode(block, 'width', Blockly.Pen.ORDER_ATOMIC);
  var value_height = Blockly.Pen.valueToCode(block, 'height', Blockly.Pen.ORDER_ATOMIC);
  var value_x1 = Blockly.Pen.valueToCode(block, 'x1', Blockly.Pen.ORDER_ATOMIC);
  var value_x2 = Blockly.Pen.valueToCode(block, 'x2', Blockly.Pen.ORDER_ATOMIC);
  var value_y1 = Blockly.Pen.valueToCode(block, 'y1', Blockly.Pen.ORDER_ATOMIC);
  var value_y2 = Blockly.Pen.valueToCode(block, 'y2', Blockly.Pen.ORDER_ATOMIC);
  // TODO: Assemble Pen into code variable.
  value_width = value_width.substr(1);
  value_width = value_width.substr(0,value_width.length-1);
  value_height = value_height.substr(1);
  value_height = value_height.substr(0,value_height.length-1);
  value_x1 = value_x1.substr(1);
  value_x1 = value_x1.substr(0,value_x1.length-1);
  value_x2 = value_x2.substr(1);
  value_x2 = value_x2.substr(0,value_x2.length-1);
  value_y1 = value_y1.substr(1);
  value_y1 = value_y1.substr(0,value_y1.length-1);
  value_y2 = value_y2.substr(1);
  value_y2 = value_y2.substr(0,value_y2.length-1);
  var code = 'gOpenGraphWindow(' + value_width + '，' + value_height + '，' + value_x1 + '，' + value_x2 + '，' + value_y1 + '，' + value_y2 + ')\n';
  return code;
};

Blockly.Pen['gsavew'] = function(block) {
  var value_path = Blockly.Pen.valueToCode(block, 'path', Blockly.Pen.ORDER_ATOMIC);
  var value_mode = Blockly.Pen.valueToCode(block, 'mode', Blockly.Pen.ORDER_ATOMIC);
  // TODO: Assemble Pen into code variable.
  value_path = value_path.substr(1);
  value_path = value_path.substr(0,value_path.length-1);
  value_mode = value_mode.substr(1);
  value_mode = value_mode.substr(0,value_mode.length-1);
  var code = 'gSaveWindow(' + value_path + '，' + value_mode + ')\n';
  return code;
};
