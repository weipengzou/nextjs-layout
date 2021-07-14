/*
 * @Author: ZWP
 * @LastEditors: ZWP
 * @Description:
 */
import Head from "next/head";
import { useEffect } from "react";
const MyHead = () => {
  useEffect(() => {
    import("lib-flexible");
  }, []);

  return (
    <div>
      <Head>
        <meta name="renderer" content="webkit" />
        <title>title</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
    </div>
  );
};
export default MyHead;
