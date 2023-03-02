import ContentImage from "@/components/molecules/ContentImage";
import ContentVideo from "@/components/molecules/ContentVideo";
import QrCodeScanner from "@/components/organisms/QrCodeScanner";
import { useMemo, useState } from "react";
import Router from "next/router";
import ContentFinal from "@/components/molecules/ContentFinal";
import { api } from "@/utils/api";
import ContentText from "@/components/molecules/ContentText";

const Section2 = () => {
    const bumpStage = api.gameSession.bumpStage.useMutation();
    const [progress, setProgress] = useState<number>(0);

    const nextGame = async () => {
        await bumpStage.mutateAsync();
        await Router.push("/game/3");
    };

    const content = useMemo(() => {
        switch (progress) {
            case 0:
                return (
                    <ContentImage
                        onInnerClose={() => setProgress(progress + 1)}
                        imageSrc="https://media.discordapp.net/attachments/1078260004370522194/1078414012099866764/Pozice_stanoviste_2.jpg?width=704&height=330"
                    />
                )

            case 1:
                return (
                    <QrCodeScanner
                        subtitle="Naskenuj QR Kod na 2 stanovišti"
                        questNumber={2}
                        onResult={() => { setProgress(progress + 1) }}
                        open={true}
                    />
                )

            case 2:
                return (
                    <ContentText
                        text="Vidím, že tě náš příběh zaujal! Nyní už se nacházíme před samotnou budovou, kde jsme dostali typ na podezřelé. Pojďme se společně nechat provést celou Budovou 44. Snad se dozvíme více informací od našeho průvodce…"
                        onInnerClose={() => setProgress(progress + 1)}
                    />
                )

            case 3:
                return (
                    <ContentVideo
                        videoSrc="https://www.youtube.com/shorts/Gy6NHNkA5wI"
                        onInnerClose={() => setProgress(progress + 1)}
                    />
                )

            case 4:
                return (
                    <ContentText
                        text="Tak už známe jméno našeho průvodce, který je zároveň zaměstnancem v této budově, Milan Marek, bylo by dobré si toto jméno zapamatovat! Teď tě čeká nekonečná cesta po schodech, buď po cestě ale pozorný/á, abys nepřehlédl další QR kód!"
                        onInnerClose={() => setProgress(progress + 1)}
                    />
                )

            default:
                return (
                    <ContentFinal
                        title="Gratulujeme"
                        subtitle="Úspěšně jste dokočili druhou kapitolu, klikněte na tlačítko a pokračujte dále."
                        onInnerClose={nextGame}
                    />
                )
        }
    }, [progress]);

    return (
        <main className="flex min-h-screen flex-col items-center bg-slate-800">
            <div className="mt-20 p-6">
                <h1 className="text-white text-lg mb-3">Stanoviště 2</h1>

                {content}
            </div>
        </main>
    )
}

export default Section2;