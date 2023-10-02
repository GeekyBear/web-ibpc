import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import father from "../../../assets/father-son-hand.jpg";
import man from "../../../assets/man-praying.jpg";
import woman from "../../../assets/woman-thinking.jpg";

const AutoplaySlider = withAutoplay(AwesomeSlider);

export default function MyCarousel() {
  return (
    <AutoplaySlider
      play={true}
      cancelOnInteraction={false} // should stop playing on user interaction
      interval={5000}
      media={[
        {
          source: father,
          caption: "I want to see what you got.",
        },
        {
          source: man,
        },
        {
          source: woman,
        },
      ]}
    />
  );
}
