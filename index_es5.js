"use strict";

/**
 * WaPENのコードを上書き
 */
function setRunflag(b) {
  run_flag = b;
}

function run() {
  if (code == null) {
    try {
      reset();
      var source = Blockly.Pen.workspaceToCode(Code.workspace);
      code = [new parsedMainRoutine(dncl.parse(source))];
    } catch (e) {
      console.log(e);
      textareaAppend("構文エラーです\n" + e.message + "\n");
      setRunflag(false);
      code = null;
      return;
    }
  }
  setRunflag(true);
  step();
}

onload = function onload() {
  var resultTextArea = document.getElementById("resultTextarea");
  var runButton = document.getElementById("runButton");
  var flowchartButton = document.getElementById("flowchartButton");
  //	var stepButton    = document.getElementById("stepButton");
  var file_prefix = document.getElementById("file_prefix");
  var flowchart_canvas = document.getElementById("flowchart");
  initWorkspace();
  $("#sourceTextarea").linedtextarea();
  textarea = resultTextArea;
  runButton.onclick = function () {
    if (run_flag && !step_flag) {
      setRunflag(false);
      document.getElementById("sourceTextarea").readOnly = true;
    } else {
      step_flag = false;
      run();
    }
  };

  $.contextMenu({
    selector: "#sourceTextarea",
    items: {
      copyAll: { name: "プログラムをコピー", callback: function callback(k, e) {
          document.getElementById("sourceTextarea").select();document.execCommand('copy');
        }
      },
      zenkaku: { name: "入力補助",
        items: {
          かつ: { name: "かつ", callback: function callback(k, e) {
              insertCode("《値》 かつ 《値》");
            }
          },
          または: { name: "または", callback: function callback(k, e) {
              insertCode("《値》 または 《値》");
            } },
          でない: { name: "でない", callback: function callback(k, e) {
              insertCode("《値》 でない");
            } },
          と: { name: "と", callback: function callback(k, e) {
              insertCode("《値》と《値》");
            } },
          カッコ: { name: "「」", callback: function callback(k, e) {
              insertCode("「《値》」");
            } }
        }
      },
      math: { name: "数学関数",
        items: {
          abs: { name: "abs 絶対値", callback: function callback(k, e) {
              insertCode("abs(《値》)");
            } },
          random: { name: "random 乱数", callback: function callback(k, e) {
              insertCode("random(《整数》)");
            } },
          ceil: { name: "ceil 切り上げ", callback: function callback(k, e) {
              insertCode("ceil(《実数》)");
            } },
          floor: { name: "floor 切り捨て", callback: function callback(k, e) {
              insertCode("floor(《実数》)");
            } },
          round: { name: "round 四捨五入", callback: function callback(k, e) {
              insertCode("round(《実数》)");
            } },
          sin: { name: "sin サイン", callback: function callback(k, e) {
              insertCode("sin(《実数》)");
            } },
          cos: { name: "cos コサイン", callback: function callback(k, e) {
              insertCode("cos(《実数》)");
            } },
          tan: { name: "tan タンジェント", callback: function callback(k, e) {
              insertCode("tan(《実数》)");
            } },
          sqrt: { name: "sqrt ルート", callback: function callback(k, e) {
              insertCode("sqrt(《実数》)");
            } },
          log: { name: "log 自然対数", callback: function callback(k, e) {
              insertCode("log(《実数》)");
            } },
          exp: { name: "exp 指数関数", callback: function callback(k, e) {
              insertCode("exp(《実数》)");
            } },
          pow: { name: "pow 累乗", callback: function callback(k, e) {
              insertCode("pow(《実数》,《実数》)");
            } }
        }
      },
      str: { name: "文字列関数",
        items: {
          length: { name: "length 長さ", callback: function callback(k, e) {
              insertCode("length(《文字列》)");
            } },
          append: { name: "append 文字列結合", callback: function callback(k, e) {
              insertCode("append(《文字列》,《文字列》)");
            } },
          substring1: { name: "substring 部分文字列（最後まで）", callback: function callback(k, e) {
              insertCode("substring(《文字列》,《開始位置》)");
            } },
          substring2: { name: "substring 部分文字列（長さ指定）", callback: function callback(k, e) {
              insertCode("substring(《文字列》,《開始位置》,《長さ》)");
            } },
          extract: { name: "extract 部分文字列（長さ指定）", callback: function callback(k, e) {
              insertCode("extract(《文字列》,《区切文字列》,《番号》)");
            } },
          insert: { name: "insert 挿入", callback: function callback(k, e) {
              insertCode("insert(《文字列》,《位置》,《文字列》)");
            } },
          replace: { name: "replace 置換", callback: function callback(k, e) {
              insertCode("replace(《文字列》,《位置》,《長さ》,《文字列》)");
            } }
        }
      },
      misc: { name: "各種命令",
        items: {
          gOpenWindow: { name: "描画領域開く", callback: function callback(k, e) {
              insertCode("描画領域開く(《幅》,《高さ》)");
            } },
          gCloseWindow: { name: "描画領域閉じる", callback: function callback(k, e) {
              insertCode("描画領域閉じる()");
            } },
          gClearWindow: { name: "描画領域全消去", callback: function callback(k, e) {
              insertCode("描画領域全消去()");
            } },
          gSetLineColor: { name: "線色設定", callback: function callback(k, e) {
              insertCode("線色設定(《赤》,《緑》,《青》)");
            } },
          gSetFillColor: { name: "塗色設定", callback: function callback(k, e) {
              insertCode("塗色設定(《赤》,《緑》,《青》)");
            } },
          gSetLineWidth: { name: "線太さ設定", callback: function callback(k, e) {
              insertCode("線太さ設定(《太さ》)");
            } },
          gSetFontSize: { name: "文字サイズ設定", callback: function callback(k, e) {
              insertCode("文字サイズ設定(《サイズ》)");
            } },
          gDrawText: { name: "文字描画", callback: function callback(k, e) {
              insertCode("文字描画(《文字列》,《x》,《y》)");
            } },
          gDrawLine: { name: "線描画", callback: function callback(k, e) {
              insertCode("線描画(《x1》,《y1》,《x2》,《y2》)");
            } },
          gDrawBox: { name: "矩形描画", callback: function callback(k, e) {
              insertCode("矩形描画(《x》,《y》,《幅》,《高さ》)");
            } },
          gFillBox: { name: "矩形塗描画", callback: function callback(k, e) {
              insertCode("矩形塗描画(《x》,《y》,《幅》,《高さ》)");
            } },
          gDrawCircle: { name: "円描画", callback: function callback(k, e) {
              insertCode("円描画(《x》,《y》,《半径》)");
            } },
          gFillCircle: { name: "円塗描画", callback: function callback(k, e) {
              insertCode("円塗描画(《x》,《y》,《半径》)");
            } },
          sleep: { name: "待つ", callback: function callback(k, e) {
              insertCode("《ミリ秒数》 ミリ秒待つ");
            } }
        }
      }
    }
  });
  $.contextMenu({
    selector: "#flowchart",
    build: contextMenu_Flowchart
  });
  // this code is from David Baron's Weblog
  // https://dbaron.org/log/20100309-faster-timeouts
  //	var timeouts = [];
  var messageName = "zero-timeout-message";

  // Like setTimeout, but only takes a function argument.  There's
  // no time argument (always zero) and no arguments (you have to
  // use a closure).
  function setZeroTimeout(fn) {
    timeouts.push(fn);
    window.postMessage(messageName, "*");
  }

  function handleMessage(event) {
    if (event.source == window && event.data == messageName) {
      event.stopPropagation();
      if (timeouts.length > 0) {
        var fn = timeouts.shift();
        fn();
      }
    }
  }

  if (window.addEventListener) window.addEventListener("message", handleMessage, true);else if (window.attachEvent) window.attachEvent("onmessage", handleMessage);

  // Add the one thing we want added to the window object.
  window.setZeroTimeout = setZeroTimeout;

  $(window).bind("beforeunload", function () {
    if (dirty) return "プログラムが消去されます";
  });
};

