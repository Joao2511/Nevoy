"use client";
import { useEffect } from "react";
import Spline from "@splinetool/react-spline";

export default function SplineViewer() {
  useEffect(() => {
    console.clear();
  }, []);

  return (
    <div className="w-full h-[700px] overflow-hidden">
      <Spline
        scene="https://prod.spline.design/accSi0qrqymLDjQI/scene.splinecode"
      />
    </div>
  );
}

