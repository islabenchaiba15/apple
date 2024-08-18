import React from 'react';
import { useThree } from '@react-three/fiber';
import { AxesHelper } from 'three';

export default function Axes({ size = 10 }) {
  const { scene } = useThree();
  
  React.useEffect(() => {
    const axesHelper = new AxesHelper(size);
    scene.add(axesHelper);
    
    return () => {
      scene.remove(axesHelper);
    };
  }, [scene, size]);

  return null;
}