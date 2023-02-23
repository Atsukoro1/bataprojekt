import React, { Ref, useRef, useState } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

type ContentGameProps = {
    loaderUrl: string;
    dataUrl: string;
    frameworkUrl: string;
    codeUrl: string;
    code: string;
    // rome-ignore lint/suspicious/noExplicitAny: <explanation>
    onSuccess: (ref: any) => void;
    // rome-ignore lint/suspicious/noExplicitAny: <explanation>
    onFail: (ref: any) => void;
}

const ContentGame = ({
    loaderUrl,
    dataUrl,
    frameworkUrl,
    codeUrl,
    code,
    onSuccess,
    onFail
}: ContentGameProps) => {
    const [inputCode, setInputCode] = useState<string>("");
    const containerRef = useRef(null);

    const { unityProvider } = useUnityContext({
        loaderUrl: loaderUrl,
        dataUrl: dataUrl,
        frameworkUrl: frameworkUrl,
        codeUrl: codeUrl
    });

    const onCodeSubmit = () => {
        if (code.localeCompare(inputCode) === 0) {
            onSuccess(containerRef);
        } else {
            onFail(containerRef);
        }
    }

    return (
        <div>
            <Unity
                ref={containerRef}
                className="h-[430px] w-[330px]"
                unityProvider={unityProvider}
            />

            <input
                type="text"
                placeholder="Kod ze hry"
                className="border-slate-300 bg-slate-600 rounded-lg p-2"
                onKeyDown={(event) => {
                    const key = event.key;
                    const validChar = /[a-zA-Z0-9]/;
                    const isBackspace = key === "Backspace";

                    if (isBackspace) {
                        setInputCode(prevState => prevState.slice(0, -1));
                    } else {
                        if (validChar.test(key) && key.length === 1) {
                            setInputCode(prevState => prevState + key);
                        } else if (key === " ") {
                            setInputCode(prevState => `${prevState} `);
                        };
                    }
                }}
                value={inputCode}
            />

            <button
                className="bg-slate-400 p-3 rounded-lg text-white mt-3"
                onClick={onCodeSubmit}
            >
                Odeslat kod
            </button>
        </div>
    )
}

export default ContentGame;