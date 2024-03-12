import { useEffect, useRef } from "react";
import { FaChevronDown } from "react-icons/fa";

const FAQSection = () => {
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
    <div className="bg-[#0B0A0B] w-11/12 flex flex-col items-center text-white">
      <h3 className="text-center text-samurai-red font-shojumaru text-[4.092rem] max-[1285px]:flex-col">
        FAQ
      </h3>
      <div className="flex max-[1200px]:flex-col items-center gap-[5rem] w-[100%]">
        <div ref={leftDivRef} className="w-1/2 max-[1200px]:w-11/12 flex justify-center items-center">
          <img
            width={"100%"}
            height={"auto"}
            src={"/faq-logo.png"}
            alt="site logo"
          />
        </div>
        <div ref={rightDivRef} className="items-center justify-center w-1/2 max-[1200px]:w-11/12 flex flex-col gap-5 text-[1rem] max-[700px]:text-[0.6rem] font-shojumaru">
          <details className="transition duration-300 ease h-fit w-[100%] border-[1px] border-[#ED0137] rounded-[20px] p-[2rem] max-[700px]:p-[0.6rem]">
            <summary className="flex justify-between items-center text-center p-[0px_2rem] cursor-pointer w-[100%] ">
              <p>1</p>
              <p className="text-left self-center">
                Why choose &quot;Savior&quot;?
              </p>
              <FaChevronDown />
            </summary>
            <div className="bg-[#181818] text-white p-[2.5rem] rounded-[2rem] mt-[2.5rem]">
              <p className="leading-[2.3rem] font-zcool">
                Lorem ipsum dolor sit amet consectetur, adipisicing.
                
              </p>
            </div>
          </details>

          <details className="transition duration-300 ease h-fit w-[100%] border-[1px] border-[#ED0137] rounded-[20px] p-[2rem] max-[700px]:p-[0.6rem]">
            <summary className="flex justify-between items-center text-center p-[0px_2rem] cursor-pointer">
              <p>2</p>
              <p className="text-left self-center">
                Why is the IDO duration so long?
              </p>
              <FaChevronDown />
            </summary>
            <div className="bg-[#181818] text-white p-[2.5rem] rounded-[2rem] mt-[2.5rem] w-[100%] ">
              <p className="leading-[2.3rem] font-zcool">
                Lorem ipsum dolor sit amet consectetur, adipisicing.
                
              </p>
            </div>
          </details>

          <details className="transition duration-300 ease h-fit w-[100%] border-[1px] border-[#ED0137] rounded-[20px] p-[2rem] max-[700px]:p-[0.6rem]">
            <summary className="flex justify-between items-center text-center p-[0px_2rem] cursor-pointer">
              <p>3</p>
              <p className="text-left self-center">
                When will trading go live?
              </p>
              <FaChevronDown />
            </summary>
            <div className="bg-[#181818] text-white p-[2.5rem] rounded-[2rem] mt-[2.5rem]">
              <p className="leading-[2.3rem] font-zcool">
                Lorem ipsum dolor sit amet consectetur, adipisicing.
                
              </p>
            </div>
          </details>

          <details className="transition duration-300 ease h-fit w-[100%] border-[1px] border-[#ED0137] rounded-[20px] p-[2rem] max-[700px]:p-[0.6rem]">
            <summary className="flex justify-between items-center text-center p-[0px_2rem] cursor-pointer">
              <p>4</p>
              <p className="text-left self-center">
                When can we claim the tokens?
              </p>
              <FaChevronDown />
            </summary>
            <div className="bg-[#181818] text-white p-[2.5rem] rounded-[2rem] mt-[2.5rem]">
              <p className="leading-[2.3rem] font-zcool">
                After the IDO concludes, you can claim the tokens on our
                official website.
              </p>
            </div>
          </details>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
