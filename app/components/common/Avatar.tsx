"use client";

import Image from "next/image";
import { useState } from "react";
import { AvatarPlaceholders } from "@/app/constants";

const Avatar = () => {
  const [avatar, setAvatar] = useState(AvatarPlaceholders[1]);

  return (
    <div className="border-4 border-white rounded-full hover:border-gray-200 transition-colors duration-500">
      <Image src={avatar.src} height={45} width={45} alt={avatar.name} />
    </div>
  );
};

export default Avatar;
