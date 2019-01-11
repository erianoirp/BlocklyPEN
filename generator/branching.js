Blockly.Pen['if'] = function(block) {
  var condition = Blockly.Pen.valueToCode(block, 'VALUE1', Blockly.Pen.ORDER_ATOMIC);
  var statements = Blockly.Pen.statementToCode(block, 'STATEMENTS1');
  //インデント調整
  statements = statements.replace(/\n/g,"\n  |");
  statements = statements.slice(0,-4);
  var code = 'もし ' + condition + ' ならば\n  | ' + statements + '\nを実行する\n';
  return code;
};

Blockly.Pen['ifelse'] = function(block) {
  var condition = Blockly.Pen.valueToCode(block, 'VALUE1', Blockly.Pen.ORDER_ATOMIC);
  var statements1 = Blockly.Pen.statementToCode(block, 'STATEMENTS1');
  var statements2 = Blockly.Pen.statementToCode(block, 'STATEMENTS2');
  //インデント調整
  statements1 = statements1.replace(/\n/g,"\n  |");
  statements1 = statements1.slice(0,-4);
  statements2 = statements2.replace(/\n/g,"\n  |");
  statements2 = statements2.slice(0,-4);
  var code = 'もし ' + condition + ' ならば\n  | ' + statements1 + '\nを実行し，そうでなければ\n  | ' + statements2 + '\nを実行する\n';
  return code;
};

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

