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
    console.log('theme vs currTheme', theme, this.currTheme)
    if (this.currTheme && this.currTheme == theme) {
      console.log('Sound: controller: already playing theme')
      return
    }

    console.log('Sound: controller: stopping all themes')
    this.mainTheme.stop()
    this.titleTheme.stop()
    this.shopTheme.stop()
    this.gameoverTheme.stop()

    switch (theme) {
      case Themes.Title:
        this.titleTheme.play()
        console.log('Sound: controller: playing Home')
        break
      case Themes.Shop:
        this.shopTheme.play()
        console.log('Sound: controller: playing Shop')
        break
      case Themes.Main:
        this.mainTheme.play()
        console.log('Sound: controller: playing Battle')
        break
      case Themes.Gameover:
        this.gameoverTheme.play()
        console.log('Sound: controller: playing gameover')
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
