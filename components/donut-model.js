import { useState, useEffect, useRef, useCallback } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"; // Orbit controls allow the camera to orbit around a target.
import { loadGLTFModel } from "../libs/load-model";
import { DonutContainer, DonutSpinner } from "./donut-loader";

const Donut = () => {
  const containerRef = useRef();
  const [loading, setLoading] = useState(true); // loading on init
  const [renderer, setRenderer] = useState();
  const [_camera, setCamera] = useState();
  const [target] = useState(new THREE.Vector3(-0.5, 1.2, 0)); // x, y ,z
  const [initialCameraPosition] = useState(new THREE.Vector3(16, 14, 18)); // camera position x, y, z
  const [scene] = useState(new THREE.Scene());
  const [_controls, setControls] = useState();

  // when user resize window (or on diffirent devices)
  const handleWindowResize = useCallback(() => {
    const { current: container } = containerRef;
    if (container && renderer) {
      const scW = container.clientWidth;
      const scH = container.clientHeight;

      renderer.setSize(scW, scH);
    }
  }, [renderer]);

  // on init
  useEffect(() => {
    const { current: container } = containerRef;
    if (container && !renderer) {
      const scW = container.clientWidth;
      const scH = container.clientHeight;

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(scW, scH);
      renderer.outputEncoding = THREE.sRGBEncoding;
      container.appendChild(renderer.domElement);
      setRenderer(renderer);

      // 640 -> 280, 8->6
      // Scale
      const scale = scH * 0.035;
      const camera = new THREE.OrthographicCamera(
        -scale,
        scale,
        scale,
        -scale,
        0.01,
        50000
      );
      camera.position.copy(initialCameraPosition);
      camera.lookAt(target);
      setCamera(camera);

      const ambientLight = new THREE.AmbientLight(0xcccccc, 1);
      scene.add(ambientLight);

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.autoRotate = true;
      controls.target = target;
      setControls(controls);

      loadGLTFModel(scene, "/donut.glb", {
        receiveShadow: false,
        castShadow: false,
      }).then(() => {
        animate();
        setLoading(false);
      });

      let req = null;
      let frame = 0;

      // Animate
      const animate = () => {
        req = requestAnimationFrame(animate);
        frame = frame + 1;
        controls.update();
        renderer.render(scene, camera);
      };

      // clean up
      return () => {
        cancelAnimationFrame(req);
        renderer.dispose();
      };
    }
  }, []);

  // handle resize
  useEffect(() => {
    window.addEventListener("resize", handleWindowResize, false);
    //clean up
    return () => {
      window.removeEventListener("resize", handleWindowResize, false);
    };
  }, [renderer, handleWindowResize]);

  // render the donut
  return (
    <DonutContainer ref={containerRef}>
      {loading && <DonutSpinner />}
    </DonutContainer>
  );
};

export default Donut;
