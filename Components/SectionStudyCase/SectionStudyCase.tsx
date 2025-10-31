import Image from "next/image";
import ImgWrapper from "../../assets/img/ImageWrapper.png";
import ImgWrapper2 from "../../assets/img/ImageWrapper2.png";
import Badge from "../../assets/img/Badge.png";
import { MoveUpRight } from "lucide-react";

export default function SectionStudyCase() {
  return (
    <div className="flex flex-col gap-10 px-5 md:px-0">
      {/* === CARD 1 === */}
      <div className="bg-[#e9deff] text-black flex flex-col md:flex-row justify-between p-6 md:p-10 font-light rounded-3xl md:rounded-4xl overflow-hidden">
        {/* Texto */}
        <div className="flex flex-col justify-between gap-10 md:gap-0">
          <div className="flex flex-col gap-5">
            <span className="text-lg md:text-xl">Case Study</span>
            <h2 className="text-3xl md:text-5xl font-semibold">Korba</h2>
            <div className="flex flex-wrap gap-3 text-xs md:text-sm">
              <span className="border border-black px-3 py-1 rounded-full">
                Concept design
              </span>
              <span className="border border-black px-3 py-1 rounded-full">
                Brand identity
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-6 md:gap-10">
            <p className="text-sm md:text-base max-w-full md:max-w-96 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla.
            </p>

            <span className="flex flex-row items-center justify-center gap-2 px-4 py-2 w-fit text-sm md:text-base font-semibold text-black rounded-full border-2 bg-transparent shadow-[0_0_20px_rgba(126,34,206,0.4)] border-purple-500">
              SEE CASE STUDY <MoveUpRight size={18} />
            </span>
          </div>
        </div>

        {/* Imagem */}
        <div className="mt-8 md:mt-0 flex justify-center md:justify-end">
          <Image
            src={ImgWrapper}
            alt="Case Image"
            className="w-full md:w-auto max-w-md"
          />
        </div>
      </div>

      {/* === CARD 2 === */}
      <div className="bg-[#1e0044] text-white flex flex-col md:flex-row justify-between p-6 md:p-10 font-light rounded-3xl md:rounded-4xl overflow-hidden">
        {/* Texto */}
        <div className="flex flex-col justify-between gap-10 md:gap-0">
          <div className="flex flex-col gap-5">
            <span className="text-lg md:text-xl">Case Study</span>
            <h2 className="text-3xl md:text-5xl font-semibold">Korba</h2>
            <div className="flex flex-wrap gap-3 text-xs md:text-sm">
              <span className="border border-white px-3 py-1 rounded-full">
                Concept design
              </span>
              <span className="border border-white px-3 py-1 rounded-full">
                Brand identity
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-6 md:gap-10">
            <p className="text-sm md:text-base max-w-full md:max-w-96 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla.
            </p>

            <span className="flex flex-row items-center justify-center gap-2 px-4 py-2 w-fit text-sm md:text-base font-semibold text-white rounded-full border-2 bg-transparent shadow-[0_0_20px_rgba(126,34,206,0.4)] border-purple-500">
              SEE CASE STUDY <MoveUpRight size={18} />
            </span>
          </div>
        </div>

        {/* Imagem com badge */}
        <div className="relative mt-8 md:mt-0 flex justify-center md:justify-end">
          <Image
            src={Badge}
            alt="Badge"
            className="absolute -top-2 left-6 md:top-5 md:left-10 w-12 md:w-auto"
          />
          <Image
            src={ImgWrapper2}
            alt="Case Image"
            className="w-full md:w-auto max-w-md"
          />
        </div>
      </div>
    </div>
  );
}
