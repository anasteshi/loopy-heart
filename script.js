const shape = document.getElementById("shape")
const quantity = 100

for (let i = 0; i < quantity; i++) {
    const heart = document.createElement("div")
    heart.classList.add("heart")

    const motion = document.createElement("div")
    motion.classList.add("heart-motion")
    motion.style.animationDelay = `-${(i + 1) * 300}ms`

    const bounce = document.createElement("div")
    bounce.classList.add("heart-bounce")
    bounce.style.animationDelay = `-${(i + 1) * 300}ms`

    const message = document.createElement("div")
    message.classList.add("heart-message")
    message.textContent = "Meow"

    bounce.appendChild(message)
    motion.appendChild(bounce)
    heart.appendChild(motion)
    shape.appendChild(heart)
}