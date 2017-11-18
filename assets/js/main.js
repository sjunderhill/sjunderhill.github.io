//-----AGEPROFILE SLIDER-----//
$(function () {
      $('input.slider.slider-ageprofile').slider({
        formatter: function (value) {
          return value;
        },
      });
    });

    $('input.slider.slider-ageprofile').slider({
      formatter: function (value) {
        return value ;
      },
    })

var sliderAgeProfile = $('input.slider.slider-ageprofile').slider();

//var value = sliderAgeProfile.slider('getValue');

sliderAgeProfile.on('change', function (sliderValue) {
  iAgeProfileYear = sliderValue.value.newValue;
  console.log(iAgeProfileYear);
  var t = parseInt(iAgeProfileYear);
  chartMem_AgeProfile.options.title.text = "Member Age Profile - " + labelDates[iAgeProfileYear];
  for (var c=0;c<4;c++) {
    chartMem_AgeProfile.data.datasets[c].data = resultMemCXT[c][t]; // resultresults[iAgeProfileYear];
  }
  chartMem_AgeProfile.update();
})


//-----RETENTION SLIDER-----//
$(function () {
      $('input.slider.slider-retention').slider({
        formatter: function (value) {
          return value + '%';
        },
      });
    });

    $('input.slider.slider-retention').slider({
      formatter: function (value) {
        return value + '%';
      },
    })

var sliderRetention = $('input.slider.slider-retention').slider();

    sliderRetention.on('change', function (sliderValue) {
    	calcNew(sliderValue.value.newValue/100);
    	parRetention = sliderValue.value.newValue/100;
    	modelDemographic();
    	for (var c=0;c<4;c++) {
    		chartMem_Cat.data.datasets[c].data = resultMemCT[c]; // resultresults[iAgeProfileYear];
    	}
      //chartMem_Cat.update();
    	for (var c=0;c<4;c++) {
    		chartMem_AgeProfile.data.datasets[c].data = resultMemCXT[c][iAgeProfileYear]; // resultresults[iAgeProfileYear];
    	}
      //chartMem_AgeProfile.update();
    });

//-----REPLACEMENT SLIDER-----//
$(function () {
      $('input.slider.slider-replacement').slider({
        formatter: function (value) {
          return value + '%';
        },
      });
    });

    $('input.slider.slider-replacement').slider({
      formatter: function (value) {
        return value + '%';
      },
    })

var sliderReplacement = $('input.slider.slider-replacement').slider();

    sliderReplacement.on('change', function (sliderValue) {
    	calcNew(sliderValue.value.newValue/100);
    	parReplacement = sliderValue.value.newValue/100;
      modelDemographic();
    	for (var c=0;c<4;c++) {
    		chartMem_Cat.data.datasets[c].data = resultMemCT[c]; // resultresults[iAgeProfileYear];
    	}
      //chartMem_Cat.update();
    	for (var c=0;c<4;c++) {
    		chartMem_AgeProfile.data.datasets[c].data = resultMemCXT[c][iAgeProfileYear]; // resultresults[iAgeProfileYear];
    	}
      //chartMem_AgeProfile.update();
    });

    //-----MORTALITY SLIDER-----//
    $(function () {
          $('input.slider.slider-mortality').slider({
            formatter: function (value) {
              return value + '%';
            },
          });
        });

        $('input.slider.slider-mortality').slider({
          formatter: function (value) {
            return value + '%';
          },
        })

//-----SHOCKTIME SLIDER-----//
$(function () {
      $('input.slider.slider-shocktime').slider({
        formatter: function (value) {
          return value;
        },
      });
    });

var sliderShocktime = $('input.slider.slider-shocktime').slider();

    sliderShocktime.on('change', function (sliderValue) {
      timingSelect = parseInt(sliderValue.value.newValue/5);

    });

//-----CONTRIBUTION SLIDER-----//
$(function () {
      $('input.slider.slider-contscale').slider({
        formatter: function (value) {
          return value + "%";
        },
      });
    });

    $('input.slider.slider-contscale').slider({
      formatter: function (value) {
        return value + '%';
      },
    })

var sliderContScale = $('input.slider.slider-contscale').slider();

sliderContScale.on('change', function (sliderValue) {

  switch(parseInt(sliderValue.value.newValue)) {
    case 100:
      contSelect = 0;
      break;
    case 75:
      contSelect = 1;
      break;
    case 125:
      contSelect = 2;
      break;
  }
});

//-----CONTRIBUTION SLIDER-----//
$(function () {
      $('input.slider.slider-shockmemconts').slider({
        formatter: function (value) {
          return value + "%";
        },
      });
    });

    $('input.slider.slider-shockmemconts').slider({
      formatter: function (value) {
        return value + '%';
      },
    })

var sliderShockMemConts = $('input.slider.slider-shockmemconts').slider();

sliderShockMemConts.on('change', function (sliderValue) {

  switch(parseInt(sliderValue.value.newValue)) {
    case 100:
      contSelect = 0;
      break;
    case 75:
      contSelect = 1;
      break;
    case 125:
      contSelect = 2;
      break;
  }

});

//-----PE_New SLIDER-----//
$(function () {
      $('input.slider.slider-PE_New_Amount').slider({
        formatter: function (value) {
          return '$' + value + "m";
        },
      });
    });

    $('input.slider.slider-PE_New_Amount').slider({
      formatter: function (value) {
        return '$' + value + 'm';
      },
    })

var sliderPENewAmount = $('input.slider.slider-PE_New_Amount').slider();

sliderPENewAmount.on('change', function (sliderValue) {

  illiquidPENewCommit = parseInt(sliderValue.value.newValue)

	chartUpdate('illiquid');
});

//-----PE_New Timing SLIDER-----//
$(function () {
      $('input.slider.slider-PE_New_Timing').slider({
        formatter: function (value) {
          return value;
        },
      });
    });

    $('input.slider.slider-PE_New_Timing').slider({
      formatter: function (value) {
        return value;
      },
    })

var sliderPENewTiming = $('input.slider.slider-PE_New_Timing').slider();

sliderPENewTiming.on('change', function (sliderValue) {

  illiquidPENewTiming = parseInt(sliderValue.value.newValue)

	chartUpdate('illiquid');
});

//Target Input Box -> Update chart
$('input.form-control.illiquidTarget').keypress(function (e) {
  if (e.which == 13) {
    console.log(this.value);
    illiquidTarget = this.value;
    calcIlliquidRatio();
    calcIlliquidAssetTarget();
	  chartUpdate('illiquid')
  }
});

//Upper Limit Input Box -> Update chart
$('input.form-control.illiquidUpper').keypress(function (e) {
  if (e.which == 13) {
    console.log(this.value);
    illiquidUpper = this.value;
    calcIlliquidRatio();
    calcIlliquidAssetTarget();
	  chartUpdate('illiquid')
  }
});

//Lower Limit Input Box -> Update chart
$('input.form-control.illiquidLower').keypress(function (e) {
  if (e.which == 13) {
    console.log(this.value);
    illiquidLower = this.value;
    calcIlliquidRatio();
    calcIlliquidAssetTarget();

  }
});

//Econ Scenario Selector
$('.selectpicker-econscen').change(function (e) {
    invSelect = parseInt(e.target.value-1);
});

//Shock Scenario Selector
$('.selectpicker-shockscen').change(function (e) {
    invSelect = parseInt(e.target.value-1);
});

//Update Chart Button
$('.btn-update').click(function(){
    chartUpdate('inv');
    chartUpdate('cont');
    chartUpdate('timing');
    chartMem_Cat.update();
    chartMem_AgeProfile.update();
 });
