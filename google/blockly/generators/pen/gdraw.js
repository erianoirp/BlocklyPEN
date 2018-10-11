//WaPENで使用できる
Blockly.Pen['gdtext'] = function(block) {
  var value_x = Blockly.Pen.valueToCode(block, 'x', Blockly.Pen.ORDER_ATOMIC);
  var value_y = Blockly.Pen.valueToCode(block, 'y', Blockly.Pen.ORDER_ATOMIC);
  var value_text = Blockly.Pen.valueToCode(block, 'text', Blockly.Pen.ORDER_ATOMIC);
  // TODO: Assemble Pen into code variable.
  value_x = value_x.substr(1);
  value_x = value_x.substr(0,value_x.length-1);
  value_y = value_y.substr(1);
  value_y = value_y.substr(0,value_y.length-1);
  value_text = value_text.substr(1);
  value_text = value_text.substr(0,value_text.length-1);
  // var code = 'gDrawText(' + value_text + ', ' + value_x + ', ' + value_y + ')\n';
  var code = '文字描画(' + value_text + ', ' + value_x + ', ' + value_y + ')\n';
  return code;
};

Blockly.Pen['gdline'] = function(block) {
  var value_x1 = Blockly.Pen.valueToCode(block, 'x1', Blockly.Pen.ORDER_ATOMIC);
  var value_y1 = Blockly.Pen.valueToCode(block, 'y1', Blockly.Pen.ORDER_ATOMIC);
  var value_x2 = Blockly.Pen.valueToCode(block, 'x2', Blockly.Pen.ORDER_ATOMIC);
  var value_y2 = Blockly.Pen.valueToCode(block, 'y2', Blockly.Pen.ORDER_ATOMIC);
  // TODO: Assemble Pen into code variable.
  value_x1 = value_x1.substr(1);
  value_x1 = value_x1.substr(0,value_x1.length-1);
  value_y1 = value_y1.substr(1);
  value_y1 = value_y1.substr(0,value_y1.length-1);
  value_x2 = value_x2.substr(1);
  value_x2 = value_x2.substr(0,value_x2.length-1);
  value_y2 = value_y2.substr(1);
  value_y2 = value_y2.substr(0,value_y2.length-1);
  // var code = 'gDrawLine(' + value_x1 + ', ' + value_y1 + ', ' + value_x2 + ', ' + value_y2 + ')\n';
  var code = '線描画(' + value_x1 + ', ' + value_y1 + ', ' + value_x2 + ', ' + value_y2 + ')\n';
  return code;
};

Blockly.Pen['gdbox'] = function(block) {
  var value_x = Blockly.Pen.valueToCode(block, 'x', Blockly.Pen.ORDER_ATOMIC);
  var value_y = Blockly.Pen.valueToCode(block, 'y', Blockly.Pen.ORDER_ATOMIC);
  var value_height = Blockly.Pen.valueToCode(block, 'height', Blockly.Pen.ORDER_ATOMIC);
  var value_width = Blockly.Pen.valueToCode(block, 'width', Blockly.Pen.ORDER_ATOMIC);
  // TODO: Assemble Pen into code variable.
  value_x = value_x.substr(1);
  value_x = value_x.substr(0,value_x.length-1);
  value_y = value_y.substr(1);
  value_y = value_y.substr(0,value_y.length-1);
  value_height = value_height.substr(1);
  value_height = value_height.substr(0,value_height.length-1);
  value_width = value_width.substr(1);
  value_width = value_width.substr(0,value_width.length-1);
  // var code = 'gDrawBox(' + value_x + ', ' + value_y + ', ' + value_height + ', ' + value_width + ')\n';
  var code = '矩形描画(' + value_x + ', ' + value_y + ', ' + value_height + ', ' + value_width + ')\n';
  return code;
};

Blockly.Pen['gfbox'] = function(block) {
  var value_x = Blockly.Pen.valueToCode(block, 'x', Blockly.Pen.ORDER_ATOMIC);
  var value_y = Blockly.Pen.valueToCode(block, 'y', Blockly.Pen.ORDER_ATOMIC);
  var value_height = Blockly.Pen.valueToCode(block, 'height', Blockly.Pen.ORDER_ATOMIC);
  var value_width = Blockly.Pen.valueToCode(block, 'width', Blockly.Pen.ORDER_ATOMIC);
  // TODO: Assemble Pen into code variable.
  value_x = value_x.substr(1);
  value_x = value_x.substr(0,value_x.length-1);
  value_y = value_y.substr(1);
  value_y = value_y.substr(0,value_y.length-1);
  value_height = value_height.substr(1);
  value_height = value_height.substr(0,value_height.length-1);
  value_width = value_width.substr(1);
  value_width = value_width.substr(0,value_width.length-1);
  // var code = 'gFillBox(' + value_x + ', ' + value_y + ', ' + value_height + ', ' + value_width + ')\n';
  var code = '矩形塗描画(' + value_x + ', ' + value_y + ', ' + value_height + ', ' + value_width + ')\n';
  return code;
};

