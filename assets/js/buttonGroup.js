

function clickButtonInvScen(evt, inv) {
    // Declare all variables
    var i, buttonGroupInvScen;

    // Get all elements with class="buttonGroup" and remove the class "active"
    buttonGroupInvScen = document.getElementsByClassName("buttonGroupInvScen");
    for (i = 0; i < buttonGroupInvScen.length; i++) {
        buttonGroupInvScen[i].className = buttonGroupInvScen[i].className.replace(" active", "");
    }

    //document.getElementById(tabName).style.display = "block";
    //evt.currentTarget.className += " active";

    // Enable/Disable Timing sliders
  //  if (inv==0 || inv==6) {
  //    slider_ShockTiming.setAttribute('disabled', true);
  //  } else {
  //    slider_ShockTiming.removeAttribute('disabled');
  //  }

    invSelect = parseInt(inv);
    chartUpdate('inv');

}

function clickButtonTax(evt, tax) {
    // Declare all variables
    var i, buttonGroupTax;

    // Get all elements with class="buttonGroup" and remove the class "active"
    buttonGroupTax = document.getElementsByClassName("buttonGroupTax");
    for (i = 0; i < buttonGroupTax.length; i++) {
        buttonGroupTax[i].className = buttonGroupTax[i].className.replace(" active", "");
    }

    //document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";

    taxSelect = parseInt(tax);
    chartUpdate('tax');

}
