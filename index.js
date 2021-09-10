document.getElementById("get-activity").addEventListener("click", function() {
    let audio = new Audio("https://actions.google.com/sounds/v1/water/air_woosh_underwater.ogg")
    audio.play()
    document.getElementById("get-activity").classList.add("animate")
    document.getElementById("activity").textContent = "...loading"
    fetch("https://apis.scrimba.com/bored/api/activity")
      .then(response => response.json())
      .then(data => {
        document.getElementById("activity").textContent = data.activity
        document.getElementById("get-activity").classList.remove("animate")
      })
  })
  