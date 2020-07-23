import Phaser from 'phaser';
import TitleScene from './scenes/TitleScene';
let titleScene = new TitleScene();

const config = {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: 640,
  height: 360,
};

const game = new Phaser.Game(config);
game.scene.add('TitleScene', titleScene);
game.scene.start('TitleScene');
