function chartUpdateBasis(basis) {

  chartInvret_Option.data.datasets[1].data = invretBasisTaxOption[basisSelect][0];
  chartInvret_Option.update();


}

function chartUpdateTax(tax) {

  chartInvret_Option.data.datasets[0].data = invretBasisTaxOption[0][tax];
  chartInvret_Option.data.datasets[1].data = invretBasisTaxOption[basisSelect][tax];
  chartInvret_Option.update();

}
