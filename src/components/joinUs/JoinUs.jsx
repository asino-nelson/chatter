const JoinUs = () => {
  return (
    <div id="get started" className="w-full h-[320px] flex bg-[#EDE7EF]">
      <img src="./images/join.png" className="w-1/2 h-full" alt="image" />
      <div className="h-full py-8 px-10">
        <div className="py-10 px-4 text-[#A03516]">
          <h2 className="text-4xl font-semibold">Join the Waiting List</h2>
          <p className="my-5 pr-8">
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
