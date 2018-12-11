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
  // If/elseif/else condition.
  var n = 0;
  var code = '', branchCode, conditionCode;
  do {
    conditionCode = Blockly.Pen.valueToCode(block, 'IF' + n,
      Blockly.Pen.ORDER_NONE) || 'false';
    branchCode = Blockly.Pen.statementToCode(block, 'DO' + n);
    code += (n > 0 ? '\nを実行し、そうでなくて' : '') +
      'もし ' + conditionCode + ' ならば\n　｜' + branchCode;
    ++n;
  } while (block.getInput('IF' + n));

  if (block.getInput('ELSE')) {
    branchCode = Blockly.Pen.statementToCode(block, 'ELSE');
    code += '\nを実行し、そうでなければ\n　｜' + branchCode;
  }
  return code + '\nを実行する\n';
};

