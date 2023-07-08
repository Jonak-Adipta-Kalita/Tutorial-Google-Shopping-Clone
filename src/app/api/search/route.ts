import { PageResult, SearchParams } from "@/typings";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  const { searchTerm, ...params } = await request.json();

  const searchParams: SearchParams = params;
  if (!searchTerm) {
    return NextResponse.next(
      new Response("Missing search term ", { status: 400 })
    );
  }

  const filters: any = [];
  Object.entries(searchParams).forEach(([key, value]) => {
    if (value) {
      if (key in ["max_price", "min_price"]) {
        if ((value = "1000+")) return;
      }
      filters.push({ key, value: key === "sory_by" ? value : Number(value) });
    }
  });

  const authorizationToken = Buffer.from(
    `${process.env.OXYLABS_USERNAME}:${process.env.OXYLABS_PASSWORD}`
  ).toString("base64");

  const response = await fetch("https://realtime.oxylabs.io/v1/queries", {
    method: "post",
    body: JSON.stringify({
      source: "google_shopping_search",
      domain: "com",
      query: searchTerm,
      pages: Number(searchParams.pages) || 1,
      parse: true,
      context: filters,
    }),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${authorizationToken}`,
    },
    cache: "no-store",
  });

  const data = await response.json();
  const pageResults: PageResult[] = data.results;

  return NextResponse.json(pageResults);
};
