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

// photos vars
// let photosPage = 0; // 0 = no page active, 1 = photos home, 2 = photos camera roll, 3 = photos picsUI
// let selectedPic = 0;
// let picNum = selectedPic;

// goHome var
let goHome = 0;

// defining app-variables
const main = document.querySelector(".main");

const apps = document.querySelector(".appsList");

const appStore = document.querySelector("#app-store");

const messages = document.querySelector("#messages");

const photos = document.querySelector("#photos");

const notes = document.querySelector("#notes");

const safari = document.querySelector("#safari");

const music = document.querySelector("#music");

const calculator = document.querySelector("#calculator");

const youtube = document.querySelector("#youtube");

const settings = document.querySelector("#settings");

const phoneButton = document.querySelector("#phoneButton");

const progCon = document.querySelector(".programs__container");

// app click functionalities
appStore.addEventListener("click", function () {
  apps.style.transform = "scale(0%)";
  main.style.backgroundImage = storeBg;
  // progCon.style.transform = "scale(100%)";
  goHome = 1;
});

messages.addEventListener("click", function () {
  apps.style.transform = "scale(0%)";
  main.style.backgroundImage = messagesBg;
  // progCon.style.transform = "scale(100%)";
  goHome = 1;
});

photos.addEventListener("click", function () {
  apps.style.transform = "scale(0%)";
  main.style.backgroundImage = photosBg;
  // progCon.style.transform = "scale(100%)";
  goHome = 1;
});

notes.addEventListener("click", function () {
  apps.style.transform = "scale(0%)";
  main.style.backgroundImage = notesBg;
  // progCon.style.transform = "scale(100%)";
  goHome = 1;
});

safari.addEventListener("click", function () {
  apps.style.transform = "scale(0%)";
  main.style.backgroundImage = safariBg;
  // progCon.style.transform = "scale(100%)";
  goHome = 1;
});

music.addEventListener("click", function () {
  apps.style.transform = "scale(0%)";
  main.style.backgroundImage = musicBg;
  // progCon.style.transform = "scale(100%)";
  goHome = 1;
});

calculator.addEventListener("click", function () {
  apps.style.transform = "scale(0%)";
  main.style.backgroundImage = calculatorBg;
  // progCon.style.transform = "scale(100%)";
  goHome = 1;
});

youtube.addEventListener("click", function () {
  apps.style.transform = "scale(0%)";
  main.style.backgroundImage = youtubeBg;
  // progCon.style.transform = "scale(100%)";
  goHome = 1;
});

settings.addEventListener("click", function () {
  apps.style.transform = "scale(0%)";
  main.style.backgroundImage = settingsBg;
  // progCon.style.transform = "scale(100%)";
  goHome = 1;
});

phoneButton.addEventListener("click", function () {
  if (goHome === 1) {
    apps.style.transform = "scale(100%)";
    main.style.backgroundImage = homeWallpaper;

    // progCon.style.transform = "scale(0%)";
    goHome = 0;
  }
});
// let background = main.style.backgroundImage;
// const progStore = document.querySelector(".programs__store");
// appStore.addEventListener("click", function () {
//   apps.style.transform = "scale(0%)";
//   main.style.backgroundImage = defBg;
//   progStore.style.transform = "scale(100%)";
//   goHome = 1;
// });

// const progMessages = document.querySelector(".programs__messages");
// messages.addEventListener("click", function () {
//   apps.style.transform = "scale(0%)";
//   main.style.backgroundImage = defBg;
//   progMessages.style.transform = "scale(100%)";
//   goHome = 1;
// });

// const progPhotos = document.querySelector(".programs__photos");
// const photosHome = document.querySelector(".photos__home");
// const photoscamRoll = document.querySelector(".photos__camRoll");
// const photosUI = document.querySelector(".photos__picUI");
// photos.addEventListener("click", function () {
//   apps.style.transform = "scale(0%)";
//   main.style.backgroundImage = photosBg2;
//   progPhotos.style.transform = "scale(100%)";
//   photosPage = 1;
//   goHome = 1;
// });

// const progNotes = document.querySelector(".programs__notes");
// notes.addEventListener("click", function () {
//   apps.style.transform = "scale(0%)";
//   main.style.backgroundImage = defBg;
//   progNotes.style.transform = "scale(100%)";
//   goHome = 1;
// });

// const progSafari = document.querySelector(".programs__safari");
// safari.addEventListener("click", function () {
//   apps.style.transform = "scale(0%)";
//   main.style.backgroundImage = defBg;
//   progSafari.style.transform = "scale(100%)";
//   goHome = 1;
// });

