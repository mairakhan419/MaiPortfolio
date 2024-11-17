import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { SimplexNoise } from 'three/addons/math/SimplexNoise.js';

const ParticleWave = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // General setup
    const scene = new THREE.Scene();
    // scene.background = new THREE.Color('dimgray');

    const camera = new THREE.PerspectiveCamera(
      30,
      window.innerWidth / window.innerHeight,
    );
    camera.position.set(4, 2, 8);
    camera.lookAt(scene.position);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Create waves
    const geometry = new THREE.PlaneGeometry(6, 4, 250, 150);
    // const geometry = new THREE.CylinderGeometry(2, 2, 6, 100, 100, true); // Radius, height, segments
    const simplex = new SimplexNoise();

    const waves = new THREE.Points(
      geometry,
      new THREE.PointsMaterial({ size: 0.01, color: 0x444444 }),
    );
    // waves.rotation.z = -Math.PI / 2;
    waves.rotation.x = -Math.PI / 1.9;
    // waves.rotation.y = -Math.PI;

    scene.add(waves);

    const pos = geometry.getAttribute('position');
    const animationLoop = (t) => {
      for (let i = 0; i < pos.count; i++) {
        const x = pos.getX(i);
        const y = pos.getY(i);

        // Introduce additional noise and sine components
        const noise = 0.5 * simplex.noise3d(x / 3, y / 3, t / 6500) * 1.5;
        const wave =
          Math.sin((x + t / 4000) * 0.5) * Math.cos((y + t / 4000) * 0.75);

        // Combine noise and wave for Z displacement
        const z = noise + 0.01 * wave;
        pos.setZ(i, z);
      }
      pos.needsUpdate = true;

      renderer.render(scene, camera);
    };

    renderer.setAnimationLoop(animationLoop);

    // Cleanup function
    return () => {
      renderer.setAnimationLoop(null);
      window.removeEventListener('resize', handleResize);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div className="" ref={mountRef} />;
};

export default ParticleWave;
