import { MouseEvent } from "react";

interface HorizontalProps {
  selectedTemplate: any;
  handleSelectedTemplate: (e: MouseEvent<HTMLDivElement>) => void;
}

const Horizontal: React.FC<HorizontalProps> = ({
  handleSelectedTemplate,
  selectedTemplate,
}) => {
  return (
    <div
      id="horizontal"
      onClick={handleSelectedTemplate}
      className={`${
        selectedTemplate.horizontal && "scale-110"
      } hover:scale-110 lg:w-[20vw] lg:h-[20vw]   text-white text-xl bg-white/20 w-[40vw] h-[40vw] rounded-md  flex flex-col cursor-pointer transition ease-in duration-300`}
    >
      <div className="flex items-center justify-center flex-1 border-b">
        <h1>TEXT</h1>
      </div>

      <div className="flex flex-1 justify-center items-center ">
        <div className=" w-full flex border-r h-full">
          <h1 className="w-full self-center text-center">IMAGE</h1>
        </div>
        <div className=" w-full flex">
          <h1 className="w-full text-center">VIDEO</h1>
        </div>
      </div>
    </div>
  );
};

export default Horizontal;
