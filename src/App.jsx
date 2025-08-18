import { useGSAP } from "@gsap/react";
import Navbar from "./components/Navbar";
import vase from "/public/vase.png";
import LocomotiveScroll from "locomotive-scroll";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import CenterText from "./components/CenterText";
import ParagraphDiv from "./components/ParagraphDiv";
import BottomDiv from "./components/BottomDiv";
import Footer from "./components/Footer";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();

  const imageRef = useRef(null);
  const mainRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: mainRef.current,
        // markers: true,
        start: "top 0",
        end: "top -200%",
        scrub: 1,
      },
    });
    tl.to(imageRef.current, {
      transform: "translateY(-20%)",
      duration: 1,
    });
    tl.to(imageRef.current, {
      transform: "translateY(-20%) scale(0.6)",
      duration: 1,
    });
  });
  return (
    <div ref={mainRef} className="bg-[salmon]  min-h-screen text-white w-full ">
      <Navbar />
      <div
        id="center"
        className="relative pb-[16vw] px-[8vw] pt-[14vw]  font-[braven] "
      >
        <CenterText />
        <ParagraphDiv />
        <BottomDiv />

        <img
          ref={imageRef}
          src={vase}
          className="fixed top-0 left-[6.5%] h-[82vw]"
          alt=""
        />
      </div>
      <Footer />
    </div>
  );
};

export default App;
