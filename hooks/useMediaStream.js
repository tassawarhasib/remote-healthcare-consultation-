const { useState, useEffect, useRef } = require("react")

const useMediaStrem = () => {
    const [state, setState] = useState(null);
    const isStreamSet = useRef(false);

    useEffect(() => {
        if(isStreamSet.current) return;
        isStreamSet.current = true;

        (async function initStream() {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({
                    audio: true,
                    video: true
                })
                console.log("setting  your stream");
                setState(stream);
            } catch (error) {
                console.log("Error in media navigator", error);
            }
        })()
    }, [])

    return{
        stream : state
    }
}

export default useMediaStrem;