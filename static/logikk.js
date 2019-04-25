function changeImage() {

  if (document.getElementById("imgClickAndChange").src == "https://www.plan-norge.no/sites/default/files/styles/1000xvariable/public/Bli%20Plan-fadder/Fadderbarn_fra_Togo_skriver_brev_1000px.jpg") {
    document.getElementById("imgClickAndChange").src = "https://www.plan-norge.no/sites/default/files/styles/1000xvariable/public/Bli%20Plan-fadder/Fadderbarn/Fadderbarn_Benin_skriver_brev.1000px_0.jpg";
  } else {
    document.getElementById("imgClickAndChange").src = "https://www.plan-norge.no/sites/default/files/styles/1000xvariable/public/Bli%20Plan-fadder/Fadderbarn_fra_Togo_skriver_brev_1000px.jpg";
  }
}