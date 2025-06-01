import React from 'react';

const StarBackground = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      <div
        className="w-full h-full bg-repeat opacity-60"
        style={{
          backgroundImage: "url('/assets/stars.gif')",
          backgroundSize: 'contain',
        }}
      />
    </div>
  );
};

export default StarBackground;
