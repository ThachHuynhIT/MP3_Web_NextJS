import React from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import HomePage from "../components/HomePage";
import PlayingBar from "@/components/PlayingBar";

export default function MainLayout({ children }: any) {
  return (
    <>
      <div className="flex relative w-full">
        <div className="lg:w-64 sm:w-0 bg-slate-800 sm:hidden lg:block">
          <Sidebar />
        </div>
        <div className="flex relative flex-wrap w-full h-full mb-32 ">
          <Header />
          {children}
          <div className="flex h-24 w-full justify-center pt-6">
            <hr className="border-t-blue-700 border-gray-900 h-1 bg-cyan-900 w-4/5" />
          </div>
        </div>
        <PlayingBar />
      </div>
    </>
  );
}
