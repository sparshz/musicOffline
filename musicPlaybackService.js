import TrackPlayer , {Event, RepeatMode} from "react-native-track-player";

import { playListData } from "./src/constans";


export async function setUpPlayer(){
    let isSetUp = false;
    try {
        await TrackPlayer.getCurrentTrack()
        isSetUp = true;
    } catch (error) {
        await TrackPlayer.setUpPlayer() 
        isSetUp =true;
    }finally{
        return isSetUp;
    }
}


export async function addTrack() {
    await TrackPlayer.add(playListData)
    await TrackPlayer.getRepeatMode(RepeatMode.Queue)
}



export async function playbackSevice(){
    
    TrackPlayer.addEventListener(Event.RemotePause, () => {
        TrackPlayer.pause()
    })

    TrackPlayer.addEventListener(Event.RemotePlay, () => {
        TrackPlayer.play()
    })

    TrackPlayer.addEventListener(Event.RemoteNext, () => {
        TrackPlayer.skipToNext()
    })

    TrackPlayer.addEventListener(Event.RemotePrevious, () => {
        TrackPlayer.skipToPrevious()
    })


}