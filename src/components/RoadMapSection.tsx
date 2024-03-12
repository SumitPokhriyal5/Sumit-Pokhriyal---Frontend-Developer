import RoadMapCard from "./RoadMapCard";
import card1 from "/card1.webp";
import card2 from "/card2.webp";
import card3 from "/card3.webp";
import card4 from "/card4.webp";


const RoadMapSection = () => {
    return (
      <div className="bg-black w-[100%] flex flex-col items-center text-white">
        <div className="bg-roadmap-bg bg-no-repeat w-[100%] flex flex-col items-center p-[6rem_5%] max-[600px]:p-[6rem_10px]">
          <div className="flex flex-col items-center w-[100%] gap-[5rem]">
            <h3 className="text-samurai-red font-shojumaru text-[3rem]">
              Road Map
            </h3>
            <div className="flex items-center justify-center flex-wrap gap-[3rem] max-[1200px]:gap-[5rem] w-[100%] h-[100%]">
              <RoadMapCard
                imageUrl={card1}
                title={"Phase 1"}
                description={"Technical Readiness and Smart Contract Audit"}
              />
  
              <RoadMapCard
                imageUrl={card2}
                title={"Phase 2"}
                description={"Increase Liquidity and Trading Volume"}
              />
  
              <RoadMapCard
                imageUrl={card3}
                title={"Phase 3"}
                description={"Community Building and Marketing"}
              />
              <RoadMapCard
                imageUrl={card4}
                title={"Phase 4"}
                description={"Ecosystem Expansion and Partnerships"}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default RoadMapSection;