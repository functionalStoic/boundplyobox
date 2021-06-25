import React from 'react';
import AvatarOwner from './avatar-owner.jpg';

export default function AvatarImage() {
  return (
    <img
      src={AvatarOwner}
      alt="Avatar"
      style={{ width: 200, borderRadius: '50%' }}
    />
  );
}
