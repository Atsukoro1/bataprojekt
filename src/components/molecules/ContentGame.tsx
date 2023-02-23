import React, { useState } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

type ContentGameProps = {
    loaderUrl: string;
    dataUrl: string;
    frameworkUrl: string;
    codeUrl: string;
    code: string;
    onInnerClose: () => void;
}

const ContentGame = ({
    loaderUrl,
    dataUrl,
    frameworkUrl,
    codeUrl,
    code,
    onInnerClose
}: ContentGameProps) => {
    const [inputCode, setInputCode] = useState<string>("");

    const { unityProvider } = useUnityContext({
        loaderUrl: "/games/keypair/thing.loader.js",
        dataUrl: "/games/keypair/thing.data",
        frameworkUrl: "/games/keypair/thing.framework.js",
        codeUrl: "/games/keypair/thing.wasm",
    });

    const onCodeSubmit = () => {
        if(code === inputCode) {
            onInnerClose();
        } else {
            alert("So bad");
        }
    }

    return (
        <div>
            <Unity 
                className="h-[430px] w-[330px]" 
                unityProvider={unityProvider} 
            />

            <input 
                className="bg-slate-600 border-slate-400 placeholder:text-slate-400 rounded-lg p-2"
                type="text" 
                value={inputCode}
                placeholder="Zadej kod"
                onChange={(e) => setInputCode(e.target.value)}
            />
            <br />
            <button 
                className="bg-slate-400 p-3 rounded-lg text-white mt-3"
                onSubmit={onCodeSubmit}

            >
                Odeslat kod
            </button>
        </div>
    )
}

export default ContentGame;