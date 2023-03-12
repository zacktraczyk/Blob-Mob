import { Howl } from 'howler'
import titleTheme from '@Assets/sound/music-main.mp3'
import mainTheme from '@Assets/sound/8-lit.mp3'
import shopTheme from '@Assets/sound/Good-portion-of-distortion.mp3'
import gameoverTheme from '@Assets/sound/Game-Over.mp3'

export enum Themes {
  Title,
  Main,
  Shop,
  Gameover,
}

class Sound {
  private titleTheme: Howl
  private mainTheme: Howl
  private shopTheme: Howl
  private gameoverTheme: Howl

  private currTheme: Themes | undefined

  constructor() {
    this.titleTheme = new Howl({
      src: [titleTheme],
      loop: true,
    })

    this.mainTheme = new Howl({
      src: [mainTheme],
      loop: true,
    })
    this.shopTheme = new Howl({
      src: [shopTheme],
      loop: true,
    })
    this.gameoverTheme = new Howl({
      src: [gameoverTheme],
      loop: true,
    })
  }

  play(theme: Themes): void {
    if (this.currTheme && this.currTheme == theme) {
      return
    }

    this.mainTheme.stop()
    this.titleTheme.stop()
    this.shopTheme.stop()
    this.gameoverTheme.stop()

    switch (theme) {
      case Themes.Title:
        this.titleTheme.play()
        break
      case Themes.Shop:
        this.shopTheme.play()
        break
      case Themes.Main:
        this.mainTheme.play()
        break
      case Themes.Gameover:
        this.gameoverTheme.play()
        break
    }

    this.currTheme = theme
  }

  mute(mute: boolean): void {
    this.mainTheme.mute(mute)
    this.titleTheme.mute(mute)
    this.shopTheme.mute(mute)
    this.gameoverTheme.mute(mute)
  }
}

export const sound = new Sound()
