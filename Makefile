#JISONS := WaPEN/dncl.js
#JSS := WaPEN/run_es5.js index_es5.js
JISONS := WaPEN/dncl.jison
generatedFiles := $(patsubst %.jison,%.js,$(JISONS))
JSS := WaPEN/run.js index.js
transcompiledFiles := $(patsubst %.js,%_es5.js,$(JSS))

.PHONY: all
#all: $(JISONS) $(JSS)
all: $(generatedFiles) $(transcompiledFiles) 

WaPEN/dncl.js: WaPEN/dncl.jison
	jison $< -o $@

WaPEN/run_es5.js: WaPEN/run.js
	babel $< -o $@

index_es5.js: index.js
	babel $< -o $@

#$(JISONS):
#	jison $(patsubst %.js,%.jison,$@) -o $@

#$(JSS):
#	babel $(patsubst %_es5.js,%.js,$@) -o $@

.PHONY: clean
clean:
#	-rm -f $(JISONS) $(JSS)
	-rm -f $(generatedFiles) $(transcompiledFiles)

