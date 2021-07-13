import { useTranslation, Trans, getI18n } from "react-i18next";
import { useRouter } from "next/router";
import { GlobalOutlined } from "@ant-design/icons";

const Language = () => {
  const router = useRouter();
  let changeLocal = (locale: string) =>
    router.push("/", "/", { locale }) && getI18n().changeLanguage(locale);
  return (
    <div style={{ display: "flex", alignContent: "center" }}>
      <div>
        <GlobalOutlined />
      </div>
      <div onClick={() => changeLocal("zh")}>zh</div>
      <div onClick={() => changeLocal("en")}>en</div>
    </div>
  );
};

export default Language;
