const saveButton = document.getElementById('saveButton');
const loadButton = document.getElementById('loadButton');
const resetButton = document.getElementById('resetButton');
const trashButton = document.getElementById('trashButton');
const startBlock = '<xml><block type="start" deletable="false"></block></xml>';

const initWorkspace = function() {
  // firefoxではなぜか動かない
  Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(startBlock), Blockly.mainWorkspace);
  Blockly.mainWorkspace.addChangeListener(Blockly.Events.disableOrphans);
};
//initBlocks();
//ブロックを保存する
function save(){
  const fileName = 'myprogram.xml';
  var xml = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
  var xmltext = Blockly.Xml.domToPrettyText(xml);
  var blob = new Blob([xmltext],{
    type: 'text/xml'
  });
  let a = document.createElement('a');
  a.download = fileName;
  if (window.navigator.msSaveBlob) {
    // for IE and Edge
    window.navigator.msSaveBlob(blob, fileName);
  } else if (window.URL && window.URL.createObjectURL) {
    // for Firefox and Chrome
    a.href = window.URL.createObjectURL(blob);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(a.href);
  } else {
    // for Safari (未検証)
    window.open('data:' + mimeType + ';base64,' + window.Base64.encode(content), '_blank');
  }
}

//ブロックを読みだす
function load() {
  var input = document.createElement("input");
  input.type = "file";
  input.id = "loadFile";
  input.accept = "text/xml";

  input.addEventListener("change", function(event) {
    var file = event.target.files[0]; // inputから取得したFileListオブジェクトから読み込んだFileオブジェクトを取得
    var reader = new FileReader(); // Fileオブジェクトの情報を読み込むためにFileReaderオブジェクトを生成する
    reader.readAsText(file); // FileReaderオブジェクトにFileオブジェクトのテキスト情報を読み込む
    reader.onload = function() {
      var xml = Blockly.Xml.textToDom(reader.result); // readAsTextで読み込んだ情報はreader.resultで取得できる
      Blockly.mainWorkspace.clear();
      Blockly.Xml.domToWorkspace(xml,Blockly.mainWorkspace);
    };
    // たまにファイル読み込みに失敗するが原因不明
    // reader.onerror = function() {
    //   console.log("readError")
    // };
    // reader.onabort = function() {
    //   console.log("readError")
    // };
  }, false);
  input.click();
};

const resetBlocks = function() {
  Blockly.mainWorkspace.clear();
  initWorkspace();
};

//ブロックを保存する
saveButton.onclick = function() {
  save();
};
//ブロックを読みだす　load()未実装
loadButton.onclick = function() {
  load();
};
resetButton.onclick = function() {
  reset();
};
trashButton.onclick = function() {
  resetBlocks();
  reset();
};
