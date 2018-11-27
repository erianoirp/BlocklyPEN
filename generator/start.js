Blockly.Pen['start'] = function(block) {
  const code = Blockly.Pen.statementToCode(block, 'main') + '\n';
  return code;
};
