"use client";

import { Environment, OrbitControls, PerspectiveCamera, GradientTexture, Stats } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import {  useMemo, useRef} from "react";
import * as THREE from "three" ;




function Points() {
        // Particle system
        const particlesRef = useRef();
        const linesRef = useRef();
        const particleCount = 230;
        const particleSpeed = 0.001;
        const directionChangeSpeed = 0.01;
        const maxDistance = 0.3;




        // Initial positions and directions
        const { particlesGeometry, initialDirections } = useMemo(() => {
            const geometry = new THREE.BufferGeometry();
            const positions = new Float32Array(particleCount * 3); // 3 værdier pr. partikel (x, y, z)
            const directions = new Array(particleCount).fill().map(() => new THREE.Vector3(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5));
            
            for (let i = 0; i < particleCount; i++) {
                let ix = i * 3;
                positions[ix] = Math.random() * 1 - 0.5; // x-akse, bredde
                positions[ix + 1] = Math.random() * 2.3 - 1.5; // y-akse, højde
                positions[ix + 2] = Math.random() * 1 - 0.5; // z-akse
            }
            
            geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
            return { particlesGeometry: geometry, initialDirections: directions };
        }, []);


    // Create an array to hold line positions
    const [lineGeometry] = useMemo(() => {
        const geometry = new THREE.BufferGeometry();
        const maxLines = particleCount * (particleCount - 1) / 2; // Maximum possible lines
        const positions = new Float32Array(maxLines * 3 * 2); // 2 vertices per line, 3 coordinates each
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        return [geometry];
    }, []);



    
        useFrame(() => {
            const positions = particlesRef.current.geometry.attributes.position.array;
            const linePositions = linesRef.current.geometry.attributes.position.array;
            const directions = initialDirections;


            for (let i = 0; i < particleCount; i++) {
                let idx = i * 3;
                for (let j = 0; j < 3; j++) {
                    // Update positions according to direction
                    positions[idx + j] += directions[i].getComponent(j) * particleSpeed;
    
                    // Change direction slightly
                    directions[i].setComponent(j, directions[i].getComponent(j) + (Math.random() - 0.5) * directionChangeSpeed);
    
                    // Keep particles inside the box
                    if (Math.abs(positions[idx + j]) > 0.5) {
                        directions[i].setComponent(j, -directions[i].getComponent(j));
                    }
                }
            }

            let lineIdx = 0;
        for (let i = 0; i < particleCount - 1; i++) {
            for (let j = i + 1; j < particleCount; j++) {
                const dx = positions[i * 3] - positions[j * 3];
                const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
                const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
                const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

                if (dist < maxDistance) {
                    linePositions[lineIdx++] = positions[i * 3];
                    linePositions[lineIdx++] = positions[i * 3 + 1];
                    linePositions[lineIdx++] = positions[i * 3 + 2];

                    linePositions[lineIdx++] = positions[j * 3];
                    linePositions[lineIdx++] = positions[j * 3 + 1];
                    linePositions[lineIdx++] = positions[j * 3 + 2];
                }
            }
        }

            linesRef.current.geometry.setDrawRange(0, lineIdx / 3);
            linesRef.current.geometry.attributes.position.needsUpdate = true;
            particlesRef.current.geometry.attributes.position.needsUpdate = true;


        });
     
 

    return (
      < >
      
      <PerspectiveCamera makeDefault position={[0, 0, 1.7]} />
      <OrbitControls autoRotate autoRotateSpeed={0.6}/>
      <Stats />

    

      <points ref={particlesRef} geometry={particlesGeometry}  >
                <pointsMaterial size={0} color="white" transparent opacity={0.5} sizeAttenuation/>
      </points>
      <lineSegments ref={linesRef} side={THREE.BackSide} geometry={lineGeometry}>
      <lineBasicMaterial color="#0ABDC6" transparent opacity={0.5}/>
      </lineSegments> 
      

      
      <Environment background>
      
      <mesh  scale={100} rotation={[0, 0, Math.PI / 2]}>
      <sphereGeometry args={[1, 84, 84]} />
      <meshBasicMaterial color="#eeb2ff" side={THREE.BackSide}>
      <GradientTexture
        stops={[0, 1]} // As many stops as you want
        colors={['#290845',"#021b26"]} // Colors need to match the number of stops
        size={200} // Size is optional, default = 1024
       />
      </meshBasicMaterial>

      </mesh>
    </Environment>
      
      
      </>
    )
}


export default Points;


