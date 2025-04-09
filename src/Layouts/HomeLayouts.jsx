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
    <div className="container mx-auto">
      <Nav2></Nav2>
      <Divider></Divider>
      <NavBar></NavBar>
      
      <Carosel></Carosel>
      
      <main className="w-11/12 mx-auto pt-5 grid md:grid-cols-12 gap-3">
        <aside className="left col-span-2">
          <LeftAside></LeftAside>
        </aside>
        <section className="col-span-8">
          Main section
          <Outlet></Outlet>
        </section>

        <aside className="col-span-2">
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
