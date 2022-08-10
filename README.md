# Blob Mob Fullstack Game

I decided to add a backend login and leaderboard to my javascript game [Blob Mob](https://github.com/xxzbuckxx/Blob-Mob) which can be played [here](https://xxzbuckxx.github.io/Blob-Mob/).

## Frontend

### Requirements

For development you need Node.js installed in your enviroment.

### Install

``` Bash
$ git clone git@github.com:xxzbuckxx/tic-tac-toe-react-demo.git
$ cd tic-tac-toe-react-demo
$ npm install
```

### Configure App

Open `vite.config.ts` to change the deployment url (called `base`).

### Running the project

`$ npm run dev`

### Simple build for production

`$ npm run build`

## Backend

### Requiremnts

For development you need Node.js, the amazon CDK cli, and an AWS account.

### Deploy

``` Bash
$ npm run build
$ cdk synth
$ cdk deploy
```