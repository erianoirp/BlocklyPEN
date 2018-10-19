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

Blockly.Pen['variable'] = function(block) {
  const name = block.getFieldValue('name');
  const code = name;
  return [code, Blockly.Pen.ORDER_NONE];
};
