import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

const ContentGame = () => {
    const { unityProvider } = useUnityContext({
        loaderUrl: "/games/keypair/thing.loader.js",
        dataUrl: "/games/keypair/thing.data.br",
        frameworkUrl: "/games/keypair/thing.framework.js.br",
        codeUrl: "/games/keypair/thing.wasm.br",
    });

    return <Unity unityProvider={unityProvider} />;
}

export default ContentGame;