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

