import Image from "next/image";
import ConnectButton from "@/component/ConnectButton";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="flex flex-col items-center ">
        <div className="text-black font-bold text-xl dark:text-white py-20">
          Next.js Demo
        </div>
        <p className="pb-2 font-semibold">
          Using WalletConnect on Conflux eSpace
        </p>
        <ConnectButton />
      </div>
    </main>
  );
}