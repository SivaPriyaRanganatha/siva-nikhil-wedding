const SITE_PASSWORD = "YukiNikSP";

function checkPassword() {
  const input = document.getElementById("passwordInput").value;

  if (input === SITE_PASSWORD) {
    document.getElementById("passwordScreen").style.display = "none";
  } else {
    alert("Wrong password");
  }
}

const API_URL =
"https://script.google.com/macros/s/AKfycbxPL35ouWGpfUqwdo0xmEnZ6qqla1jQG6ymlRz9-0T1kTGpsHx8n1Tsy0A_BUOTC_h9/exec";

const folders = {
engagement: "1uMU2QeR7YBh1y8C0kF3Ll6nQbzKIeYV7",
haldi: "18zpsrKb0AGcURww3A4n9IrznOr-cULXa",
pelli: "1oBclXst7BKpWEojAcdjwrYPW4W9teVAd",
wedding: "1094rbcLPyVgHOu18BXbfb-RM9xbB0PXJ",
reception: "10fAIQQcCjPzRv5sYfiIsjv95gpSG618m"
};

async function loadGallery(folderId, elementId) {

try {

```
const res = await fetch(API_URL + "?folder=" + folderId);
const files = await res.json();

const container = document.getElementById(elementId);

files.forEach(file => {

  if (!file.mime) return;

  if (file.mime.startsWith("image/")) {

    const img = document.createElement("img");
    img.src = file.url;
    img.alt = file.name || "Wedding photo";
    img.loading = "lazy";

    container.appendChild(img);

  }

  if (file.mime.startsWith("video/")) {

    const video = document.createElement("video");
    video.src = file.url;
    video.controls = true;
    video.style.width = "260px";
    video.style.borderRadius = "12px";
    video.style.boxShadow = "0 8px 18px rgba(0,0,0,.2)";

    container.appendChild(video);

  }

});
```

} catch (err) {

```
console.error("Gallery load error:", err);
```

}

}

loadGallery(folders.engagement, "engagementGallery");
loadGallery(folders.haldi, "haldiGallery");
loadGallery(folders.pelli, "pelliGallery");
loadGallery(folders.wedding, "weddingGallery");
loadGallery(folders.reception, "receptionGallery");

function playTrailer() {

document.querySelector(".hero").style.display = "none";
document.getElementById("trailerSection").style.display = "block";

}

function startStory() {

document.getElementById("trailerSection").style.display = "none";
document.getElementById("story").style.display = "block";

}
