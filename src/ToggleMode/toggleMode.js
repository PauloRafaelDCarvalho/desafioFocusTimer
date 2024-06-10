let lightMode = true
const btnToggle = document.getElementById("toggle-mode")

btnToggle.addEventListener("click", e =>{
    lightMode = document.documentElement.classList.toggle("dark")

    const mode = lightMode ? "Dark" : "Light"
    
    e.currentTarget.querySelector("span").innerText = `${mode} mode ativado`  
})
