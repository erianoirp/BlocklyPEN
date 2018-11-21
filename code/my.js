/*selectbox非表示*/
document.getElementById('languageMenu').setAttribute("style", "display:none");
var container = document.getElementById('content_area');
var margin_off = function(e) {
var bBox = Code.getBBox_(container);

for (var i = 0; i < Code.TABS_.length; i++) {
    var el = document.getElementById('content_' + Code.TABS_[i]);
    el.style.top = bBox.y + 'px';
    el.style.left = bBox.x + 'px';
    // Height and width need to be set, read back, then set again to
    // compensate for scrollbars.
    el.style.height = bBox.height + 'px';
    el.style.height = (2 * bBox.height - el.offsetHeight) + 'px';
    el.style.width = bBox.width + 'px';
    el.style.width = (2 * bBox.width - el.offsetWidth) + 'px';
    }
    // Make the 'Blocks' tab line up with the toolbox.
    if (Code.workspace && Code.workspace.toolbox_.width) {
    document.getElementById('tab_blocks').style.minWidth =
    (Code.workspace.toolbox_.width - 38) + 'px';
    // Account for the 19 pixel margin and on each side.
    }
};

/*margin非表示 */
//(window.onload = function() {
//  margin_off();
//})();　onloadが他と競合するため使用不可

$(function() {
  margin_off();
});

// コピーの処理
function ClipboardSetData(data){
	var body = document.body;
	if(!body) return false;

	var text_area = document.createElement("textarea");
	text_area.value = data;
	body.appendChild(text_area);
	text_area.select();
	var result = document.execCommand("copy");
	body.removeChild(text_area);
	return result;
}
// ※code.jsでクリップボードへ

 // var start = '<xml><block type="start" deletable="false"></block></xml>';
 // var hoge = Blockly;
 // console.log(hoge);
 // console.log(hoge);
 // Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(start), Blockly.Workspace);
 // Blockly.Workspace.addChangeListener(Blockly.Events.disableOrphans);

// 翻訳不必要言語タブ非表示
document.getElementById('tab_javascript').setAttribute("style", "display:none");
document.getElementById('tab_python').setAttribute("style", "display:none");
document.getElementById('tab_php').setAttribute("style", "display:none");
document.getElementById('tab_lua').setAttribute("style", "display:none");
document.getElementById('tab_dart').setAttribute("style", "display:none");
document.getElementById('tab_xml').setAttribute("style", "display:none");
//ボタン非表示
//document.getElementById('runButton').setAttribute("style", "display:none");
document.getElementById('linkButton').setAttribute("style", "display:none");
