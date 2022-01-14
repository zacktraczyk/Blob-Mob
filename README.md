# Blob-Mob
Javascript Canvas Game

Blobmob is an html5 Canvas game that was created during 2016 for coding practice.

Blobmob was originally designed on a chromebook webstie HTML compilier but was moved to a github repository in its final stages. All previous saves are owned and available in google drive if needed; music and sound effects made on garageband; sound utilizing howler.js.

---

# Compile

Javascript needs to be minified/compiled into `scripts.js`. I used
[Google Closure Compiler](https://github.com/fstrube/closure-auto-compiler) but
any js minifier works. If installed, run the Closure Compiler with `make`.

# Difficulty Graphs

There is a python script used to visualize the difficulty parameters. The
python libraries required are listed in requirements.txt. If venv is installed,
the enviroment can be setup and executed automatically using the Makefile with
`make diff-curves`.

## Contributers

* Zack Traczyk <zstraczyk324@gmail.com>
