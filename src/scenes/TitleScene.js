import bgimage from '../assets/images/battles/background.png';

class TitleScene extends Phaser.Scene {
  constructor() {
    super({ key: 'TitleScene' });
  }
  preload() {
    this.load.image('background_image', bgimage);
  }
  create() {
    let background = this.add.sprite(0, 0, 'background_image');
    background.setOrigin(0, 0);
    let title_text = this.add.text(100, 100, 'Pokemon Go ');
  }
}

export default TitleScene;
