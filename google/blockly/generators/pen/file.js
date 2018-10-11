//未使用
Blockly.Pen['fopen'] = function(block) {
  var value_file = Blockly.Pen.valueToCode(block, 'file', Blockly.Pen.ORDER_ATOMIC);
  var dropdown_mode = block.getFieldValue('mode');
  // TODO: Assemble Pen into code variable.
  value_file = value_file.substr(1);
  value_file = value_file.substr(0,value_file.length-1);
  var code = dropdown_mode + value_file + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Pen.ORDER_NONE];
};

Blockly.Pen['fclose'] = function(block) {
  var value_filenum = Blockly.Pen.valueToCode(block, 'filenum', Blockly.Pen.ORDER_ATOMIC);
  // TODO: Assemble Pen into code variable.
  value_filenum = value_filenum.substr(1);
  value_filenum = value_filenum.substr(0,value_filenum.length-1);
  var code = 'close(' + value_filenum + ')\n';
  return code;
};

Blockly.Pen['fgstr'] = function(block) {
  var value_filenum = Blockly.Pen.valueToCode(block, 'filenum', Blockly.Pen.ORDER_ATOMIC);
  var value_num = Blockly.Pen.valueToCode(block, 'num', Blockly.Pen.ORDER_ATOMIC);
  // TODO: Assemble Pen into code variable.
  value_filenum = value_filenum.substr(1);
  value_filenum = value_filenum.substr(0,value_filenum.length-1);
  value_num = value_num.substr(1);
  value_num = value_num.substr(0,value_num.length-1);
  var code = 'getstr(' + value_filenum + '，' + value_num + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Pen.ORDER_NONE];
};

Blockly.Pen['fgline'] = function(block) {
  var value_filenum = Blockly.Pen.valueToCode(block, 'filenum', Blockly.Pen.ORDER_ATOMIC);
  // TODO: Assemble Pen into code variable.
  value_filenum = value_filenum.substr(1);
  value_filenum = value_filenum.substr(0,value_filenum.length-1);
  var code = 'getline(' + value_filenum + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Pen.ORDER_NONE];
};

Blockly.Pen['fput'] = function(block) {
  var value_filenum = Blockly.Pen.valueToCode(block, 'filenum', Blockly.Pen.ORDER_ATOMIC);
  var value_str = Blockly.Pen.valueToCode(block, 'str', Blockly.Pen.ORDER_ATOMIC);
  var dropdown_put = block.getFieldValue('put');
  // TODO: Assemble Pen into code variable.
  value_filenum = value_filenum.substr(1);
  value_filenum = value_filenum.substr(0,value_filenum.length-1);
  value_str = value_str.substr(1);
  value_str = value_str.substr(0,value_str.length-1);
  var code = dropdown_put + value_filenum + '，' + value_str + ')\n';
  return code;
};

Blockly.Pen['fisfile'] = function(block) {
  var value_file = Blockly.Pen.valueToCode(block, 'file', Blockly.Pen.ORDER_ATOMIC);
  // TODO: Assemble Pen into code variable.
  value_file = value_file.substr(1);
  value_file = value_file.substr(0,value_file.length-1);
  var code = 'isfile(' + value_file + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Pen.ORDER_NONE];
};

Blockly.Pen['frename'] = function(block) {
  var value_file = Blockly.Pen.valueToCode(block, 'file', Blockly.Pen.ORDER_ATOMIC);
  var value_file2 = Blockly.Pen.valueToCode(block, 'file2', Blockly.Pen.ORDER_ATOMIC);
  // TODO: Assemble Pen into code variable.
  value_file = value_file.substr(1);
  value_file = value_file.substr(0,value_file.length-1);
  value_file2 = value_file2.substr(1);
  value_file2 = value_file2.substr(0,value_file2.length-1);
  var code = 'rename(' + value_file + '，' + value_file2 + ')\n';
  return code;
};

Blockly.Pen['fflush'] = function(block) {
  var value_filenum = Blockly.Pen.valueToCode(block, 'filenum', Blockly.Pen.ORDER_ATOMIC);
  // TODO: Assemble Pen into code variable.
  value_filenum = value_filenum.substr(1);
  value_filenum = value_filenum.substr(0,value_filenum.length-1);
  var code = 'flush(' + value_filenum + ')\n';
  return code;
};

Blockly.Pen['fremove'] = function(block) {
  var value_file = Blockly.Pen.valueToCode(block, 'file', Blockly.Pen.ORDER_ATOMIC);
  // TODO: Assemble Pen into code variable.
  value_file = value_file.substr(1);
  value_file = value_file.substr(0,value_file.length-1);
  var code = 'remove(' + value_file + ')\n';
  return code;
};
