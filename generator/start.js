Blockly.Pen['start'] = function(block) {
  let code = Blockly.Pen.statementToCode(block, 'STATEMENTS1');
  code = code.slice(2); //最初のスペース2つを削除
  code = code.replace(/\r?\n  /g, '\n'); //'\n  'を'\n'に置換
  return code;
};
