type Props = {};

const SEARCHES = [
  {
    term: "iPhone 14 Pro Max",
    color: "bg-red-500",
    url: "/search/iPhone 14 Pro Max",
  },
  {
    term: "Macbook Pro",
    color: "bg-yellow-500",
    url: "/search/macbook pro",
  },
  {
    term: "Airpods Pro",
    color: "bg-green-500",
    url: "/search/airpods pro",
  },
  {
    term: "Apple Watch Series 7",
    color: "bg-blue-500",
    url: "/search/apple watch series 7",
  },
  {
    term: "iPad Pro",
    color: "bg-purple-500",
    url: "/search/ipad pro",
  },
];

const HomePage = (props: Props) => {
  return (
    <div className="p-10 pt-0 text-center md:text-left">
      <h1 className="text-3xl font-extralight mb-5">
        Welcome to JAK Google Shopping Clone
      </h1>
      <h2 className="mb-5">
        Get Started by Clicking on one of the Example Search Items or Typing in
        an Item yourself above!
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-center items-center gap-5 mt-5">
        {SEARCHES.map((search, i) => (
          <a
            href={search.url}
            key={i}
            className={`${search.color} w-full h-36 hover:opacity-50 text-white font-bold py-2 px-4 rounded`}
          >
            <h2 className="text-2xl font-bold">{search.term}</h2>
          </a>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
