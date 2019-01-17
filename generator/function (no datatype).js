Blockly.Pen['define_function'] = function(block) {
  var func_name = block.getFieldValue('func_name') || '《関数》';
  var params = '';
  var i = 1;
  while (block.getInput('PARAM' + i)) {
    var name = block.getFieldValue('NAME' + i) || '《仮引数》';
    params += (i > 1 ? ', ' : '') + name;
    i++;
  }
  var statements1 = Blockly.Pen.adjustIndent(Blockly.Pen.statementToCode(block, 'STATEMENTS'));
  var code = '関数 ' + func_name + ' (' + params + ')\n' + statements1 + '関数終了\n';
  return code;
};

Blockly.Pen['call_function'] = function(block) {
  var funcName = block.getFieldValue('func_name') || '《関数》';
  var args = '';
  var i = 1;
  while (block.getInput('ARG' + i)) {
    var arg = Blockly.Pen.valueToCode(block, 'ARG' + i, Blockly.Pen.ORDER_ATOMIC) || '《実引数》';
    args += (i > 1 ? ', ' : '') + arg;
    i++;
  }
  var code = funcName + '(' + args + ')';
  return [code, Blockly.Pen.ORDER_ATOMIC];
};

Blockly.Pen['return_block'] = function(block) {
  var return_value = Blockly.Pen.valueToCode(block, 'return_value', Blockly.Pen.ORDER_ATOMIC) || '《値》';
  var code = return_value + 'を返す\n'
  return code;
};

