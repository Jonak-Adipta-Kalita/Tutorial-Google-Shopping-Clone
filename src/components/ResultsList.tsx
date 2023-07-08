"use client";

import { PageResult } from "@/typings";
import Link from "next/link";

type Props = { results: PageResult[]; term: string };

const ResultsList = ({ results, term }: Props) => {
  console.log(results);

  return (
    <div>
      <div>
        {results.map((pageResult, i) => (
          <div key={i} className="space-y-2">
            {pageResult.content.results.filters?.map((filter, i) => (
              <div key={i}>
                <p className="font-bold rounded-r-lg md:rounded-lg p-5">
                  {filter.name}
                </p>
                <div className="flex flex-col">
                  {filter.values.map((value) => (
                    <Link
                      key={value.value}
                      href={`https://www.google.com${value.url}`}
                      prefetch={false}
                    >
                      {value.value}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default ResultsList;
