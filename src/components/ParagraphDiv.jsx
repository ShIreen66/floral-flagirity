import React from "react";

const ParagraphDiv = () => {
  return (
    <div
      id="paragraphDiv"
      className="px-[10vw] mt-[20vw] w-full flex justify-between items-start"
    >
      <div id="part1" className="w-1/2 bg-red-500"></div>
      <div id="part2" className="w-[40%] ">
        <h5 className="text-5xl leading-tight ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure soluta
          error ex fuga harum tenetur repellat dolor eum dolores deleniti.
        </h5>

        <p className="text-xl mt-[2vw] leading-normal ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
          fuga provident. Tempore, voluptatibus. Sapiente eius quaerat error
          libero tempora consectetur corrupti incidunt maxime magni nostrum
          distinctio atque ducimus est temporibus voluptas, velit corporis?
          Animi neque illo maxime optio corrupti culpa similique nostrum fugit
          cumque cum, accusamus ipsa error distinctio fuga quidem blanditiis
          rerum in illum corporis aspernatur at veritatis molestias, obcaecati
          praesentium? Harum molestiae nobis eum incidunt odit debitis quibusdam
          inventore consequuntur eligendi natus enim omnis ducimus, ullam
          praesentium iure magni velit ut totam sequi deserunt officiis quod.
          Libero nesciunt sit aperiam odio quaerat tenetur? Hic asperiores
          quisquam facilis inventore?{" "}
        </p>
      </div>
    </div>
  );
};

export default ParagraphDiv;
