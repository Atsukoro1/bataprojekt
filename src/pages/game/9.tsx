import ContentImage from "@/components/molecules/ContentImage";
import ContentVideo from "@/components/molecules/ContentVideo";
import QrCodeScanner from "@/components/organisms/QrCodeScanner";
import { useMemo, useState } from "react";
import Router from "next/router";
import NextButton from "@/components/molecules/NextButton";
import ContentFinal from "@/components/molecules/ContentFinal";
import { api } from "@/utils/api";
import ContentText from "@/components/molecules/ContentText";

const Section9 = () => {
    const bumpStage = api.gameSession.bumpStage.useMutation();
    const [progress, setProgress] = useState<number>(0);

    const nextGame = async () => {
        await bumpStage.mutateAsync();
        await Router.push("/game/10");
    };

    const content = useMemo(() => {
        switch (progress) {
            case 0:
                return (
                    <QrCodeScanner
                        questNumber={9}
                        subtitle="Naskenuj QR kod na devátém stanovišti"
                        onResult={() => { setProgress(progress + 1) }}
                        open={true}
                    />
                )

            case 1:
                return (
                    <ContentText
                        text="Hm… už tě napadá kdo by mohl být vrahem Pana Potopy?"
                        onInnerClose={() => setProgress(progress + 1)}
                    />
                )

            case 2:
                return (
                    <ContentVideo
                        videoSrc="https://www.youtube.com/watch?v=1m92LSrvi3k"
                        onInnerClose={() => setProgress(progress + 1)}
                    />
                )

            case 3:
                return (
                    <ContentText
                        text="Tak to nikdo nemohl čekat! Měl/a by jsi co nejrychleji najít poslední stanoviště, abys mohl/a z budovy uniknout! "
                        onInnerClose={() => setProgress(progress + 1)}
                    />
                )

            case 4:
                return (
                    <ContentImage
                        onInnerClose={() => setProgress(progress + 1)}
                        imageSrc="https://media.discordapp.net/attachments/1078260004370522194/1078416179296731136/10_2_konce.JPG?width=454&height=605"
                    />
                )

            default:
                return (
                    <ContentFinal
                        title="Gratulujeme"
                        subtitle="Úspěšně jste dokočili 9 stanoviste, klikněte na tlačítko a pokračujte dále"
                        onInnerClose={nextGame}
                    />
                )
        }
    }, [progress]);

    return (
        <main className="flex min-h-screen flex-col items-center bg-slate-800">
            <div className="mt-20">
                <h1 className="text-white text-lg mb-3">Stanoviště 9</h1>

                {content}
            </div>
        </main>
    )
}

export default Section9;