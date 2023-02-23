import ContentImage from "@/components/molecules/ContentImage";
import ContentVideo from "@/components/molecules/ContentVideo";
import QrCodeScanner from "@/components/organisms/QrCodeScanner";
import { useMemo, useState } from "react";
import Router from "next/router";
import ContentFinal from "@/components/molecules/ContentFinal";
import { api } from "@/utils/api";

const Section1 = () => {
    const bumpStage = api.gameSession.bumpStage.useMutation();
    const [progress, setProgress] = useState<number>(0);

    const nextGame = async () => {
        await bumpStage.mutateAsync();
        await Router.push("/game/2");
    };

    const content = useMemo(() => {
        switch (progress) {
            case 0:
                return (
                    <ContentVideo
                        videoSrc="https://www.youtube.com/watch?v=1m92LSrvi3k"
                        onInnerClose={() => setProgress(progress + 1)}
                    />
                )

            case 1:
                return (
                    <ContentImage
                        onInnerClose={() => setProgress(progress + 1)}
                        imageSrc="https://cdn.myshoptet.com/usr/www.kartografie.cz/user/shop/big/2367-4_2367-svet-nastenna-obecne-zemepisna-mapa.jpg?621e11d2"
                    />
                )

            default:
                return (
                    <ContentFinal
                        title="Gratulujeme!"
                        subtitle="Úspěšně jste dokončili tuto kapitolu. Klikněte na tlačítko a pokračujte na další."
                        onInnerClose={nextGame}
                    />
                )
        }
    }, [progress]);

    return (
        <main className="flex min-h-screen flex-col items-center bg-slate-800">
            <div className="mt-20">
                <h1 className="text-white text-lg mb-3">Stanoviště 1</h1>
                <p>
                    Výborně, úspěšně jsi našel první lokaci!
                    Právě se nacházíš na začátku našeho případu, který dostal na starost detektiv Jonáš Červenka.
                </p>

                {content}
            </div>
        </main>
    )
}

export default Section1;