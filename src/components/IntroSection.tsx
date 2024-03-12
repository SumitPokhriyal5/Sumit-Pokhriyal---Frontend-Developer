import { FaChevronDown } from "react-icons/fa";
import brickMatrixLogo from '/brick-matrix-logo.webp';

function IntroSection() {
    return (
      <div className="flex items-center justify-around p-[0_6%] max-[800px]:flex-col-reverse max-[800px]:p-[6rem_10px] bg-[#0B0A0B] w-full gap-10">
        <div className="w-[60%] flex flex-col justify-center items-start max-[800px]:items-center gap-[2rem] basis-1/2 p-[3%_0] max-[800px]:p-0 max-[800px]:w-[90%]">
          <p className="font-shojumaru font-bold text-[2.5rem] text-samurai-red ">
            Introduction
          </p>
          <p className="text-white font-zcool text-[1.5rem] leading-[3.5rem] max-[800px]:text-center">
            We&apos;ve all been in the mud once, and now we&apos;ve decided to
            fight it out. Pay tribute to those pioneers of WEB3 and the warriors
            who dedicated their love to the blockchain. Save the lucky ones alive,
            join us to save the future! Our mission is to empower everyone to
            share wealth and succeed.
          </p>
          <button className="font-zcool text-[1.5rem] bg-gradient-to-r from-smurai-grade-red to-smurai-grade-orange p-[15px_31px] text-white rounded-[21px] selft-start mt-[1rem]">
            <span className="gap-[11px] flex items-center">
              Documents
              <FaChevronDown />
            </span>
          </button>
        </div>
        <div className="flex items-center justify-center w-[40%] max-[800px]:w-[90%]">
          <img
            className="object-cover"
            src={brickMatrixLogo}
            width={"100%"}
            height={"auto"}
            alt="samurai logo"
          />
        </div>
      </div>
    );
  }
  
  export default IntroSection;