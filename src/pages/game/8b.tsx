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
        await Router.push("/game/9");
    };

    const content = useMemo(() => {
        switch (progress) {
            case 0:
                return (
                    <QrCodeScanner
                        questNumber={8}
                        subtitle="Naskenuj QR kod na 8 stanovišti"
                        onResult={() => { setProgress(progress + 1) }}
                        open={true}
                    />
                )

            case 1:
                return (
                    <ContentText
                        text="Hm… vypadá to, že kancelář je zamknutá. Bohužel jsi se zdržel/a a k tvému finálnímu času musíme přičíst + 2 minuty. Nezbývá ti nic jiného, než se vydat hledat další stanoviště. "
                        onInnerClose={() => setProgress(progress + 1)}
                    />
                )

            case 2:
                return (
                    <ContentImage
                        onInnerClose={() => setProgress(progress + 1)}
                        imageSrc="https://media.discordapp.net/attachments/1078260004370522194/1078419513101516850/9.JPG?width=454&height=605"
                    />
                )

            default:
                return (
                    <ContentFinal
                        title="Gratulujeme"
                        subtitle="Úspěšně jste dokočili 8 kapitolu, klikněte na tlačítko a pokračujte dále"
                        onInnerClose={nextGame}
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