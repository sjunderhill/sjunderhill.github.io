function chartUpdate(updateVar) {

  switch(updateVar) {
    case 'inv':
      chartAsset_Cat.updateData();
      chartAsset_Opt.updateData();
      chartAsset_Comp.updateData();
      chartCF_Inc.updateData();
      chartCF_Exp.updateData();
      chartCF_IncExp.updateData();
      //chartCF_Net.updateData();
      chartInvret_Class.updateData();
      chartInvret_Opt.updateData();
      chartLiquidity.updateData();
      chartIlliquidAssets.updateData();
      chartIlliquidCallDist.updateData();
      break;
    case 'timing':
      chartAsset_Cat.updateData();
      chartAsset_Opt.updateData();
      chartAsset_Comp.updateData();
      chartCF_Inc.updateData();
      chartCF_Exp.updateData();
      chartCF_IncExp.updateData();
      //chartCF_Net.updateData();
      chartLiquidity.updateData();
      chartIlliquidAssets.updateData();
      break;
    case 'cont':
      chartAsset_Cat.updateData();
      chartAsset_Opt.updateData();
      chartAsset_Comp.updateData();
      chartCF_Inc.updateData();
      chartCF_Exp.updateData();
      chartCF_IncExp.updateData();
      //chartCF_Net.updateData();
      chartIlliquidAssets.updateData();
      break;
    case 'tax':
      chartInvret_Class.updateData();
      chartInvret_Opt.updateData();
      break;
    case 'illiquid':
      chartLiquidity.updateData();
      chartIlliquidAssets.updateData();
      chartIlliquidCallDist.updateData();
      chartIlliquidCallDist_New.updateData();
      break;
  }
}
