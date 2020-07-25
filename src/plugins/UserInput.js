class UserInput {
  constructor(scene) {
    this.scene = scene;
    this.enabled = false;
  }

  setInput(userInputData) {
    this.scene.input.keyboard.removeAllListeners('keydown');
    this.scene.input.keyboard.removeAllListeners('keyup');

    this.scene.input.keyboard.on('keydown', this.processInput, this);
    this.scene.input.keyboard.on('keyup', this.processInput, this);

    this.userInputs = userInputData;
    this.enabled = true;
  }
  processInput(event) {
    console.log(this.userInputs);
    if (this.enabled) {
      let userInput = this.userInputs[event.type][event.key];
      
      if (userInput) {
        let context = undefined;
        let callbackData = userInput.callback.split('.');
        if (callbackData[0] === 'scene') {
          context = this.scene;
        } else {
          context = this.scene.prefabs[callbackData[0]];
        }
        let method = context[callbackData[1]];
        method.apply(context, userInput.args);
      }
    }
  }
}
export default UserInput;
