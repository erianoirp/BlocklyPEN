//WaPENで使用できる
Blockly.Pen['conditions'] = function(block) {
  var value_argument1 = Blockly.Pen.valueToCode(block, 'argument1', Blockly.Pen.ORDER_ATOMIC);
  var dropdown_comparisonoperator = block.getFieldValue('comparisonOperator');
  var value_argument2 = Blockly.Pen.valueToCode(block, 'argument2', Blockly.Pen.ORDER_ATOMIC);
  var code = value_argument1 + " " + dropdown_comparisonoperator + " " + value_argument2;
  return [code, Blockly.Pen.ORDER_ATOMIC];
};

Blockly.Pen['if'] = function(block) {
  var value_conditions = Blockly.Pen.valueToCode(block, 'conditions', Blockly.Pen.ORDER_ATOMIC);
  var statements_exe = Blockly.Pen.statementToCode(block, 'exe');
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
  //インデント調整
  statements_exe1 = statements_exe1.replace(/\n/g,"\n  |");
  statements_exe1 = statements_exe1.slice(0,-4);
  statements_exe2 = statements_exe2.replace(/\n/g,"\n  |");
  statements_exe2 = statements_exe2.slice(0,-4);
  var code = 'もし ' + value_conditions + ' ならば\n  | ' + statements_exe1 + '\nを実行し，そうでなければ\n  | ' + statements_exe2 + '\nを実行する\n';
  return code;
};

/*
Blockly.Pen['if2'] = function(block) {
  // If/elseif/else condition.
  var n = 0;
  var code = '', branchCode, conditionCode;
  do {
    conditionCode = Blockly.Pen.valueToCode(block, 'IF' + n,
      Blockly.Pen.ORDER_NONE) || 'false';
    branchCode = Blockly.Pen.statementToCode(block, 'DO' + n);
    code += (n > 0 ? '\nを実行し、そうでなく' : '') +
      'もし ' + conditionCode + ' ならば\n　｜' + branchCode;
    ++n;
  } while (block.getInput('IF' + n));

  if (block.getInput('ELSE')) {
    branchCode = Blockly.Pen.statementToCode(block, 'ELSE');
    code += '\nを実行し、そうでなければ\n　｜' + branchCode;
  }
  return code + '\nを実行する\n';
};
*/

