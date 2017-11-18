

//Functions:

//Calc Liquidity ratios
//Calc liquidity target, upper limit in dollars
var illiquidTarget = 22;
var illiquidUpper = 35;
var illiquidLower = 15;
var illiquidAdj = 1.0;

var assetsMarket = Array1d(tMax);
var illiquidityRatio = Array2d(ilMax, tMax);
var illiquidityNewRatio = Array1d(tMax);
var illiquidAssetsTarget = Array1d(tMax);
var illiquidAssetsUpper = Array1d(tMax);
var illiquidAssetsLower = Array1d(tMax);
var illiquidRatioTarget = Array1d(tMax);
var illiquidRatioUpper = Array1d(tMax);
var illiquidRatioLower = Array1d(tMax);

function calcIlliquidRatio() {

  for (var t=0; t<tMax; t++) {
    assetsMarket[t] = assetInvTimingContsOpt[invSelect][timingSelect][contSelect][2][t] +
                      assetInvTimingContsOpt[invSelect][timingSelect][contSelect][3][t] +
                      assetInvTimingContsOpt[invSelect][timingSelect][contSelect][4][t] +
                      assetInvTimingContsOpt[invSelect][timingSelect][contSelect][5][t]
  }

  for (var il = 0; il < ilMax; il++) {
    for (var t = 0; t < tMax; t++) {
      illiquidityRatio[il][t] = Math.round(illiquidAssetsInvTimingClass[invSelect][timingSelect][il][t] / assetsMarket[t] * 100 *10)/10 * illiquidAdj;
      illiquidRatioTarget[t] = illiquidTarget;
      illiquidRatioUpper[t] = illiquidUpper;
      illiquidRatioLower[t] = illiquidLower;
    };
  };
  for (var t = 0; t < tMax; t++) {
    illiquidityNewRatio[t] = Math.round(illiquidNewNAV[0][t] / assetInvTimingConts[invSelect][timingSelect][contSelect][t] * 100 *10)/10 * illiquidAdj;
  };
}

function calcIlliquidAssetTarget() {

  for (var t=0; t<tMax; t++) {
    assetsMarket[t] = assetInvTimingContsOpt[invSelect][timingSelect][contSelect][2][t] +
                      assetInvTimingContsOpt[invSelect][timingSelect][contSelect][3][t] +
                      assetInvTimingContsOpt[invSelect][timingSelect][contSelect][4][t] +
                      assetInvTimingContsOpt[invSelect][timingSelect][contSelect][5][t]
  }

  for(var t = 0; t < tMax; t++) {
    illiquidAssetsTarget[t] =  assetsMarket[t] * illiquidTarget /100
    illiquidAssetsUpper[t] = assetsMarket[t] * illiquidUpper /100
    illiquidAssetsLower[t] = assetsMarket[t] * illiquidLower /100
  }
}
