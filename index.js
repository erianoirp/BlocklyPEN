/***** ↓ 初期化するモジュール ↓ *****/
const startBlock = '<xml><block type="start" deletable="false"></block></xml>';
const initWorkspace = function() {
  // firefoxではなぜか動かない
  Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(startBlock), Blockly.mainWorkspace);
  Blockly.mainWorkspace.addChangeListener(Blockly.Events.disableOrphans);
};
//initBlocks();
/***** ↑ 初期化するモジュール ↑ *****/

/***** ↓ ステップ実行するモジュール ↓ *****/
const stepButton = document.getElementById('stepButton');
/*
const workspace = Blockly.inject('content_block',
  {toolbox: document.getElementById('toolbox')}
);
let interpreter = null;

function initApi(_interpreter, _scope) {
  let wrapper;
  wrapper = function(_id) {
    _id = _id ? _id.toString() : '';
    return _interpreter.createPrimitive(highlightBlock(_id));
  };
  _interpreter.setProperty(_scope, 'highlightBlock',
    _interpreter.createNativeFunction(wapper)
  );
}

let highlightPause = false;
let latestCode = '';

function highlightBlock(_id) {
  workspace.highlightBlock(_id);
  highlightPause = true;
}

function generateCodeAndLoadIntoInterpreter() {
  Blockly.Pen.STATEMENT_PREFIX = 'highlightBlock(%1);\n';
  Blockly.Pen.addReservedWords('highlightBlock');
  latestCode = Blockly.Pen.workspaceToCode(--------);
}

stepButton.onclick = function() {
  if (!interpreter) {
    interpreter = new Interpreter(latestCode, initApi);
  }
  highlightPause = false;
  let hasMoreCode;
  do {
    try {
      hasMoreCode = interpreter.step();
    } finally {
      if (!hasMoreCode) {
        interpreter = null;
        return;
      }
    }
  } while (hasMoreCode && !highlightPause);
};

generateCodeAndLoadIntoInterpreter();
workspace.addChangeListener(function(event) {
  if (!(event instanceof Blockly.Events.Ui)) {
    generateCodeAndLoadIntoInterpreter();
  }
};
*/
/***** ↑ ステップ実行するモジュール ↑ *****/

/***** ↓ ブロックを保存するモジュール ↓ *****/
const saveButton = document.getElementById('saveButton');
const saveBlocks = function() {
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
};
saveButton.onclick = function() {
  saveBlocks();
};
/***** ↑ ブロックを保存するモジュール ↑ *****/

/***** ↓ ブロックを読み込むモジュール ↓ *****/
const loadButton = document.getElementById('loadButton');
const loadBlocks = function() {
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
loadButton.onclick = function() {
  loadBlocks();
};
/***** ↑ ブロックを読み込むモジュール ↑ *****/

/***** ↓ 実行結果をリセットするモジュール ↓ *****/

const resetButton = document.getElementById('resetButton');
resetButton.onclick = function() {
  reset();
};
/***** ↑ 実行結果をリセットするモジュール ↑ *****/

/***** ↓ ブロックをリセットするモジュール ↓ *****/
const resetBlocksButton = document.getElementById('trashButton');
const resetBlocks = function() {
  Blockly.mainWorkspace.clear();
  initWorkspace();
};
resetBlocksButton.onclick = function() {
  resetBlocks();
  reset();
};
/***** ↑ ブロックをリセットするモジュール ↑ *****/
