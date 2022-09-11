import {GLView} from 'expo-gl';
import * as THREE from 'three';
import {Renderer} from 'expo-three';
import getStyleHelper from "../style";

export default function Three() {

  const styleHelper = getStyleHelper()

  return (
    <GLView
      style={{flex: 1}}
      onContextCreate={(gl) => {
        // scene
        var scene = new THREE.Scene();
        scene.background = new THREE.Color(styleHelper.getBackgroundColor().hex);

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
        renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);

        // cube
        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({color: styleHelper.getForegroundColor().hex});
        const cube = new THREE.Mesh(geometry, material);

        // wireframe
        const wireframe = new THREE.WireframeGeometry(geometry);
        const line = new THREE.LineSegments(wireframe);
        line.material.depthTest = false;
        line.material.transparent = true;
        line.material.color = new THREE.Color(styleHelper.getBackgroundColor().hex);

        scene.add(cube);
        scene.add(line);

        const animate = () => {
          requestAnimationFrame(animate);
          cube.rotation.x += 0.01;
          line.rotation.x += 0.01;

          cube.rotation.y += 0.01;
          line.rotation.y += 0.01;

          renderer.render(scene, camera);
          gl.endFrameEXP();
        };

        animate();
      }}
    />
  );
}


