import ContentVideo from "@/components/molecules/ContentVideo";
import QrCodeScanner from "@/components/organisms/QrCodeScanner";
import { useMemo, useState } from "react";
import Router from "next/router";
import ContentFinal from "@/components/molecules/ContentFinal";
import { api } from "@/utils/api";
import ContentImage from "@/components/molecules/ContentImage";
import ContentText from "@/components/molecules/ContentText";

const Section4 = () => {
    const dumpStage = api.gameSession.dumpStage.useMutation();
    const [progress, setProgress] = useState<number>(0);

    const previousGame = async () => {
        await dumpStage.mutateAsync();
        await Router.push("/game/7");
    };

    const content = useMemo(() => {
        switch (progress) {
            case 0:
                return (
                    <QrCodeScanner
                        questNumber={8}
                        subtitle="Naskenuj QR kod na osmem stanovišti"
                        onResult={() => { setProgress(progress + 1) }}
                        open={true}
                    />
                )

            case 1:
                return (
                    <ContentText
                        text="Snad toto byla správná volba, jsi si jistý, že je pravý čas na to utéct?"
                        onInnerClose={() => setProgress(progress + 1)}
                    />
                )

            case 2:
                return (
                    <ContentVideo
                        videoSrc="https://www.youtube.com/watch?v=-YNIdIh4GUE"
                        onInnerClose={() => setProgress(progress + 1)}
                    />
                )

            default:
                return (
                    <ContentFinal
                        title="Neúspěch"
                        subtitle="Dáme ti ještě jednu šanci!"
                        onInnerClose={previousGame}
                    />
                )
        }
    }, [progress]);

    return (
        <main className="flex min-h-screen flex-col items-center bg-slate-800">
            <div className="mt-20">
                <h1 className="text-white text-lg mb-3">Stanoviště 8</h1>

                {content}
            </div>
        </main>
    )
}

export default Section4;