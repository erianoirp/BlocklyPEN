Blockly.Pen['input'] = function(block) {
  const variable = Blockly.Pen.valueToCode(block, 'variable', Blockly.Pen.ORDER_ATOMIC);
  const code = variable + ' を入力する\n';
  return code;
};

Blockly.Pen['print_string'] = function(block) {
  const string = block.getFieldValue('string');
  const doNewline = block.getFieldValue('newline');
  let code;
  if (doNewline === 'true') {
    code = '「' + string + '」を表示する\n';
  } else {
    code = '「' + string + '」を改行無しで表示する\n';
  }
  return code;
};

// "v" means variable or value.
Blockly.Pen['print_v'] = function(block) {
  const v = Blockly.Pen.valueToCode(block, 'v', Blockly.Pen.ORDER_ATOMIC);
  const doNewline = block.getFieldValue('newline');
  let code;
  if (doNewline === 'true') {
    code = v + ' を表示する\n';
  } else {
    code = v + ' を改行無しで表示する\n';
  }
  return code;
};

Blockly.Pen['newline'] = function(block) {
  var code = '「」を表示する\n';
  return code;
};

