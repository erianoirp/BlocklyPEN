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

Blockly.Pen['declare_array'] = function(block) {
  var datatype = block.getFieldValue('datatype');
  var name = Blockly.Pen.valueToCode(block, 'NAME', Blockly.Pen.ORDER_ATOMIC);
  var size = block.getFieldValue('SIZE');
  var code = datatype + ' ' + name + '[' + size + ']\n';
  return code;
};

Blockly.Pen['assign'] = function(block) {
  const to = Blockly.Pen.valueToCode(block, 'to', Blockly.Pen.ORDER_ATOMIC);
  const from = Blockly.Pen.valueToCode(block, 'from', Blockly.Pen.ORDER_ATOMIC);
  const code = to + ' ← ' + from + '\n';
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

Blockly.Pen['array'] = function(block) {
  var name = Blockly.Pen.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  var index = Blockly.Pen.valueToCode(block, 'INDEX', Blockly.Pen.ORDER_ATOMIC);
  var code = name + '[' + index + ']';
  return [code, Blockly.Pen.ORDER_ATOMIC];
};
