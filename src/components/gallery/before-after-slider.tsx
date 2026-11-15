'use client';

import { useRef, useState, type KeyboardEvent, type PointerEvent } from 'react';
import Image from 'next/image';
import { MoveHorizontal } from 'lucide-react';
import type { BeforeAfterComparison } from '@/types/gallery';

interface BeforeAfterSliderProps {
  comparison: BeforeAfterComparison;
  initialPosition?: number;
  priority?: boolean;
}

export function BeforeAfterSlider({
  comparison,
  initialPosition = 50,
  priority = false,
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(initialPosition);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);

  function updateFromClientX(clientX: number) {
    const container = containerRef.current;
    if (!container) {
      return;
    }
    const rect = container.getBoundingClientRect();
    if (rect.width <= 0) {
      return;
    }
    const rawPct = ((clientX - rect.left) / rect.width) * 100;
    const clamped = Math.min(95, Math.max(5, rawPct));
    setPosition(Math.round(clamped * 10) / 10);
  }

  function handlePointerDown(event: PointerEvent<HTMLDivElement>) {
    isDraggingRef.current = true;
    event.currentTarget.setPointerCapture(event.pointerId);
    updateFromClientX(event.clientX);
  }

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (!isDraggingRef.current) {
      return;
    }
    updateFromClientX(event.clientX);
  }

  function handlePointerUp(event: PointerEvent<HTMLDivElement>) {
    if (isDraggingRef.current) {
      isDraggingRef.current = false;
      if (event.currentTarget.hasPointerCapture(event.pointerId)) {
        event.currentTarget.releasePointerCapture(event.pointerId);
      }
    }
  }

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    let next = position;
    switch (event.key) {
      case 'ArrowLeft':
      case 'ArrowDown':
        next = Math.max(5, position - 5);
        break;
      case 'ArrowRight':
      case 'ArrowUp':
        next = Math.min(95, position + 5);
        break;
      case 'PageDown':
        next = Math.max(5, position - 15);
        break;
      case 'PageUp':
        next = Math.min(95, position + 15);
        break;
      case 'Home':
        next = 5;
        break;
      case 'End':
        next = 95;
        break;
      default:
        return;
    }
    event.preventDefault();
    setPosition(next);
  }

  return (
    <div className="space-y-3">
      <div
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        className="relative aspect-[4/3] w-full cursor-ew-resize select-none overflow-hidden rounded-lg border border-border bg-surface touch-pan-y"
      >
        {/* Base After Layer */}
        <Image
          src={comparison.afterImage.src}
          alt={comparison.afterImage.alt}
          width={comparison.afterImage.width}
          height={comparison.afterImage.height}
          priority={priority}
          sizes="(max-width: 1023px) 100vw, 60vw"
          style={{
            objectPosition: comparison.afterImage.objectPosition ?? '50% 25%',
          }}
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
          draggable={false}
        />

        {/* Clipped Before Layer */}
        <div
          className="pointer-events-none absolute inset-0 overflow-hidden"
          style={{
            clipPath: `inset(0 ${100 - position}% 0 0)`,
          }}
        >
          <Image
            src={comparison.beforeImage.src}
            alt={comparison.beforeImage.alt}
            width={comparison.beforeImage.width}
            height={comparison.beforeImage.height}
            priority={priority}
            sizes="(max-width: 1023px) 100vw, 60vw"
            style={{
              objectPosition:
                comparison.beforeImage.objectPosition ?? '50% 25%',
            }}
            className="h-full w-full object-cover"
            draggable={false}
          />
        </div>

        {/* Before / After Corner Labels */}
        <span className="pointer-events-none absolute left-3 top-3 rounded bg-[#1b191f]/90 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-xs">
          Before
        </span>
        <span className="pointer-events-none absolute right-3 top-3 rounded bg-[#1b191f]/90 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-xs">
          After
        </span>

        {/* Divider Line & Keyboard-Accessible Handle */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow-[0_0_8px_rgba(0,0,0,0.45)]"
          style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
        />

        <button
          type="button"
          role="slider"
          aria-label={`Before and after comparison slider for ${comparison.title}. Use left and right arrow keys to adjust.`}
          aria-valuemin={5}
          aria-valuemax={95}
          aria-valuenow={Math.round(position)}
          aria-valuetext={`${Math.round(position)}% Before panel visible`}
          onKeyDown={handleKeyDown}
          style={{ left: `${position}%` }}
          className="absolute top-1/2 z-10 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 touch-none items-center justify-center rounded-full border-2 border-white bg-[#1b191f] text-white shadow-lg transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c9a15a]"
        >
          <MoveHorizontal className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

