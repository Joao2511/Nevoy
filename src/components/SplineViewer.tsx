'use client';
import { useEffect } from 'react';
import Spline from '@splinetool/react-spline';

export default function SplineViewer() {
  useEffect(() => {
    console.clear();
  }, []);

  return (
    <div className="h-[700px] w-full overflow-hidden">
      <Spline scene="https://prod.spline.design/accSi0qrqymLDjQI/scene.splinecode" />
    </div>
  );
}
