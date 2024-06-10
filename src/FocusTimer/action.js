import state from "./state.js";
import * as el from "./elements.js"
import * as timer from './timer.js'

export function toggleRunning() {
    state.isRunning = el.playBtn.classList.toggle("toggleControl")
    el.pauseBtn.classList.remove("toggleControl")

    if(state.isRunning) {
        timer.countdown()
        return
    } else {
        state.isRunning = false
    }
}

export function reset() {
    state.isRunning = false
    el.pauseBtn.classList.add("toggleControl")
    el.playBtn.classList.remove("toggleControl")
    timer.updateDisplay()
}

export function increaseMin() {
    if (!state.isRunning) {
       let minutes = Number(el.minutes.textContent)
       timer.updateDisplay(minutes+5)
    } else {
        alert('pausa')
    }
}

export function decreaseMin() {
    if (!state.isRunning) {
        let minutes = Number(el.minutes.textContent)
        timer.updateDisplay(minutes-5)
    } else {
        alert('pausa')
    }
}