const ligneeMaternel = document.getElementById("lignéematernel");
const ligneePaternel = document.getElementById("lignéepaternel");
const introduction = document.getElementById("introduction");

// action sur bouton maternel
function visibleMaternel() {
  ligneeMaternel.style.visibility = "visible";
  ligneePaternel.style.visibility = "hidden";
  introduction.style.visibility = "hidden";
}

btnMaternel = document.getElementById("btnMaternel");
btnMaternel.addEventListener("click", visibleMaternel);

// action sur bouton paternel

function visiblePaternel() {
  ligneePaternel.style.visibility = "visible";
  ligneeMaternel.style.visibility = "hidden";
  introduction.style.visibility = "hidden";
}

btnPaternel = document.getElementById("btnPaternel");
btnPaternel.addEventListener("click", visiblePaternel);

// action sur bouton acceuil

function visibleAceuil() {
  ligneePaternel.style.visibility = "hidden";
  ligneeMaternel.style.visibility = "hidden";
  introduction.style.visibility = "visible";
}

btnAcceuil = document.getElementById("btnAcceuil");
btnAcceuil.addEventListener("click", visibleAceuil);
