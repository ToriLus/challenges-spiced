import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import { Fetcher } from "swr";
import { fetcher } from "../components/ISSTracker";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <SWRConfig
        value={{
          fetcher,
          refreshInterval: 1000,
        }}
      >
        <Component {...pageProps} />
      </SWRConfig>
    </>
  );
}
