/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */

module.exports = function getLoveTrianglesCount(preferences = []) {
  var n=0;                                            // число треугольных треугольников
  var corner2, corner3;                              // номера 2 и 3 углов
  for (var i=0 ; i<preferences.length ; i++){          // i-номер 1 угла
    corner2=preferences[i]-1;
    corner3=preferences[corner2]-1;
    if ((( preferences[corner3]-1) == i) && (corner2!=corner3))
      n++;
  }
  n=n/3;
  return n; // --------
};

/*
module.exports = function getLoveTrianglesCount(preferences = []) {

function getLoveTrianglesCount(preferences = []) {
  var n=0;                                           // число треугольных треугольников
  var corner2, corner3                               // номера 2 и 3 углов
  for (var i=0;i<(preferences.length);i++){          // i-номер первого из трех треугольников
      corner2=preferences[i]-1;
                                                     // console.log("corner2=",corner2);
      corner3=preferences[corner2]-1;
                                                     // console.log("corner3=",corner3);
                                                     // console.log("pass",i);
    if ((preferences[corner3]-1)==i && corner2!=corner3)
      n++;
  }
  return n/3;
  }
  console.log(getLoveTrianglesCount([3, 3, 3, 3, 3, 3, 3, 3]));
*/




