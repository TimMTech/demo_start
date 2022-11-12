import { useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

interface LanguageProps {
  activeLanguage: string;
  selectedLanguages: any;
  handleTranslate: (languages: string) => void;
}

const Language: React.FC<LanguageProps> = ({
  selectedLanguages,
  activeLanguage,
  handleTranslate,
}) => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const handleDropDown = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className="w-full">
      <div className="w-full relative">
        <div
          onClick={handleDropDown}
          className="text-white text-3xl flex justify-between items-center bg-purple-600/20 px-8 py-4 rounded-md cursor-pointer"
        >
          <h1 className="font-bold no-select ">Select A Language</h1>
          {openMenu ? <AiOutlineUp size={40} /> : <AiOutlineDown size={40} />}
        </div>
        {openMenu && (
          <div className="absolute left-0 right-0 m-1 max-h-[250px] overflow-y-auto font-bold text-white text-3xl flex flex-col  bg-indigo-400 rounded-md no-select ">
            {selectedLanguages.map((languages: any, index: number) => {
              const { label } = languages;
              return (
                <div
                  key={index}
                  className={`${
                    activeLanguage === label && "bg-white/20 rounded-md"
                  } p-4 cursor-pointer`}
                  onClick={() => handleTranslate(label)}
                >
                  {label}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Language;
