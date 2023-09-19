import "./App.css";
import MyCarousel from "./components/carousel/MyCarousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import NavBar from "./components/navbar/NavBar";
import Intro from "./components/intro/Intro";
import Gallery from "./components/gallery/Gallery";
import LastMessage from "./components/lastMessage/LastMessage";
import More from "./components/more/More";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
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
        <Footer />
      </main>
    </div>
  );
}

export default App;