/**
 * 初期化するモジュール
 */
var startBlock = '<xml><block type="start" deletable="false"></block></xml>';
var initWorkspace = function initWorkspace() {
  // firefoxではなぜか動かない
  Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(startBlock), Blockly.mainWorkspace);
  Blockly.mainWorkspace.addChangeListener(Blockly.Events.disableOrphans);
};
//initBlocks();

/**
 * ステップ実行するモジュール
 */
/*
const stepButton = document.getElementById('stepButton');
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

let resetStepUi = function() {
  workspace.highlightBlock(null);
  highlightPause = false;
}

function generateCodeAndLoadIntoInterpreter() {
  Blockly.Pen.STATEMENT_PREFIX = 'highlightBlock(%1);\n';
  Blockly.Pen.addReservedWords('highlightBlock');
  latestCode = Blockly.Pen.workspaceToCode(workspace);
//        const source = Blockly.Pen.workspaceToCode(Code.workspace);
//  resetStepUi(true);
}

let stepCode = function() {
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
        resetStepUi();
        stepButton.disabled = 'disabled';
        setTimeout(function() {
          stepButton.disabled = '';
        }, 2000);
        return;
      }
    }
  } while (hasMoreCode && !highlightPause);
};

stepButton.onclick = function() {
  stepCode();
};

generateCodeAndLoadIntoInterpreter();
workspace.addChangeListener(function(event) {
  if (!(event instanceof Blockly.Events.Ui)) {
    generateCodeAndLoadIntoInterpreter();
  }
});
*/

