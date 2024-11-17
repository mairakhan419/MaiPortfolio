import React, { useEffect, useRef, useState } from 'react';
import { useThree, Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

export function Scene() {
  const { camera, scene, gl } = useThree();
  const houses = useRef([]);

  useEffect(() => {
    // Perform custom initialization or adjustments to the camera, scene, or renderer
    // camera.position.set(0, 5, 10); // Move the camera back a bit
    camera.lookAt(scene.position);

    const planeGeometry = new THREE.PlaneGeometry(100, 100);
    const planeMaterial = new THREE.MeshLambertMaterial({
      color: 0x88ff55,
      side: THREE.DoubleSide,
    });
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotation.x += Math.PI / 2;
    scene.add(plane);
    plane.receiveShadow = true;

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0x404040, 1); // Soft white light
    scene.add(ambientLight);

    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5); // Position the light source
    // scene.add(directionalLight);

    // // Optional: Add a helper to visualize the directional light
    // const lightHelper = new THREE.DirectionalLightHelper(directionalLight, 1);
    // scene.add(lightHelper);
    addHouses();
    return () => {
      // Cleanup resources
      if (houses.current.length != 0) {
        houses.current.forEach((house) => {
          console.log(house);
          scene.remove(house);
          house.geometry.dispose();
          house.material.dispose();
        });
      }
      console.log(houses);
      scene.remove(ambientLight, directionalLight, plane);
      //   geometry.dispose();
      //   material.dispose();
    };
  }, [camera, scene, gl]);

  function addHouses() {
    const house4 = makeHouse(2, 2.2, 1, 0xabf2da, 0, 0, 1.5);
  }

  function makeHouse(x, y, z, color, x1, y1, z1) {
    const geometry = new THREE.BoxGeometry(x, y, z);
    const material = new THREE.MeshLambertMaterial({ color });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.y += y / 2;
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    houses.current.push(mesh);
    mesh.position.x += x1;
    mesh.position.y += y1;
    mesh.position.z += z1;
    scene.add(mesh);
    return mesh;
  }

  return null; // No visual components here, it's used for logic
}
