import ContentImage from "@/components/molecules/ContentImage";
import ContentVideo from "@/components/molecules/ContentVideo";
import QrCodeScanner from "@/components/organisms/QrCodeScanner";
import { useMemo, useState } from "react";
import Router from "next/router";
import NextButton from "@/components/molecules/NextButton";

export default () => {
    const [progress, setProgress] = useState<number>(0);

    const nextGame = () => {
        Router.push("/game/3");
    };

    const content = useMemo(() => {
        switch(progress) {
            case 0:
                return (
                    <ContentImage 
                        onInnerClose={() => setProgress(progress + 1)}
                        imageSrc="https://cdn.myshoptet.com/usr/www.kartografie.cz/user/shop/big/2367-4_2367-svet-nastenna-obecne-zemepisna-mapa.jpg?621e11d2"
                    />
                )
    
            case 1:
                return (
                    <QrCodeScanner
                        questNumber={2}
                        onResult={(e) => { setProgress(progress + 1) }}
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
                return <NextButton onClick={nextGame}/>
        }
    }, [progress]);

    return (
        <main className="flex min-h-screen flex-col items-center bg-slate-800">
            <div className="mt-20">
                <h1 className="text-white text-lg mb-3">Stanoviště 2</h1>
                
                {content}
            </div>
        </main>
    )
}