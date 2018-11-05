import {
  Module,
} from 'react-360-web';

export default class MoveCameraModule extends Module {
  constructor() {
    // Makes module avail @ NativeModules.MoveCameraModule
    super('MoveCameraModule');

    this.VR = null;
  }

  setVR(r360) {
    this.VR = r360;
  }

  // This method will be exposed to the React app
  move(pos) {
    // normalize coordinates
    const x = pos[0]
    const y = pos[1]
    const z = pos[2]
    // check for VR and update location
    if (this.VR) {
      this.VR._cameraPosition = [x, y, z];
      // check for camera to update all relative to the camera
      if (this._camera) {
        // Call this to make sure anything positioned relative to the camera is set up properly:
        this._camera.updateMatrixWorld(true);
      }
    }
  }
}