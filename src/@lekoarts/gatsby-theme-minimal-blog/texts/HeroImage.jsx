import React from 'react';
import heroImage from './BoundPlyoBoxHero.png';

export default function HeroImage() {
  return (
    <>
      <div
        style={{
          width: '80%',
          textAlign: 'center',
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}
      >
        <div style={{ fontSize: 40 }}>Strong Plyo Boxes built in the USA</div>
        <img
          src={heroImage}
          alt="Plyo Box Hero"
          style={{
            width: '100%',
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}
        />
      </div>
    </>
  );
}
