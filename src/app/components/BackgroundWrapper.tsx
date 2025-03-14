"use client";
import React from "react";

interface BackgroundWrapperProps {
  imageUrl: string;
  children?: React.ReactNode;
  overlay?: boolean;
}

const BackgroundWrapper: React.FC<BackgroundWrapperProps> = ({ imageUrl, children, overlay }) => {
  return (
    <div
      className="relative w-screen min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {/* Optional Dark Overlay */}
      {overlay && <div className="absolute inset-0 bg-black bg-opacity-50"></div>}

      {/* Page Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default BackgroundWrapper;
