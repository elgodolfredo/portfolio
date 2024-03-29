'use client'
import { useState, useEffect, useRef, useCallback } from 'react'
import { Box, Spinner } from '@chakra-ui/react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { loadGLTFModel } from '../lib/model'

function easeOutCirc(x) {
  return Math.sqrt(1 - Math.pow(x - 1, 4));
}

const Voxel = () => {
  const refContainer = useRef();
  const [loading, setLoading] = useState(true);
  const renderer = useRef();
  const wholeAssVoxel = useRef();
  const [_camera, setCamera] = useState();
  const target = useRef(new THREE.Vector3(-0.5, 1.2, 0));
  const initialCameraPosition = useRef(
    new THREE.Vector3(
      20 * Math.sin(0.2 * Math.PI),
      10,
      20 * Math.cos(0.2 * Math.PI)
    )
  );
  const scene = useRef(new THREE.Scene());
  const [_controls, setControls] = useState();

  useEffect(()=> {
    const { current: container} = refContainer;
    if ( container && !renderer.current ) {
      const scW = container.clientWidth;
      const scH = container.clientHeight;
      const renderer2 = new THREE.WebGLRenderer({ 
        // canvas: container,
        antialias: true, 
        alpha: true 
      });
      renderer2.setPixelRatio(window.devicePixelRatio);
      renderer2.setSize(scW, scH);
      renderer2.outputColorSpace = THREE.sRGBEncoding;
      renderer2.outputEncoding = THREE.sRGBEncoding;

      const scale = scH * 0.005 + 1.8
      const camera = new THREE.OrthographicCamera(
        -scale,
        scale,
        scale,
        -scale,
        0.01,
        50000
      );
      camera.position.copy(initialCameraPosition.current);
      camera.lookAt(target.current);
      setCamera(camera);

      const ambientLight = new THREE.AmbientLight(0xcccccc, 1)
      ambientLight.position.set(0, 0, 0);
      scene.current.add(ambientLight);

      const controls = new OrbitControls(camera, renderer2.domElement);
      controls.autoRotate = true;
      controls.target = target.current;
      setControls(controls);
      // container.appendChild(renderer2.domElement);
      // replace the container content with the renderer domElement
      if (!wholeAssVoxel.current){
        container.appendChild(renderer2.domElement);
        wholeAssVoxel.current = renderer2;
      } else {
        container.replaceChild(renderer2.domElement, wholeAssVoxel.current.domElement);
      }
      loadGLTFModel(scene.current, '/mate.glb', {
        receiveShadow: true,
        castShadow: true,
      }).then(() => {
        setLoading(false);
      });

      let req = null;
      let frame = 0;
      const animate = () => {
        req = requestAnimationFrame(animate);
        frame = frame <= 100 ? frame + 1 : frame;
        if ( frame <= 100 ){
          const p = initialCameraPosition.current;
          const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20;
          camera.position.y = 10;
          camera.position.x = p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);
          camera.position.z = p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);
          camera.lookAt(target.current);
        } else {
          controls.update();
        }
        renderer2.render(scene.current, camera);
      };
      animate();
      return () => {
        cancelAnimationFrame(req);
        renderer2.dispose();
      }

    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const { current: container } = refContainer;
      if (container && renderer.current) {
        const scW = container.clientWidth;
        const scH = container.clientHeight;
        renderer.current.setSize(scW, scH);
      }
    };
    window.addEventListener('resize', handleResize, false);
    return () => {
      window.removeEventListener('resize', handleResize, false);
    }
  }, []);

  return <>
  <Box
      ref={refContainer}
      className='keyboard' 
      m="auto"
      height={400}
      width={500}
      paddingBottom={20}
    >
    {loading && <Spinner size='xl' />}
    </Box>
  </>
}

export default Voxel;