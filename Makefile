JSS := index.js
transcompiledFiles := $(patsubst %.js,%_es5.js,$(JSS))

.PHONY: all
#all: $(JSS)
all: $(transcompiledFiles) 

index_es5.js: index.js
	babel $< -o $@

#$(JSS):
#	babel $(patsubst %_es5.js,%.js,$@) -o $@

.PHONY: clean
clean:
#	-rm -f $(JSS)
	-rm -f $(transcompiledFiles)

