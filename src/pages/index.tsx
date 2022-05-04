import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Link href="/mac" passHref>
        Mac
      </Link>
      <Link href="/background" passHref>
        background
      </Link>
      <Link href="/dimonds" passHref>
        dimonds
      </Link>
      <Link href="/ff" passHref>
        ff
      </Link>
      <Link href="/scroll-snap" passHref>
        scroll-snap
      </Link>
      <Link href="/vanilla-setup" passHref>
        vanilla-setup
      </Link>
      <Link href="/threejs-journey" passHref>
        threejs journey
      </Link>
    </div>
  );
};

export default Home;
