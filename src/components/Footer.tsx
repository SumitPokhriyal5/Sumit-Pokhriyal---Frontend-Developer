
const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-[3.6rem] p-[4rem] max-[600px]:p-[5rem_13px] bg-gradient-to-t from-[#120000] to-[#020505]">
    <img
      width={200}
      height={163}
      src={"/saviour-logo.png"}
      alt="site logo"
    />
    <p
      style={{
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        color: "transparent",
        backgroundImage: "linear-gradient(to right, #FE012A, #760107)",
      }}
      className="font-inter text-[2.4rem] font-bold">
      SITEMAP
    </p>
    <div className="flex gap-[5rem] items-center justify-center text-white text-[12.82px] font-inter font-bold flex-wrap leading-[0.1rem]">
      <p className="cursor-pointer">Home</p>
      <p className="cursor-pointer">IDO</p>
      <p className="cursor-pointer">Tokenomics</p>
      <p className="cursor-pointer">Road Map</p>
      <p className="cursor-pointer">Whitepaper</p>
      <p className="cursor-pointer">Pledge</p>
      <p className="cursor-pointer">NFT</p>
      <p className="cursor-pointer">Games</p>
    </div>
    <div className="flex items-center justify-center gap-[2rem] mt-[10px]">
      <img
        src={"/twitter.svg"}
        width={27.47}
        height={27.47}
        alt="twitter"
      />
      <img
        src={"/fly.svg"}
        width={27.47}
        height={27.47}
        alt="fly"
      />
      <img
        src={"/mail.svg"}
        width={27.47}
        height={27.47}
        alt="email"
      />
    </div>
  </div>
  )
}

export default Footer