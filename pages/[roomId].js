import { useEffect } from "react";
import { useSocket } from "@/context/socket"
import usePeer from "@/hooks/usePeer";
import useMediaStrem from "@/hooks/useMediaStream";
import Player from "@/component/Player";

const Room = () => {
    const socket = useSocket();
    const { peer, myId } = usePeer();
    const { stream } = useMediaStrem();

    return (
        <div>
            <Player url={stream} muted playing playerId={myId} />
        </div>
    )
};

export default Room;