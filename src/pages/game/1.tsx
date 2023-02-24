import ContentImage from "@/components/molecules/ContentImage";
import ContentVideo from "@/components/molecules/ContentVideo";
import QrCodeScanner from "@/components/organisms/QrCodeScanner";
import { useMemo, useState } from "react";
import Router from "next/router";
import ContentFinal from "@/components/molecules/ContentFinal";
import { api } from "@/utils/api";
import NextButton from "@/components/molecules/NextButton";

const Section1 = () => {
    const bumpStage = api.gameSession.bumpStage.useMutation();
    const [progress, setProgress] = useState<number>(0);

    const nextGame = async () => {
        await bumpStage.mutateAsync();
        await Router.push("/game/2");
    };

    const content = useMemo(() => {
        switch (progress) {
            case 0:
                return (
                    <div className="m-6">
                        <p className="text-white mt-1 mb-1 table w-[300px]">
                            Výborně, úspěšně jsi našel první lokaci!
                            Právě se nacházíš na začátku našeho případu, který dostal na starost detektiv Jonáš Červenka.
                        </p>

                        <NextButton onClick={() => setProgress(progress + 1)}/>
                    </div>
                )

            default:
                return (
                    <ContentVideo
                        videoSrc="https://www.youtube.com/watch?v=RiMEmref0rk"
                        onInnerClose={nextGame}
                    />
                )
        }
    }, [progress]);

    return (
        <main className="flex min-h-screen flex-col items-center bg-slate-800">
            <div className="mt-20">
                <h1 className="text-white text-lg mb-3 ml-5">Stanoviště 1</h1>

                {content}
            </div>
        </main>
    )
}

export default Section1;