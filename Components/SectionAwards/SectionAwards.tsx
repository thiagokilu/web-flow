import { MoveUpRight } from "lucide-react";

export default function SectionAwards() {
  return (
    <div className="bg-[#e9deff] text-[#0B001A] flex flex-col sm:flex-row justify-between p-6 sm:p-10 rounded-4xl gap-8 sm:gap-0">
      {/* Título */}
      <div>
        <h2 className="text-3xl sm:text-4xl font-semibold">AWARDS</h2>
      </div>

      {/* Lista */}
      <div className="flex flex-col gap-5 w-full sm:w-4/5">
        <hr className="border-b border-[#170034] opacity-40 w-full" />
        <ul className="flex flex-col gap-5">
          {[
            {
              title: "2022 Designer of the year nomination",
              subtitle: "AWWWARDS",
            },
            {
              title: "Site of the month nomination - TrailHive",
              subtitle: "Web Design Inspiration Awards",
            },
            {
              title: "Site of the month nomination - TrailHive",
              subtitle: "CSS Design Awards",
            },
            {
              title: "2021 Designer of the year nomination",
              subtitle: "Pixel Awards",
            },
          ].map((item, index) => (
            <li key={index} className="flex flex-col items-start gap-2">
              <div className="flex flex-row justify-between items-start sm:items-center w-full gap-3">
                <p className="text-xl sm:text-3xl font-medium">{item.title}</p>
                <MoveUpRight size={24} className="shrink-0 sm:size-8" />
              </div>
              <span className="text-sm text-[#170034] opacity-80">
                {item.subtitle}
              </span>
              <hr className="border-b border-[#170034] opacity-40 w-full mt-2" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
