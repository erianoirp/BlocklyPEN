Blockly.Pen['comparison'] = function(block) {
  var value1 = Blockly.Pen.valueToCode(block, 'VALUE1', Blockly.Pen.ORDER_ATOMIC);
  var operator = block.getFieldValue('OPERATOR');
  var value2 = Blockly.Pen.valueToCode(block, 'VALUE2', Blockly.Pen.ORDER_ATOMIC);
  var code = value1 + ' ' + operator + ' ' + value2;
  return [code, Blockly.Pen.ORDER_ATOMIC];
};

Blockly.Pen['and'] = function(block) {
  var value1 = Blockly.Pen.valueToCode(block, 'VALUE1', Blockly.Pen.ORDER_ATOMIC);
  var value2 = Blockly.Pen.valueToCode(block, 'VALUE2', Blockly.Pen.ORDER_ATOMIC);
  var code = value1 + ' かつ ' + value2;
  return [code, Blockly.Pen.ORDER_ATOMIC];
};

Blockly.Pen['or'] = function(block) {
  var value1 = Blockly.Pen.valueToCode(block, 'VALUE1', Blockly.Pen.ORDER_ATOMIC);
  var value2 = Blockly.Pen.valueToCode(block, 'VALUE2', Blockly.Pen.ORDER_ATOMIC);
  var code = value1 + ' または ' + value2;
  return [code, Blockly.Pen.ORDER_ATOMIC];
};

Blockly.Pen['not'] = function(block) {
  var value1 = Blockly.Pen.valueToCode(block, 'VALUE1', Blockly.Pen.ORDER_ATOMIC);
  var code = value1 + ' でない';
  return [code, Blockly.Pen.ORDER_ATOMIC];
};

Blockly.Pen['even_odd'] = function(block) {
  var value = Blockly.Pen.valueToCode(block, 'VALUE1', Blockly.Pen.ORDER_ATOMIC);
  var isEvenOrOdd = block.getFieldValue('VALUE2');
  var code = '(' + value + ') % 2 = ' + (isEvenOrOdd === 'EVEN' ? 0 : 1);
  return [code, Blockly.Pen.ORDER_ATOMIC];
};
