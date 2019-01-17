Blockly.Pen['define_step'] = function(block) {
  var stepName = block.getFieldValue('step_name') || '《手続き》';
  var params = '';
  var i = 1;
  while (block.getInput('PARAM' + i)) {
    var datatype = block.getFieldValue('DATATYPE' + i);
    var name = Blockly.Pen.variableDB_.getName(block.getFieldValue('NAME' + i), Blockly.Variables.NAME_TYPE) || '《実引数》';
//    var name = block.getFieldValue('NAME' + i);
    params += (i > 1 ? ', ' : '') + datatype + ' ' + name;
    i++;
  }
  var statements1 = Blockly.Pen.adjustIndent(Blockly.Pen.statementToCode(block, 'STATEMENTS'));
  var code = '手続き ' + stepName + ' (' + params + ')\n' + statements + '手続き終了\n';
  return code;
};

Blockly.Pen['call_step'] = function(block) {
  var stepName = block.getFieldValue('step_name') || '《手続き》';
  var args = '';
  var i = 1;
  while (block.getInput('ARG' + i)) {
    var arg = Blockly.Pen.valueToCode(block, 'ARG' + i, Blockly.Pen.ORDER_ATOMIC) || '《仮引数》';
    args += (i > 1 ? ', ' : '') + arg;
    i++;
  }
  var code = stepName + '(' + args + ')\n';
  return code;
};

Blockly.Pen['return_void_block'] = function(block) {
  var code = '手続きを抜ける\n'
  return code;
};

