// Demographic Model

// Result Arrays
var resultMemCXT = []; //Array3d(cMax, tMax, xMax);
var resultMemCT = []; //Array2d(cMax, tMax);

function modelDemographic() {

  //dimension local arrays
  var outputMembers = Array3d(gMax, cMax, tMax);
  var transMem = Array4d(gMax, cMax, cMax+bMax, tMax);
  var transMemOut = Array2d(cMax, cMax+bMax);
  var transMemIn = Array2d(cMax, cMax);
  var transMemOutNE = Array2d(cMax, cMax+bMax);
  var transMemInNE = Array2d(cMax, cMax);
  var outputMemNE = Array3d(tMax, xMax, cMax);
  var transMemNE = Array4d(xMax, cMax, cMax+bMax, tMax);
  var resultsExits = Array1d(tMax);
  //dimension and clear result arrays
  resultMemCXT = Array3d(cMax, tMax, xMax);
  resultMemCT = Array2d(cMax, tMax);

  var t0 = performance.now();
  var x;

  var parRetentionIna;
  var iLoopCount = 0;
  for (var g=0; g<gMax; g++) {
    x = dataAge[g]; //starting age
    for (var t=0; (t<tMax && x<xMax); t++, x++) {
      for (var c=0; c<cMax; c++) { //could start from current Category & save 000's loops (does not allow for reversions) c=dataCat[g]
        if (t==0) {
          if(dataMembers[g][0]==c) {
            outputMembers[g][c][t] = dataMem[g];
          } else {
            outputMembers[g][c][t] = 0;
          }
        } else {
          outputMembers[g][c][t] = outputMembers[g][c][t-1];
          for (var cTo=0; cTo<(cMax+bMax); cTo++) {
            outputMembers[g][c][t] += transMem[g][c][cTo][t-1]
          }
        }
        for (var cTo=0; cTo<(cMax+bMax); cTo++) { //transitions between categories
          if (cTo==2) {
            parRetentionToIna = parRetention;
          } else {
            parRetentionToIna = 1;
          }
          transMemOut[c][cTo] = outputMembers[g][c][t] * trans[c][cTo][x] * parRetentionToIna;
          if (cTo<cMax) {
            transMemIn[cTo][c] = transMemOut[c][cTo];
            transMem[g][c][cTo][t] = transMemIn[c][cTo];
          };
          transMem[g][c][cTo][t] += -transMemOut[c][cTo];
          iLoopCount++
        }
        resultMemCXT[c][t][x] += parseInt(outputMembers[g][c][t]); //Age profile Data
        resultMemCT[c][t] += parseInt(outputMembers[g][c][t]); //Member projection data
      }
      for (cTo=0; cTo<(cMax+bMax); cTo++) {
         resultsExits[t] += -transMem[g][0][cTo][t];  //collect exits
      }
    }
  }

  //New Entrants...

  //var newEntAgeProfile = [0.000,	0.000,	0.000,	0.000,	0.000,	0.000,	0.000,	0.000,	0.000,	0.000,	0.000,	0.000,	0.000,	0.000,	0.000,	0.000,	0.000,	0.001,	0.002,	0.006,	0.008,	0.012,	0.017,	0.015,	0.019,	0.022,	0.024,	0.026,	0.031,	0.032,	0.034,	0.035,	0.044,	0.040,	0.042,	0.041,	0.044,	0.047,	0.047,	0.052,	0.050,	0.060,	0.059,	0.056,	0.065,	0.070,	0.000,	0.000,	0.000,	0.000,	0.000,	0.000,	0.000,	0.000,	0.000,	0.000,	0.000,	0.000,	0.000,	0.000,	0.000,	0.000,	0.000,	0.000,	0.000,	0.000,	0.000,	0.000,	0.000,	0.000,	0.000,	0.000,	0.000,	0.000,	0.000,	0.000,	0.000,	0.000,	0.000,	0.000,	0.000,	0.000,	0.000,	0.000,	0.000,	0.000,	0.000,	0.000,	0.000,	0.000,	0.000,	0.000,	0.000,	0.000,	0.000,	0.000,	0.000,	0.000,	0.000,	0.000,	0.000,	0.000,	0.000,	0.000,	0.000,	0.000];

  var newEntAgeProfile = [0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	13,	8,	14,	55,	73,	104,	145,	131,	165,	192,	207,	227,	265,	276,	292,	307,	377,	343,	367,	354,	380,	406,	408,	452,	429,	520,	510,	486,	563,	602,	608,	572,	565,	532,	533,	579,	562,	576,	571,	565,	551,	457,	446,	386,	379,	346,	316,	284,	293,	225,	183,	154,	144,	97,	102,	90,	47,	41,	29,	81,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0];

  //all 0 to 105 - place in parameters
  var newEntAgeProfileTotal = 0
  for (x=0; x <xMax; x++) {
    newEntAgeProfileTotal += newEntAgeProfile[x]
  }

  //Cycle through time, collect annual exits and add to exits from above
  for (var t=1; t <tMax; t++) {  //no NEs at time 0
    for (var x=1; x <xMax; x++) {
      for (var c=1; c <cMax; c++) {
        if (c==1) {
          outputMemNE[t][x][c] = outputMemNE[t-1][x-1][c] + resultsExits[t-1] * newEntAgeProfile[x-1] / newEntAgeProfileTotal * parReplacement
        } else {
        ////
        outputMemNE[t][x][c] = outputMemNE[t-1][x-1][c]
        }
        for (var cTo=1; cTo<(cMax+bMax); cTo++) {
          outputMemNE[t][x][c] += transMemNE[x-1][c][cTo][t-1]
        }
        for (var cTo=0; cTo<(cMax+bMax); cTo++) { //transitions between categories
          transMemOutNE[c][cTo] = outputMemNE[t][x][c] * trans[c][cTo][x];
          if (cTo<cMax) {
            transMemInNE[cTo][c] = transMemOutNE[c][cTo];
            transMemNE[x][c][cTo][t] = transMemInNE[c][cTo];
          };
          transMemNE[x][c][cTo][t] += -transMemOutNE[c][cTo];
          iLoopCount++
        }
        resultMemCXT[c][t][x] += outputMemNE[t][x][c];
        resultMemCT[c][t] += outputMemNE[t][x][c];
      }
      for (cTo=0; cTo<(cMax+bMax); cTo++) {
         resultsExits[t] += -transMemNE[x][1][cTo][t];  //collect NE exits
      }
    }
  }


  var t1 = performance.now();
  var runtime = t1 - t0;
  console.log("Runtime: " + runtime.toFixed(2) + "ms. LoopCount: " + iLoopCount);
  console.log(resultsExits);
};

modelDemographic();
