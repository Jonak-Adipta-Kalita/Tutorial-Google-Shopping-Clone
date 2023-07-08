import { redirect } from "next/navigation";

type Props = {
  searchParams: any;
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
