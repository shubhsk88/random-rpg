import Prefab from '../Prefab';

class Player extends Prefab {
  constructor(scene, name, position, properties) {
    super(scene, name, position, properties);

    this.walkingSpeed = Number(properties.walkingSpeed);

    this.body.collideWorldBounds = true;
    this.scene.physics.add.collider(this, this.scene.layers.buildings);
    this.cursors = this.scene.input.keyboard.createCursorKeys();

    this.moving = { left: false, right: false, front: false, back: false };
    const anims = this.scene.anims;
    anims.create({
      key: 'front',
      frames: anims.generateFrameNumbers(this.texture.key, {
        frames: [0, 4, 8, 12],
      }),
      frameRate: 6,
      repeat: 1,
    });
    anims.create({
      key: 'back',
      frames: anims.generateFrameNumbers(this.texture.key, {
        frames: [1, 5, 9, 13],
      }),
      frameRate: 6,
      repeat: 1,
    });
    anims.create({
      key: 'left',
      frames: anims.generateFrameNumbers(this.texture.key, {
        frames: [2, 6, 10, 14],
      }),
      frameRate: 6,
      repeat: 1,
    });
    anims.create({
      key: 'right',
      frames: anims.generateFrameNumbers(this.texture.key, {
        frames: [3, 7, 11, 15],
      }),
      frameRate: 6,
      repeat: 1,
    });
  }

  update() {
    this.body.setVelocity(0);
    let { cursors } = this;
    console.log(this.moving);
    if (cursors.left.isDown) {
      this.body.setVelocityX(-100);
    } else if (cursors.right.isDown) {
      this.body.setVelocityX(100);
    } else if (cursors.up.isDown) {
      this.body.setVelocityY(-100);
    } else if (cursors.down.isDown) {
      this.body.setVelocityY(100);
    }

    if (cursors.left.isDown) {
      this.anims.play('left', true);
    } else if (cursors.right.isDown) {
      this.anims.play('right', true);
    } else if (cursors.up.isDown) {
      this.anims.play('back', true);
    } else if (cursors.down.isDown) {
      this.anims.play('front', true);
    } else this.anims.stop();
  }
  changeMovement(direction, move) {
    this.moving[direction] = move;
  }
}

export default Player;
