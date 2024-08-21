const Traction = () => {
  return (
    <div className="bg-[#EDE7EF] w-full md:p-10 p-8">
      <div className="py-8 md:px-16">
        <div className="flex md:flex-row flex-col justify-between">
          <div className="text-[#3C053C]">
            <h2 className="text-3xl font-semibold md:mb-0 mb-3">Success Stories</h2>
            <p className="md:pr-20 pb-5">
              We help businesses convert conversations to results. Join this
              list of businesses that we work with.
            </p>
            <a href="#">Read the latest stories</a>
          </div>
          <div className="md:pr-32 md:my-0 my-10">
            <div className=" grid grid-cols-3 md:pr-32">
              <img src="./images/Link_margin.png" alt="image" />
              <img src="./images/ford.png" alt="image" />
              <img src="./images/audi.png" alt="image" />
              <img src="./images/samsung.png" alt="image" />
              <img src="./images/ikea.png" alt="image" />
              <img src="./images/pinterest.png" alt="image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Traction;
