//WaPENで使用できる
Blockly.Pen['conditions'] = function(block) {
  var value_argument1 = Blockly.Pen.valueToCode(block, 'argument1', Blockly.Pen.ORDER_ATOMIC);
  var dropdown_comparisonoperator = block.getFieldValue('comparisonOperator');
  var value_argument2 = Blockly.Pen.valueToCode(block, 'argument2', Blockly.Pen.ORDER_ATOMIC);
  // 括弧を取り除く
  value_argument1 = value_argument1.substr(1);
  value_argument1 = value_argument1.substr(0,value_argument1.length-1);
  value_argument2 = value_argument2.substr(1);
  value_argument2 = value_argument2.substr(0,value_argument2.length-1);
  // TODO: Assemble Pen into code variable.
  var code = value_argument1 + " " + dropdown_comparisonoperator + " " + value_argument2;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Pen.ORDER_NONE];
};

Blockly.Pen['if'] = function(block) {
  var value_conditions = Blockly.Pen.valueToCode(block, 'conditions', Blockly.Pen.ORDER_ATOMIC);
  var statements_exe = Blockly.Pen.statementToCode(block, 'exe');
  // TODO: Assemble Pen into code variable.
  // 括弧を取り除く
  value_conditions = value_conditions.substr(1);
  value_conditions = value_conditions.substr(0,value_conditions.length-1);
  //インデント調整
  statements_exe = statements_exe.replace(/\n/g,"\n  |");
  statements_exe = statements_exe.slice(0,-4);
  var code = 'もし ' + value_conditions + ' ならば\n  | ' + statements_exe + '\nを実行する\n';
  return code;
};

Blockly.Pen['ifelse'] = function(block) {
  var value_conditions = Blockly.Pen.valueToCode(block, 'conditions', Blockly.Pen.ORDER_ATOMIC);
  var statements_exe1 = Blockly.Pen.statementToCode(block, 'exe1');
  var statements_exe2 = Blockly.Pen.statementToCode(block, 'exe2');
  // TODO: Assemble Pen into code variable.

  value_conditions = value_conditions.substr(1);
  value_conditions = value_conditions.substr(0,value_conditions.length-1);
  //インデント調整
  statements_exe1 = statements_exe1.replace(/\n/g,"\n  |");
  statements_exe1 = statements_exe1.slice(0,-4);
  statements_exe2 = statements_exe2.replace(/\n/g,"\n  |");
  statements_exe2 = statements_exe2.slice(0,-4);
  var code = 'もし ' + value_conditions + ' ならば\n  | ' + statements_exe1 + '\nを実行し，そうでなければ\n  | ' + statements_exe2 + '\nを実行する\n';
  return code;
};

Blockly.Pen['ifelseif'] = function(block) {
  var value_conditions1 = Blockly.Pen.valueToCode(block, 'conditions1', Blockly.Pen.ORDER_ATOMIC);
  var statements_exe1 = Blockly.Pen.statementToCode(block, 'exe1');
  var value_conditions2 = Blockly.Pen.valueToCode(block, 'conditions2', Blockly.Pen.ORDER_ATOMIC);
  var statements_exe2 = Blockly.Pen.statementToCode(block, 'exe2');
  // TODO: Assemble Pen into code variable.
 // 括弧を取り除く
  value_conditions1 = value_conditions1.substr(1);
  value_conditions1 = value_conditions1.substr(0,value_conditions1.length-1);
  value_conditions2 = value_conditions2.substr(1);
  value_conditions2 = value_conditions2.substr(0,value_conditions2.length-1);
  //インデント調整
  statements_exe1 = statements_exe1.replace(/\n/g,"\n  |");
  statements_exe1 = statements_exe1.slice(0,-4);
  statements_exe2 = statements_exe2.replace(/\n/g,"\n  |");
  statements_exe2 = statements_exe2.slice(0,-4);
  var code = 'もし ' + value_conditions1 + ' ならば\n  | ' + statements_exe1 + '\nを実行し，そうでなくもし  ' + value_conditions2 + '  ならば\n  | ' + statements_exe2 + '\nを実行する\n';
  return code;
};

Blockly.Pen['ifelseifelse'] = function(block) {
  var value_conditions1 = Blockly.Pen.valueToCode(block, 'conditions1', Blockly.Pen.ORDER_ATOMIC);
  var statements_exe1 = Blockly.Pen.statementToCode(block, 'exe1');
  var value_conditions2 = Blockly.Pen.valueToCode(block, 'conditions2', Blockly.Pen.ORDER_ATOMIC);
  var statements_exe2 = Blockly.Pen.statementToCode(block, 'exe2');
  var statements_exe3 = Blockly.Pen.statementToCode(block, 'exe3');
  // TODO: Assemble Pen into code variable.
  // 括弧を取り除く
  value_conditions1 = value_conditions1.substr(1);
  value_conditions1 = value_conditions1.substr(0,value_conditions1.length-1);
  value_conditions2 = value_conditions2.substr(1);
  value_conditions2 = value_conditions2.substr(0,value_conditions2.length-1);
  //インデント調整
  statements_exe1 = statements_exe1.replace(/\n/g,"\n  |");
  statements_exe1 = statements_exe1.slice(0,-4);
  statements_exe2 = statements_exe2.replace(/\n/g,"\n  |");
  statements_exe2 = statements_exe2.slice(0,-4);
  statements_exe3 = statements_exe3.replace(/\n/g,"\n  |");
  statements_exe3 = statements_exe3.slice(0,-4);
  var code = 'もし ' + value_conditions1 + ' ならば\n  | ' + statements_exe1 + '\nを実行し，そうでなくもし  ' + value_conditions2 + '  ならば\n  |' + statements_exe2 + '\nを実行し，そうでなければ\n  | ' + statements_exe3 + '\nを実行する\n';
  return code;
};
