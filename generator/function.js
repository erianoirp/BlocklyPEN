Blockly.Pen['define_function'] = function(block) {
  const return_value = block.getFieldValue('return_value');
  const func_name = block.getFieldValue('func_name');
  const params = Blockly.Pen.valueToCode(block, 'parameters', Blockly.Pen.ORDER_ATOMIC);
  const statements = Blockly.Pen.statementToCode(block, 'statements');
  // TODO: Assemble JavaScript into code variable.
  const code = '関数 ' + return_value + ' ' + func_name + ' (' + params + '\n' + statements + '関数終了\n';
  return code;
};

Blockly.Pen['define_step'] = function(block) {
  const step_name = block.getFieldValue('step_name');
  const params = Blockly.Pen.valueToCode(block, 'parameters', Blockly.Pen.ORDER_ATOMIC);
  const statements = Blockly.Pen.statementToCode(block, 'statements');
  const code = '手続き ' + step_name + ' (' + params + '\n' + statements + '手続き終了\n';
  return code;
};

Blockly.Pen['return_block'] = function(block) {
  const return_value = Blockly.Pen.valueToCode(block, 'return_value', Blockly.Pen.ORDER_ATOMIC);
  const code = return_value + 'を返す\n'
  return code;
};

Blockly.Pen['return_void_block'] = function(block) {
  const code = '手続きを抜ける\n'
  return code;
};

Blockly.Pen['param_block'] = function(block) {
  const datatype = block.getFieldValue('datatype');
  const variable = block.getFieldValue('variable');
  const parameter = Blockly.Pen.valueToCode(block, 'parameter', Blockly.Pen.ORDER_ATOMIC);
  let code;
  if (parameter==='' || parameter===')') {
    code = datatype + ' ' + variable + parameter;
  } else {
    code = datatype + ' ' + variable + ', ' + parameter;
  }
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Pen.ORDER_ATOMIC];
};

Blockly.Pen['call_step'] = function(block) {
  const step_name = block.getFieldValue('step_name');
  const _arguments = Blockly.Pen.valueToCode(block, 'arguments', Blockly.Pen.ORDER_ATOMIC);
  const code = step_name + '(' + _arguments + '\n';
  return code;
};

Blockly.Pen['call_function'] = function(block) {
  const func_name = block.getFieldValue('func_name');
  const _arguments = Blockly.Pen.valueToCode(block, 'arguments', Blockly.Pen.ORDER_ATOMIC);
  const code = func_name + '('+ _arguments + '\n';
  return [code, Blockly.Pen.ORDER_NONE];
};

Blockly.Pen['argument'] = function(block) {
  const value = block.getFieldValue('value');
  const arg_or_cp = Blockly.Pen.valueToCode(block, 'arg_or_cp', Blockly.Pen.ORDER_ATOMIC);
  let code;
  if (arg_or_cp==='' || arg_or_cp===')') {
    code = value + arg_or_cp;
  } else {
    code = value + ', ' + arg_or_cp;
  }
  return [code, Blockly.Pen.ORDER_ATOMIC];
};

Blockly.Pen['close_parenthesis'] = function(block) {
  const code = ')';
  //return [code, Blockly.Pen.ORDER_NONE];
  return code;
};
