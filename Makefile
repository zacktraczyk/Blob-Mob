MAKEFLAGS += --silent
COMPILED=script.js
ORDER=enum.js difficulty.js sound.js button.js game.js scenes.js io.js player.js Enemy.js menu.js main.js tutorial.js gameover.js run.js

all: closure-white

closure-white:
	google-closure-compiler --js scripts/**.js -O SIMPLE --js_output_file script.js

diff-curves: all
	cd analytics; \
		if [ -d  "venv" ]; then \
			source venv/bin/activate; \
			python3 graph.py; \
		else \
			python3 -m venv venv; \
			source venv/bin/activate; \
			pip3 install -r requirements.txt; \
			python3 graph.py; \
		fi; \
		
compile-order:
	cd scripts; \
		echo "$(ORDER)" | xargs cat > $(COMPILED); \
		mv $(COMPILED) ../$(COMPILED)

compile-lexi:
	@find ./scripts -type f -name "*.js" | xargs cat > $(COMPILED)

