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

      let sprite = undefined;
      switch (spriteData.type) {
        case 'sprite':
          sprite = this.add.sprite(
            spriteData.position.x,
            spriteData.position.y,
            spriteData.texture
          );
          break;
        case 'text':
          sprite = this.add.text(
            spriteData.position.x,
            spriteData.position.y,
            spriteData.text,
            spriteData.style
          );
          break;
        default:
          break;
      }
      this.sprites[spriteName] = sprite;

      this.groups[spriteData.group].add(sprite);
    }
  }
}

export default JSONLevelScene;
