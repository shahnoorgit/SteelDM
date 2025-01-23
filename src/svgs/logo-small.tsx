import React from "react";

export const SteelDMLogo = () => {
  return (
    <svg
      width="200"
      height="60"
      viewBox="0 0 200 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background Rectangle */}
      <rect width="200" height="60" fill="#1E1E1E" />

      {/* Letter S (Tilted) */}
      <path
        d="M20 40 Q20 30, 30 30 Q40 30, 40 20 Q40 10, 50 10"
        stroke="#AABBFF"
        strokeWidth="2"
        fill="none"
        transform="rotate(-10 20 40)"
      />

      {/* Letter t (Tilted) */}
      <path
        d="M60 20 L60 40 M60 30 L80 30"
        stroke="#AABBFF"
        strokeWidth="2"
        transform="rotate(-10 60 30)"
      />

      {/* Letter e (Tilted) */}
      <path
        d="M90 20 Q90 10, 100 10 Q110 10, 110 20 Q110 30, 100 30 Q90 30, 90 40"
        stroke="#AABBFF"
        strokeWidth="2"
        fill="none"
        transform="rotate(-10 90 30)"
      />

      {/* Letter e (Tilted) */}
      <path
        d="M120 20 Q120 10, 130 10 Q140 10, 140 20 Q140 30, 130 30 Q120 30, 120 40"
        stroke="#AABBFF"
        strokeWidth="2"
        fill="none"
        transform="rotate(-10 120 30)"
      />

      {/* Letter l (Tilted) */}
      <path
        d="M150 20 L150 40"
        stroke="#AABBFF"
        strokeWidth="2"
        transform="rotate(-10 150 30)"
      />

      {/* Letter i (Overlapping l) */}
      <circle cx="155" cy="15" r="2" fill="#AABBFF" />
      <path
        d="M155 20 L155 30"
        stroke="#AABBFF"
        strokeWidth="2"
        transform="rotate(-10 155 25)"
      />

      {/* Letter D */}
      <path
        d="M170 20 L170 40 Q180 40, 180 30 Q180 20, 170 20"
        stroke="#AABBFF"
        strokeWidth="2"
        fill="none"
      />

      {/* Letter M */}
      <path
        d="M190 20 L190 40 M190 20 L200 30 M200 30 L190 40"
        stroke="#AABBFF"
        strokeWidth="2"
      />
    </svg>
  );
};

export default SteelDMLogo;
