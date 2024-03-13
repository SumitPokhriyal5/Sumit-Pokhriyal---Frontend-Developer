import { useEffect, useRef } from 'react';
import tokenomicsImage from '/tokenomics.png';

function TokenomicSection() {
  const leftDivRef = useRef<HTMLDivElement>(null);
  const rightDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const leftDivObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-left-fade-in");
        } else {
          entry.target.classList.remove("animate-left-fade-in");
        }
      });
    });

    const rightDivObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-right-fade-in");
        } else {
          entry.target.classList.remove("animate-right-fade-in");
        }
      });
    });

    if (leftDivRef.current) {
      leftDivObserver.observe(leftDivRef.current);
    }

    if (rightDivRef.current) {
      rightDivObserver.observe(rightDivRef.current);
    }

    // Cleanup function
    return () => {
      if (leftDivRef.current) {
        leftDivObserver.unobserve(leftDivRef.current);
      }
      if (rightDivRef.current) {
        rightDivObserver.unobserve(rightDivRef.current);
      }
    };
  }, []);
    return (
      <div className="bg-black w-[100%] h-fit flex flex-col items-center text-white">
        <div className="bg-tokenomics-bg bg-no-repeat w-[100%] flex flex-col items-center p-[6rem_5%] max-[600px]:p-[6rem_10px]">
          <div className="flex flex-col items-center w-[100%] gap-[1rem] max-[600px]:gap-[2rem]">
            <h3 className="text-samurai-red font-shojumaru text-[2.5rem]">
              Tokenomics
            </h3>
            <div className="flex items-center justify-center max-[800px]:items-center max-[800px]:flex-col gap-[3rem] w-[100%] h-[100%]">
              <div ref={leftDivRef} className="flex flex-col items-center w-[40%] max-[800px]:w-full">
                <div className="flex flex-col items-center justify-center ">
                  <div className="bg-[#ED0137] flex justify-center items-center translate-y-[1.6rem] rounded-[1rem] p-[1rem_2rem] ">
                    <p className="font-shojumaru text-[1rem] text-white">
                      Token Info
                    </p>
                  </div>
                  <div className="w-[full] flex flex-col justify-center items-center gap-[1.2rem] border-[2px] border-[#EF490F] rounded-[20px] p-[2rem] pb-[1rem]">
                    <table className="w-[100%]">
                      <tbody className="font-zcool text-[1.2rem] flex flex-col gap-[1.2rem] w-[100%]">
                        <tr className="flex justify-between gap-10">
                          <td className="">Name</td>
                          <td className="text-[#DF180A] text-left">
                            Saviour
                          </td>
                        </tr>
                        <tr className="flex justify-between gap-10">
                          <td className="">Symbol</td>
                          <td className="text-[#DF180A] text-left ">
                            SVR
                          </td>
                        </tr>
                        <tr className="flex justify-between gap-10">
                          <td className="">Total Supply</td>
                          <td className="text-[#DF180A] text-left ">
                            1000 Trillion
                          </td>
                        </tr>
                        <tr className="flex justify-between gap-10">
                          <td className="">Decimals</td>
                          <td className="text-[#DF180A] text-left ">
                            18
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div ref={rightDivRef} className="w-[60%] max-[800px]:w-full self-center">
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