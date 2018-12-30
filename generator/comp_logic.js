Blockly.Pen['conditions'] = function(block) {
  var value_argument1 = Blockly.Pen.valueToCode(block, 'argument1', Blockly.Pen.ORDER_ATOMIC);
  var dropdown_comparisonoperator = block.getFieldValue('comparisonOperator');
  var value_argument2 = Blockly.Pen.valueToCode(block, 'argument2', Blockly.Pen.ORDER_ATOMIC);
  var code = value_argument1 + " " + dropdown_comparisonoperator + " " + value_argument2;
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
