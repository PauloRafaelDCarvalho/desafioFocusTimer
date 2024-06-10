import * as el from './elements-theme.js'
import * as sounds from './sounds.js'

function removeAll() {
    el.forest.classList.remove('toggleTheme')
    el.cafe.classList.remove('toggleTheme')
    el.rain.classList.remove('toggleTheme')
    el.fireplace.classList.remove('toggleTheme')
}

export default function changeTheme(isThere, theme, key) {
    if (isThere) {
        removeAll()
        theme.classList.toggle('toggleTheme')
       sounds.playAudio(key);
        return
    } else {
        removeAll()
        sounds.pauseAudio(key);
        return
    }
}