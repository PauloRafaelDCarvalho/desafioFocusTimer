import { forest, rain, cafe, fireplace } from './elements-theme.js'
import Theme from './manipulationTheme.js'

forest.addEventListener('click', (e) => {
    let isThere = forest.classList.toggle('toggleTheme')
  
    Theme(isThere, forest, 'forest')
})

rain.addEventListener('click', (e) => {
    let isThere = rain.classList.toggle('toggleTheme')

    Theme(isThere, rain, 'rain')
})

cafe.addEventListener('click', (e) => {
    let isThere = cafe.classList.toggle('toggleTheme')

    Theme(isThere, cafe, 'cafe')
})

fireplace.addEventListener('click', (e) => {
    let isThere = fireplace.classList.toggle('toggleTheme')

    Theme(isThere, fireplace, 'fireplace')
})