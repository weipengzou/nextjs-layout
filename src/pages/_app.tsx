import "../styles/base.scss";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import MyHead from "./MyHead";
import Layout from "../components/layout";
import i18n from "./i18n";

import { I18nextProvider } from "react-i18next";

export function reportWebVitals(metric: any) {
  console.log(metric);
}
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <I18nextProvider i18n={i18n}>
      <MyHead />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </I18nextProvider>
  );
}
export default MyApp;