/**
 * ブロックを保存するモジュール
 */
var saveButton = document.getElementById('saveButton');
var saveBlocks = function saveBlocks() {
  var fileName = 'myprogram.xml';
  var xml = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
  var xmltext = Blockly.Xml.domToPrettyText(xml);
  var blob = new Blob([xmltext], {
    type: 'text/xml'
  });
  var a = document.createElement('a');
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
saveButton.onclick = function () {
  saveBlocks();
};

/**
 * ブロックを読み込むモジュール
 */
var loadButton = document.getElementById('loadButton');
var loadBlocks = function loadBlocks() {
  var input = document.createElement("input");
  input.type = "file";
  input.id = "loadFile";
  input.accept = "text/xml";

  input.addEventListener("change", function (event) {
    var file = event.target.files[0]; // inputから取得したFileListオブジェクトから読み込んだFileオブジェクトを取得
    var reader = new FileReader(); // Fileオブジェクトの情報を読み込むためにFileReaderオブジェクトを生成する
    reader.readAsText(file); // FileReaderオブジェクトにFileオブジェクトのテキスト情報を読み込む
    reader.onload = function () {
      var xml = Blockly.Xml.textToDom(reader.result); // readAsTextで読み込んだ情報はreader.resultで取得できる
      Blockly.mainWorkspace.clear();
      Blockly.Xml.domToWorkspace(xml, Blockly.mainWorkspace);
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
loadButton.onclick = function () {
  loadBlocks();
};

/**
 * 実行結果をリセットするモジュール
 */
var resetButton = document.getElementById('resetButton');
resetButton.onclick = function () {
  reset();
};

/*
 * ブロックをリセットするモジュール
 */
var resetBlocksButton = document.getElementById('trashButton');
var resetBlocks = function resetBlocks() {
  Blockly.mainWorkspace.clear();
  initWorkspace();
};
resetBlocksButton.onclick = function () {
  resetBlocks();
  reset();
};

/**
 * 変数カテゴリのモジュール
 */
/*
window.addEventListener('load', function() {
  const buttonName = '変数を作成する';
  Code.workspace.registerToolboxCategoryCallback('MYVARIABLE', function(workspace) {
    var vars = Blockly.Variables.getAddedVariables(Code.workspace, []);
    var xmlList = [];
    var buttonText = '<xml>' +
      '<button text="' + buttonName + '" callbackKey="CreateVariableButton"></button>' +
      '</xml>';
    var button = Blockly.Xml.textToDom(buttonText).firstChild;
    xmlList.push(button);
    var numOfVar = Blockly.Variables.getAddedVariables(Code.workspace, []).length;
    if (numOfVar > 0) {
      var declarerText = '<xml>' +
        '<block type="variable_declare">' +
        '<field name="VAR">' + vars[vars.length-1].name + '</field>' +
        '</block>' +
        '</xml>';
      var declarer = Blockly.Xml.textToDom(declarerText).firstChild;
      xmlList.push(declarer);
      var setterText = '<xml>' +
        '<block type="variable_set">' +
        '<field name="VAR">' + vars[vars.length-1].name + '</field>' +
        '</block>' +
        '</xml>';
      var setter = Blockly.Xml.textToDom(setterText).firstChild;
      xmlList.push(setter);
    }
    for (let i = 0; i < numOfVar; i++) {
      var getterText = '<xml>' +
        '<block type="variable_get">' +
        '<field name="VAR">' + vars[i].name + '</field>' +
        '</block>' +
        '</xml>';
      var getter = Blockly.Xml.textToDom(getterText).firstChild;
      xmlList.push(getter);
    }
    return xmlList;
  });
  Code.workspace.registerButtonCallback('CreateVariableButton', function(button) {
    Blockly.Variables.createVariable(button.getTargetWorkspace(), null, null);
  });
}, false);
*/
/**
 * 変数宣言が必要かチェックするモジュール
 */
var isDeclarationNecessary = document.varForm.isDeclarationNecessary;
isDeclarationNecessary.checked = true;
setting.var_declaration = 0;
isDeclarationNecessary.addEventListener('change', function () {
  if (this.checked) {
    setting.var_declaration = 0;
  } else {
    setting.var_declaration = 1;
  }
});

/**
 * ツールボックスのレベルを変更するモジュール
 */
function changeToolboxLevel() {
  var value = document.learnerLevelForm.level.value;
  var toolbox = void 0;
  switch (value) {
    case 'debugger':
      toolbox = document.getElementById('toolbox0');
      break;
    case 'beginner':
      toolbox = document.getElementById('toolbox1');
      break;
    case 'intermediate':
      toolbox = document.getElementById('toolbox2');
      break;
    default:
      console.log('Unknown Learner Level');
      return;
      break;
  }
  /*
  const sampleXml = document.getElementById('samples');
  toolbox.appendChild(sampleXml.firstElementChild);
  */
  var toolboxText = toolbox.outerHTML.replace(/{(\w+)}/g, function (m, p1) {
    return MSG[p1];
  });
  var toolboxXml = Blockly.Xml.textToDom(toolboxText);
  Code.workspace.updateToolbox(toolboxXml);
}
window.addEventListener('load', function () {
  document.learnerLevelForm.addEventListener('change', changeToolboxLevel);
  changeToolboxLevel();
});

/**
 * 設定ボタンに関するモジュール
 */
function showHide4SettingMenu() {
  var settingMenu = document.getElementById('settingMenu');
  settingMenu.style.display = settingMenu.style.display === 'none' ? '' : 'none';
}
function hide4SettingMenu() {
  document.getElementById('settingMenu').style.display = 'none';
}
document.addEventListener('click', function (event) {
  var clickedSettingButton = $(event.target).closest('#settingButton').length;
  var clickedSettingMenu = $(event.target).closest('#settingMenu').length;
  if (clickedSettingButton) {
    showHide4SettingMenu();
  } else if (!clickedSettingMenu) {
    hide4SettingMenu();
  }
});
hide4SettingMenu();
