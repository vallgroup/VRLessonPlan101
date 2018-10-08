// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {Math as VRMath, ReactInstance, Location} from 'react-360-web';

const cameraDirection = [0, 0, -1];

const _cameraMounted = new Location( [0, 0, 0] )

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    frame: () => {
      console.log(r360.getCameraPosition())
      // console.log(r360.getRotation())

      const cameraQuat = r360.getCameraQuaternion();
      console.log(cameraQuat)
      cameraDirection[0] = 0;
      cameraDirection[1] = 0;
      cameraDirection[2] = -1;
      // cameraDirection will point out from the view of the camera,
      // we can use it to compute surface angles
      VRMath.rotateByQuaternion(cameraDirection, cameraQuat);
      console.log( cameraDirection )
      const cx = cameraDirection[0];
      const cy = cameraDirection[1];
      const cz = cameraDirection[2];
      const horizAngle = Math.atan2(cx, -cz);
      const vertAngle = Math.asin(cy / Math.sqrt(cx * cx + cy * cy + cz * cz));
      // horizontalPanel.setAngle(horizAngle, -0.5);
      console.log(horizAngle, vertAngle);

      // _cameraMounted.setWorldPosition(cx, cy, cz)
      _cameraMounted.setWorldRotation(cx, cy, cz)
    },
    ...options,
  });

  // Render your app content to the default cylinder surface
  // r360.renderToSurface(
  //   r360.createRoot('VRLessonPlan101', { /* initial props */ }),
  //   r360.getDefaultSurface()
  // );

  r360.renderToLocation(
    r360.createRoot('VRLessonPlan101'),
    r360.getDefaultLocation(),
  );

  r360.renderToLocation(
    r360.createRoot('VRLessonPlan101Controller'),
    _cameraMounted,
  );

  console.log(r360)

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('360_world.jpg'));
}

window.React360 = {init};
