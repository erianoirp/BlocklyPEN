//WaPENで使用できる
Blockly.Pen['while'] = function(block) {
  var value_conditions = Blockly.Pen.valueToCode(block, 'conditions', Blockly.Pen.ORDER_ATOMIC);
  var statements_exe = Blockly.Pen.statementToCode(block, 'exe');
  // TODO: Assemble Pen into code variable.

  // 括弧を取り除く
  value_conditions = value_conditions.substr(1);
  value_conditions = value_conditions.substr(0,value_conditions.length-1);
  //インデント調整
  statements_exe = statements_exe.replace(/\n/g,"\n  |");
  statements_exe = statements_exe.slice(0,-4);

  var code = value_conditions + ' の間，\n  |' + statements_exe +'\nを繰り返す\n';
  return code;
};

// Blockly.Pen['forplus'] = function(block) {
//   var text_conditions1 = block.getFieldValue('conditions1');
//   var text_conditions2 = block.getFieldValue('conditions2');
//   var text_conditions3 = block.getFieldValue('conditions3');
//   var text_conditions4 = block.getFieldValue('conditions4');
//   var statements_exe = Blockly.Pen.statementToCode(block, 'exe');
//   // TODO: Assemble Pen into code variable.

//   var code = text_conditions1 + ' を ' + text_conditions2 + ' から ' + text_conditions3 + ' まで ' + text_conditions4 + ' ずつ増やしながら，\n' + statements_exe;
//   code = code.replace(/\n/g,"\n  |");
// // a = a.slice(0,-4);
//   code = code + "\nを繰り返す\n";

//   return code;
// };

Blockly.Pen['forplus'] = function(block) {
  var value_conditions1 = Blockly.Pen.valueToCode(block, 'conditions1', Blockly.Pen.ORDER_ATOMIC);
  var value_conditions2 = Blockly.Pen.valueToCode(block, 'conditions2', Blockly.Pen.ORDER_ATOMIC);
  var value_conditions3 = Blockly.Pen.valueToCode(block, 'conditions3', Blockly.Pen.ORDER_ATOMIC);
  var value_conditions4 = Blockly.Pen.valueToCode(block, 'conditions4', Blockly.Pen.ORDER_ATOMIC);
  var statements_exe = Blockly.Pen.statementToCode(block, 'exe');
  // 括弧を取り除く
  value_conditions1 = value_conditions1.substr(1);
  value_conditions1 = value_conditions1.substr(0,value_conditions1.length-1);
  value_conditions2 = value_conditions2.substr(1);
  value_conditions2 = value_conditions2.substr(0,value_conditions2.length-1);
  value_conditions3 = value_conditions3.substr(1);
  value_conditions3 = value_conditions3.substr(0,value_conditions3.length-1);
  value_conditions4 = value_conditions4.substr(1);
  value_conditions4 = value_conditions4.substr(0,value_conditions4.length-1);
  // TODO: Assemble Pen into code variable.
  var code = value_conditions1 + ' を ' + value_conditions2 + ' から ' + value_conditions3 + ' まで ' + value_conditions4 + ' ずつ増やしながら，\n' + statements_exe;
  // インデント調整
  code = code.replace(/\n/g,"\n  |");
// a = a.slice(0,-4);
  code = code + "\nを繰り返す\n";
  return code;
};

// Blockly.Pen['forminus'] = function(block) {
//   var text_conditions1 = block.getFieldValue('conditions1');
//   var text_conditions2 = block.getFieldValue('conditions2');
//   var text_conditions3 = block.getFieldValue('conditions3');
//   var text_conditions4 = block.getFieldValue('conditions4');
//   var statements_exe = Blockly.Pen.statementToCode(block, 'exe');
//   // TODO: Assemble Pen into code variable.

//   var code = text_conditions1 + ' を ' + text_conditions2 + ' から ' + text_conditions3 + ' まで ' + text_conditions4 + ' ずつ減らしながら，\n' + statements_exe;
//   code = code.replace(/\n/g,"\n  |");
// //   a = a.slice(0,-4);
//   code = code + "\nを繰り返す\n";

//   return code;
// };

Blockly.Pen['forminus'] = function(block) {
  var value_conditions1 = Blockly.Pen.valueToCode(block, 'conditions1', Blockly.Pen.ORDER_ATOMIC);
  var value_conditions2 = Blockly.Pen.valueToCode(block, 'conditions2', Blockly.Pen.ORDER_ATOMIC);
  var value_conditions3 = Blockly.Pen.valueToCode(block, 'conditions3', Blockly.Pen.ORDER_ATOMIC);
  var value_conditions4 = Blockly.Pen.valueToCode(block, 'conditions4', Blockly.Pen.ORDER_ATOMIC);
  var statements_exe = Blockly.Pen.statementToCode(block, 'exe');
  // 括弧を取り除く
  value_conditions1 = value_conditions1.substr(1);
  value_conditions1 = value_conditions1.substr(0,value_conditions1.length-1);
  value_conditions2 = value_conditions2.substr(1);
  value_conditions2 = value_conditions2.substr(0,value_conditions2.length-1);
  value_conditions3 = value_conditions3.substr(1);
  value_conditions3 = value_conditions3.substr(0,value_conditions3.length-1);
  value_conditions4 = value_conditions4.substr(1);
  value_conditions4 = value_conditions4.substr(0,value_conditions4.length-1);
  // TODO: Assemble Pen into code variable.
  var code = value_conditions1 + ' を ' + value_conditions2 + ' から ' + value_conditions3 + ' まで ' + value_conditions4 + ' ずつ減らしながら，\n' + statements_exe;
  // インデント調整
  code = code.replace(/\n/g,"\n  |");
//   a = a.slice(0,-4);
  code = code + "\nを繰り返す\n";
  return code;
};
