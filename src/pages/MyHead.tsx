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
        {/* <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"
        ></meta> */}
        <title>title</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
    </div>
  );
};
export default MyHead;
