Blockly.Pen['define_function'] = function(block) {
  const func_name = block.getFieldValue('func_name');
  let params = '';
  let i = 1;
  while (block.getInput('PARAM' + i)) {
    const name = block.getFieldValue('NAME' + i);
    params += (i > 1 ? ', ' : '') + name;
    i++;
  }
  const statements = Blockly.Pen.statementToCode(block, 'STATEMENTS');
  const code = '関数 ' + func_name + ' (' + params + ')\n' + statements + '関数終了\n';
  return code;
};

Blockly.Pen['call_function'] = function(block) {
  const funcName = block.getFieldValue('func_name');
  let args = '';
  let i = 1;
  while (block.getInput('ARG' + i)) {
    const arg = Blockly.Pen.valueToCode(block, 'ARG' + i, Blockly.Pen.ORDER_ATOMIC);
    args += (i > 1 ? ', ' : '') + arg;
    i++;
  }
  const code = funcName + '(' + args + ')';
  return [code, Blockly.Pen.ORDER_ATOMIC];
};

Blockly.Pen['return_block'] = function(block) {
  const return_value = Blockly.Pen.valueToCode(block, 'return_value', Blockly.Pen.ORDER_ATOMIC);
  const code = return_value + 'を返す\n'
  return code;
};

