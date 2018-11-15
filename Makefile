JISONS := WaPEN/dncl.js
JSS := WaPEN/run_es5.js index_es5.js

.PHONY: all
all: $(JISONS) $(JSS)

$(JISONS):
	jison $(patsubst %.js,%.jison,$@) -o $@

$(JSS):
	babel $(patsubst %_es5.js,%.js,$@) -o $@

.PHONY: clean
clean:
	-rm -f $(JISONS) $(JSS)