// const progMusic = document.querySelector(".programs__music");
// music.addEventListener("click", function () {
//   apps.style.transform = "scale(0%)";
//   main.style.backgroundImage = defBg;
//   progMusic.style.transform = "scale(100%)";
//   goHome = 1;
// });

// const progCalculator = document.querySelector(".programs__calculator");
// calculator.addEventListener("click", function () {
//   apps.style.transform = "scale(0%)";
//   main.style.backgroundImage = defBg;
//   progCalculator.style.transform = "scale(100%)";
//   goHome = 1;
// });

// const progYoutube = document.querySelector(".programs__youtube");
// youtube.addEventListener("click", function () {
//   apps.style.transform = "scale(0%)";
//   main.style.backgroundImage = defBg;
//   progYoutube.style.transform = "scale(100%)";
//   goHome = 1;
// });

// const progSettings = document.querySelector(".programs__settings");
// settings.addEventListener("click", function () {
//   apps.style.transform = "scale(0%)";
//   main.style.backgroundImage = defBg;
//   progSettings.style.transform = "scale(100%)";
//   goHome = 1;
// });

// let time = today.getHours() + ":" + today.getMinutes();

// PHOTOS APP
// Home Click Event
// const photosBtn = document.querySelector("#photosHomeBtn");
// photosBtn.addEventListener("click", function () {
//   photosHome.style.transform = "scale(0%)";
//   photoscamRoll.style.transform = "scale(100%)";
//   main.style.backgroundImage = photosBg2;
//   // goes back to photos home page
//   photosPage = 1;
// });

// // Camera Roll Click Events
// const albumBtn = document.querySelector("#albumBtn");
// albumBtn.addEventListener("click", function () {
//   photoscamRoll.style.transform = "scale(0%)";
//   photosHome.style.transform = "scale(100%)";
//   main.style.backgroundImage = photosBg;
//   // goes back to photos home page
//   photosPage = 1;
// });

// const img1 = document.querySelector("#img1");
// img1.addEventListener("click", function () {
//   photoscamRoll.style.transform = "scale(0%)";
//   photosUI.style.transform = "scale(100%)";
//   main.style.backgroundImage = "url(./assets/wallpapers/wallpaper1.png)";
//   // goes to pic UI
//   photosPage = 3;
// });

// if (photosPage === 1) {
//   photosHome.style.transform = "scale(100%)";
//   main.style.backgroundImage = photosBg;
// } else if (photosPage === 2) {
//   photoscamRoll.style.transform = "scale(100%)";
//   main.style.backgroundImage = photosBg2;
// } else if (photosPage === 3) {
//   photosUI.style.transform = "scale(100%)";
// }

// if (photosPage === 3) {
//   if (
//     main.style.backgroundImage === "url(./assets/wallpapers/wallpaper1.png)"
//   ) {
//     selectedPic = 1;
//   } else if (
//     main.style.backgroundImage === "url(./assets/wallpapers/wallpaper2.png)"
//   ) {
//     selectedPic = 2;
//   } else if (
//     main.style.backgroundImage === "url(./assets/wallpapers/wallpaper3.png)"
//   ) {
//     selectedPic = 3;
//   } else if (
//     main.style.backgroundImage === "url(./assets/wallpapers/wallpaper4.png)"
//   ) {
//     selectedPic = 4;
//   } else if (
//     main.style.backgroundImage === "url(./assets/wallpapers/wallpaper5.png)"
//   ) {
//     selectedPic = 5;
//   } else if (
//     main.style.backgroundImage === "url(./assets/wallpapers/wallpaper6.png)"
//   ) {
//     selectedPic = 6;
//   } else if (
//     main.style.backgroundImage === "url(./assets/wallpapers/wallpaper7.png)"
//   ) {
//     selectedPic = 7;
//   } else if (
//     main.style.backgroundImage === "url(./assets/wallpapers/wallpaper8.png)"
//   ) {
//     selectedPic = 8;
//   } else if (
//     main.style.backgroundImage === "url(./assets/wallpapers/wallpaper9.png)"
//   ) {
//     selectedPic = 9;
//   } else if (
//     main.style.backgroundImage === "url(./assets/wallpapers/wallpaper10.png)"
//   ) {
//     selectedPic = 10;
//   } else if (
//     main.style.backgroundImage === "url(./assets/wallpapers/wallpaper11.png)"
//   ) {
//     selectedPic = 11;
//   } else {
//     selectedPic = 12;
//   }
// }
