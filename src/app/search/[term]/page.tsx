import ResultsList from "@/components/ResultsList";
import { getFetchUrl } from "@/lib/getFetchUrl";
import { PageResult, SearchParams } from "@/typings";
import { redirect } from "next/navigation";

type Props = {
  searchParams: SearchParams;
  params: {
    term: string;
  };
};

const USE_DUMMY_DATA = true;

const SearchPage = async ({ params: { term }, searchParams }: Props) => {
  if (!term) {
    redirect("/");
  }

  let response: any;

  if (USE_DUMMY_DATA) {
    response = await fetch(getFetchUrl("dummyData.json"));
  } else {
    response = await fetch(getFetchUrl("api/search"), {
      method: "POST",
      body: JSON.stringify({ searchTerm: term, ...searchParams }),
    });
  }

  const results = (await response.json()) as PageResult[];

  return (
    <div>
      <ResultsList results={results} term={term} />
    </div>
  );
};

export default SearchPage;
