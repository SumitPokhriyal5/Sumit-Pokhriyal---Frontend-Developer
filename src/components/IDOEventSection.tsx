import ConnectButton from "./ConnectButton";
import copyIcon from '/copy-icon.png'


function IDOEventSection() {
  return (
    <div className="bg-black w-full h-fit flex flex-col items-center text-white">
      <div className="bg-ido-event w-full flex flex-col items-center p-[6rem_5%] max-[600px]:p-[6rem_10px]">
        <div className="flex flex-col items-center w-full gap-[7rem]">
          <h3 className="text-samurai-red font-shojumaru text-[3rem] text-center">
            Participate in our IDO Event!
          </h3>
          <div className="flex items-start justify-center gap-[9rem] w-full max-[800px]:flex-col max-[800px]:items-center max-[600px]:gap-[3rem]">
            <div className="w-1/2 max-[800px]:w-full flex flex-col items-center">
              <p className="text-[1.1rem] font-zcool text-center leading-[2.5rem]">
                During our IDO event, you will gain early access to our
                revolutionary ecosystem, designed to empower everyone to share
                wealth and achieve success.
              </p>
              <div className="flex flex-col items-center justify-center">
                <div className="bg-[#ED0137] flex justify-center items-center translate-y-[3.5rem] rounded-[2rem] p-6">
                  <p className="font-shojumaru text-[1.2rem] text-white">
                    Token Info
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center gap-[1.2rem] border-[2px] border-[#EF490F] rounded-[20px] p-[5rem] pb-[2rem] mb-6">
                  <table className="w-full">
                    <tbody className="font-zcool text-[1rem] flex flex-col gap-[1.2rem] w-full">
                      <tr className="w-full">
                        <td className="w-full">Total Token Supply</td>
                        <td className="text-[#DF180A] w-full text-left  text-nowrap">
                          20%
                        </td>
                      </tr>
                      <tr className="w-full">
                        <td className="w-full">Soft Cap</td>
                        <td className="text-[#DF180A] text-left w-full  text-nowrap">
                          200 BNB
                        </td>
                      </tr>
                      <tr className="w-full">
                        <td className="w-full">Initial exchange rate</td>
                        <td className="text-[#DF180A] text-left w-full  text-nowrap">
                          1 BNB
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="font-zcool text-[1.1rem] ml-[-1.5rem] mr-[-1.5rem]">
                    Recommended Referral Commission
                  </p>
                  <table className="w-full">
                    <tbody className="font-zcool text-[1rem]  flex flex-col gap-[1.2rem] w-full">
                      <tr className="w-full">
                        <td className="w-full">1st Generation</td>
                        <td className="text-[#DF180A] text-left w-full text-nowrap">
                          5%
                        </td>
                      </tr>

                      <tr className="w-[100%]">
                        <td className="w-[100%]">2nd Generation</td>
                        <td className="text-[#DF180A] text-left w-[100%]">
                          2%
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <ConnectButton textSize="1rem" />
              <p className="font-shojumaru text-[1.5rem] text-samurai-red text-center m-[3.5rem_0]">
                Become an affiliate & Earn 7% as Commission!
              </p>
              <div className="flex justify-center items-center gap-[1.5rem] w-full">
                <div className="flex justify-between w-[100%] border-[1px] border-[#C4110C] rounded-[3rem] ">
                  <input
                    className="h-fill w-[100%] bg-transparent text-[1rem] placeholder:text-[#808181] text-white font-zcool  p-[0px_2.4rem] border-none outline-none"
                    type="text"
                    placeholder="Generate a unique referral link"
                  />
                  <button className="h-fill p-[0.3rem_2rem] text-[1rem] font-zcool m-[10px] bg-samurai-red rounded-[3rem]">
                    Generate
                  </button>
                </div>
                <div className="cursor-pointer">
                  <img
                    src={copyIcon}
                    width={25}
                    height={50}
                    alt="copy"
                  />
                </div>
              </div>
            </div>
            <div className="w-1/2 max-[800px]:w-full">
              <div>
                <div className="flex justify-center translate-y-[35px]">
                  <div className="flex gap-[0.6rem]">
                    <div className="w-[4rem] h-[7rem] flex items-center justify-center p-[0.5%] bg-black rounded-[0.323rem] border-samurai-red border-[1px]">
                      <p className="text-[6rem] font-robo-mono font-bold">
                        0
                      </p>
                    </div>
                    <div className="w-[4rem] h-[7rem] flex items-center justify-center p-[0.5%] bg-black rounded-[0.323rem] border-samurai-red border-[1px]">
                      <p className="text-[6rem] font-robo-mono font-bold">
                        0
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center  w-[3rem] h-[8.006rem] p-[0.5%] rounded-[0.323rem] ">
                    <span className="text-[6rem] text-samurai-red font-robo-mono font-bold">
                      :
                    </span>
                  </div>
                  <div className="flex gap-[0.6rem]">
                    <div className="w-[4rem] h-[7rem] flex items-center justify-center p-[0.5%] bg-black rounded-[0.323rem] border-samurai-red border-[1px]">
                      <p className="text-[6rem] font-robo-mono font-bold">
                        0
                      </p>
                    </div>
                    <div className="w-[4rem] h-[7rem] flex items-center justify-center p-[0.5%] bg-black rounded-[0.323rem] border-samurai-red border-[1px]">
                      <p className="text-[6rem] font-robo-mono font-bold">
                        0
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-5 border-[#C4110C] border-[2px] items-center justify-center rounded-[20px] p-[3rem] max-[600px]:p-[2rem]">
                  <p className="font-shojumaru text-[3rem] text-samurai-red">
                    PRESALE 1
                  </p>
                  <p className="font-zcool text-[1.2rem]">
                    1 Saviour = 0.657 USDT
                  </p>
                  <p className="font-zcool text-[1.2rem]">
                    Next Stage Price = 0.723 USDT
                  </p>
                  <p className="font-zcool text-[1.2rem]">
                    Sold - $34,56,56,764/$50,00,00,000
                  </p>
                  <p className="font-zcool text-[1.2rem]">
                    Raised - $34,56,56,764/$40,00,00,000
                  </p>
                  <div className="flex flex-col gap-[1.9rem] w-[100%] mt-[2rem] ">
                    <input
                      className=" bg-transparent rounded-[50px] text-[1.2rem] placeholder:text-[#808181] text-white font-zcool border-[1px] border-[#C4110C] p-[1rem_2.4rem] outline-none"
                      type="text"
                      placeholder="Enter the amount (BNB)"
                    />
                    <input
                      className="bg-transparent rounded-[50px] text-[1.2rem] placeholder:text-[#808181] text-white font-zcool border-[1px] border-[#C4110C] p-[1rem_2.4rem] outline-none"
                      type="text"
                      placeholder="Minimum Quantity to Buy"
                    />
                    <input
                      className="bg-transparent rounded-[50px] text-[1.2rem] placeholder:text-[#808181] text-white font-zcool border-[1px] border-[#C4110C] p-[1rem_2.4rem] outline-none"
                      type="text"
                      placeholder="Maximum Quantity of Tokens"
                    />
                  </div>
                  <div className="flex gap-[2rem] justify-center mt-[-1rem]">
                    <button className="bg-gradient-to-r from-smurai-grade-red to-smurai-grade-orange rounded-[16.21px] p-[10px_3.5rem] text-[1rem] font-zcool mt-[4rem]">
                      Buy
                    </button>
                    <button className="bg-gradient-to-r from-smurai-grade-red to-smurai-grade-orange rounded-[16.21px] p-[10px_2rem] text-[1rem] font-zcool mt-[4rem] ">
                      Claim Drop
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IDOEventSection;