import Phaser from 'phaser';
import TitleScene from './scenes/TitleScene';
import BootScene from './scenes/BootScene';

let bootScene = new BootScene();
let titleScene = new TitleScene();

const config = {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: 640,
  height: 360,
};

const game = new Phaser.Game(config);

game.scene.add('TitleScene', titleScene);
game.scene.add('BootScene', bootScene);
game.scene.start('BootScene');
