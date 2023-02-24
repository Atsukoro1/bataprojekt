import React, { useRef, useState } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

type ContentGameProps = {
    title: string;
    loaderUrl: string;
    dataUrl: string;
    frameworkUrl: string;
    codeUrl: string;
    code: string;
    onSuccess: () => void;
    onFail: () => void;
}

const ContentGame = ({
    title,
    loaderUrl,
    dataUrl,
    frameworkUrl,
    codeUrl,
    code,
    onSuccess,
    onFail
}: ContentGameProps) => {
    const { unityProvider } = useUnityContext({
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
                onClick={onSuccess}
            >
                Hotovo
            </button>
        </div>
    )
}

export default ContentGame;