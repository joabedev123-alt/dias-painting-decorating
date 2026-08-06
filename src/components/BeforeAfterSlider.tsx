import React, { useState, useRef, useCallback } from 'react';
import { SlidersHorizontal } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  title?: string;
  subtitle?: string;
  isPlaceholderDemo?: boolean;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeLabel = "Before Preparation",
  afterLabel = "After Professional Finish",
  title,
  subtitle,
  isPlaceholderDemo = true,
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  }, []);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setIsDragging(true);
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  }, [handleMove]);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  }, [handleMove]);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    setIsDragging(true);
    handleMove(e.clientX);
  }, [handleMove]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  return (
    <div className="w-full">
      {(title || subtitle) && (
        <div className="text-center mb-8">
          {title && <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-dark mb-2">{title}</h3>}
          {subtitle && <p className="text-gray-600 text-sm max-w-xl mx-auto">{subtitle}</p>}
        </div>
      )}

      <div 
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchEnd={() => setIsDragging(false)}
        onTouchMove={handleTouchMove}
        className="relative w-full h-[320px] sm:h-[450px] lg:h-[500px] overflow-hidden rounded-md shadow-2xl select-none cursor-ew-resize border border-brand-border touch-none"
      >
        {/* After Image (Background layer) */}
        <img 
          src={afterImage} 
          alt="After painting and decorating finish" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-brand-dark/80 text-white text-[11px] sm:text-xs font-semibold px-2.5 py-1 sm:px-3 sm:py-1.5 rounded backdrop-blur-md z-10 border border-white/20">
          {afterLabel}
        </div>

        {/* Before Image (Clipped layer) */}
        <div 
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <img 
            src={beforeImage} 
            alt="Before preparation work" 
            className="absolute inset-0 w-full h-full object-cover max-w-none"
            style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}
          />
          <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-amber-900/80 text-amber-100 text-[11px] sm:text-xs font-semibold px-2.5 py-1 sm:px-3 sm:py-1.5 rounded backdrop-blur-md z-10 border border-amber-500/30">
            {beforeLabel}
          </div>
        </div>

        {/* Divider line and handle */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] z-20"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-brand-accent text-brand-dark flex items-center justify-center shadow-lg border-2 border-white cursor-pointer hover:scale-110 transition-transform">
            <SlidersHorizontal className="w-5 h-5" />
          </div>
        </div>

        {/* Interactive hint */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white/90 text-[11px] px-3 py-1 rounded-full backdrop-blur-sm z-10 pointer-events-none">
          Drag slider left or right to compare
        </div>
      </div>

      {isPlaceholderDemo && (
        <p className="text-center text-xs text-gray-500 italic mt-3">
          * Interactive demonstration slider prepared for official project before/after photography.
        </p>
      )}
    </div>
  );
};
