export const sounds = {
    forest: new Audio('./assets/Floresta.wav'),
    rain: new Audio('./assets/Chuva.wav'),
    cafe: new Audio('./assets/Cafeteria.wav'),
    fireplace: new Audio('./assets/Lareira.wav')
} 

export function playAudio(key) {
  if (sounds.hasOwnProperty(key)) {
   pauseAllAudios(key)
   sounds[key].loop = true
    sounds[key].play();
  }
}

export function pauseAudio(key) {
  if (sounds.hasOwnProperty(key)) {
    sounds[key].pause();
    sounds[key].currentTime = 0;
  }
}

function pauseAllAudios() {
   for (let key in sounds) {
      sounds[key].pause();
  }
}