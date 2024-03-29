import React from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import PlayingBar from "@/components/PlayingBar";
import Head from "next/head";

export default function MainLayout({ children }: any) {
  return (
    <div className="flex flex-wrap relative w-full">
      <Head>
        <title>Music web 2.0</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex w-full h-full ">
        <div className="lg:w-64 sm:w-0 bg-[#142922] sm:hidden lg:block shadow-2xl">
          <Sidebar />
        </div>
        <div className="flex relative bg-[#0D5247] flex-wrap w-full h-full">
          <Header />
          <div className="container-body h-full min-h-[90vh] w-full text-white bg-wave bg-fixed">
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
