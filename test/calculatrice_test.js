 "test BDD calculatrice scientifique "

 test(1, () => {
    // Créer un élément d'ID "kore1" avec une valeur initiale
    document.body.innerHTML = '<input type="text" id="kore1" value="initial">';
    
    // Créer un objet de type "input" avec une valeur de "nouveau"
    const x = { value: 'nouveau' };
    
    // Appeler la fonction tchad1
    tchad1(x);
    
    // Récupérer la valeur de l'élément d'ID "kore1"
    const ecran = document.getElementById('kore1').value;
    
    // Vérifier que la valeur de l'élément est "initialnouveau"
    expect(ecran).toBe('initialnouveau');
  });
  
  test(2+2, () => {
    document.body.innerHTML = '<input type="text" id="kore1" value="2 + 2">';
    
    // Appeler la fonction resultat
    resultat();
    
    // Récupérer la valeur de l'élément d'ID "kore1"
    const ecran = document.getElementById('kore1').value;
    
    // Vérifier que la valeur de l'élément est "4"
    expect(ecran).toBe('4');
  });
  

  test(8, () => {
    // Créer un élément d'ID "kore1" avec une valeur initiale
    document.body.innerHTML = '<input type="text" id="kore1" value="initial">';
    
    // Appeler la fonction effacer
    effacer();
    
    // Récupérer la valeur de l'élément d'ID "kore1"
    const ecran = document.getElementById('kore1').value;
    
    // Vérifier que la valeur de l'élément est vide
    expect(ecran).toBe('');
  });


  describe("La fonction resultat", () => {
    it("devrait mettre à jour la valeur de l'élément HTML avec l'ID kore1 avec le résultat de l'évaluation de la valeur actuelle de cet élément", () => {
      // Création d'un élément HTML de test
      const testElement = document.createElement("input");
      testElement.setAttribute("id", "kore1");
      testElement.value = "2 + 3";
      
      // Appel de la fonction resultat
      resultat();
      
      // Vérification que la valeur de l'élément HTML a été mise à jour correctement
      expect(testElement.value).toEqual("5");
    });
  });

  describe("La fonction effacer", () => {
    it("devrait mettre à jour la valeur de l'élément HTML avec l'ID kore1 en une chaîne vide", () => {
      // Création d'un élément HTML de test
      const testElement = document.createElement("input");
      testElement.setAttribute("id", "kore1");
      testElement.value = "123456";
      
      // Appel de la fonction effacer
      effacer();
      
      // Vérification que la valeur de l'élément HTML a été mise à jour correctement
      expect(testElement.value).toEqual("");
    });
  });
  
  describe("La fonction decimal", () => {
    it("devrait ajouter la valeur de x à la fin de la valeur de l'élément HTML avec l'ID kore1", () => {
      // Création d'un élément HTML de test
      const testElement = document.createElement("input");
      testElement.setAttribute("id", "kore1");
      testElement.value = "123";
      
      // Appel de la fonction decimal avec un élément de test
      decimal("456");
      
      // Vérification que la valeur de l'élément HTML a été mise à jour correctement
      expect(testElement.value).toEqual("123456");
    });
  });
  

  "Test TDD des functions scientifique "

  test('puissance function should square the input value', () => {
    const ecran = { value: 2 };
    document.getElementById = jest.fn().mockReturnValue(ecran);
 
    puissance();

    expect(ecran.value).toBe(4);
  });

  test('pourcentage function should calculate the percentage of "oui" votes', () => {
   
    const ecran = {};
    document.getElementById = jest.fn().mockReturnValue(ecran);
    const nbOui = 10;
    const nbNon = 20;
  
    pourcentage();
  
    expect(ecran.pourcentageOui).toBe(33.333333333333336);
    expect(ecran.pourcentageNon).toBe(66.66666666666666);
  });

  test('log function should calculate the natural logarithm of the input value', () => {
    const ecran = { value: 100 };
    document.getElementById = jest.fn().mockReturnValue(ecran);

    log();
    expect(ecran.value).toBe(4.605170185988092);
  });
  
  test('expo function should calculate the exponential of the input value', () => {
    const ecran = { value: 2 };
    document.getElementById = jest.fn().mockReturnValue(ecran);
    expo();
    expect(ecran.value).toBe(7.38905609893065);
  });

  test('py function should append the value of PI to the input value', () => {
    const ecran = { value: 'Hello' };
    document.getElementById = jest.fn().mockReturnValue(ecran);
    py();
    expect(ecran.value).toBe('Hello 3.141592653589793');
  });
  
  