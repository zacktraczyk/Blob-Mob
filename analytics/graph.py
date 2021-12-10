import matplotlib.pyplot as plt

f = open("../scripts/difficulty.js", "r")

f.readline()
f.readline()

diff = None
table = {}
p = {}
e = {}
target = 0 # 0 is player

# Parse
for l in f:
    l = l.split()
    if len(l) < 2:
        continue

    # Detect difficulty change
    l[0] = l[0][:-1]
    if l[0].isnumeric():
        if (diff != None):
            table[diff] = {'player': dict(p), 'enemy': dict(e)}
        diff = int(l[0])
        continue

    # Detect Enemy/player change
    if l[1] == '{': 
        if l[0] == 'player':
            target = 0
        if l[0] == 'enemy':
            target = 1
        continue

    if target == 0: # player
        p[l[0]] = float(l[1][:-1])
    if target == 1: # enemy
        e[l[0]] = float(l[1][:-1])

table[diff] = {'player': p, 'enemy': e}

# Refit
for t in ['player', 'enemy']:
    for a in list(table[list(table.keys())[0]][t].keys()):
        for di in list(table.keys()):
            if a == 'health':
                table[di][t][a] /= 100
            if a == 'maxInst':
                table[di][t][a] /= 10

# Draw
plt.rcParams['figure.figsize'] = [4, 12]
plt.xlabel('difficulty')
plt.ylabel('value')

xpoints = list(map(int, (table.keys())))

x = []
y = []

for t in ['player', 'enemy']:
    plt.title(t)
    for a in list(table[list(table.keys())[0]][t].keys()):
        x = []
        y = []
        for di in list(table.keys()):
            x.append(di)
            y.append(table[di][t][a])
        plt.plot(x, y, '--o', label = a)

    plt.xticks(xpoints, xpoints)
    plt.legend()
    plt.show()

