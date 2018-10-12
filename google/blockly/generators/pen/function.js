Blockly.Pen['function_block'] = function(block) {
  /*
  var dropdown_return_value = block.getFieldValue('return_value');
  var text_func_name = block.getFieldValue('func_name');
  var value_function_decleration = Blockly.JavaScript.valueToCode(block, 'function_decleration', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_statements = Blockly.JavaScript.statementToCode(block, 'statements');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
  */
  const return_value = block.getFieldValue('return_value');
  const func_name = block.getFieldValue('func_name');
  let params = block.getFieldValue('parameter');
  console.log(`params: ${params}`);
  if (params == undefined) {
    params = '';
  }
  const params_end = Blockly.Pen.valueToCode(block, 'params_end', Blockly.Pen.ORDER_ATOMIC);
  const statements = Blockly.Pen.statementToCode(block, 'statements');
  // TODO: Assemble JavaScript into code variable.
  const code = '関数 '+return_value+' '+func_name+' ('+params+params_end+'\n  '+statements+'関数終了\n';
  return code;
};

Blockly.Pen['step_block'] = function(block) {
  const step_name = block.getFieldValue('step_name');
  let params = block.getFieldValue('parameter');
  console.log(`params: ${params}`);
  if (params == undefined) {
    params = '';
  }
  const params_end = Blockly.Pen.valueToCode(block, 'params_end', Blockly.Pen.ORDER_ATOMIC);
  const statements = Blockly.Pen.statementToCode(block, 'statements');
  const code = '手続き '+func_name+' ('+params+params_end+'\n  '+statements+'手続き終了\n';
  return code;
};

Blockly.Pen['return_block'] = function(block) {
  const return_value = Blockly.Pen.valueToCode(block, 'return_value', Blockly.Pen.ORDER_ATOMIC);
  const code = return_value+'を返す\n'
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
  const code = datatype+' '+variable+', '+parameter;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Pen['params_end_block'] = function(block) {
  const code = ')';
  return [code, Blockly.Pen.ORDER_NONE];
  //return code;
};
