import React from "react";
import Navbar from "./components/Navbar";
import flowers from "/public/flowers.png";

const App = () => {
  return (
    <div className="bg-[salmon] pt-[14vw] min-h-screen text-white w-full">
      <Navbar />
      <div id="center" className="relative pb-[10vw] px-[8vw] font-[braven]">
        <div id="center-text" className="flex justify-between  tracking-tighter">
          <h1 className="text-[11.5vw] relative z-10">Floral</h1>
          <h1 className="text-[11.5vw]">Fragility</h1>
        </div>
        <div id="paragraphDiv" className="px-[10vw] mt-[20vw] w-full flex justify-between items-start">
          <div id="part1" className="w-1/2 bg-red-500"></div>
          <div id="part2" className="w-[40%] ">
            <h5 className="text-5xl leading-tight ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure soluta error ex fuga harum tenetur repellat dolor eum dolores deleniti.</h5>

            <p className="text-xl mt-[2vw] leading-normal ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, fuga provident. Tempore, voluptatibus. Sapiente eius quaerat error libero tempora consectetur corrupti incidunt maxime magni nostrum distinctio atque ducimus est temporibus voluptas, velit corporis? Animi neque illo maxime optio corrupti culpa similique nostrum fugit cumque cum, accusamus ipsa error distinctio fuga quidem blanditiis rerum in illum corporis aspernatur at veritatis molestias, obcaecati praesentium? Harum molestiae nobis eum incidunt odit debitis quibusdam inventore consequuntur eligendi natus enim omnis ducimus, ullam praesentium iure magni velit ut totam sequi deserunt officiis quod. Libero nesciunt sit aperiam odio quaerat tenetur? Hic asperiores quisquam facilis inventore? </p>
          </div>
        </div>

        <div id="bottomDiv" className="mt-[20vw] flex justify-between items-start px-[11vw] ">
          <div id="part1" className="w-1/2 "></div>
          <div id="part2" className="w-[40%] bg-red-800 ">
            <h1 className="text-4vw ">Blue Pottery <br />Decorative <br />Vase </h1>
            <div>
              <button>Add to cart</button>
              <h2>$57</h2>
            </div>
          </div>
        </div>
        <img src={flowers} className="fixed top-0 h-[67vw]" alt="" />
      </div>
    </div>
  );
};

export default App;
