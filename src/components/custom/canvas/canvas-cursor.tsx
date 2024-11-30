'use client';

import useCanvasCursor from '@/hooks/use-canvas-cursor';

const CanvasCursor = () => {
   useCanvasCursor();

   return <canvas className="pointer-events-none fixed inset-0 z-[9999]" id="canvas" />;
};
export default CanvasCursor;
