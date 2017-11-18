

var invretInvTaxClass = Array3d(labelInv.length, labelTax.length, labelAssetClass.length)
// Gross Returns
invretInvTaxClass[0][0]	=[	3.1,	3.3,	3.1,	4.1,	4.4,	5.4,	5.8,	6.0,	6.3,	6.4,	7.1,	8.5,	9.0]
invretInvTaxClass[1][0]	=[	3.1,	3.3,	3.1,	4.1,	4.4,	5.4,	5.8,	-10.8,	6.3,	6.4,	-5.4,	-11.4,	9.0]
invretInvTaxClass[2][0]	=[	3.1,	3.3,	3.1,	4.1,	4.4,	5.4,	5.8,	-27.1,	6.3,	6.4,	-13.5,	-28.6,	9.0]
invretInvTaxClass[3][0]	=[	7.1,	8.2,	13.5,	12.9,	0.0,	12.9,	8.3,	-4.9,	12.8,	17.0,	9.9,	-7.4,	10.9]
invretInvTaxClass[4][0]	=[	8.6,	6.5,	14.0,	-30.1,	-22.3,	-30.0,	-22.6,	-68.4,	-0.1,	1.9,	-44.3,	-52.0,	-7.9]
invretInvTaxClass[5][0]	=[	2.4,	2.4,	2.9,	4.7,	5.6,	4.7,	3.3,	-18.4,	-5.8,	-11.2,	-21.6,	-34.8,	-16.9]
invretInvTaxClass[6][0]	=[	1.0,	1.2,	3.0,	5.2,	3.5,	6.9,	0.0,	0.0,	5.4,	3.0,	3.9,	5.0,	5.5]
// Net Returns
invretInvTaxClass[0][1]	=[	2.6,	2.8,	2.6,	3.5,	4.0,	4.6,	5.2,	5.5,	5.4,	5.7,	6.5,	7.5,	8.0]
invretInvTaxClass[1][1]	=[	2.6,	2.8,	2.6,	3.5,	4.0,	4.6,	5.2,	-10.0,	5.4,	5.7,	-5.0,	-10.0,	8.0]
invretInvTaxClass[2][1]	=[	2.6,	2.8,	2.6,	3.5,	4.0,	4.6,	5.2,	-25.0,	5.4,	5.7,	-12.5,	-25.0,	8.0]
invretInvTaxClass[3][1]	=[	6.0,	6.9,	11.5,	11.0,	0.0,	11.0,	7.5,	-4.5,	11.0,	15.2,	9.2,	-6.5,	9.7]
invretInvTaxClass[4][1]	=[	7.3,	5.5,	12.0,	-25.7,	-20.1,	-25.7,	-20.4,	-63.2,	-0.1,	1.7,	-41.0,	-45.5,	-7.0]
invretInvTaxClass[5][1]	=[	2.0,	2.0,	2.5,	4.0,	5.0,	4.0,	3.0,	-17.0,	-5.0,	-10.0,	-20.0,	-30.5,	-15.0]
invretInvTaxClass[6][1]	=[	0.8,	1.0,	2.6,	4.4,	3.2,	5.9,	0.0,	0.0,	4.7,	2.7,	3.6,	4.4,	4.9]

var saaOptClass = []
saaOptClass[0]=[100.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0]
saaOptClass[1]=[0.0,100.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0]
saaOptClass[2]=[0.0,40.0,20.0,5.0,5.0,1.0,0.0,0.0,3.0,5.0,9.0,9.0,3.0]
saaOptClass[3]=[0.0,11.7,11.5,0.0,9.6,2.9,0.0,0.0,7.7,4.8,23.0,23.0,5.8]
saaOptClass[4]=[0.0,8.0,12.0,0.0,10.0,3.0,0.0,0.0,8.0,5.0,24.0,24.0,6.0]
saaOptClass[5]=[0.0,3.0,5.0,0.0,2.0,2.0,0.0,0.0,8.0,5.0,34.0,34.0,7.0]
saaOptClass[6]=[0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,100.0,0.0,0.0]
saaOptClass[7]=[0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,100.0,0.0]

var saaClassOpt = Array2d(labelAssetClass.length, labelOpt.length)
for (var c=0; c<labelAssetClass.length; c++) {
  for (var o=0; o<labelOpt.length; o++) {
    saaClassOpt[c][o] = saaOptClass[o][c]
  }
}


// Calculate Option Returns
var invretInvTaxOpt = Array3d(7, 2, 8);
for(var b=0; b<labelInv.length; b++) {
  for(var t=0; t<labelTax.length; t++) {
    for (var o=0; o<labelOpt.length; o++){
      for (var c=0; c<labelAssetClass.length; c++) {
        invretInvTaxOpt[b][t][o] += (invretInvTaxClass[b][t][c]/100 * saaOptClass[o][c]/100)*100;
      }
    invretInvTaxOpt[b][t][o] = Math.round(invretInvTaxOpt[b][t][o]*10)/10
    }
  }
}
