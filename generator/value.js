Blockly.Pen['integer'] = function(block) {
  var value = block.getFieldValue('value');
  var code = value;
  return [code, Blockly.Pen.ORDER_ATOMIC];
};

Blockly.Pen['float'] = function(block) {
  var integerValue = block.getFieldValue('integerValue');
  var fractionalValue = block.getFieldValue('fractionalValue');
  var code = integerValue + '.' + fractionalValue;
  return [code, Blockly.Pen.ORDER_ATOMIC];
};

Blockly.Pen['string'] = function(block) {
  var value = block.getFieldValue('value');
  var code = '「' + value + '」';
  return [code, Blockly.Pen.ORDER_ATOMIC];
};

Blockly.Pen['value_2_string'] = function(block) {
  var value = Blockly.Pen.valueToCode(block, 'value', Blockly.Pen.ORDER_ATOMIC);
  var code = '「' + value + '」';
  return [code, Blockly.Pen.ORDER_ATOMIC];
};

Blockly.Pen['boolean'] = function(block) {
  var value = block.getFieldValue('value');
  var code = value;
  return [code, Blockly.Pen.ORDER_ATOMIC];
};

Blockly.Pen['natural_number'] = function(block) {
  var value = block.getFieldValue('VALUE1');
  var code = value;
  return [code, Blockly.Pen.ORDER_ATOMIC];
};

Blockly.Pen['nonnegative_integer'] = function(block) {
  var value = block.getFieldValue('VALUE1');
  var code = value;
  return [code, Blockly.Pen.ORDER_ATOMIC];
};

Blockly.Pen['PI'] = function(block) {
  var code = '3.141592653589793';
  return [code, Blockly.Pen.ORDER_ATOMIC];
};

