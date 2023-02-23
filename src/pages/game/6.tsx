import ContentVideo from "@/components/molecules/ContentVideo";
import QrCodeScanner from "@/components/organisms/QrCodeScanner";
import { useMemo, useState } from "react";
import Router from "next/router";
import ContentFinal from "@/components/molecules/ContentFinal";
import { api } from "@/utils/api";
import ContentImage from "@/components/molecules/ContentImage";
import ContentText from "@/components/molecules/ContentText";

const Section4 = () => {
    const bumpStage = api.gameSession.bumpStage.useMutation();
    const [progress, setProgress] = useState<number>(0);

    const nextGame = async () => {
        await bumpStage.mutateAsync();
        await Router.push("/game/7");
    };

    const content = useMemo(() => {
        switch (progress) {
            case 0:
                return (
                    <QrCodeScanner
                        questNumber={6}
                        subtitle="Naskenuj QR kod na šestém stanovišti"
                        onResult={() => { setProgress(progress + 1) }}
                        open={true}
                    />
                )
            
            case 1:
                return (
                    <ContentText
                        text="Úspěšně jsi dorazil/a k další lokaci!"
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
                    <ContentImage
                        onInnerClose={() => setProgress(progress + 1)}
                        imageSrc="https://media.discordapp.net/attachments/1078260004370522194/1078417838647300186/na_konci_6.JPG?width=454&height=605"
                    />
                )

            default:
                return (
                    <ContentFinal
                        title="Gratulujeme"
                        subtitle="Úspěšně jste dokočili 6 kapitolu, klikněte na tlačítko a pokračujte dále"
                        onInnerClose={nextGame}
                    />
                )
        }
    }, [progress]);

    return (
        <main className="flex min-h-screen flex-col items-center bg-slate-800">
            <div className="mt-20">
                <h1 className="text-white text-lg mb-3">Stanoviště 6</h1>

                {content}
            </div>
        </main>
    )
}

export default Section4;