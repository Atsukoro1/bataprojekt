import QrCodeScanner from "@/components/organisms/QrCodeScanner";
import ContentVideo from "@/components/molecules/ContentVideo";
import { useMemo, useState } from "react";
import Router from "next/router";
import { api } from "@/utils/api";
import ContentGame from "@/components/molecules/ContentGame";

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
                    <QrCodeScanner
                        questNumber={10}
                        subtitle="Naskenuj QR kod na desátém stanovišti"
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

            default:
                return (
                    <ContentGame
                        loaderUrl="/games/keypair/thing.loader.js"
                        dataUrl="/games/keypair/thing.data"
                        frameworkUrl="/games/keypair/thing.framework.js"
                        codeUrl="/games/keypair/thing.wasm"
                        code="elpoepyagevoli"
                        onFail={failGame}
                        onSuccess={nextGame}
                    />
                )
        }
    }, [progress]);

    return (
        <main className="flex min-h-screen flex-col items-center bg-slate-800">
            <div className="mt-20">
                <h1 className="text-white text-lg mb-3">Stanoviště 10</h1>

                {content}
            </div>
        </main>
    )
}

export default Section10;