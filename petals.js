cat > petals.js <<'EOF'
const petalsContainer = document.getElementById("petals");

function createPetal(){
  const petal = document.createElement("div");

  petal.style.position = "absolute";
  petal.style.width = "8px";
  petal.style.height = "8px";
  petal.style.background = "#e8b7c0";
  petal.style.borderRadius = "50%";
  petal.style.left = Math.random() * 100 + "vw";
  petal.style.top = "-10px";
  petal.style.animation = "fall " + (5 + Math.random() * 4) + "s linear";

  petalsContainer.appendChild(petal);

  setTimeout(() => petal.remove(), 9000);
}

setInterval(createPetal, 300);
EOF
