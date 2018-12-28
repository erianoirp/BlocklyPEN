Blockly.Pen['define_step'] = function(block) {
  const stepName = block.getFieldValue('step_name');
  let params = '';
  let i = 1;
  while (block.getInput('PARAM' + i)) {
//    const name = Blockly.Pen.variableDB_.getName(block.getFieldValue('NAME' + i), Blockly.Variables.NAME_TYPE);
    const name = block.getFieldValue('NAME' + i);
    params += (i > 1 ? ', ' : '') + name;
    i++;
  }
  const statements = Blockly.Pen.statementToCode(block, 'STATEMENTS');
  const code = '手続き ' + stepName + ' (' + params + ')\n' + statements + '手続き終了\n';
  return code;
};

Blockly.Pen['call_step'] = function(block) {
  const stepName = block.getFieldValue('step_name');
  let args = '';
  let i = 1;
  while (block.getInput('ARG' + i)) {
    const arg = Blockly.Pen.valueToCode(block, 'ARG' + i, Blockly.Pen.ORDER_ATOMIC);
    args += (i > 1 ? ', ' : '') + arg;
    i++;
  }
  const code = stepName + '(' + args + ')\n';
  return code;
};

Blockly.Pen['return_void_block'] = function(block) {
  const code = '手続きを抜ける\n'
  return code;
};

