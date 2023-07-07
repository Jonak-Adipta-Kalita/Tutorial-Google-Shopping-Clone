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

const SORT_BY_MAP = {
  r: "Default",
  rv: "By Review",
  p: "By Price (low to high)",
  pd: "By Price (high to low)",
};

const PRICE_MAP = [100, 250, 500, 750, 900, 1000];

const Header = () => {
  return (
    <header>
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
        <form>
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
          <div>
            <SearchSelect className="min-w-4" placeholder="# of pages">
              {[...Array(100)].map((_, i) => (
                <SearchSelectItem key={i} value={(i + 1).toString()}>
                  {(i + 1).toString()} Pages
                </SearchSelectItem>
              ))}
            </SearchSelect>
            <Select className="min-w-4" placeholder="Sort by">
              {Object.entries(SORT_BY_MAP).map(([key, value]) => (
                <SelectItem key={key} value={key}>
                  {value}
                </SelectItem>
              ))}
            </Select>
            <SearchSelect className="min-w-4" placeholder="Min Price...">
              {PRICE_MAP.map((value, i) => (
                <SearchSelectItem key={i} value={value.toString()}>
                  {i === 0 ? "No Minimum" : `$${value.toString()}`}
                </SearchSelectItem>
              ))}
            </SearchSelect>
            <SearchSelect className="min-w-4" placeholder="Max Price...">
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
