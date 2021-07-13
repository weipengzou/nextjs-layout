import styles from "../styles/Home.module.scss";
import { useTranslation } from "react-i18next";
import "./i18n";

export default function Home() {
  const { t, i18n } = useTranslation();
  return <h1>{t("test")}</h1>;
}
