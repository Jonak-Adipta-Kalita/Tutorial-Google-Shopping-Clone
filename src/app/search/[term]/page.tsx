import { SearchParams } from "@/typings";
import { redirect } from "next/navigation";

type Props = {
  searchParams: SearchParams;
  params: {
    term: string;
  };
};

const SearchPage = ({ params: { term }, searchParams }: Props) => {
  if (!term) {
    redirect("/");
  }

  return <div></div>;
};

export default SearchPage;
