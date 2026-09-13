import BannerImg from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 px-6 py-16">
      <div className="flex-1">
        <h1 className="text-5xl font-extrabold mb-4">
          Build Your Ideal{" "}
          <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>

        <p className="text-gray-500 text-lg mb-6">
          Explore frontend, backend, database, and tooling options, compare
          them side by side, and put together the stack that fits your next
          project.
        </p>

        <div className="flex gap-4">
          <button className="btn bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 text-white border-none">
            Explore Technologies
          </button>
          <button className="btn btn-outline">Learn More</button>
        </div>
      </div>

      <div className="flex-1 flex justify-center">
        <img src={BannerImg} alt="Dev Stack" className="w-80" />
      </div>
    </div>
  );
};

export default Banner;