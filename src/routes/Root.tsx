import { useTranslation } from "react-i18next";

export const RootRoute = () => {
    const { t } = useTranslation();

    return <div className="flex flex-col justify-between h-screen">
        <header className="my-12">
            <h1 className="text-6xl font-medium text-center">{t("title")}</h1>
        </header>

        <main className="pt-5 pb-5 flex flex-col justify-center max-w-5xl mx-5 lg:mx-auto"></main>
    </div>
}