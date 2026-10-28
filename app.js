const welcomeScreen = document.getElementById("welcomeScreen");
const nextScreen = document.getElementById("nextScreen");

document.getElementById("startButton").addEventListener("click", () => {
  welcomeScreen.classList.add("hidden");
  nextScreen.classList.remove("hidden");
});

document.getElementById("backButton").addEventListener("click", () => {
  nextScreen.classList.add("hidden");
  welcomeScreen.classList.remove("hidden");
});

// Register offline caching when served from localhost or HTTPS.
if ("serviceWorker" in navigator && (location.protocol === "https:" || location.hostname === "localhost")) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js").catch((error) => {
      console.log("Offline setup could not start:", error);
    });
  });
}
