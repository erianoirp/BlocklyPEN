Blockly.Pen['while'] = function(block) {
  var condition = Blockly.Pen.valueToCode(block, 'condition', Blockly.Pen.ORDER_ATOMIC) || '《条件式》';
  var statements1 = Blockly.Pen.adjustIndent(Blockly.Pen.statementToCode(block, 'exe'));
  var code = condition + ' の間，\n' + statements1 +'を繰り返す\n';
  return code;
};

var numOfI = 0;
Blockly.Pen['while_simplified'] = function(block) {
  var numOfTimes = Blockly.Pen.valueToCode(block, 'VALUE1', Blockly.Pen.ORDER_ATOMIC);
  var statements1 = Blockly.Pen.statementToCode(block, 'STATEMENTS1');
  var tempI = 'i' + ('0000' + numOfI).slice(-4);
  statements1 = statements1 + '  ' + tempI + ' ← ' + tempI + ' + 1\n'
  statements1 = Blockly.Pen.adjustIndent(statements1);
  var code = '';
  code += '整数 ' + tempI + '\n';
  code += tempI + ' ← 0\n';
  code += tempI + ' < ' + numOfTimes + ' の間，\n';
  code += statements1;
  code += 'を繰り返す\n';
  numOfI++;
  return code;
};

Blockly.Pen['repeat_until'] = function(block) {
  var statements1 = Blockly.Pen.adjustIndent(Blockly.Pen.statementToCode(block, 'STATEMENTS'));
  var condition = Blockly.Pen.valueToCode(block, 'CONDITION', Blockly.Pen.ORDER_ATOMIC) || '《条件式》';
  var code = '';
  code += '繰り返し，\n';
  code += statements1;
  code += 'を，' + condition + ' になるまで実行する\n';
  return code;
};

Blockly.Pen['for'] = function(block) {
  var variable = block.getFieldValue('VARIABLE') || '《変数》';
  var from = Blockly.Pen.valueToCode(block, 'FROM', Blockly.Pen.ORDER_ATOMIC) || '《値》';
  var to = Blockly.Pen.valueToCode(block, 'TO', Blockly.Pen.ORDER_ATOMIC) || '《値》';
  var by = Blockly.Pen.valueToCode(block, 'BY', Blockly.Pen.ORDER_ATOMIC) || '《値》';
  var isIncOrDec = block.getFieldValue('WHILE');
  var statements1 = Blockly.Pen.adjustIndent(Blockly.Pen.statementToCode(block, 'STATEMENTS'));
  var code = '';
  code += variable + ' を ' + from + ' から ' + to + ' まで ' + by + ' ずつ' + isIncOrDec + 'ながら、\n';
  code += statements1;
  code += 'を繰り返す\n';
  return code;
};

