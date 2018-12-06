Blockly.Pen['if'] = function(block) {
  // If/elseif/else condition.
  var n = 0;
  var code = '', branchCode, conditionCode;
  do {
    conditionCode = Blockly.Pen.valueToCode(block, 'IF' + n,
      Blockly.Pen.ORDER_NONE) || 'false';
    branchCode = Blockly.Pen.statementToCode(block, 'DO' + n);
    code += (n > 0 ? '\nを実行し、そうでなくて' : '') +
      'もし ' + conditionCode + ' ならば\n　｜' + branchCode;
/*
    code += (n > 0 ? ' else ' : '') +
        'if (' + conditionCode + ') {\n' + branchCode + '}';
*/
    ++n;
  } while (block.getInput('IF' + n));

  if (block.getInput('ELSE')) {
    branchCode = Blockly.Pen.statementToCode(block, 'ELSE');
//    code += ' else {\n' + branchCode + '}';
    code += '\nを実行し、そうでなければ\n　｜' + branchCode;
  }
  return code + '\nを実行する\n';
};

