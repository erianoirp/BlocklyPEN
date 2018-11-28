/*
Blockly.Pen['input'] = function(block) {
  var value_val = Blockly.Pen.valueToCode(block, 'val', Blockly.Pen.ORDER_ATOMIC);
  // TODO: Assemble Pen into code variable.
  value_val = value_val.substr(1);
  value_val = value_val.substr(0,value_val.length-1);
  var code = value_val + ' を入力する\n';
  return code;
};
*/

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
    code = v + 'を表示する\n';
  } else {
    code = v + 'を改行無しで表示する\n';
  }
  return code;
};

Blockly.Pen['output'] = function(block) {
  var text_val = block.getFieldValue('val');
  // TODO: Assemble Pen into code variable.
  var code ='「' + text_val + '」を表示する\n';
  return code;
};

Blockly.Pen['outputno'] = function(block) {
  var text_val = block.getFieldValue('val');
  // TODO: Assemble Pen into code variable.
  var code = '「' + text_val + '」を改行なしで表示する\n';
  return code;
};

Blockly.Pen['valoutput'] = function(block) {
  var value_val = Blockly.Pen.valueToCode(block, 'val', Blockly.Pen.ORDER_ATOMIC);
  /*
  // TODO: Assemble Pen into code variable.
  value_val = value_val.substr(1);
  value_val = value_val.substr(0,value_val.length-1);
  */
  var code = value_val + ' を表示する\n';
  return code;
};

Blockly.Pen['valoutputno'] = function(block) {
  var value_val = Blockly.Pen.valueToCode(block, 'val', Blockly.Pen.ORDER_ATOMIC);
  /*
  // TODO: Assemble Pen into code variable.
  value_val = value_val.substr(1);
  value_val = value_val.substr(0,value_val.length-1);
  */
  var code = value_val + ' を改行なしで表示する\n';
  return code;
};
