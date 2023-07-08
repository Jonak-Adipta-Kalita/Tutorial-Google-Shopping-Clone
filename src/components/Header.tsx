"use client";

import Image from "next/image";
import Link from "next/link";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import SearchButton from "./SearchButton";
import {
  SearchSelect,
  SearchSelectItem,
  Select,
  SelectItem,
} from "@tremor/react";
import Avatar from "react-avatar";
import { useState } from "react";
import { useRouter } from "next/navigation";

const SORT_BY_MAP = {
  r: "Default",
  rv: "By Review",
  p: "By Price (low to high)",
  pd: "By Price (high to low)",
};

const PRICE_MAP = ["100", "250", "500", "750", "900", "1000"];

const Header = () => {
  const [pages, setPages] = useState("");
  const [sortBy, setSortBy] = useState("r");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const router = useRouter();

  return (
    <header className="flex flex-col items-center md:flex-row md:items-start md:space-x-6 px-2 pt-10 pb-5 md:p-10 md:pb-5">
      <Link href="/">
        <Image
          src="https://links.papareact.com/208"
          alt="logo"
          width={150}
          height={150}
          className="object-contain mr-10"
        />
      </Link>
      <div className="w-full md:max-w-2xl">
        <form
          action={(formData) => {
            const searchTerm = formData.get("searchTerm");
            if (!searchTerm) return;

            const params = new URLSearchParams();
            if (pages) params.set("pages", pages);
            if (sortBy) params.set("sort_by", sortBy);
            if (minPrice) params.set("min_price", minPrice);
            if (maxPrice) params.set("max_price", maxPrice);

            router.push(`/search/${searchTerm}?${params.toString()}`);
          }}
        >
          <div className="flex items-center gap-2 w-full px-4">
            <div className="flex items-center space-x-2 bg-white shadow-xl rounded-full border-0 px-6 py-4 flex-1">
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for Products, Brands and More"
                name="searchTerm"
                className="flex-1 outline-none"
              />
            </div>
            <SearchButton />
          </div>
          <div className="grid grid-cols-2 gap-2 p-4 md:grid-cols-4 max-w-lg md:max-w-none mx-auto justify-center">
            <SearchSelect
              className="min-w-4"
              placeholder="# of pages"
              onValueChange={setPages}
            >
              {[...Array(100)].map((_, i) => (
                <SearchSelectItem key={i} value={(i + 1).toString()}>
                  {(i + 1).toString()} Pages
                </SearchSelectItem>
              ))}
            </SearchSelect>
            <Select
              className="min-w-4"
              placeholder="Sort by"
              onValueChange={setSortBy}
            >
              {Object.entries(SORT_BY_MAP).map(([key, value]) => (
                <SelectItem key={key} value={key}>
                  {value}
                </SelectItem>
              ))}
            </Select>
            <SearchSelect
              className="min-w-4"
              placeholder="Min Price"
              onValueChange={setMinPrice}
            >
              {PRICE_MAP.map((value, i) => (
                <SearchSelectItem key={i} value={value.toString()}>
                  {i === 0 ? "No Minimum" : `$${value.toString()}`}
                </SearchSelectItem>
              ))}
            </SearchSelect>
            <SearchSelect
              className="min-w-4"
              placeholder="Max Price"
              onValueChange={setMaxPrice}
            >
              {PRICE_MAP.map((value, i) => (
                <SearchSelectItem key={i} value={value.toString()}>
                  {i === 0 ? "No Max" : `$${value.toString()}`}
                </SearchSelectItem>
              ))}
            </SearchSelect>
          </div>
        </form>
      </div>
      <div className="hidden lg:flex flex-1 justify-end">
        <Avatar name="Jonak Adipta Kalita" round size="50" />
      </div>
    </header>
  );
};

export default Header;
