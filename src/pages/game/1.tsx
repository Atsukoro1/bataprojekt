import ContentImage from "@/components/molecules/ContentImage";
import ContentVideo from "@/components/molecules/ContentVideo";
import QrCodeScanner from "@/components/organisms/QrCodeScanner";
import { useMemo, useState } from "react";
import Router from "next/router";
import ContentFinal from "@/components/molecules/ContentFinal";
import ContentGame from "@/components/molecules/ContentGame";

const Section1 = () => {
    const [progress, setProgress] = useState<number>(0);

    const nextGame = async () => {
        await Router.push("/game/2");
    };

    const content = useMemo(() => {
        switch(progress) {
            case 0:
                return (
                    <ContentGame/>
                )
    
            case 1:
                return (
                    <QrCodeScanner
                        questNumber={1}
                        onResult={() => {
                            setProgress(progress + 1);
                        }}
                        open={true}
                    />
                )
    
            case 2:
                return (
                    <ContentVideo
                        videoSrc="https://www.youtube.com/watch?v=1m92LSrvi3k"
                        onInnerClose={() => setProgress(progress + 1)}
                    />
                )
    
            default: 
                return (
                    <ContentFinal
                        title="Gratulujeme!"
                        subtitle="Úspěšně jste dokončili tuto kapitolu. Klikněte na tlačítko a pokračujte na další."
                        onInnerClose={nextGame}
                    />
                )
        }
    }, [progress]);

    return (
        <main className="flex min-h-screen flex-col items-center bg-slate-800">
            <div className="mt-20">
                <h1 className="text-white text-lg mb-3">Stanoviště 1</h1>
                
                {content}
            </div>
        </main>
    )
}

export default Section1;