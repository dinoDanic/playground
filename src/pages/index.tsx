import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <Link href="/mac" passHref>
        <h2>Mac</h2>
      </Link>
      <Link href="/background" passHref>
        <h2>background</h2>
      </Link>
      <Link href="/dimonds" passHref>
        <h2>dimonds</h2>
      </Link>
      <Link href="/ff" passHref>
        <h2>ff</h2>
      </Link>
      <Link href="/scroll-snap" passHref>
        <h2>scroll-snap</h2>
      </Link>
      <Link href="/vanilla-setup" passHref>
        <h2>vanilla-setup</h2>
      </Link>
    </div>
  );
};

export default Home;
