import saviourLogo from "/saviour-logo.png";
import ConnectButton from "./ConnectButton";
import { FiMenu } from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa";

function Navbar() {
  return (
    <div className="flex justify-between items-center h-fit w-[100%] p-[1rem_5%] absolute top-3">
      <div className="h-fill flex items-center justify-between gap-3">
        <div className="group/menu relative max-[1189px]:flex hidden h-fill items-center justify-center cursor-pointer">
          <FiMenu className="text-white w-10 h-10" />

          <div className="hidden group-hover/menu:flex absolute top-[27px] left-[0px] rounded-lg z-[1] text-white bg-[transparent] pt-10">
            <div className="flex flex-col gap-4 p-[20px_25px] rounded-[10px] bg-[rgba(0,0,0,0.8)] shadow-[0px_-10px_40px_-10px_#34300E]">
              <div className="flex gap-3 flex-col h-fit mb-[10px]">
                <span className="text-[16px] text-nowrap font-inter p-[5px_10px] hover:underline rounded-md  cursor-pointer">
                  Home
                </span>
                <span className="text-[16px] text-nowrap hover:underline p-[5px_10px] font-inter cursor-pointer">
                  IDO
                </span>
                <span className="text-[16px] text-nowrap hover:underline p-[5px_10px] font-inter cursor-pointer">
                  Tokenomics
                </span>
                <span className="text-[16px] text-nowrap hover:underline p-[5px_10px] font-inter cursor-pointer">
                  Roadmap
                </span>
                <span className="text-[16px] text-nowrap hover:underline p-[5px_10px] font-inter cursor-pointer">
                  Coming Soon
                </span>
              </div>
              <ConnectButton textSize="0.6rem" />
            </div>
          </div>
        </div>

        <img
          className="object-cover"
          src={saviourLogo}
          width={60}
          height={30}
          alt="site logo"
        />
        <p className="max-[455px]:hidden text-white font-zcool text-[1.6rem]">
          Saviour
        </p>
      </div>
      <div className="max-[1189px]:hidden h-fill bg-[#181918] flex items-center gap-[2.4rem] justify-center p-[0.8rem_1.5rem] text-white rounded-[2.1rem]">
        <span className="font-zcool text-[1rem] transition-colors duration-300 hover:text-red-500 cursor-pointer">
          Home
        </span>
        <span className="font-zcool text-[1rem] transition-colors duration-300 hover:text-red-500 cursor-pointer">
          IDO
        </span>
        <span className="font-zcool text-[1rem] transition-colors duration-300 hover:text-red-500 cursor-pointer">
          Tokenomics
        </span>
        <span className="font-zcool text-[1rem] transition-colors duration-300 hover:text-red-500 cursor-pointer">
          Roadmap
        </span>
        <span className="flex items-center gap-1 font-zcool text-[1rem] transition-colors duration-300 hover:text-red-500 cursor-pointer">
          Coming Soon
          <FaChevronDown />
        </span>
      </div>

      <ConnectButton textSize="1rem" />
    </div>
  );
}

export default Navbar;
