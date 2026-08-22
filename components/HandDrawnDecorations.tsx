import React from "react";

export function TapeStrip({
  className = "",
  rotation = "-rotate-2",
}: {
  className?: string;
  rotation?: string;
}) {
  return (
    <div
      className={`absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#e5e0d8]/80 backdrop-blur-[1px] border-l-2 border-r-2 border-dashed border-pencil/20 shadow-sm z-10 ${rotation} ${className}`}
    />
  );
}

export function Thumbtack({ className = "" }: { className?: string }) {
  return (
    <div
      className={`absolute -top-3 left-1/2 -translate-x-1/2 w-5 h-5 bg-accent-red border-2 border-pencil rounded-full shadow-[2px_2px_0px_0px_#2d2d2d] z-10 ${className}`}
    />
  );
}

export function WavyUnderline({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`w-full h-3 text-accent-red fill-none stroke-current ${className}`}
      viewBox="0 0 100 10"
      preserveAspectRatio="none"
    >
      <path d="M0,5 Q25,0 50,5 T100,5" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function ScribbledArrow({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`w-16 h-16 text-pen-blue fill-none stroke-current ${className}`}
      viewBox="0 0 60 60"
    >
      <path
        d="M 10,10 C 20,40 40,15 48,45 M 35,38 L 48,45 L 45,30"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
