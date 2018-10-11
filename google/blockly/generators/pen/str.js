//WaPENで使用できる
Blockly.Pen['str'] = function(block) {
  var text_str = block.getFieldValue('str');
  // TODO: Assemble Pen into code variable.
  var code = '"' + text_str + '"';
  return [code, Blockly.Pen.ORDER_NONE];
  // return code;
};

//-------------------------------------------------------------------------------------

//未使用
Blockly.Pen['strsubstitution'] = function(block) {
  var value_val = Blockly.Pen.valueToCode(block, 'val', Blockly.Pen.ORDER_ATOMIC);
  var text_str = block.getFieldValue('str');
  // TODO: Assemble Pen into code variable.
  value_val = value_val.substr(1);
  value_val = value_val.substr(0,value_val.length-1);
  var code = value_val + ' ← "' + text_str + '"\n';
  return [code, Blockly.Pen.ORDER_NONE];
};

Blockly.Pen['str1'] = function(block) {
  var value_str = Blockly.Pen.valueToCode(block, 'str', Blockly.Pen.ORDER_ATOMIC);
  var dropdown_drop = block.getFieldValue('drop');
  // TODO: Assemble Pen into code variable.
  value_str = value_str.substr(1);
  value_str = value_str.substr(0,value_str.length-1);
  var code = dropdown_drop + '(' + value_str + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Pen.ORDER_NONE];
};

Blockly.Pen['int2str'] = function(block) {
  var value_str = Blockly.Pen.valueToCode(block, 'str', Blockly.Pen.ORDER_ATOMIC);
  // TODO: Assemble Pen into code variable.
  value_str = value_str.substr(1);
  value_str = value_str.substr(0,value_str.length-1);
  var code = 'int2str(' + value_str + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Pen.ORDER_NONE];
};

Blockly.Pen['compare'] = function(block) {
  var value_str1 = Blockly.Pen.valueToCode(block, 'str1', Blockly.Pen.ORDER_ATOMIC);
  var value_str2 = Blockly.Pen.valueToCode(block, 'str2', Blockly.Pen.ORDER_ATOMIC);
  // TODO: Assemble Pen into code variable.
  value_str1 = value_str1.substr(1);
  value_str1 = value_str1.substr(0,value_str1.length-1);
  value_str2 = value_str2.substr(1);
  value_str2 = value_str2.substr(0,value_str2.length-1);
  var code = 'compare(' + value_str1 + '，' + value_str2 + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Pen.ORDER_NONE];
};

Blockly.Pen['append'] = function(block) {
  var value_str1 = Blockly.Pen.valueToCode(block, 'str1', Blockly.Pen.ORDER_ATOMIC);
  var value_str2 = Blockly.Pen.valueToCode(block, 'str2', Blockly.Pen.ORDER_ATOMIC);
  // TODO: Assemble Pen into code variable.
  value_str1 = value_str1.substr(1);
  value_str1 = value_str1.substr(0,value_str1.length-1);
  value_str2 = value_str2.substr(1);
  value_str2 = value_str2.substr(0,value_str2.length-1);
  var code = 'append(' + value_str1 + '，' + value_str2 + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Pen.ORDER_NONE];
};

Blockly.Pen['substring'] = function(block) {
  var value_str = Blockly.Pen.valueToCode(block, 'str', Blockly.Pen.ORDER_ATOMIC);
  var value_val = Blockly.Pen.valueToCode(block, 'val', Blockly.Pen.ORDER_ATOMIC);
  // TODO: Assemble Pen into code variable.
  value_str = value_str.substr(1);
  value_str = value_str.substr(0,value_str.length-1);
  value_val = value_val.substr(1);
  value_val = value_val.substr(0,value_val.length-1);
  var code = 'substring(' + value_str + '，' + value_val + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Pen.ORDER_NONE];
};

