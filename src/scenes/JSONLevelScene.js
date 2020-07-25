import Prefab from '../Prefabs/Prefab';
import TextPrefab from '../Prefabs/TextPrefab';
import UserInput from '../plugins/UserInput';
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
    this.userInput = new UserInput(this);
    this.userInputData = this.cache.json.get(this.levelData.userInput.key);
    this.userInput.setInput(this.userInputData);
  }
  update() {
    for (let prefabName in this.prefabs) {
      this.prefabs[prefabName].update();
    }
  }
}

export default JSONLevelScene;
