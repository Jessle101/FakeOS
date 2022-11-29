// vwallpaper variables
let defBg = "url(./assets/apps/backgrounds/default-app-background.png)";
let storeBg = "url(./assets/apps/backgrounds/app-store/store-bg.png)";
let messagesBg = "url(./assets/apps/backgrounds/messages/messages-bg.png)";
let photosBg = "url(./assets/apps/backgrounds/photos/photos-bg.png)";
let photosBg2 = "url(./assets/apps/backgrounds/photos/photos-bg2.png)";
let notesBg = "url(./assets/apps/backgrounds/notes/notes-bg.png)";
let safariBg = "url(./assets/apps/backgrounds/safari/safari-bg.png)";
let musicBg = "url(./assets/apps/backgrounds/music/music-bg.png)";
let calculatorBg =
    "url(./assets/apps/backgrounds/calculator/calculator-bg.png)";
let youtubeBg = "url(./assets/apps/backgrounds/youtube/youtube-bg.png)";
let settingsBg = "url(./assets/apps/backgrounds/settings/settings-bg.png)";
let selectedWallpaper = "url(./assets/wallpapers/wallpaper-default.png)";
const homeWallpaper = selectedWallpaper;

// goHome var
let goHome = 0;

// defining app-variables
const main = document.querySelector(".main");
const apps = document.querySelector(".appsList");
const phoneButton = document.querySelector("#phoneButton");
const progCon = document.querySelector(".programs__container");

const appArr = document.querySelectorAll(".app");
console.log(appArr);

appArr.forEach((app) =>
    app.addEventListener("click", function () {
        apps.style.transform = "scale(0%)";
        let id = app.getAttribute("id");
        const backgroundSrc = `url(./assets/apps/backgrounds/${id}/${id}-bg.png)`;
        main.style.backgroundImage = backgroundSrc;
        // progCon.style.transform = "scale(100%)";
        goHome = 1;
    }),
);

// // app click functionalities
// appStore.addEventListener("click", function () {
//     apps.style.transform = "scale(0%)";
//     main.style.backgroundImage = storeBg;
//     // progCon.style.transform = "scale(100%)";
//     goHome = 1;
// });

// messages.addEventListener("click", function () {
//     apps.style.transform = "scale(0%)";
//     main.style.backgroundImage = messagesBg;
//     // progCon.style.transform = "scale(100%)";
//     goHome = 1;
// });

// photos.addEventListener("click", function () {
//     apps.style.transform = "scale(0%)";
//     main.style.backgroundImage = photosBg;
//     // progCon.style.transform = "scale(100%)";
//     goHome = 1;
// });

// notes.addEventListener("click", function () {
//     apps.style.transform = "scale(0%)";
//     main.style.backgroundImage = notesBg;
//     // progCon.style.transform = "scale(100%)";
//     goHome = 1;
// });

// safari.addEventListener("click", function () {
//     apps.style.transform = "scale(0%)";
//     main.style.backgroundImage = safariBg;
//     // progCon.style.transform = "scale(100%)";
//     goHome = 1;
// });

// music.addEventListener("click", function () {
//     apps.style.transform = "scale(0%)";
//     main.style.backgroundImage = musicBg;
//     // progCon.style.transform = "scale(100%)";
//     goHome = 1;
// });

// calculator.addEventListener("click", function () {
//     apps.style.transform = "scale(0%)";
//     main.style.backgroundImage = calculatorBg;
//     // progCon.style.transform = "scale(100%)";
//     goHome = 1;
// });

// youtube.addEventListener("click", function () {
//     apps.style.transform = "scale(0%)";
//     main.style.backgroundImage = youtubeBg;
//     // progCon.style.transform = "scale(100%)";
//     goHome = 1;
// });

// settings.addEventListener("click", function () {
//     apps.style.transform = "scale(0%)";
//     main.style.backgroundImage = settingsBg;
//     // progCon.style.transform = "scale(100%)";
//     goHome = 1;
// });

phoneButton.addEventListener("click", function () {
    if (goHome === 1) {
        apps.style.transform = "scale(100%)";
        main.style.backgroundImage = homeWallpaper;

        // progCon.style.transform = "scale(0%)";
        goHome = 0;
    }
});
