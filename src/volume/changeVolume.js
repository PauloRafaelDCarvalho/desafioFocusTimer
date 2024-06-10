import * as Audio from "../theme/sounds.js"

export function changeVolume(key, volume) {
    if (Audio.sounds[key]!=Audio.sounds[key].paused) {
        Audio.sounds[key].volume = volume
    } else {
        return
    }
}