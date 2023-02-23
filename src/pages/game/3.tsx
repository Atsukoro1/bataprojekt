import ContentImage from "@/components/molecules/ContentImage";
import ContentVideo from "@/components/molecules/ContentVideo";
import QrCodeScanner from "@/components/organisms/QrCodeScanner";
import { useMemo, useState } from "react";
import Router from "next/router";
import ContentFinal from "@/components/molecules/ContentFinal";
import { api } from "@/utils/api";
import ContentText from "@/components/molecules/ContentText";

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
                        subtitle="Naskenuj QR kod na 3 stanovišti"
                        onResult={() => { setProgress(progress + 1) }}
                        open={true}
                    />
                )

            case 1:
                return (
                    <ContentVideo
                        videoSrc="https://www.youtube.com/watch?v=hce1J2JWT04"
                        onInnerClose={() => setProgress(progress + 1)}
                    />
                )

            case 2:
                return (
                    <ContentText
                        text="Tak jo, a teď hurá až do pátého patra, kde se nachází další QR kód."
                        onInnerClose={() => setProgress(progress + 1)}
                    />
                )

            default:
                return (
                    <ContentImage
                        onInnerClose={nextGame}
                        imageSrc="https://media.discordapp.net/attachments/1078260004370522194/1078418826556874822/10_2_konce.JPG?width=454&height=605"
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