import tokenomicsImage from '/tokenomics.webp';

function TokenomicSection() {
    return (
      <div className="bg-black w-[100%] h-fit flex flex-col items-center text-white">
        <div className="bg-tokenomics-bg bg-no-repeat w-[100%] flex flex-col items-center p-[6rem_5%] max-[600px]:p-[6rem_10px]">
          <div className="flex flex-col items-center w-[100%] gap-[1rem] max-[600px]:gap-[2rem]">
            <h3 className="text-samurai-red font-shojumaru text-[3rem]">
              Tokenomics
            </h3>
            <div className="flex items-start justify-center max-[800px]:items-center max-[800px]:flex-col gap-[3rem] w-[100%] h-[100%]">
              <div className="flex flex-col items-center w-[40%] max-[800px]:w-full">
                <div className="flex flex-col items-center justify-center ">
                  <div className="bg-[#ED0137] flex justify-center items-center translate-y-[2rem] rounded-[2rem] p-4 ">
                    <p className="font-shojumaru text-[1rem] text-white">
                      Token Info
                    </p>
                  </div>
                  <div className="w-full flex flex-col justify-center items-center gap-[1.2rem] border-[2px] border-[#EF490F] rounded-[20px] p-[2rem] pb-[1rem]">
                    <table className="w-[100%]">
                      <tbody className="font-zcool text-[1.5rem] flex flex-col gap-[1.2rem] w-[100%]">
                        <tr className="w-[100%]">
                          <td className="w-[100%]">Name</td>
                          <td className="text-[#DF180A] w-[100%] text-left">
                            Saviour
                          </td>
                        </tr>
                        <tr className="w-[100%]">
                          <td className="w-[100%]">Symbol</td>
                          <td className="text-[#DF180A] text-left w-[100%]">
                            SVR
                          </td>
                        </tr>
                        <tr className="w-[100%]">
                          <td className="w-[100%]">Total Supply</td>
                          <td className="text-[#DF180A] text-left w-[100%]">
                            1000 Trillion
                          </td>
                        </tr>
                        <tr className="w-[100%]">
                          <td className="w-[100%]">Decimals</td>
                          <td className="text-[#DF180A] text-left w-[100%]">
                            18
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="w-[60%] max-[800px]:w-full self-center">
                <div className="flex justify-center items-center">
                  <img
                    width={"100%"}
                    height={"auto"}
                    src={tokenomicsImage}
                    alt="token info"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default TokenomicSection;