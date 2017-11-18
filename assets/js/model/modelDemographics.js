// Demographic Model

// Model Parameters
var parReplacement = 1;
var cMax = 4;
var exitTypes = ["RollOut", "DTPD"];
var gMax = 160;
var xMax = 106; //add 1 extra to allow for age 0
var tMax = 21; //add 1 extra to allow for year 0
var resultMemCXT = []; //Array3d(cMax, tMax, xMax);
var resultMemCT = []; //Array2d(cMax, tMax);

function modelDemographic() {

  //dimension local arrays
  var outputMembers = Array3d(gMax, cMax, tMax);
  var transMem = Array4d(gMax, cMax, cMax, tMax);
  var transMemOut = Array2d(cMax, cMax);
  var transMemIn = Array2d(cMax, cMax);
  //dimension and clear result arrays
  resultMemCXT = Array3d(cMax, tMax, xMax);
  resultMemCT = Array2d(cMax, tMax);

  var t0 = performance.now();
  var x;

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
          for (var cTo=0; cTo<cMax; cTo++) {
            outputMembers[g][c][t] += transMem[g][c][cTo][t-1]
          }
        }
        for (var cTo=0; cTo<cMax; cTo++) { //transitions between categories
          transMemOut[c][cTo] = outputMembers[g][c][t] * trans[c][cTo][x] * parReplacement;
          transMemIn[cTo][c] = transMemOut[c][cTo];
          transMem[g][c][cTo][t] = transMemIn[c][cTo] - transMemOut[c][cTo];
          iLoopCount++
        }
        resultMemCXT[c][t][x] += parseInt(outputMembers[g][c][t]); //Age profile Data
        resultMemCT[c][t] += parseInt(outputMembers[g][c][t]); //Member projection data
      }
    }
  }
  var t1 = performance.now();
  var runtime = t1 - t0;
  console.log("Runtime: " + runtime.toFixed(2) + "ms. LoopCount: " + iLoopCount);
};

modelDemographic();
