import Prefab from '../Prefabs/Prefab';
import TextPrefab from '../Prefabs/TextPrefab';

class JSONLevelScene extends Phaser.Scene {
  constructor(key) {
    super({ key });
    
  }
  init(data) {
    this.levelData = data.levelData;
  }
  create() {
    this.groups = {};
    console.log(this.levelData.groups);
    this.levelData.groups.forEach((group) => {
      this.groups[group] = this.add.group();
    }, this);
    this.sprites = {};

    for (let spriteName in this.levelData.sprites) {
      let spriteData = this.levelData.sprites[spriteName];

      let sprite = new this.prefabClasses[spriteData.type](
        this,
        spriteName,
        spriteData.position,
        spriteData.properties
      );
    }
  }
}

export default JSONLevelScene;
