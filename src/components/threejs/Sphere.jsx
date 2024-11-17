import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { SimplexNoise } from 'three/addons/math/SimplexNoise.js';

const NoisySphere = () => {
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
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.offsetWidth, container.offsetHeight);
    container.appendChild(renderer.domElement);

    // Create a sphere
    const geometry = new THREE.SphereGeometry(5, 64, 64); // More segments for smoother deformation
    const material = new THREE.MeshStandardMaterial({
      color: 0xff8800,
      metalness: 0.3,
      roughness: 0.7,
    });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Add a light
    const light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(10, 10, 10);
    scene.add(light);

    camera.position.z = 15;

    // Simplex noise instance
    const simplex = new SimplexNoise();

    // Animate sphere vertices
    const animateSphere = () => {
      const time = performance.now() * 0.001;

      geometry.attributes.position.array.forEach((_, idx) => {
        if (idx % 3 === 0) {
          // Affect x, y, and z coordinates
          const x = geometry.attributes.position.array[idx];
          const y = geometry.attributes.position.array[idx + 1];
          const z = geometry.attributes.position.array[idx + 2];
          geometry.attributes.position.array[idx] +=
            simplex.noise3d(x / 5, y / 5, time) * 0.05;
          geometry.attributes.position.array[idx + 1] +=
            simplex.noise3d(y / 5, z / 5, time) * 0.05;
          geometry.attributes.position.array[idx + 2] +=
            simplex.noise3d(z / 5, x / 5, time) * 0.05;
        }
      });

      geometry.attributes.position.needsUpdate = true; // Notify Three.js of changes
    };

    // Rotate sphere
    const rotateSphere = () => {
      sphere.rotation.x += 0.01;
      sphere.rotation.y += 0.01;
    };

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      animateSphere();
      rotateSphere();
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

export default NoisySphere;
