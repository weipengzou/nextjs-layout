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
const linkStyle = {
  marginRight: 15,
};
const Nav = () => {
  const { t } = useTranslation();
  return (
    <nav className={style.nav}>
      <div className={style.container}>
        <Link href="/">
          <a style={linkStyle}>{t("HOME")}</a>
        </Link>
        <Link href="/about">
          <a style={linkStyle}>{t("ABOUT")}</a>
        </Link>
        <Link href="/demo">
          <a style={linkStyle}>{t("test")}</a>
        </Link>
        <Language />
      </div>
    </nav>
  );
};

export default Nav;
