import Image from "next/image";
import Link from "next/link";

type Props = {};

const Header = (props: Props) => {
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
      <div></div>
    </header>
  );
};

export default Header;
