//WaPENで使用できる
//gscolor=gSetLineColor+gSetFillColor
Blockly.Pen['gscolor'] = function(block) {
  var dropdown_color = block.getFieldValue('color');
  var value_r = Blockly.Pen.valueToCode(block, 'r', Blockly.Pen.ORDER_ATOMIC);
  var value_g = Blockly.Pen.valueToCode(block, 'g', Blockly.Pen.ORDER_ATOMIC);
  var value_b = Blockly.Pen.valueToCode(block, 'b', Blockly.Pen.ORDER_ATOMIC);
  // TODO: Assemble Pen into code variable.
  value_r = value_r.substr(1);
  value_r = value_r.substr(0,value_r.length-1);
  value_g = value_g.substr(1);
  value_g = value_g.substr(0,value_g.length-1);
  value_b = value_b.substr(1);
  value_b = value_b.substr(0,value_b.length-1);
  var code = dropdown_color + value_r + ',' + value_g + ',' + value_b + ')\n';
  return code;
};

//gsstyle=gSetLineWidth+gSetFontSize
Blockly.Pen['gsstyle'] = function(block) {
  var dropdown_style = block.getFieldValue('style');
  var value_style = Blockly.Pen.valueToCode(block, 'style', Blockly.Pen.ORDER_ATOMIC);
  // TODO: Assemble Pen into code variable.
  value_style = value_style.substr(1);
  value_style = value_style.substr(0,value_style.length-1);
  var code = dropdown_style + value_style + ')\n';
  return code;
};

//-------------------------------------------------------------------------------------

//未使用
Blockly.Pen['gslinecolor'] = function(block) {
  var value_r = Blockly.Pen.valueToCode(block, 'r', Blockly.Pen.ORDER_ATOMIC);
  var value_g = Blockly.Pen.valueToCode(block, 'g', Blockly.Pen.ORDER_ATOMIC);
  var value_b = Blockly.Pen.valueToCode(block, 'b', Blockly.Pen.ORDER_ATOMIC);
  // TODO: Assemble Pen into code variable.
  value_r = value_r.substr(1);
  value_r = value_r.substr(0,value_r.length-1);
  value_g = value_g.substr(1);
  value_g = value_g.substr(0,value_g.length-1);
  value_b = value_b.substr(1);
  value_b = value_b.substr(0,value_b.length-1);
  var code = 'gSetLineColor(' + value_r + ',' + value_g + ',' + value_b + ')\n';
  return code;
};

Blockly.Pen['gsfillcolor'] = function(block) {
  var value_r = Blockly.Pen.valueToCode(block, 'r', Blockly.Pen.ORDER_ATOMIC);
  var value_g = Blockly.Pen.valueToCode(block, 'g', Blockly.Pen.ORDER_ATOMIC);
  var value_b = Blockly.Pen.valueToCode(block, 'b', Blockly.Pen.ORDER_ATOMIC);
  // TODO: Assemble Pen into code variable.
  value_r = value_r.substr(1);
  value_r = value_r.substr(0,value_r.length-1);
  value_g = value_g.substr(1);
  value_g = value_g.substr(0,value_g.length-1);
  value_b = value_b.substr(1);
  value_b = value_b.substr(0,value_b.length-1);
  var code = 'gSetFillColor(' + value_r + '，' + value_g + '，' + value_b + ')\n';
  return code;
};

Blockly.Pen['gslineshape'] = function(block) {
  var value_type = Blockly.Pen.valueToCode(block, 'type', Blockly.Pen.ORDER_ATOMIC);
  // TODO: Assemble Pen into code variable.
  value_type = value_type.substr(1);
  value_type = value_type.substr(0,value_type.length-1);
  var code = 'gSetLineShape(' + value_type + ')\n';
  return code;
};

Blockly.Pen['gslinewidth'] = function(block) {
  var value_width = Blockly.Pen.valueToCode(block, 'width', Blockly.Pen.ORDER_ATOMIC);
  // TODO: Assemble Pen into code variable.
  value_width = value_width.substr(1);
  value_width = value_width.substr(0,value_width.length-1);
  var code = 'gSetLineWidth(' + value_width + ')\n';
  return code;
};

Blockly.Pen['gsdotshape'] = function(block) {
  var value_type = Blockly.Pen.valueToCode(block, 'type', Blockly.Pen.ORDER_ATOMIC);
  // TODO: Assemble Pen into code variable.
  value_type = value_type.substr(1);
  value_type = value_type.substr(0,value_type.length-1);
  var code = 'gSetDotShape(' + value_type + ')\n';
  return code;
};

Blockly.Pen['gstextcolor'] = function(block) {
  var value_r = Blockly.Pen.valueToCode(block, 'r', Blockly.Pen.ORDER_ATOMIC);
  var value_g = Blockly.Pen.valueToCode(block, 'g', Blockly.Pen.ORDER_ATOMIC);
  var value_b = Blockly.Pen.valueToCode(block, 'b', Blockly.Pen.ORDER_ATOMIC);
  // TODO: Assemble Pen into code variable.
  value_r = value_r.substr(1);
  value_r = value_r.substr(0,value_r.length-1);
  value_g = value_g.substr(1);
  value_g = value_g.substr(0,value_g.length-1);
  value_b = value_b.substr(1);
  value_b = value_b.substr(0,value_b.length-1);
  var code = 'gSetTextColor(' + value_r + '，' + value_g + '，' + value_b + ')\n';
  return code;
};

