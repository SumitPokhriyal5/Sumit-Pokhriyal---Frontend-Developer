import { FC } from "react";

interface IRoadMapCard {
    title: string;
    description: string;
    imageUrl: string;

}

const RoadMapCard: FC<IRoadMapCard> = ({ title, description, imageUrl }) => {
    return (
      <div
        style={{
          background: `url(${imageUrl})`,
        }}
        className={`w-[237.06px] h-[349px] bg-cover bg-center bg-no-repeat border-[#ED0137] border-[1px] rounded-[13.17px] max-[701px]:zoomout max-[375px]:zoomin`}>
        <div className="h-[100%] w-fill bg-gradient-to-t from-[rgb(32,4,23)] to-[transparent] flex flex-col items-center justify-end rounded-[13.17px]">
          <div className="p-[1.4rem] flex flex-col gap-[0.8rem] rounded-[13.17px]">
            <p className="text-[1.2rem] font-inter font-bold">{title}</p>
            <p className="font-inter text-[#AEB1B8] text-[1.1rem] leading-[2rem]">
              {description}
            </p>
          </div>
        </div>
      </div>
    );
  }
  
  export default RoadMapCard;