Blockly.Pen['substring2'] = function(block) {
  var value_str = Blockly.Pen.valueToCode(block, 'str', Blockly.Pen.ORDER_ATOMIC);
  var value_val1 = Blockly.Pen.valueToCode(block, 'val1', Blockly.Pen.ORDER_ATOMIC);
  var value_val2 = Blockly.Pen.valueToCode(block, 'val2', Blockly.Pen.ORDER_ATOMIC);
  // TODO: Assemble Pen into code variable.
  value_str = value_str.substr(1);
  value_str = value_str.substr(0,value_str.length-1);
  value_val1 = value_val1.substr(1);
  value_val1 = value_val1.substr(0,value_val1.length-1);
  value_val2 = value_val2.substr(1);
  value_val2 = value_val2.substr(0,value_val2.length-1);
  var code = 'substring2(' + value_str + '，' + value_val1 + '，' + value_val2 + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Pen.ORDER_NONE];
};

Blockly.Pen['insert'] = function(block) {
  var value_str1 = Blockly.Pen.valueToCode(block, 'str1', Blockly.Pen.ORDER_ATOMIC);
  var value_val = Blockly.Pen.valueToCode(block, 'val', Blockly.Pen.ORDER_ATOMIC);
  var value_str2 = Blockly.Pen.valueToCode(block, 'str2', Blockly.Pen.ORDER_ATOMIC);
  // TODO: Assemble Pen into code variable.
  value_str1 = value_str1.substr(1);
  value_str1 = value_str1.substr(0,value_str1.length-1);
  value_str2 = value_str2.substr(1);
  value_str2 = value_str2.substr(0,value_str2.length-1);
  value_val = value_val.substr(1);
  value_val = value_val.substr(0,value_val.length-1);
  var code = 'insert(' + value_str1 + '，' + value_val + '，' + value_str2 + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Pen.ORDER_NONE];
};

Blockly.Pen['replace'] = function(block) {
  var value_str1 = Blockly.Pen.valueToCode(block, 'str1', Blockly.Pen.ORDER_ATOMIC);
  var value_val1 = Blockly.Pen.valueToCode(block, 'val1', Blockly.Pen.ORDER_ATOMIC);
  var value_val2 = Blockly.Pen.valueToCode(block, 'val2', Blockly.Pen.ORDER_ATOMIC);
  var value_str2 = Blockly.Pen.valueToCode(block, 'str2', Blockly.Pen.ORDER_ATOMIC);
  // TODO: Assemble Pen into code variable.
  value_str1 = value_str1.substr(1);
  value_str1 = value_str1.substr(0,value_str1.length-1);
  value_str2 = value_str2.substr(1);
  value_str2 = value_str2.substr(0,value_str2.length-1);
  value_val1 = value_val1.substr(1);
  value_val1 = value_val1.substr(0,value_val1.length-1);
  value_val2 = value_val2.substr(1);
  value_val2 = value_val2.substr(0,value_val2.length-1);
  var code = 'replace(' + value_str1 + '，' + value_val1 + '，' + value_val2 + '，' + value_str2 + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Pen.ORDER_NONE];
};

Blockly.Pen['extract'] = function(block) {
  var value_str1 = Blockly.Pen.valueToCode(block, 'str1', Blockly.Pen.ORDER_ATOMIC);
  var value_val = Blockly.Pen.valueToCode(block, 'val', Blockly.Pen.ORDER_ATOMIC);
  var value_str2 = Blockly.Pen.valueToCode(block, 'str2', Blockly.Pen.ORDER_ATOMIC);
  // TODO: Assemble Pen into code variable.
  value_str1 = value_str1.substr(1);
  value_str1 = value_str1.substr(0,value_str1.length-1);
  value_str2 = value_str2.substr(1);
  value_str2 = value_str2.substr(0,value_str2.length-1);
  value_val = value_val.substr(1);
  value_val = value_val.substr(0,value_val.length-1);
  var code = 'extract(' + value_str1 + '，' + value_str2 + '，' + value_val + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Pen.ORDER_NONE];
};
