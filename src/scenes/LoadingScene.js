class LoadingScene extends Phaser.Scene {
  constructor() {
    super({ key: 'LoadingScene' });
  }
  init(data) {
    this.levelData = data.levelData;
    let loadingMessage = this.add.text(320, 240, 'Loading', {
      font: '48px Fondamento',
      fill: '#ffffff',
    });
  }
  preload() {
    let { assets } = this.levelData;
    for (let assetKey in assets) {
      let asset = assets[assetKey];
      switch (asset.type) {
        case 'image':
          this.load.image(assetKey, asset.source);

          break;
        case 'spritesheet':
          this.load.spritesheet(assetKey, asset.source, {
            frameWidth: asset.frame_width,
            frameHeight: asset.frame_height,
            frames: asset.frames,
            margin: asset.margin,
            spacing: asset.spacing,
          });
          break;
        default:
          break;
      }
    }
  }
  create() {
    console.log('Starting the title Scene');
  }
}

export default LoadingScene;
