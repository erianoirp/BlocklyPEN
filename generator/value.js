Blockly.Pen['integer'] = function(block) {
  const value = block.getFieldValue('value');
  const code = value;
  return [code, Blockly.Pen.ORDER_ATOMIC];
};

Blockly.Pen['float'] = function(block) {
  const integerValue = block.getFieldValue('integerValue');
  const fractionalValue = block.getFieldValue('fractionalValue');
  const code = integerValue + '.' + fractionalValue;
  return [code, Blockly.Pen.ORDER_ATOMIC];
};

Blockly.Pen['string'] = function(block) {
  const value = block.getFieldValue('value');
  const code = "「" + value + "」";
  return [code, Blockly.Pen.ORDER_ATOMIC];
};

Blockly.Pen['boolean'] = function(block) {
  const value = block.getFieldValue('value');
  const code = value;
  return [code, Blockly.Pen.ORDER_ATOMIC];
};
