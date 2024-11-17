import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { SimplexNoise } from 'three/addons/math/SimplexNoise.js';

const ThreeJSNoisePlane = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      container.offsetWidth / container.offsetHeight,
      0.1,
      1000,
    );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(container.offsetWidth, container.offsetHeight);
    container.appendChild(renderer.domElement);

    // Create a plane
    const geometry = new THREE.PlaneGeometry(10, 10, 50, 50);
    const material = new THREE.MeshBasicMaterial({
      color: 0x0077ff,
      wireframe: true,
    });
    const plane = new THREE.Mesh(geometry, material);
    scene.add(plane);

    camera.position.z = 10;

    // Simplex noise instance
    const simplex = new SimplexNoise();

    // Animate the plane vertices
    const animatePlane = () => {
      const time = performance.now() * 0.001;

      geometry.attributes.position.array.forEach((_, idx) => {
        if (idx % 3 === 2) {
          // Only adjust the z-coordinate
          const x = geometry.attributes.position.array[idx - 2];
          const y = geometry.attributes.position.array[idx - 1];
          geometry.attributes.position.array[idx] =
            simplex.noise3d(x / 2, y / 2, time) * 1.5;
        }
      });

      geometry.attributes.position.needsUpdate = true;
    };

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      animatePlane();
      renderer.render(scene, camera);
    };

    animate();

    // Resize handling
    const handleResize = () => {
      renderer.setSize(container.offsetWidth, container.offsetHeight);
      camera.aspect = container.offsetWidth / container.offsetHeight;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      container.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} style={{ width: '100vw', height: '100vh' }} />;
};

export default ThreeJSNoisePlane;
