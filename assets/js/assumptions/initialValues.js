
// Scenario Selection
var invSelect = 0;
var taxSelect = 0;
var timingSelect = 0;
var contSelect = 0;

// Model Variables
var parReplacement = 0.8;
var parRetention = 0.8;

// Model Limits - also used for setting label values
var cMax = 4;   // Categories
var bMax = 2;   // Benefit Types "RollOut", "DTPD"
var gMax = 160; // Member Groups
var xMax = 106; // Age - add 1 extra to allow for age 0
var tMax = 21;  // Time - add 1 extra to allow for year 0
var oMax = 8;   // Options
var ilMax = 5;  // Illiquid Asset Classes
var cfIncMax = 4;
var cfExpMax = 7;

//New Illiquid Investments
var illiquidPENewCommit = 0;
var illiquidPENewTiming = 0;
