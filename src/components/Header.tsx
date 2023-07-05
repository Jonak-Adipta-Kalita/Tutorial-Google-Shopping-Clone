import Image from "next/image";

type Props = {};

const Header = (props: Props) => {
  return (
    <header>
      <Image
        src="https://links.papareact.com/208"
        alt="logo"
        width={150}
        height={150}
        className="object-contain"
      />
    </header>
  );
};

export default Header;
