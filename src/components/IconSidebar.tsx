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
        <button className="flex item-center space-x-2 hover:text-white">
          <Icon className="h-4 w-4" />
          <span>{label}</span>
        </button>
      </div>
    </div>
  );
};

export default IconSidebar;
