// components/common/UserCard.tsx

import React from 'react';
import { UserProps } from '@/interfaces';
import { BadgeCheck } from 'lucide-react';

const UserCard: React.FC<UserProps> = ({ name, email, avatar, role }) => {
  return (
    <div className="bg-white p-5 rounded-2xl shadow-md transform transition duration-300 hover:scale-105 hover:shadow-2xl">
      <div className="flex items-center space-x-4">
        <img
          src={avatar}
          alt={name}
          className="w-16 h-16 rounded-full object-cover border-2 border-indigo-500"
        />
        <div>
          <div className="flex items-center gap-1">
            <h2 className="text-lg font-bold text-gray-800">{name}</h2>
            {role === 'admin' && <BadgeCheck className="w-4 h-4 text-indigo-600" />}
          </div>
          <p className="text-sm text-gray-500">{email}</p>
          <span className="inline-block mt-1 text-xs font-medium bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full capitalize">
            {role}
          </span>
          <div className="mt-3">
            <button className="text-sm font-medium text-indigo-600 hover:underline">
              View Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
