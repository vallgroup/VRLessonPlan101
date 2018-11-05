// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {
  Module,
  Location,
  ReactInstance,
} from 'react-360-web';
import MoveCameraModule from './NativeModules/MoveCameraModule'

// set the camera view location
const CameraView = new Location([0, 0, 0]);

function init(bundle, parent, options = {}) {
  // instantiate our MoveCameraModule
  const moveCamera = new MoveCameraModule();

  // instantiate our VR
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
    frame: () => {
      fixCameraViewPosition();
    },
    nativeModules: [
      moveCamera,
    ]
  });

  // set the VR for our MoveCameraModule
  moveCamera.setVR(r360);

  // render our world to the default location
  r360.renderToLocation(
    r360.createRoot('VRLessonPlan101'),
    r360.getDefaultLocation(),
  );

  // render our cameraView to a fixed position
  r360.renderToLocation(
    r360.createRoot('VRLessonPlan101Controller'),
    CameraView,
  );

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('360_world.jpg'));

  // set the camera view position to follow the camera
  function fixCameraViewPosition() {
    // fix CameraView to the camera
    const cameraQuat = r360.getCameraQuaternion()
    CameraView.setWorldRotation(
      cameraQuat[0],
      cameraQuat[1],
      cameraQuat[2],
      cameraQuat[3]
    );
    const cameraPos = r360.getCameraPosition()
    CameraView.setWorldPosition(
      cameraPos[0],
      cameraPos[1],
      cameraPos[2]
    );
  }
}

window.React360 = {init};
