const JoinUs = () => {
  return (
    <div
      id="get started"
      className="w-full md:h-[320px] flex md:flex-row flex-col-reverse bg-[#EDE7EF]"
    >
      <img
        src="./images/join.png"
        className="md:w-1/2 w-full md:h-full h-3/4"
        alt="image"
      />
      <div className="h-full md:py-8 py-4 md:px-10 px-4">
        <div className="md:py-10 py-5 px-4 text-[#A03516]">
          <h2 className="text-3xl font-semibold md:mb-0 mb-3">
            Join the Waiting List
          </h2>
          <p className="my-5 md:pr-8">
            {" "}
            Join our waiting list and be the first to know when we launch! It
            takes less than a minute and you’re in!
          </p>
          <a href="#">Join Now!</a>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
