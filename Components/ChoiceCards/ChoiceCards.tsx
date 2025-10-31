export default function ChoiceCards() {
  return (
    <div className="flex flex-col md:flex-row gap-5 font-light px-5 md:px-0">
      {/* Card 1 */}
      <div className="bg-[#9530f2] flex flex-col p-6 md:p-8 gap-10 md:gap-20 rounded-3xl md:rounded-4xl flex-1">
        <h2 className="text-3xl md:text-4xl font-semibold">Development</h2>

        <div className="flex flex-col gap-5">
          <p className="text-sm md:text-base leading-relaxed">
            I specialize in developing websites using Webflow, a powerful
            platform that allows for easy customization and responsive design. I
            have experience building websites for a variety of industries, from
            small businesses to large corporations. My focus is always on
            creating functional and smooth websites that generate traffic.
          </p>

          <div className="flex flex-wrap gap-3 text-xs md:text-sm">
            <span className="border border-white px-3 py-1 rounded-full">
              Webflow
            </span>
            <span className="border border-white px-3 py-1 rounded-full">
              Development
            </span>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-[#9530f2] flex flex-col p-6 md:p-8 gap-10 md:gap-20 rounded-3xl md:rounded-4xl flex-1">
        <h2 className="text-3xl md:text-4xl font-semibold">Art direction</h2>

        <div className="flex flex-col gap-5">
          <p className="text-sm md:text-base leading-relaxed">
            Art direction is the process of bringing together all of the
            creative elements of a project to create a cohesive and visually
            stunning end product. I work with clients to develop a concept and
            bring it to life through art direction. I believe that attention to
            detail and a clear vision are key to creating truly memorable
            designs.
          </p>

          <div className="flex flex-wrap gap-3 text-xs md:text-sm">
            <span className="border border-white px-3 py-1 rounded-full">
              Concept design
            </span>
            <span className="border border-white px-3 py-1 rounded-full">
              Brand identity
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
