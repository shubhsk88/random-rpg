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
   
    this.levelData.groups.forEach((group) => {
      this.groups[group] = this.physics.add.group();
    }, this);
    this.sprites = {};
    this.prefabs = {};

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
  update() {
    for (let prefabName in this.prefabs) {
      this.prefabs[prefabName].update();
    }
  }
}

export default JSONLevelScene;
