import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Center, Environment, OrbitControls } from "@react-three/drei";
import { Card } from "@mui/material";
import Model from "./model";

import { Html, useProgress } from "@react-three/drei";

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress} % loaded</Html>;
}

export default function ModelRederer() {
  return (
    <Card sx={{ p: 3 }}>
      <Canvas style={{ height: "100vh" }}>
        <Suspense fallback={<Loader />}>
          <Center>
            <Model />
          </Center>
          <OrbitControls />
          <Environment preset="sunset" />
        </Suspense>
      </Canvas>
    </Card>
  );
}
