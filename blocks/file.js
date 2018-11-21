//未使用
Blockly.Blocks['fopen'] = {
  init: function() {
    this.appendValueInput("file")
        .setCheck(null)
        .appendField("ファイル");
    this.appendDummyInput()
        .appendField("を")
        .appendField(new Blockly.FieldDropdown([["読み込みモード", "openr("], ["書き込みモード", "openw("], ["追加書き込みモード", "opena("]]), "mode")
        .appendField("で開いた番号");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setTooltip('');
  }
};

Blockly.Blocks['fclose'] = {
  init: function() {
    this.appendValueInput("filenum")
        .setCheck(null)
        .appendField("ファイル番号");
    this.appendDummyInput()
        .appendField("を閉じる");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};

Blockly.Blocks['fgstr'] = {
  init: function() {
    this.appendValueInput("filenum")
        .setCheck(null)
        .appendField("ファイル番号");
    this.appendValueInput("num")
        .setCheck(null)
        .appendField("の");
    this.appendDummyInput()
        .appendField("文字の文字列");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setTooltip('');
  }
};

Blockly.Blocks['fgline'] = {
  init: function() {
    this.appendValueInput("filenum")
        .setCheck(null)
        .appendField("ファイル番号");
    this.appendDummyInput()
        .appendField("の１行目の文字列");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setTooltip('');
  }
};

Blockly.Blocks['fput'] = {
  init: function() {
    this.appendValueInput("filenum")
        .setCheck(null)
        .appendField("ファイル番号");
    this.appendValueInput("str")
        .setCheck(null)
        .appendField("に");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["を書き込む", "putstr("], ["と改行文字を書き込む", "putline("]]), "put");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};

Blockly.Blocks['fisfile'] = {
  init: function() {
    this.appendValueInput("file")
        .setCheck(null)
        .appendField("ファイル");
    this.appendDummyInput()
        .appendField("があるかどうか");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setTooltip('');
  }
};

Blockly.Blocks['frename'] = {
  init: function() {
    this.appendValueInput("file")
        .setCheck(null)
        .appendField("ファイル");
    this.appendValueInput("file2")
        .setCheck(null)
        .appendField("の名前を");
    this.appendDummyInput()
        .appendField("に変える");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};

Blockly.Blocks['fflush'] = {
  init: function() {
    this.appendValueInput("filenum")
        .setCheck(null)
        .appendField("ファイル番号");
    this.appendDummyInput()
        .appendField("に書き込みを実行する");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};

Blockly.Blocks['fremove'] = {
  init: function() {
    this.appendValueInput("file")
        .setCheck(null)
        .appendField("ファイル");
    this.appendDummyInput()
        .appendField("を削除する");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};
