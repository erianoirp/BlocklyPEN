//WaPENで使用できる
Blockly.Pen['calculation'] = function(block) {
  var value_val1 = Blockly.Pen.valueToCode(block, 'val1', Blockly.Pen.ORDER_ATOMIC);
  var dropdown_calculation = block.getFieldValue('calculation');
  var value_val2 = Blockly.Pen.valueToCode(block, 'val2', Blockly.Pen.ORDER_ATOMIC);
  // 括弧を取り除く
  value_val1 = value_val1.substr(1);
  value_val1 = value_val1.substr(0,value_val1.length-1);
  value_val2 = value_val2.substr(1);
  value_val2 = value_val2.substr(0,value_val2.length-1);
  // TODO: Assemble Pen into code variable.
  var code = value_val1 + ' ' +  dropdown_calculation + ' ' + value_val2;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Pen.ORDER_NONE];
  // return code;
};

Blockly.Pen['assign'] = function(block) {
  let to = Blockly.Pen.valueToCode(block, 'to', Blockly.Pen.ORDER_ATOMIC);
  // 括弧を取り除く
  /*
  to = to.substr(1);
  to = to.substr(0, to.length-1);
  */
  let from = Blockly.Pen.valueToCode(block, 'from', Blockly.Pen.ORDER_ATOMIC);
  from = from.substr(1);
  from = from.substr(0, from.length-1);
  const code = to + ' ← ' + from + '\n';
  return code;
};

Blockly.Pen['random'] = function(block) {
  var value_val = Blockly.Pen.valueToCode(block, 'val', Blockly.Pen.ORDER_ATOMIC);
  // 括弧を取り除く
  value_val = value_val.substr(1);
  value_val = value_val.substr(0,value_val.length-1);
  // TODO: Assemble Pen into code variable.
  var code = 'random(' + value_val +  ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Pen.ORDER_NONE];
};

//-------------------------------------------------------------------------------------

//未使用
Blockly.Pen['decimal'] = function(block) {
  var value_val = Blockly.Pen.valueToCode(block, 'val', Blockly.Pen.ORDER_ATOMIC);
  var dropdown_decimal = block.getFieldValue('decimal');
  // 括弧を取り除く
  value_val = value_val.substr(1);
  value_val = value_val.substr(0,value_val.length-1);
  // TODO: Assemble Pen into code variable.
  var code = dropdown_decimal + '(' + value_val + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Pen.ORDER_NONE];
};

Blockly.Pen['trigonometric'] = function(block) {
  var value_val = Blockly.Pen.valueToCode(block, 'val', Blockly.Pen.ORDER_ATOMIC);
  var dropdown_trigonometric = block.getFieldValue('trigonometric');
  // 括弧を取り除く
  value_val = value_val.substr(1);
  value_val = value_val.substr(0,value_val.length-1);
  // TODO: Assemble Pen into code variable.
  var code = dropdown_trigonometric + '(' + value_val +  ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Pen.ORDER_NONE];
};

Blockly.Pen['other'] = function(block) {
  var value_val = Blockly.Pen.valueToCode(block, 'val', Blockly.Pen.ORDER_ATOMIC);
  var dropdown_other = block.getFieldValue('other');
  // 括弧を取り除く
  value_val = value_val.substr(1);
  value_val = value_val.substr(0,value_val.length-1);
  // TODO: Assemble Pen into code variable.
  var code = dropdown_other + '(' + value_val +  ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Pen.ORDER_NONE];
};
