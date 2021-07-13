/*
 * @Author: ZWP
 * @LastEditors: ZWP
 * @Description:
 */
import Nav from "../nav";

const Layout = (props: any) => {
  return (
    <>
      <Nav />
      {props.children}
    </>
  );
};

export default Layout;
