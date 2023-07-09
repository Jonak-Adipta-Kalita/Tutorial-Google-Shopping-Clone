import { ProductData } from "@/typings";
import { NextResponse } from "next/server";

export const GET = async (
  request: Request,
  { params: { id } }: { params: { id: string } }
) => {
  if (!id) {
    return NextResponse.next(
      new Response("Missing product id", { status: 400 })
    );
  }

  const authorizationToken = Buffer.from(
    `${process.env.OXYLABS_USERNAME}:${process.env.OXYLABS_PASSWORD}`
  ).toString("base64");

  const response = await fetch("https://realtime.oxylabs.io/v1/queries", {
    method: "post",
    body: JSON.stringify({
      source: "google_shopping_product",
      domain: "com",
      query: id,
      parse: true,
    }),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${authorizationToken}`,
    },
    cache: "no-store",
  });

  const data = await response.json();
  if (data.results.length === 0) {
    return NextResponse.next(
      new Response("Product not found", { status: 404 })
    );
  }

  const productData: ProductData = data.results[0];
  return NextResponse.json(productData);
};
