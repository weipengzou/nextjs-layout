/*
 * @Author: ZWP
 * @LastEditors: ZWP
 * @Description:
 */
import style from "./index.module.scss";
import Link from "next/link";
import { useTranslation, Trans, getI18n } from "react-i18next";
import { useRouter } from "next/router";
import Language from "./language";
import { Row, Col } from "antd";
const linkStyle = {
  marginRight: 24,
  color: "#121212",
};
const Nav = () => {
  const { t } = useTranslation();
  return (
    <nav className={style.nav}>
      <Row className={style.container}>
        <Col span={"flex"}>logo</Col>
        <Col span={"flex"}>
          <Link href="/">
            <a style={linkStyle}>{t("HOME")}</a>
          </Link>
          <Link href="/about">
            <a style={linkStyle}>{t("ABOUT")}</a>
          </Link>
          <Link href="/demo">
            <a style={linkStyle}>{t("test")}</a>
          </Link>
          <Link href="/demo">
            <a style={linkStyle}>{t("test")}</a>
          </Link>
          <Link href="/demo">
            <a style={linkStyle}>{t("test")}</a>
          </Link>
          <Link href="/demo">
            <a style={linkStyle}>{t("test")}</a>
          </Link>
          <Link href="/demo">
            <a style={linkStyle}>{t("test")}</a>
          </Link>
          <Link href="/demo">
            <a style={linkStyle}>{t("test")}</a>
          </Link>
          <Link href="/demo">
            <a style={linkStyle}>{t("test")}</a>
          </Link>
          <Link href="/demo">
            <a style={linkStyle}>{t("test")}</a>
          </Link>
          <Link href="/demo">
            <a style={linkStyle}>{t("test")}</a>
          </Link>
        </Col>
        <Col span={"flex"}>
          <Language />
        </Col>
      </Row>
    </nav>
  );
};

export default Nav;
