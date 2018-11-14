all: WaPEN/dncl.js WaPEN/run1.js index_es5.js

WaPEN/dncl.js: WaPEN/dncl.jison
	jison WaPEN/dncl.jison
WaPEN/run1.js: WaPEN/run.js
	npm run buildRun
index_es5.js: index.js
	npm run buildIndex
