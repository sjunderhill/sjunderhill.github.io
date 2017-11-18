function Array1d(d1) {
  var table = new Array(d1);
  for (var i1 = 0; i1 < d1; i1++) {
    table[i1] = 0;
  }
  return (table);
}

function Array2d(d1, d2) {
  var table = new Array(d1);
  for (var i1 = 0; i1 < d1; i1++) {
    table[i1] = new Array(d2);
    for (var i2 = 0; i2 < d2; i2++) {
        table[i1][i2] = 0;
    }
  }
  return (table);
}

function Array3d(d1, d2, d3) {
  var table = new Array(d1);
  for (var i1 = 0; i1 < d1; i1++) {
    table[i1] = new Array(d2);
    for (var i2 = 0; i2 < d2; i2++) {
      table[i1][i2] = new Array(d3);
      for (var i3 = 0; i3 < d3; i3++) {
          table[i1][i2][i3] = 0;
      }
    }
  }
  return (table);
}

function Array4d(d1, d2, d3, d4) {
  var table = new Array(d1);
  for (var i1 = 0; i1 < d1; i1++) {
    table[i1] = new Array(d2);
    for (var i2 = 0; i2 < d2; i2++) {
      table[i1][i2] = new Array(d3);
      for (var i3 = 0; i3 < d3; i3++) {
        table[i1][i2][i3] = new Array(d4);
          for (var i4 = 0; i4 < d4; i4++) {
          table[i1][i2][i3][i4] = 0;
        }
      }
    }
  }
  return (table);
}
