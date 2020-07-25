import titlescene from '../assets/levels/titlescene.json';
import worldscene from '../assets/levels/town.json';
class BootScene extends Phaser.Scene {
  constructor() {
    super({ key: 'BootScene' });
    this.levels = {
      title: { key: 'TitleScene', path: titlescene },
      town: { key: 'WorldScene', path: worldscene },
    };
  }
  preload() {
    for (let level_name in this.levels) {
      let level = this.levels[level_name];
      console.log(level);
      this.load.json(level_name, level.path);
    }
  }
  create(data) {
    let levelData = this.cache.json.get(data.scene);

    this.scene.start('LoadingScene', {
      levelData,
      scene: this.levels[data.scene].key,
    });
  }
}

export default BootScene;
