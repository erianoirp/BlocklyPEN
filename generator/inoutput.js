Blockly.Pen['input'] = function(block) {
  var variable = Blockly.Pen.valueToCode(block, 'variable', Blockly.Pen.ORDER_ATOMIC);
  var code = variable + ' を入力する\n';
  return code;
};

Blockly.Pen['print_string'] = function(block) {
  var string = block.getFieldValue('VALUE1');
  var doNewline = block.getFieldValue('NEWLINE');
  var code = '「' + string + '」を' + ((doNewline === 'true') ? '' : '改行無しで') + '表示する\n';
  return code;
};

Blockly.Pen['print_v'] = function(block) {
  var value = Blockly.Pen.valueToCode(block, 'VALUE1', Blockly.Pen.ORDER_ATOMIC);
  var doNewline = block.getFieldValue('NEWLINE');
  var code = value + ' を' + ((doNewline === 'true') ? '' : '改行無しで') + '表示する\n';
  return code;
};

Blockly.Pen['newline'] = function(block) {
  var code = '「」を表示する\n';
  return code;
};

