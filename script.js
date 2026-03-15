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

const trailer =
  "https://drive.google.com/file/d/11M8WGq7IuGS0P_2WUaBbaKEHXckcYTYQ/view?usp=sharing";

document.getElementById("trailerVideo").src = trailer;

async function loadGallery(folderId, elementId) {
  try {
    const res = await fetch(API_URL + "?folder=" + folderId);
    const files = await res.json();
    const container = document.getElementById(elementId);

    files.forEach(file => {
      if (file.mime && file.mime.startsWith("image/")) {
        const img = document.createElement("img");
        img.src = file.url;
        img.alt = file.name || "Wedding image";
        img.loading = "lazy";
        container.appendChild(img);
      }
    });
  } catch (err) {
    console.error("Failed to load gallery:", elementId, err);
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
