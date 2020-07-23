import titlescene from '../assets/levels/titlescene.json';

class BootScene extends Phaser.Scene {
  constructor() {
    super({ key: 'BootScene' });
    this.levels = {
      title: { key: 'TitleScene', path: titlescene },
    };
  }
  preload() {
    for (let level_name in this.levels) {
      let level = this.levels[level_name];
      this.load.json(level_name, level.path);
    }
  }
  create() {
    let levelData = this.cache.json.get('title');
    console.log(levelData);
  }
}

export default BootScene;
