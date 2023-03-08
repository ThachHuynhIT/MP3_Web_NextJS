import React from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import PlayingBar from "@/components/PlayingBar";

export default function MainLayout({ children }: any) {
  return (
    <div className="flex flex-wrap relative w-full">
      <div className="flex w-full h-full bg-zinc-900">
        <div className="lg:w-64 sm:w-0 bg-black sm:hidden lg:block">
          <Sidebar />
        </div>
        <div className="flex relative flex-wrap w-full h-full">
          <Header />
          <div className="container-body h-full min-h-[90vh] w-full">
            {children}
            <div className="flex h-48 w-full justify-center pb-10 pt-6">
              <hr className="border-t-blue-700 border-gray-900 h-1 bg-cyan-900 w-4/5" />
            </div>
          </div>
        </div>
      </div>
      <PlayingBar />
    </div>
  );
}
