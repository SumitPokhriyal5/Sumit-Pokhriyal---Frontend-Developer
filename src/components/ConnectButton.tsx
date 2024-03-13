import { useWeb3Modal } from "@web3modal/wagmi/react";

function ConnectButton({textSize}: {textSize: string}) {
  const { open } = useWeb3Modal();

  return (
    <button
      onClick={() => {
        open();
      }}
      className={`bg-gradient-to-r from-[#ED0137] to-[#EE6910] rounded-[1.544rem] p-[10px_15px] text-[${textSize}] font-inter font-semibold text-white shadow-lg`}
    >
      Connect Wallet
    </button>
  );
}

export default ConnectButton;
