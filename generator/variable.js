Blockly.Pen['declare_variable'] = function(block) {
  var datatype = block.getFieldValue('DATATYPE');
  var variable = Blockly.Pen.valueToCode(block, 'VARIABLE', Blockly.Pen.ORDER_ATOMIC);
  var code = datatype + ' ' + variable + '\n';
  return code;
};

Blockly.Pen['declare_array1'] = function(block) {
  var datatype = block.getFieldValue('DATATYPE');
  var variable = Blockly.Pen.valueToCode(block, 'VARIABLE', Blockly.Pen.ORDER_ATOMIC);
  var size1 = block.getFieldValue('SIZE1');
  var code = datatype + ' ' + variable + '[' + size1 + ']\n';
  return code;
};

Blockly.Pen['declare_array2'] = function(block) {
  var datatype = block.getFieldValue('DATATYPE');
  var variable = Blockly.Pen.valueToCode(block, 'VARIABLE', Blockly.Pen.ORDER_ATOMIC);
  var size1 = block.getFieldValue('SIZE1');
  var size2 = block.getFieldValue('SIZE2');
  var code = datatype + ' ' + variable + '[' + size1 + ',' + size2 + ']\n';
  return code;
};

Blockly.Pen['assign'] = function(block) {
  var variable = Blockly.Pen.valueToCode(block, 'VARIABLE', Blockly.Pen.ORDER_ATOMIC);
  var value = Blockly.Pen.valueToCode(block, 'VALUE', Blockly.Pen.ORDER_ATOMIC);
  var code = variable + ' ← ' + value + '\n';
  return code;
};

Blockly.Pen['variable'] = function(block) {
  var variable = block.getFieldValue('VARIABLE');
  var code = variable;
  return [code, Blockly.Pen.ORDER_ATOMIC];
};

Blockly.Pen['array1'] = function(block) {
  var variable = Blockly.Pen.valueToCode(block, 'VARIABLE', Blockly.Pen.ORDER_ATOMIC);
  var index1 = Blockly.Pen.valueToCode(block, 'INDEX1', Blockly.Pen.ORDER_ATOMIC);
  var code = variable + '[' + index1 + ']';
  return [code, Blockly.Pen.ORDER_ATOMIC];
};

Blockly.Pen['array2'] = function(block) {
  var variable = Blockly.Pen.valueToCode(block, 'VARIABLE', Blockly.Pen.ORDER_ATOMIC);
  var index1 = Blockly.Pen.valueToCode(block, 'INDEX1', Blockly.Pen.ORDER_ATOMIC);
  var index2 = Blockly.Pen.valueToCode(block, 'INDEX2', Blockly.Pen.ORDER_ATOMIC);
  var code = variable + '[' + index1 + ',' + index2 + ']';
  return [code, Blockly.Pen.ORDER_ATOMIC];
};

/*
Blockly.Pen['variable_declare'] = function(block) {
  var type = block.getFieldValue('TYPE');
  var variable = Blockly.Pen.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  var code = type + ' ' + variable + '\n';
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
*/

Blockly.Pen['incDec'] = function(block) {
  var variable = Blockly.Pen.valueToCode(block, 'VARIABLE', Blockly.Pen.ORDER_ATOMIC);
  var value1 = Blockly.Pen.valueToCode(block, 'VALUE1', Blockly.Pen.ORDER_ATOMIC);
  var value2 = block.getFieldValue('VALUE2');
  var code = variable + ' ← ' +
    variable + ' ' + (value2 === '増やす' ? '+' : '-') + ' ' +
    value1 + '\n';
  return code;
};
