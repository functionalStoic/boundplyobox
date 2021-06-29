import React from 'react';
import AmazonButtonImage from './amazon-button.png';

export default function AmazonButton() {
  return (
    <div style={{ align: 'center' }}>
      <a
        href="https://smile.amazon.com/Bound-Plyo-Box-Puzzle-Plyometric/dp/B013VSTQYS/ref=sr_1_9?s=sporting-goods&amp;ie=UTF8&amp;qid=1516749208&amp;sr=1-9&amp;keywords=plyo+box?_encoding=UTF8&amp;camp=1789&amp;creative=9325&amp;linkCode=ur2&amp;tag=storypodca-20&amp;linkId=2P4S6EY6B462X4AR"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          border: 'none',
          textDecoration: 'none'
        }}
      >
        <img
          alt="Purchase on Amazon"
          style={{ width: 200 }}
          src={AmazonButtonImage}
        />
      </a>
    </div>
  );
}
