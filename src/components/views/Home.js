import React from "react";
import MyCarousel from "../../components/Home/carousel/MyCarousel";
import Intro from "../../components/Home/intro/Intro";
import Gallery from "../../components/Home/gallery/Gallery";
import LastMessage from "../../components/Home/lastMessage/LastMessage";
import More from "../../components/Home/more/More";
import Footer from "../../components/Home/footer/Footer";

export default function Home() {
  return (
    <div>
      <header style={{ display: "flex", height: "80vh" }}>
        <MyCarousel />
      </header>
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Intro />
        <Gallery />
        <LastMessage />
        <More />
      </main>
      <Footer />
    </div>
  );
}
