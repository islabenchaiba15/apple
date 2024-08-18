'use client'
import React, { useState } from 'react';
import ColorContext from './colorContext';
import { useGLTF } from '@react-three/drei';

export const ColorProvider = ({ children }) => {
  const [currentColor, setCurrentColor] = useState({
   color:"#9BB5CE", text:"Sierra Blue", rgb:"155, 181, 206"
  });
  const { materials } = useGLTF("/3D-Model/scene.gltf");
  const updateColor = (color,text,rgb) => {
    setCurrentColor({color,text,rgb})
    materials.Body.color.set(color);
  };

  return (
    <ColorContext.Provider value={{ currentColor,setCurrentColor, updateColor }}>
      {children}
    </ColorContext.Provider>
  );
};