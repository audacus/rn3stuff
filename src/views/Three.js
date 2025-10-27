import {GLView} from 'expo-gl';
import * as THREE from 'three';
import {Renderer} from 'expo-three';
import getStyleHelper from "../style";

export default function Three() {

  const styleHelper = getStyleHelper();
  const backgroundColor = styleHelper.getBackgroundColor().hex;
  const foregroundColor = styleHelper.getForegroundColor().hex;

  return (
    <GLView
      style={{flex: 1}}
      onContextCreate={(gl) => {
        // scene
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(backgroundColor);

        // camera
        const camera = new THREE.PerspectiveCamera(
          75,
          gl.drawingBufferWidth / gl.drawingBufferHeight,
          0.1,
          1000
        );
        camera.position.z = 5;

        // renderer
        const renderer = new Renderer({gl});

        // cube
        const geometry = new THREE.BoxGeometry();
        const cube = new THREE.Mesh(geometry);
        cube.material.color = new THREE.Color(foregroundColor);

        // wireframe
        const wireframe = new THREE.WireframeGeometry(geometry);
        const line = new THREE.LineSegments(wireframe);
        line.material.color = new THREE.Color(backgroundColor);
        line.material.depthTest = false;
        line.material.transparent = true;

        scene.add(cube);
        scene.add(line);

        const animate = () => {
          requestAnimationFrame(animate);

          // rotation
          cube.rotation.x += 0.01;
          line.rotation.x += 0.01;

          cube.rotation.y += 0.01;
          line.rotation.y += 0.01;

          // make scene responsive
          const canvas = renderer.domElement;
          const width = gl.drawingBufferWidth;
          const height = gl.drawingBufferHeight;
          const needResize = canvas.width !== width || canvas.height !== height;
          if (needResize) {
            renderer.setSize(width, height, false);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
          }

          renderer.render(scene, camera);
          gl.endFrameEXP();
        };

        animate();
      }}
    />
  );
}


