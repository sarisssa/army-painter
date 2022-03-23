import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/bt.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.wire_008110134} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.wire_026177026} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.wire_028089177} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.wire_086086086} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.wire_088199225} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.wire_134110008} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.wire_154185229} />
        <mesh geometry={nodes.Object_9.geometry} material={materials.wire_224198087} />
        <mesh geometry={nodes.Object_10.geometry} material={materials.wire_227152152} />
      </group>
    </group>
  )
}

useGLTF.preload('/bt.gltf')
