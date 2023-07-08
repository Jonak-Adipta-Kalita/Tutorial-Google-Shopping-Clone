import { getFetchUrl } from "@/lib/getFetchUrl";
import { PageResult, SearchParams } from "@/typings";
import { redirect } from "next/navigation";

type Props = {
  searchParams: SearchParams;
  params: {
    term: string;
  };
};

const SearchPage = async ({ params: { term }, searchParams }: Props) => {
  if (!term) {
    redirect("/");
  }

  const response = await fetch(getFetchUrl("api/search"), {
    method: "POST",
    body: JSON.stringify({ searchTerm: term, ...searchParams }),
  });

  const data = (await response.json()) as PageResult[];

  return <div></div>;
};

export default SearchPage;
