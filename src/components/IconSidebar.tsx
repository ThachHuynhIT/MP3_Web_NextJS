import React from "react";
import { IconType } from "react-icons";

interface props {
  icon: IconType;
  label: string;
}

const IconSidebar = ({ icon: Icon, label }: props) => {
  return (
    <div>
      <div className="space-y-4">
        <button className="flex items-center space-x-2 hover:text-white py-2">
          <Icon className="h-5 w-5" />
          <span className="font-black">{label}</span>
        </button>
      </div>
    </div>
  );
};

export default IconSidebar;
