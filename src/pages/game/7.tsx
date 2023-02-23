import ContentVideo from "@/components/molecules/ContentVideo";
import QrCodeScanner from "@/components/organisms/QrCodeScanner";
import { useMemo, useState } from "react";
import Router from "next/router";
import ContentFinal from "@/components/molecules/ContentFinal";
import { api } from "@/utils/api";
import ContentImage from "@/components/molecules/ContentImage";
import ContentChoices from "@/components/molecules/ContentChoices";

const Section4 = () => {
    const bumpStage = api.gameSession.bumpStage.useMutation();
    const [progress, setProgress] = useState<number>(0);

    const nextGame = async () => {
        await bumpStage.mutateAsync();
        await Router.push("/game/8");
    };

    const content = useMemo(() => {
        switch (progress) {
            case 0:
                return (
                    <QrCodeScanner
                        questNumber={7}
                        subtitle="Naskenuj QR kod na sedmém stanovišti"
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
                    <ContentImage
                        onInnerClose={() => setProgress(progress + 1)}
                        imageSrc="https://via.placeholder.com/300"
                    />
                )

            default:
                return (
                    <ContentChoices
                        title="Máte na výběr"
                        subtitle="Vyberte jednu z možností"
                        choice1Text="Stanoviště 8A"
                        choice2Text="Stanoviště 8B"
                        onChoice={(num: number) => {
                            if(num === 1) {
                                Router.push("/game/8a");
                            } else {
                                Router.push("/game/8b")
                            }
                        }}
                    />
                )
        }
    }, [progress]);

    return (
        <main className="flex min-h-screen flex-col items-center bg-slate-800">
            <div className="mt-20">
                <h1 className="text-white text-lg mb-3">Stanoviště 7</h1>
                
                {content}
            </div>
        </main>
    )
}

export default Section4;