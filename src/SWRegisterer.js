export function register(email) {
  if ("serviceWorker" in navigator) {
    // The URL constructor is available in all browsers that support SW.
    const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
    if (publicUrl.origin !== window.location.origin) {
      // Our service worker won't work if PUBLIC_URL is on a different origin
      // from what our page is served on. This might happen if a CDN is used to
      // serve assets; see https://github.com/facebook/create-react-app/issues/2374
      return;
    }

    //window.addEventListener("load", () => {
    const swFileName = "customsw.js";
    const swUrl = `${process.env.PUBLIC_URL}/${swFileName}`;

    registerValidSW(swUrl, email);
    //});
  }
}
let publicVapidKey =
  "BM2j_g9A4PTFns3Jfv_Jlo112ZIo6-Xlvgvakl6GCTqc6wSVPW6wPUumIN2TsSyCYFhlKEXJRqKCYihIdE_Mr8Y";
function registerValidSW(swUrl, email) {
  console.log("Push registering");
  navigator.serviceWorker.register(swUrl).then((registration) => {
    console.log("Push registered");

    console.log("subscribing");
    registration.pushManager
      .subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(publicVapidKey),
      })
      .then((subscription) => {
        fetch("https://stark-beyond-35806.herokuapp.com/subscribe", {
          method: "POST",
          body: JSON.stringify({ subscription, email }),
          headers: {
            "content-type": "application/json",
          },
        });
      });
  });
}

export function unregister() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.ready
      .then((registration) => {
        registration.unregister();
      })
      .catch((error) => {
        console.error(error.message);
      });
  }
}

function urlBase64ToUint8Array(base64String) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, "+")
    .replace(/_/g, "/");

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}
