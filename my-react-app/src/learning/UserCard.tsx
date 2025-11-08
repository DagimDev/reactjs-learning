import React from 'react';

type UserCardProps = {
  name: string;
  role: string;
  avatarUrl?: string;
};

export function UserCard({ name, role, avatarUrl }: UserCardProps) {
  return (
    <div className="user-card">
      {avatarUrl && <img src={avatarUrl} alt={`${name}'s avatar`} />}
      <div>
        <div className="user-card__name">{name}</div>
        <div className="user-card__role">{role}</div>
      </div>
    </div>
  );
}