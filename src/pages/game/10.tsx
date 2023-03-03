import QrCodeScanner from "@/components/organisms/QrCodeScanner";
import ContentVideo from "@/components/molecules/ContentVideo";
import { useMemo, useState } from "react";
import Router from "next/router";
import { api } from "@/utils/api";
import ContentGame from "@/components/molecules/ContentGame";
import ContentImage from "@/components/molecules/ContentImage";
import ContentInput from "@/components/molecules/ContentInput";

const Section10 = () => {
    const bumpStage = api.gameSession.bumpStage.useMutation();
    const [progress, setProgress] = useState<number>(0);

    const nextGame = async () => {
        await bumpStage.mutateAsync();
        await Router.push("/game/congrats");
    };

    const failGame = async () => {
        await bumpStage.mutateAsync();
        await Router.push("/game/gameover");
    }

    const content = useMemo(() => {
        switch (progress) {
            case 0:
                return (
                    <ContentImage
                        onInnerClose={() => setProgress(progress + 1)}
                        imageSrc="https://media.discordapp.net/attachments/1078260004370522194/1078427173049880586/na_kocni_9.JPG?width=454&height=605"
                    />
                )

            case 1:
                return (
                    <QrCodeScanner
                        questNumber={10}
                        subtitle="Naskenuj QR kod na 10 stanovišti"
                        onResult={() => { setProgress(progress + 1) }}
                        open={true}
                    />
                )

            case 2:
                return (
                    <ContentVideo
                        videoSrc="https://www.youtube.com/shorts/OAeaOHJ2vzo"
                        onInnerClose={() => setProgress(progress + 1)}
                    />
                )

            case 3:
                return (
                    <ContentGame
                        title="Rychle si vzpomeň na velikost boty  našeho detektiva a dané číslo zadej tak, aby vycházelo na 9 políček."
                        loaderUrl="/games/keypair/thing.loader.js"
                        dataUrl="/games/keypair/thing.data"
                        frameworkUrl="/games/keypair/thing.framework.js"
                        codeUrl="/games/keypair/thing.wasm"
                        onSuccess={() => setProgress(progress + 1)}
                    />
                )

            default:
                return (
                    <ContentInput
                        title="Zadej kód ze hry"
                        choice="elpoepyagevoli"
                        onSuccess={nextGame}
                        onFail={failGame}
                    />
                )
        }
    }, [progress]);

    return (
        <main className="flex min-h-screen flex-col items-center bg-slate-800">
            <div className="mt-20 p-6">
                <h1 className="text-white text-lg mb-3">Stanoviště 10</h1>

                {content}
            </div>
        </main>
    )
}

export default Section10;