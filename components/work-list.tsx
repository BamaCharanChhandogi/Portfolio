"use client";

import Image from "next/image";
import type { CSSProperties, MouseEvent, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

type WorkListProps = {
  children: ReactNode;
};

type PreviewState = {
  image: string;
  title: string;
  x: number;
  y: number;
  tx: number;
  ty: number;
  rotate: number;
};

export function WorkList({ children }: WorkListProps) {
  const [preview, setPreview] = useState<PreviewState | null>(null);
  const frame = useRef<number | null>(null);

  useEffect(() => {
    if (!preview) {
      return;
    }

    function tick() {
      setPreview((current) => {
        if (!current) {
          return null;
        }

        const nextX = current.x + (current.tx - current.x) * 0.18;
        const nextY = current.y + (current.ty - current.y) * 0.18;

        return {
          ...current,
          x: nextX,
          y: nextY,
          rotate: Math.max(-3, Math.min(3, (current.tx - current.x) * 0.06)),
        };
      });
      frame.current = window.requestAnimationFrame(tick);
    }

    frame.current = window.requestAnimationFrame(tick);

    return () => {
      if (frame.current) {
        window.cancelAnimationFrame(frame.current);
      }
    };
  }, [preview?.image]);

  function handleMove(event: MouseEvent<HTMLDivElement>) {
    if (!window.matchMedia("(pointer: fine)").matches) {
      setPreview(null);
      return;
    }

    const row = (event.target as HTMLElement).closest<HTMLAnchorElement>("[data-image]");
    const image = row?.dataset.image;

    if (!row || !image) {
      setPreview(null);
      return;
    }

    const title = row.dataset.title ?? "";
    const tx = event.clientX + 30;
    const ty = event.clientY - 116;

    setPreview((current) => ({
      image,
      title,
      tx,
      ty,
      x: current?.image === image ? current.x : tx,
      y: current?.image === image ? current.y : ty,
      rotate: current?.rotate ?? 0,
    }));
  }

  return (
    <div className="row-list work-list" onMouseMove={handleMove} onMouseLeave={() => setPreview(null)}>
      {children}
      {preview ? (
        <div
          className="cursor-preview"
          aria-hidden="true"
          style={
            {
              "--preview-x": `${preview.x}px`,
              "--preview-y": `${preview.y}px`,
              "--preview-rotate": `${preview.rotate}deg`,
            } as CSSProperties
          }
        >
          <span className="mini-browser">
            <span className="mini-browser-top">
              <span />
              <span />
              <span />
            </span>
            <span className="mini-browser-image">
              <Image src={preview.image} alt="" fill sizes="320px" />
            </span>
          </span>
        </div>
      ) : null}
    </div>
  );
}
