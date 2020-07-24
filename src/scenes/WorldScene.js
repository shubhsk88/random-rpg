import JSONLevelScene from './JSONLevelScene';
import Prefab from '../Prefabs/Prefab';
import TextPrefab from '../Prefabs/TextPrefab';
import Player from '../Prefabs/world/Player';
class WorldScene extends JSONLevelScene {
  constructor() {
    super('WorldScene');
    this.prefabClasses = {
      player: Player.prototype.constructor,
    };
  }
  create() {
    this.map = this.add.tilemap(this.levelData.map.key);
    let tilesetIndex = 0;
    this.tilesets = {};
    this.map.tilesets.forEach((tileset) => {
      let mapTileset = this.map.addTilesetImage(
        tileset.name,
        this.levelData.map.tilesets[tilesetIndex]
      );
      this.tilesets[this.levelData.map.tilesets[tilesetIndex]] = mapTileset;
      tilesetIndex += 1;
    }, this);
    this.layers = {};
    console.log(this.prefabClasses);

    this.map.layers.forEach((layer) => {
      this.layers[layer.name] = this.map.createStaticLayer(
        layer.name,
        this.tilesets[layer.properties.tileset]
      );
      if (layer.properties.collision) {
        this.map.setCollisionByExclusion([-1], true, layer.name);
      }
    }, this);
    super.create();
   
    this.map.objects.forEach((objectLayer) => {
      objectLayer.objects.forEach(this.createObject, this);
    });
  }
  createObject(object) {
    let position = {
      x: object.x + object.width / 2,
      y: object.y + object.height / 2,
    };

    if (this.prefabClasses.hasOwnProperty(object.type)) {
      let prefab = new this.prefabClasses[object.type](
        this,
        object.name,
        position,
        object.properties
      );
    }
  }
}

export default WorldScene;
