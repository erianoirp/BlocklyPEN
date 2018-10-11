//WaPEN使用できる
Blockly.Pen['num'] = function(block) {
  var text_num = block.getFieldValue('num');
  // TODO: Assemble Pen into code variable.
  var code = text_num;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Pen.ORDER_NONE];
};

Blockly.Pen['cnum'] = function(block) {
  var text_cnum = block.getFieldValue('cnum');
  // TODO: Assemble Pen into code variable.
  var code = text_cnum;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Pen.ORDER_NONE];
};

Blockly.Pen['val'] = function(block) {
  var text_val = block.getFieldValue('val');
  // TODO: Assemble Pen into code variable.
  var code = text_val;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Pen.ORDER_NONE];
};
