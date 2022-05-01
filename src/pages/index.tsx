import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <Link href="/mac" passHref>
        <h2>Mac</h2>
      </Link>
    </div>
  );
};

export default Home;