Blockly.Pen['gdcircle'] = function(block) {
  var value_x = Blockly.Pen.valueToCode(block, 'x', Blockly.Pen.ORDER_ATOMIC);
  var value_y = Blockly.Pen.valueToCode(block, 'y', Blockly.Pen.ORDER_ATOMIC);
  var value_r = Blockly.Pen.valueToCode(block, 'r', Blockly.Pen.ORDER_ATOMIC);
  // TODO: Assemble Pen into code variable.
  value_x = value_x.substr(1);
  value_x = value_x.substr(0,value_x.length-1);
  value_y = value_y.substr(1);
  value_y = value_y.substr(0,value_y.length-1);
  value_r = value_r.substr(1);
  value_r = value_r.substr(0,value_r.length-1);
  // var code = 'gDrawCircle(' + value_x + ', ' + value_y + ', ' + value_r + ')\n';
  var code = '円描画(' + value_x + ', ' + value_y + ', ' + value_r + ')\n';
  return code;
};

Blockly.Pen['gfcircle'] = function(block) {
  var value_x = Blockly.Pen.valueToCode(block, 'x', Blockly.Pen.ORDER_ATOMIC);
  var value_y = Blockly.Pen.valueToCode(block, 'y', Blockly.Pen.ORDER_ATOMIC);
  var value_r = Blockly.Pen.valueToCode(block, 'r', Blockly.Pen.ORDER_ATOMIC);
  // TODO: Assemble Pen into code variable.
  value_x = value_x.substr(1);
  value_x = value_x.substr(0,value_x.length-1);
  value_y = value_y.substr(1);
  value_y = value_y.substr(0,value_y.length-1);
  value_r = value_r.substr(1);
  value_r = value_r.substr(0,value_r.length-1);
  // var code = 'gFillCircle(' + value_x + ', ' + value_y + ', ' + value_r + ')\n';
  var code = '円塗描画(' + value_x + ', ' + value_y + ', ' + value_r + ')\n';
  return code;
};

//-------------------------------------------------------------------------------------

//未使用
Blockly.Pen['gdpoint'] = function(block) {
  var value_x = Blockly.Pen.valueToCode(block, 'x', Blockly.Pen.ORDER_ATOMIC);
  var value_y = Blockly.Pen.valueToCode(block, 'y', Blockly.Pen.ORDER_ATOMIC);
  // TODO: Assemble Pen into code variable.
  value_x = value_x.substr(1);
  value_x = value_x.substr(0,value_x.length-1);
  value_y = value_y.substr(1);
  value_y = value_y.substr(0,value_y.length-1);
  var code = 'gDrawPoint(' + value_x + ', ' + value_y + ')\n';
  return code;
};

Blockly.Pen['gdoval'] = function(block) {
  var value_x1 = Blockly.Pen.valueToCode(block, 'x1', Blockly.Pen.ORDER_ATOMIC);
  var value_y1 = Blockly.Pen.valueToCode(block, 'y1', Blockly.Pen.ORDER_ATOMIC);
  var value_height = Blockly.Pen.valueToCode(block, 'height', Blockly.Pen.ORDER_ATOMIC);
  var value_width = Blockly.Pen.valueToCode(block, 'width', Blockly.Pen.ORDER_ATOMIC);
  // TODO: Assemble Pen into code variable.
  value_x1 = value_x1.substr(1);
  value_x1 = value_x1.substr(0,value_x1.length-1);
  value_y1 = value_y1.substr(1);
  value_y1 = value_y1.substr(0,value_y1.length-1);
  value_height = value_height.substr(1);
  value_height = value_height.substr(0,value_height.length-1);
  value_width = value_width.substr(1);
  value_width = value_width.substr(0,value_width.length-1);
  var code = 'gDrawOval(' + value_x1 + ', ' + value_y1 + ', ' + value_height + ', ' + value_width + ')\n';
  return code;
};

Blockly.Pen['gdarc'] = function(block) {
  var value_x1 = Blockly.Pen.valueToCode(block, 'x1', Blockly.Pen.ORDER_ATOMIC);
  var value_y1 = Blockly.Pen.valueToCode(block, 'y1', Blockly.Pen.ORDER_ATOMIC);
  var value_height = Blockly.Pen.valueToCode(block, 'height', Blockly.Pen.ORDER_ATOMIC);
  var value_width = Blockly.Pen.valueToCode(block, 'width', Blockly.Pen.ORDER_ATOMIC);
  var value_start = Blockly.Pen.valueToCode(block, 'start', Blockly.Pen.ORDER_ATOMIC);
  var value_end = Blockly.Pen.valueToCode(block, 'end', Blockly.Pen.ORDER_ATOMIC);
  var value_type = Blockly.Pen.valueToCode(block, 'type', Blockly.Pen.ORDER_ATOMIC);
  // TODO: Assemble Pen into code variable.
  value_x1 = value_x1.substr(1);
  value_x1 = value_x1.substr(0,value_x1.length-1);
  value_y1 = value_y1.substr(1);
  value_y1 = value_y1.substr(0,value_y1.length-1);
  value_height = value_height.substr(1);
  value_height = value_height.substr(0,value_height.length-1);
  value_width = value_width.substr(1);
  value_width = value_width.substr(0,value_width.length-1);
  value_start = value_start.substr(1);
  value_start = value_start.substr(0,value_start.length-1);
  value_end = value_end.substr(1);
  value_end = value_end.substr(0,value_end.length-1);
  value_type = value_type.substr(1);
  value_type = value_type.substr(0,value_type.length-1);
  var code = 'gDrawArc(' + value_x1 + ', ' + value_y1 + ', ' + value_height + ', ' + value_width + ', ' + value_start + ', ' + value_end + ', ' + value_type + ')\n';
  return code;
};

