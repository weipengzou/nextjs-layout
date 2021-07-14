/*
 * @Author: ZWP
 * @LastEditors: ZWP
 * @Description:
 */
import styles from "../styles/Home.module.scss";
import { useTranslation } from "react-i18next";
import "./i18n";

export default function Home() {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <div className={styles.subNav}>sticky menu</div>
      <h1 className={styles.test}>{t("test")}</h1>
      <div className={styles.box}></div>
    </div>
  );
}
