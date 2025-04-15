import React from "react";
import NavBar from "../NavBar";
import Carosel from "./Carosel";
import Marquee from "react-fast-marquee";
import LeftAside from "../components/MainContent/LeftAside";
import RightAside from "../components/MainContent/RightAside";
import { Outlet } from "react-router-dom";
import Nav2 from "../components/Nav2";
import Divider from "../components/Divider";
import Footer from "../components/Footer";
import ShorCard from "../components/ShorCard";
import ElectrinicsData from "../components/ElectrinicsData";
import FashonData from "../components/FashonData";



const HomeLayouts = () => {
  return (
    <div className="container mx-auto ">
      <Nav2></Nav2>
      
      <NavBar></NavBar>
      
      <Carosel></Carosel>
      
      <main className="w-full max-w-8xl mx-auto pt-5 grid md:grid-cols-12 gap-6 bg-gray-50 shadow-md rounded-lg">
        <aside className="left col-span-12 md:col-span-3 lg:col-span-2 bg-gray-100 p-4 rounded-lg">
          <LeftAside></LeftAside>
        </aside>
        <section className="col-span-12 md:col-span-6 lg:col-span-8 bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold mb-4">Main Content</h2>
          <Outlet></Outlet>
        </section>
        <aside className="col-span-12 md:col-span-3 lg:col-span-2 bg-gray-100 p-4 rounded-lg">
          <RightAside></RightAside>
        </aside>
      </main>
      <ShorCard></ShorCard>
      <ElectrinicsData></ElectrinicsData>
      <FashonData></FashonData>
      
      <Footer></Footer>
    </div>
  );
};

export default HomeLayouts;
