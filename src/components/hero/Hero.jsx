import LandingButton from "../shared/LandingButton";

const Hero = () => {
  return (
    <main className="w-full md:h-screen flex md:flex-row flex-col top-0 items-center justify-items-center">
      <div className="bg-[#6016A2] text-white py-20 md:px-[70px] px-4 gap-[10px] md:w-1/2 w-full h-full">
        <div className="w-full h-full flex flex-col justify-center md:p-0 p-1 ">
          <h2 className="font-bold md:text-7xl text-5xl text-start">
            Unlock the power of Conversations for your business!
          </h2>
          <p className="py-4 text-lg md:text-2xl">
            Easily atomate your conversations and for faster results. Give your
            customers instant replies 24/7, Close conversations faster and Free
            up your time to focus on growing your business.
          </p>
          <LandingButton label="Learn more"/>
        </div>
      </div>
      <div className="h-full md:-mt-0 -mt-10">
        <img
          src="./images/african-american-mother-with-his-son 1.png"
          alt="image"
          className="w-full md:h-full h-1/2 object-fill"
        />
      </div>
    </main>
  );
};

export default Hero;
