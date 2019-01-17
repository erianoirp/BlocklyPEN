Blockly.Pen['start'] = function(block) {
  let statements = Blockly.Pen.statementToCode(block, 'STATEMENTS1');
  statements = statements.slice(2); //最初のスペース2つを削除
  statements = statements.replace(/\r?\n  /g, '\n'); //'\n  'を'\n'に置換
  var code = statements;
  return code;
};
