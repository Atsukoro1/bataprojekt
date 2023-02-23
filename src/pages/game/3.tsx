import ContentImage from "@/components/molecules/ContentImage";
import ContentVideo from "@/components/molecules/ContentVideo";
import QrCodeScanner from "@/components/organisms/QrCodeScanner";
import { useMemo, useState } from "react";
import Router from "next/router";
import NextButton from "@/components/molecules/NextButton";
import ContentFinal from "@/components/molecules/ContentFinal";
import { api } from "@/utils/api";
import ContentGame from "@/components/molecules/ContentGame";

const Section3 = () => {
    const bumpStage = api.gameSession.bumpStage.useMutation();
    const [progress, setProgress] = useState<number>(0);

    const nextGame = async () => {
        await bumpStage.mutateAsync();
        await Router.push("/game/4");
    };

    const content = useMemo(() => {
        switch (progress) {
            case 0:
                return (
                    <QrCodeScanner
                        questNumber={3}
                        subtitle="Naskenuj QR kod z obrázku ve 2 stanovišti"
                        onResult={() => { setProgress(progress + 1) }}
                        open={true}
                    />
                )

            case 1:
                return (
                    <ContentVideo
                        videoSrc="https://www.youtube.com/watch?v=1m92LSrvi3k"
                        onInnerClose={() => setProgress(progress + 1)}
                    />
                )

            case 2:
                return (
                    <ContentGame
                        loaderUrl="/games/keypair/thing.loader.js"
                        dataUrl="/games/keypair/thing.data"
                        frameworkUrl="/games/keypair/thing.framework.js"
                        codeUrl="/games/keypair/thing.wasm"
                        code="elpoepyagevoli"
                        onInnerClose={() => setProgress(progress + 1)}
                    />
                    // <ContentImage
                    //     onInnerClose={() => setProgress(progress + 1)}
                    //     imageSrc="https://via.placeholder.com/300"
                    // />
                )

            default:
                return (
                    <ContentFinal
                        title="Gratulujeme"
                        subtitle="Úspěšně jste dokočili 3 kapitolu, klikněte na tlačítko a pokračujte dále"
                        onInnerClose={nextGame}
                    />
                )
        }
    }, [progress]);

    return (
        <main className="flex min-h-screen flex-col items-center bg-slate-800">
            <div className="mt-20">
                <h1 className="text-white text-lg mb-3">Stanoviště 3</h1>

                {content}
            </div>
        </main>
    )
}

export default Section3;