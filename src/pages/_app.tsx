import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div style={{}}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
