import JSONLevelScene from './JSONLevelScene';
import Prefab from '../Prefabs/Prefab';
import TextPrefab from '../Prefabs/TextPrefab';

class TitleScene extends JSONLevelScene {
  constructor() {
    super('TitleScene');
    this.prefabClasses = {
      background: Prefab.prototype.constructor,
      text: TextPrefab.prototype.constructor,
    };
  }
}

export default TitleScene;
