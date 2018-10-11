Blockly.JavaScript['function_block'] = function(block) {
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
  let args = block.getFieldValue('arg');
  if (args == undefined) {
    args = '';
  }
  var statements_statements = Blockly.Pen.statementToCode(block, 'statements');
  // TODO: Assemble JavaScript into code variable.
  const code = '関数 '+return_value+' '+func_name+' ('         '...;\n';
  return code;
};

Blockly.JavaScript['args_end'] = function(block) {
  /*
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
  */
  const code = ')';
  return [code, Blockly.Pen.ORDER_NONE];
};

Blockly.JavaScript['arg'] = function(block) {
  var variable_name = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  var text_name = block.getFieldValue('NAME');
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['step_block'] = function(block) {
  var text_step_name = block.getFieldValue('step_name');
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_statements = Blockly.JavaScript.statementToCode(block, 'statements');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};
