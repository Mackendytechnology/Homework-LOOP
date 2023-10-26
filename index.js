/*const pays = [
  "Haiti",
  "Bresil",
  "Argentine",
  "Peru",
  "Canada",
  "France",
  "USA",
];

function loop() {
  debugger;

  for (let i = 0; i < pays.length; i++) {
    console.log(pays[i]);
  }
}

loop();*/

/*const pays = [
    "Haiti",
    "Bresil",
    "Argentine",
    "Peru",
    "Canada",
    "France",
    "USA",
  ];
  
  function loop() {
    debugger;
  
    for (const paysCourant of pays) {
      console.log(paysCourant);
    }
  }
  
  loop();*/

  const pays = [
    "Haiti",
    "Bresil",
    "Argentine",
    "Peru",
    "Canada",
    "France",
    "USA",
  ];
  
  function loop() {
    debugger;
  
    pays.forEach(function(paysCourant, index) {
      console.log(pays[index]);
    });
  }
  
  loop();

 
/*const pays = [
    "Haiti",
    "Bresil",
    "Argentine",
    "Peru",
    "Canada",
    "France",
    "USA",
  ];
  
  function loop() {
    debugger;
  
    const paysEnmajuscules = pays.map(function(paysCourant) {
      return paysCourant.toUpperCase();
    });
  
    for (const paysCourant of paysEnmajuscules) {
      console.log(paysCourant);
    }
  }
  
  loop();*/

/*const pays = [
    "Haiti",
    "Bresil",
    "Argentine",
    "Peru",
    "Canada",
    "France",
    "USA",
  ];
  
  function loop() {
    debugger;
   
    let i = 0;
    while (i < pays.length) {
      console.log(pays[i]);
      i++;
    }
  }
  
  loop();*/
