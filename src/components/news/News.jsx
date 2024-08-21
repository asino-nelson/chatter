import NewsItem from "./NewsItem";

const News = () => {
  return (
    <div id="blog" className="py-10 gap-3 w-full">
      <div className="py-8 px-16">
        <h2 className="font-semibold text-4xl mb-4">LATEST NEWS</h2>
        <p>Catch up with the latest news, tips and tricks from our team.</p>
      </div>
      <div className="px-8">
        <NewsItem />
      </div>
    </div>
  );
};

export default News;
