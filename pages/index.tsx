import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col justify-between h-screen">
      <Head>
        <title>{t("title")}</title>
      </Head>

      <header className="my-12">
        <h1 className="text-6xl font-medium text-center">{t("title")}</h1>
      </header>

      <main className="pt-5 pb-5 flex flex-col justify-center max-w-5xl mx-5 lg:mx-auto"></main>
    </div>
  );
}
