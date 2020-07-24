import Prefab from '../Prefab';

class Player extends Prefab {
  constructor(scene, name, position, properties) {
    super(scene, name, position, properties);

    this.walkingSpeed = Number(properties.walkingSpeed);

    this.body.collideWorldBounds = true;
    this.scene.physics.add.collider(this, this.scene.layers.buildings);
    this.cursors = this.scene.input.keyboard.createCursorKeys();
    console.log(this.scene);
  }
  update() {
    this.body.setVelocity(0);
    let { cursors } = this;
    console.log(cursors);
    if (cursors.left.isDown) {
      this.body.setVelocityX(-100);
    } else if (cursors.right.isDown) {
      this.body.setVelocityX(100);
    } else if (cursors.up.isDown) {
      this.body.setVelocityY(-100);
    } else if (cursors.down.isDown) {
      this.body.setVelocityY(100);
    }
  }
}

export default Player;
