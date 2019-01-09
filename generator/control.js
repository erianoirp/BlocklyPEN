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

Blockly.Pen['while'] = function(block) {
  var value_conditions = Blockly.Pen.valueToCode(block, 'conditions', Blockly.Pen.ORDER_ATOMIC);
  var statements_exe = Blockly.Pen.statementToCode(block, 'exe');
  //インデント調整
  statements_exe = statements_exe.replace(/\n/g,"\n  |");
  statements_exe = statements_exe.slice(0,-4);

  var code = value_conditions + ' の間，\n  |' + statements_exe +'\nを繰り返す\n';
  return code;
};

var numOfI = 0;
Blockly.Pen['while_simplified'] = function(block) {
  var numOfTimes = block.getFieldValue('VALUE1');
  var statements = Blockly.Pen.statementToCode(block, 'STATEMENTS1');
  var tempVar = 'temp' + ('000000' + numOfI).slice(-6);
  var code = '整数 ' + tempVar + '\n';
  code += tempVar + ' ← 0\n';
  code += tempVar + ' < ' + numOfTimes + ' の間，\n';
  code += statements;
  code += '  ' + tempVar + ' ← ' + tempVar + ' + 1\n';
  code += 'を繰り返す\n';
  numOfI++;
  return code;
};

Blockly.Pen['repeat_until'] = function(block) {
  var statements = Blockly.Pen.statementToCode(block, 'STATEMENTS');
  var condition = Blockly.Pen.valueToCode(block, 'CONDITION', Blockly.Pen.ORDER_ATOMIC);
  var code = '';
  code += '繰り返し，\n';
  code += statements;
  code += 'を，' + condition + ' になるまで実行する\n';
  return code;
};

Blockly.Pen['for'] = function(block) {
  var variable = Blockly.Pen.valueToCode(block, 'VARIABLE', Blockly.Pen.ORDER_ATOMIC);
  var from = Blockly.Pen.valueToCode(block, 'FROM', Blockly.Pen.ORDER_ATOMIC);
  var to = Blockly.Pen.valueToCode(block, 'TO', Blockly.Pen.ORDER_ATOMIC);
  var by = Blockly.Pen.valueToCode(block, 'BY', Blockly.Pen.ORDER_ATOMIC);
  var while_ = block.getFieldValue('WHILE');
  var statements = Blockly.Pen.statementToCode(block, 'STATEMENTS');
  var code = '';
  code += variable + ' を ' + from + ' から ' + to + ' まで ' + by + ' ずつ' + while_ + 'ながら、\n';
  code += statements;
  code += 'を繰り返す\n';
  return code;
};

