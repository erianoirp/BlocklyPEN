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
