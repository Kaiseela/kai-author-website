import { notFound } from "next/navigation";
import { hasLocale } from "./dictionaries";
import HomeV2 from "../components/HomeV2";

type LanguagePageProps = {
    params: Promise<{
        lang: string;
    }>;
};

export default async function LanguagePage({
    params,
}: LanguagePageProps) {
    const { lang } = await params;

    if (!hasLocale(lang)) {
        notFound();
    }

    return <HomeV2 lang={lang} />;
}