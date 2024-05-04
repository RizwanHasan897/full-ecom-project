// Card3DComponent.js
import React, { useRef } from 'react';
import { Canvas, extend, useThree } from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

extend({ OrbitControls });

export function Controls() {
    const { camera, gl } = useThree();
    const controlsRef = useRef();

    return (
        <orbitControls
            ref={controlsRef}
            args={[camera, gl.domElement]}
            enableDamping
            dampingFactor={0.25}
            maxDistance={10} // Limiting the max zoom distance
            minDistance={2} // Adjust this value according to your scene's scale
        />
    );
}

function Card3DComponent() {
    const meshRef = useRef();

    return (
        <mesh ref={meshRef}>
            <boxGeometry args={[2, 2, 0.2]} />
            <meshStandardMaterial color="hotpink" />
        </mesh>
    );
}

export default Card3DComponent;
