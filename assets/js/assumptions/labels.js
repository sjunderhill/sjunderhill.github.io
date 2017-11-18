//xAxes Labels

var labelYearsCFs = ["", 1,	2,	3,	4,	5,	6,	7,	8,	9,	10,	11,	12,	13,	14,	15,	16,	17,	18,	19,	20];

var dateDM = "30 Jun"
var dateY = 2016

var labelDates = []
for (t=0; t<tMax; t++) {
  labelDates[t] = dateDM + " " + (dateY + t);
}

var labelDates10yrs = []
for (t=0; t<11; t++) {
  labelDates10yrs[t] = dateDM + " " + (dateY + t);
}

var labelFYs = []
for (t=0; t<tMax-1; t++) {
  labelFYs[t] = "FY" + (dateY - 2000 + 1 + t);
}

var labelYears = []
for (t=0; t<tMax; t++) {
  labelYears[t] = t;
}

var labelAges = [];
for (x=0; x<xMax; x++) {
  labelAges[x] = x;
}

// Cashflow labels
var labelCFInc = ["EmpConts",	"MemPreTax",	"MemPostTax", "RolloversIn"];
var labelCFExp = ["InsPrem",	"AssetFee",	"MemberFee",	"ContTax",	"RolloversOut", "DTPD",	"Drawdowns"];
var labelCFTot = ["Income",	"Expenditure",	"Net Cashflows"];

// Category labels
var labelCat = ["Active", "Active - New       ", "Inactive", "Pensioner"];

// Option  labels
var assetsOptLabels = ["Growth",	"Balanced",	"Moderate",	"Conservative",	"Cash Enhanced",	"Cash",	"Australian Equities",	"International Equities",	"Fixed Term Interest",	"Growth MVP"];
var labelOpt = ["Cash",	"Cash Enhanced",	"Conservative",	"Moderate",	"Balanced",	"Growth",	"Int. Equities",	"Aus. Equities"];
var labelAssetClass = ["Cash",	"Cash Enhanced",	"Fixed Interest",	"Defensive Alt. (Illiquid)",	"Defensive Alt. (Liquid)",	"Growth Alt. (Illiquid)",	"Growth Alt. (Liquid)",	"Property - Listed",	"Property - Direct",	"Infrastructure",	"International Equities",	"Australian Equities",	"Private Equity"];
var labelTax = ["Pre-Tax", "Post-Tax"];
var labelInv = ["Base", "10% Decline", "25% Decline", "Asian Crisis (1997)", "GFC", "Stagflation", "Depressed"];


// Illiquid labels
var labelIlliquids = ["Private Equity",	"Direct Property",	"Infrastructure",	"Growth Alternatives",	"Defensive Alternatives", "Lower Limit", 	"Target",	"Upper Limit"];

// Percentiles
var labelPercentile = ["", "  5th - 25th Percentile", "25th - 50th Percentile", "50th - 75th Percentile", "75th - 95th Percentile"]
