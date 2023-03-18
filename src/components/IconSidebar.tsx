import React from "react";
import { IconType } from "react-icons";
import { useRouter } from "next/router";

interface props {
  icon: IconType;
  label: string;
  link: string;
}

const IconSidebar = ({ icon: Icon, label, link }: props) => {
  const router = useRouter();
  // : React.ChangeEvent<HTMLInputElement>
  // : React.FormEvent<HTMLInputElement>

  return (
    <div>
      <div className="space-y-4">
        <button
          onClick={() => router.push(link)}
          className="flex items-center space-x-2 hover:text-white py-2"
        >
          <Icon className="h-5 w-5" />
          <span className="font-black">{label}</span>
        </button>
      </div>
    </div>
  );
};

export default IconSidebar;
