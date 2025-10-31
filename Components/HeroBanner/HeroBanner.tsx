import { lora } from "@/app/fonts";
import scrollImg from "../../assets/img/scroll.png";
import Image from "next/image";
import Header from "../Header/Header";

function HeroBanner() {
  return (
    <div className="relative bg-[#1e0044]  mt-10 h-screen rounded-4xl box-border">
      <Header />
      <div className="mt-40 ml-10 mr-10 flex flex-col gap-5">
        <h1 className="text-8xl">
          I create
          <strong
            className={`${lora.className} text-8xl ml-5 text-transparent bg-clip-text font-light bg-gradient-to-r from-[#8b5cf6] to-[#a855f7]`}
          >
            beautiful
          </strong>
          <br /> experiences
        </h1>
        <span className="text-2xl max-w-xl font-light">
          I work with people all over the world to create tailor-made Webflow
          experiences
        </span>

        {/* footer fixo dentro do HeroBanner */}
        <div className="absolute bottom-5 left-0 right-0 flex flex-row justify-between items-center px-10">
          <span className="text-sm">Available for freelance work</span>
          <Image
            src={scrollImg}
            alt="scroll"
            width={80}
            height={80}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;
