MAKEFLAGS += --silent
# Combine .js into a single file
COMPILED=script.js
# ORDER=sound.js io.js player.js enemy.js game.js main.js
ORDER=enum.js difficulty.js sound.js button.js game.js scenes.js io.js player.js Enemy.js menu.js main.js tutorial.js gameover.js run.js
all: compile-order

compile-order:
	cd scripts; \
		echo "$(ORDER)" | xargs cat > $(COMPILED); \
		mv $(COMPILED) ../$(COMPILED)

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
		

compile-lexi:
	@find ./scripts -type f -name "*.js" | xargs cat > $(COMPILED)

