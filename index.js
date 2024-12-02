let brickAmount = 1
let towerIsBroken = false
const bricksContainer = document.getElementById("bricks_container"),
  brickAmountDisplay = document.getElementById("brick_amount_display"),
  /** @type {HTMLDListElement} */
  tempBrick = document.getElementById("temp_brick").content,
  timer = document.getElementById("timer"),
  SPAN = 10



const loadedTime = performance.now()
let lastLoged = 0
const a = setInterval(() => {
  if (!towerIsBroken) {
    const diffTime = performance.now() - loadedTime,
      diffSeconds = Math.trunc(diffTime / 1000)

    if (diffSeconds > 0) {
      timer.textContent = String(Math.trunc(diffSeconds / (60 * 60))).padStart(2, "0") + ":" + String(Math.trunc(diffSeconds / 60 % 60)).padStart(2, "0") + ":" + String(diffSeconds % 60).padStart(2, "0")
      if (Math.trunc((diffSeconds - lastLoged) / SPAN) > 0) {
        for (let i = 0; i < Math.trunc((diffSeconds - lastLoged) / SPAN); i++) bricksContainer.appendChild(tempBrick.cloneNode(true))
        lastLoged = diffSeconds
        console.log(diffSeconds, lastLoged)
        brickAmount++
        document.body.style.setProperty("--brick-amount", brickAmount)
        brickAmountDisplay.textContent = brickAmount
      }
    }
  }
}, 100)


window.addEventListener("blur", () => {
  if (document.visibilityState !== "visible") return
  console.log("No!")
  towerIsBroken = true
  document.getElementById("end").classList.add("active")
}, true)