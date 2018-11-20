Blockly.Pen['declare_variable'] = function(block) {
  const datatype = block.getFieldValue('datatype');
  const name = block.getFieldValue('name');
  const code = datatype + ' ' + name + '\n';
  return code;
};

Blockly.Pen['declare_variable2'] = function(block) {
  const datatype = block.getFieldValue('datatype');
  const name = Blockly.Pen.valueToCode(block, 'name', Blockly.Pen.ORDER_ATOMIC);
  const code = datatype + ' ' + name + '\n';
  return code;
};

//WaPENで使用できる
Blockly.Pen['int'] = function(block) {
  var text_val = block.getFieldValue('val');
  // TODO: Assemble Pen into code variable.
  var code = '整数 ' + text_val + '\n';
  return code;
};

Blockly.Pen['real'] = function(block) {
  var text_val = block.getFieldValue('val');
  // TODO: Assemble Pen into code variable.
  var code = '実数 ' + text_val + '\n';
  return code;
};

Blockly.Pen['string'] = function(block) {
  var text_val = block.getFieldValue('val');
  // TODO: Assemble Pen into code variable.
  var code = '文字列 ' + text_val + '\n';
  return code;
};
