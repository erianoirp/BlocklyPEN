Blockly.Pen['if'] = function(block) {
  var condition = Blockly.Pen.valueToCode(block, 'VALUE1', Blockly.Pen.ORDER_ATOMIC) || '《条件式》';
  var statements1 = Blockly.Pen.adjustIndent(Blockly.Pen.statementToCode(block, 'STATEMENTS1'));
  var code = 'もし ' + condition + ' ならば\n' + statements1 + 'を実行する\n';
  return code;
};

Blockly.Pen['ifelse'] = function(block) {
  var condition = Blockly.Pen.valueToCode(block, 'VALUE1', Blockly.Pen.ORDER_ATOMIC) || '《条件式》';
  var statements1 = Blockly.Pen.adjustIndent(Blockly.Pen.statementToCode(block, 'STATEMENTS1'));
  var statements2 = Blockly.Pen.adjustIndent(Blockly.Pen.statementToCode(block, 'STATEMENTS2'));
  var code = 'もし ' + condition + ' ならば\n' + statements1 + 'を実行し，そうでなければ\n' + statements2 + 'を実行する\n';
  return code;
};

Blockly.Pen['if2'] = function(block) {
  // If/elseif/else condition.
  var n = 0;
  var code = '', branchCode, conditionCode;
  do {
    conditionCode = Blockly.Pen.valueToCode(block, 'IF' + n, Blockly.Pen.ORDER_NONE) || '《条件式》';
    branchCode = Blockly.Pen.adjustIndent(Blockly.Pen.statementToCode(block, 'DO' + n));
    code += (n > 0 ? 'を実行し、そうでなく' : '') + 'もし ' + conditionCode + ' ならば\n';
    code += branchCode;
    ++n;
  } while (block.getInput('IF' + n));

  if (block.getInput('ELSE')) {
    branchCode = Blockly.Pen.adjustIndent(Blockly.Pen.statementToCode(block, 'ELSE'));
    code += 'を実行し、そうでなければ\n' + branchCode;
  }
  return code + 'を実行する\n';
};

