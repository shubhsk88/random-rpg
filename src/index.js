import Phaser from 'phaser';
import TitleScene from './scenes/TitleScene';
import BootScene from './scenes/BootScene';
import LoadingScene from './scenes/LoadingScene';

let titleScene = new TitleScene();
let bootScene = new BootScene();
let loadingScene = new LoadingScene();
const config = {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: 640,
  height: 360,
};

const game = new Phaser.Game(config);

game.scene.add('TitleScene', titleScene);
game.scene.add('BootScene', bootScene);
game.scene.add('LoadingScene', loadingScene);
game.scene.start('BootScene', { scene: 'title' });
