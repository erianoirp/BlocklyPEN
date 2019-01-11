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
  var numOfTimes = Blockly.Pen.valueToCode(block, 'VALUE1', Blockly.Pen.ORDER_ATOMIC);
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
  var variable = block.getFieldValue('VARIABLE');
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

