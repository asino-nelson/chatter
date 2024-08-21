import NewsItem from "./NewsItem";

const News = () => {
  return (
    <div id="blog" className="py-10 gap-3 w-full">
      <div className="py-8 md:px-16 px-8">
        <h2 className="text-3xl font-semibold md:mb-0 mb-3">LATEST NEWS</h2>
        <p>Catch up with the latest news, tips and tricks from our team.</p>
      </div>
      <div className="md:px-8 px-4">
        <NewsItem />
      </div>
    </div>
  );
};

export default News;