Blockly.Pen['gdpolygon'] = function(block) {
  var value_x1 = Blockly.Pen.valueToCode(block, 'x1', Blockly.Pen.ORDER_ATOMIC);
  var value_y1 = Blockly.Pen.valueToCode(block, 'y1', Blockly.Pen.ORDER_ATOMIC);
  var value_top = Blockly.Pen.valueToCode(block, 'top', Blockly.Pen.ORDER_ATOMIC);
  // TODO: Assemble Pen into code variable.
  value_x1 = value_x1.substr(1);
  value_x1 = value_x1.substr(0,value_x1.length-1);
  value_y1 = value_y1.substr(1);
  value_y1 = value_y1.substr(0,value_y1.length-1);
  value_top = value_top.substr(1);
  value_top = value_top.substr(0,value_top.length-1);
  var code = 'gDrawPolygon(' + value_x1 + ', ' + value_y1 + ', ' + value_top + ')\n';
  return code;
};

Blockly.Pen['gdpolyline'] = function(block) {
  var value_x1 = Blockly.Pen.valueToCode(block, 'x1', Blockly.Pen.ORDER_ATOMIC);
  var value_y1 = Blockly.Pen.valueToCode(block, 'y1', Blockly.Pen.ORDER_ATOMIC);
  var value_top = Blockly.Pen.valueToCode(block, 'top', Blockly.Pen.ORDER_ATOMIC);
  // TODO: Assemble Pen into code variable.
  value_x1 = value_x1.substr(1);
  value_x1 = value_x1.substr(0,value_x1.length-1);
  value_y1 = value_y1.substr(1);
  value_y1 = value_y1.substr(0,value_y1.length-1);
  value_top = value_top.substr(1);
  value_top = value_top.substr(0,value_top.length-1);
  var code = 'gDrawPolyline(' + value_x1 + ', ' + value_y1 + ', ' + value_top + ')\n';
  return code;
};

Blockly.Pen['gdimage'] = function(block) {
  var value_x1 = Blockly.Pen.valueToCode(block, 'x1', Blockly.Pen.ORDER_ATOMIC);
  var value_y1 = Blockly.Pen.valueToCode(block, 'y1', Blockly.Pen.ORDER_ATOMIC);
  var value_img = Blockly.Pen.valueToCode(block, 'img', Blockly.Pen.ORDER_ATOMIC);
  // TODO: Assemble Pen into code variable.
  value_x1 = value_x1.substr(1);
  value_x1 = value_x1.substr(0,value_x1.length-1);
  value_y1 = value_y1.substr(1);
  value_y1 = value_y1.substr(0,value_y1.length-1);
  value_img = value_img.substr(1);
  value_img = value_img.substr(0,value_img.length-1);
  var code = 'gDrawImage(' + value_img + ', ' + value_x1 + ', ' + value_y1 + ')\n';
  return code;
};

Blockly.Pen['gdimage2'] = function(block) {
  var value_x1 = Blockly.Pen.valueToCode(block, 'x1', Blockly.Pen.ORDER_ATOMIC);
  var value_y1 = Blockly.Pen.valueToCode(block, 'y1', Blockly.Pen.ORDER_ATOMIC);
  var value_height = Blockly.Pen.valueToCode(block, 'height', Blockly.Pen.ORDER_ATOMIC);
  var value_width = Blockly.Pen.valueToCode(block, 'width', Blockly.Pen.ORDER_ATOMIC);
  var value_name = Blockly.Pen.valueToCode(block, 'NAME', Blockly.Pen.ORDER_ATOMIC);
  // TODO: Assemble Pen into code variable.
  value_x1 = value_x1.substr(1);
  value_x1 = value_x1.substr(0,value_x1.length-1);
  value_y1 = value_y1.substr(1);
  value_y1 = value_y1.substr(0,value_y1.length-1);
  value_height = value_height.substr(1);
  value_height = value_height.substr(0,value_height.length-1);
  value_width = value_width.substr(1);
  value_width = value_width.substr(0,value_width.length-1);
  value_img = value_img.substr(1);
  value_img = value_img.substr(0,value_img.length-1);
  var code = 'gDrawImage(' + value_img + ', ' + value_x1 + ', ' + value_y1 + ', ' + value_height + ', ' + value_width + ')\n';
  return code;
};
