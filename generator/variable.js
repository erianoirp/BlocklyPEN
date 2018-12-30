Blockly.Pen['variable_declare'] = function(block) {
  var type = block.getFieldValue('TYPE');
  var variable = Blockly.Pen.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  var code = type + ' ' + variable + '\n';
  return code;
};

Blockly.Pen['declare_array'] = function(block) {
  var datatype = block.getFieldValue('datatype');
  var name = Blockly.Pen.valueToCode(block, 'NAME', Blockly.Pen.ORDER_ATOMIC);
  var size = block.getFieldValue('SIZE');
  var code = datatype + ' ' + name + '[' + size + ']\n';
  return code;
};

Blockly.Pen['variable_get'] = function(block) {
  var variable = Blockly.Pen.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  var code = variable;
  return [code, Blockly.Pen.ORDER_ATOMIC];
};

Blockly.Pen['variable_set'] = function(block) {
  var variable = Blockly.Pen.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  var value = Blockly.Pen.valueToCode(block, 'VALUE', Blockly.Pen.ORDER_ATOMIC);
  var code = variable + ' ← ' + value + '\n';
  return code;
};

Blockly.Pen['array'] = function(block) {
  var name = Blockly.Pen.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  var index = Blockly.Pen.valueToCode(block, 'INDEX', Blockly.Pen.ORDER_ATOMIC);
  var code = name + '[' + index + ']';
  return [code, Blockly.Pen.ORDER_ATOMIC];
};
