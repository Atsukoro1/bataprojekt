import React, { useRef, useState } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

type ContentGameProps = {
    title: string;
    loaderUrl: string;
    dataUrl: string;
    frameworkUrl: string;
    codeUrl: string;
    onSuccess: () => void;
}

const ContentGame = ({
    title,
    loaderUrl,
    dataUrl,
    frameworkUrl,
    codeUrl,
    onSuccess
}: ContentGameProps) => {
    const { unityProvider, unload } = useUnityContext({
        loaderUrl: loaderUrl,
        dataUrl: dataUrl,
        frameworkUrl: frameworkUrl,
        codeUrl: codeUrl
    });

    return (
        <div>
            <h1 className="text-white mb-2">{title}</h1>

            <Unity
                className="h-[430px] w-[330px]"
                unityProvider={unityProvider}
            />

            <button
                className="bg-slate-400 p-3 rounded-lg text-white mt-3"
                onClick={async() => {
                    await unload();
                    onSuccess();
                }}
            >
                Hotovo
            </button>
        </div>
    )
}

export default ContentGame;