import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

type Props = {};

const Loadign = (props: Props) => {
  return (
    <div>
      <div className="flex md:px-5">
        <div className="w-36 md:w-64 space-y-5">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="border rounded-r-lg md:rounded-lg p-5">
              <p className="font-bold">
                <Skeleton />
              </p>
              <Skeleton count={Math.floor(Math.random() * 5) * 1} />
            </div>
          ))}
        </div>
        <div className="px-5 md:p-10 py-0 space-y-5 flex-1">
          <div className="gird grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3">
            <div className="md:col-span-2 lg:col-span-3 xl:col-span-4 px-5 pb-2 text-xl font-semibold">
              <h2>Loading Results from Google...</h2>
              <h2 className="font-extralight text-base animate-pulse text-blue-500">
                Scrapping Real Results via Oxylabs!
              </h2>
            </div>
            {[...Array(10)].map((_, i) => (
              <div className="p-5 border rounded-2xl" key={i}>
                <Skeleton count={2} />
                <br />
                <Skeleton count={2} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loadign;
