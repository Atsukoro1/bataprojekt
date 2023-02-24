import ContentVideo from "@/components/molecules/ContentVideo";
import QrCodeScanner from "@/components/organisms/QrCodeScanner";
import { useMemo, useState } from "react";
import Router from "next/router";
import ContentFinal from "@/components/molecules/ContentFinal";
import { api } from "@/utils/api";
import ContentImage from "@/components/molecules/ContentImage";
import ContentChoices from "@/components/molecules/ContentChoices";
import ContentText from "@/components/molecules/ContentText";

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
                    <ContentImage
                        onInnerClose={() => setProgress(progress + 1)}
                        imageSrc="https://media.discordapp.net/attachments/1078260004370522194/1078417838647300186/na_konci_6.JPG?width=454&height=605"
                    />
                )

            case 1:
                return (
                    <QrCodeScanner
                        questNumber={7}
                        subtitle="Naskenuj QR kod na 7 stanovišti"
                        onResult={() => { setProgress(progress + 1) }}
                        open={true}
                    />
                )

            case 2:
                return (
                    <ContentText
                        text="Měl jsi teď chvíli se po budově porozhlédnout sám. Myslím si, že pro pátrání to byl důležitý krok!"
                        onInnerClose={() => setProgress(progress + 1)}
                    />
                )

            case 3:
                return (
                    <ContentVideo
                        videoSrc="https://www.youtube.com/watch?v=2v_oAKiJmAk"
                        onInnerClose={() => setProgress(progress + 1)}
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