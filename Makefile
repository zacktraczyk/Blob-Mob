# Combine .js into a single file
COMPILED=script.js
ORDER=sound.js io.js player.js enemy.js game.js main.js

all: compile-order

compile-order:
	cd scripts; \
		echo "$(ORDER)" | xargs cat > $(COMPILED); \
		mv $(COMPILED) ../$(COMPILED)

compile-lexi:
	@find ./scripts -type f -name "*.js" | xargs cat > $(COMPILED)