Blockly.Pen['gsfont'] = function(block) {
  var value_type = Blockly.Pen.valueToCode(block, 'type', Blockly.Pen.ORDER_ATOMIC);
  // TODO: Assemble Pen into code variable.
  value_type = value_type.substr(1);
  value_type = value_type.substr(0,value_type.length-1);
  var code = 'gSetFont(' + value_type + ')\n';
  return code;
};

Blockly.Pen['gsfonttype'] = function(block) {
  var value_type = Blockly.Pen.valueToCode(block, 'type', Blockly.Pen.ORDER_ATOMIC);
  // TODO: Assemble Pen into code variable.
  value_type = value_type.substr(1);
  value_type = value_type.substr(0,value_type.length-1);
  var code = 'gSetFontType(' + value_type + ')\n';
  return code;
};

Blockly.Pen['gsfontsize'] = function(block) {
  var value_type = Blockly.Pen.valueToCode(block, 'type', Blockly.Pen.ORDER_ATOMIC);
  // TODO: Assemble Pen into code variable.
  value_type = value_type.substr(1);
  value_type = value_type.substr(0,value_type.length-1);
  var code = 'gSetFontSize(' + value_type + ')\n';
  return code;
};

Blockly.Pen['gsarrowtype'] = function(block) {
  var value_type = Blockly.Pen.valueToCode(block, 'type', Blockly.Pen.ORDER_ATOMIC);
  // TODO: Assemble Pen into code variable.
  value_type = value_type.substr(1);
  value_type = value_type.substr(0,value_type.length-1);
  var code = 'gSetArrowType(' + value_type + ')\n';
  return code;
};

Blockly.Pen['gsarrowdir'] = function(block) {
  var value_edge = Blockly.Pen.valueToCode(block, 'edge', Blockly.Pen.ORDER_ATOMIC);
  // TODO: Assemble Pen into code variable.
  value_edge = value_edge.substr(1);
  value_edge = value_edge.substr(0,value_edge.length-1);
  var code = 'gSetArrowDir(' + value_edge + ')\n';
  return code;
};

Blockly.Pen['gsorigin'] = function(block) {
  var value_x = Blockly.Pen.valueToCode(block, 'x', Blockly.Pen.ORDER_ATOMIC);
  var value_y = Blockly.Pen.valueToCode(block, 'y', Blockly.Pen.ORDER_ATOMIC);
  // TODO: Assemble Pen into code variable.
  bra(value_x);
  bra(value_y);
  value_x = value_x.substr(1);
  value_x = value_x.substr(0,value_x.length-1);
  value_y = value_y.substr(1);
  value_y = value_y.substr(0,value_y.length-1);
  var code = 'gSetOrigin(' + value_x + '，' + value_y + ')\n';
  return code;
};

Blockly.Pen['gsetmap'] = function(block) {
  var value_x1 = Blockly.Pen.valueToCode(block, 'x1', Blockly.Pen.ORDER_ATOMIC);
  var value_x2 = Blockly.Pen.valueToCode(block, 'x2', Blockly.Pen.ORDER_ATOMIC);
  var value_y1 = Blockly.Pen.valueToCode(block, 'y1', Blockly.Pen.ORDER_ATOMIC);
  var value_y2 = Blockly.Pen.valueToCode(block, 'y2', Blockly.Pen.ORDER_ATOMIC);
  // TODO: Assemble Pen into code variable.
  value_x1 = value_x1.substr(1);
  value_x1 = value_x1.substr(0,value_x1.length-1);
  value_x2 = value_x2.substr(1);
  value_x2 = value_x2.substr(0,value_x2.length-1);
  value_y1 = value_y1.substr(1);
  value_y1 = value_y1.substr(0,value_y1.length-1);
  value_y2 = value_y2.substr(1);
  value_y2 = value_y2.substr(0,value_y2.length-1);
  var code = 'gSetMap(' + value_x1 + '，' + value_x2 + '，' + value_y1 + '，' + value_y2 + ')\n';
  return code;
};

Blockly.Pen['gsfontts'] = function(block) {
  var dropdown_font = block.getFieldValue('font');
  var value_font = Blockly.Pen.valueToCode(block, 'font', Blockly.Pen.ORDER_ATOMIC);
  // TODO: Assemble Pen into code variable.
  value_font = value_font.substr(1);
  value_font = value_font.substr(0,value_font.length-1);
  var code = dropdown_font + value_font + ')\n';
  return code;
};

Blockly.Pen['gsarrow'] = function(block) {
  var dropdown_arrow = block.getFieldValue('arrow');
  var value_type = Blockly.Pen.valueToCode(block, 'type', Blockly.Pen.ORDER_ATOMIC);
  // TODO: Assemble Pen into code variable.
  value_type = value_type.substr(1);
  value_type = value_type.substr(0,value_type.length-1);
  var code = dropdown_arrow + value_type + ')\n';
  return code;
};
