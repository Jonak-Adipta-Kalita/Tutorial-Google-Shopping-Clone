"use client";

import { PageResult } from "@/typings";
import Link from "next/link";

type Props = { results: PageResult[]; term: string };

const ResultsList = ({ results, term }: Props) => {
  console.log(results);
  return <div></div>;
};

export default ResultsList;
