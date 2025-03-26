import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';

export default function App() {
  return (
    <div style={{ width: '100vw', height: '100vh', background: '#f0f0f0' }}>
      <Canvas camera={{ position: [0, -400, 600], fov: 45 }}>
        <ambientLight />
        <Text
          position={[0, 0, 0]}
          fontSize={50}
          color="#006699"
          maxWidth={500}
          lineHeight={1.2}
          textAlign="center"
          anchorX="center"
          anchorY="middle"
          font="/fonts/Roboto_Bold.json" // ttfフォントを指定
        >
          {'こんにちは\nThree.js!'}
        </Text>
        <OrbitControls />
      </Canvas>
    </div>
  );
}
