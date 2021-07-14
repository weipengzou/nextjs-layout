/*
 * @Author: ZWP
 * @LastEditors: ZWP
 * @Description:
 */
import Nav from "../nav";

const Layout = (props: any) => {
  let isNav: boolean = props.children.props.navbar;
  return (
    <>
      {isNav == false ? "" : <Nav />}
      {props.children}
    </>
  );
};

export default Layout;
