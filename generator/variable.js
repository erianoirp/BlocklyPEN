/*
Blockly.Pen['declare_variable'] = function(block) {
  const datatype = block.getFieldValue('datatype');
  const name = block.getFieldValue('name');
  const code = datatype + ' ' + name + '\n';
  return code;
};
*/

Blockly.Pen['declare_variable'] = function(block) {
  const datatype = block.getFieldValue('datatype');
  const name = Blockly.Pen.valueToCode(block, 'name', Blockly.Pen.ORDER_ATOMIC);
  const code = datatype + ' ' + name + '\n';
  return code;
};

/*
Blockly.Pen['variable'] = function(block) {
  const name = block.getFieldValue('name');
  const code = name;
  return [code, Blockly.Pen.ORDER_NONE];
};
*/

Blockly.Pen['variable'] = function(block) {
  const name = Blockly.Pen.variableDB_.getName(block.getFieldValue('name'), Blockly.Variables.NAME_TYPE);
  const code = name;
  return [code, Blockly.Pen.ORDER_ATOMIC];
};
