// // 100 Exercices d'algorithmique en JavaScript en vrac avec mon propre code
// // https:waytolearnx.com/category/exercice-javascript-corrige

// Exercice JavaScript Corrigé – Partie 1
// Créez une fonction qui prend deux nombres comme arguments et retourne leur somme.
function addition(x, y) {
   return x + y;
}
let add = addition(1, 2);
console.log(add);

function addition(x, y) {
   return console.log(x + y);
}
addition(1, 2);

// Écrivez une fonction qui prend un nombre entier de minutes et le convertit en secondes.
function minuteToSecond(minutes) {
   let seconds = minutes * 60;
   return seconds;
}
console.log(minuteToSecond(4));
console.log(minuteToSecond(3));

// Créez une fonction qui prend un nombre en argument, incrémente le nombre +1 et renvoie le résultat.
function increment(n) {
   n += 1;
   return n;
}
console.log(increment(1));
console.log(increment(4));

// Écrivez une fonction qui prend la base et la hauteur d’un triangle et retourne sa surface. Notez que la surface d’un triangle est: (base * hauteur) / 2
function getSurface(base, hauteur) {
   return (base * hauteur) / 2;
}
console.log(getSurface(8, 2));
console.log(getSurface(7, 3));

// Écrivez un programme JavaScript pour inverser une chaîne de caractères.
function strReverse(str) {
   // Coupe, inverse et rejoint le tout
   str.split("").reverse().join("");
}
console.log(strReverse("WayToLearnX"));
console.log(strReverse("Hello"));

// Écrivez un programme JavaScript pour trouver le plus grand des trois entiers donnés.
function getMax(a, b, c) {
   let array = [a, b, c];
   let max = null;
   for (let i = 0; i < array.length; i++) {
      if (max < array[i]) {
         max = array[i];
      }
   }
   return max;
}
console.log(getMax(5, 9, 1));
console.log(getMax(2, 3, 10));

// Créez une fonction qui prend un tableau et renvoie le premier élément. Notez que le premier élément d’un tableau commence toujours par l’index 0.
function getFirst(tab) {
   return tab[0];
}
console.log(getFirst([1, 2, 3]));
console.log(getFirst([50, 60, 70]));

// Écrivez un programme JavaScript pour récupérer l’URL d’un site Web
console.log(window.location.href);
// console.log(document.URL);

// Écrivez un programme JavaScript pour renvoyer le reste de deux nombres. Il existe un seul opérateur en JavaScript, capable de fournir le reste d’une division. Deux nombres sont transmis comme paramètres. Le premier paramètre divisé par le deuxième paramètre.

function resteDiv(a, b) {
   return a % b;
   /*let r = a;
    while (r >= b) {
        r = r - b
    }
    return r*/
}
console.log(resteDiv(1, 3));
console.log(resteDiv(2, 4));
console.log(resteDiv(3, 3));

// Exercice JavaScript Corrigé – Partie 2
// Corrigez le code suivant (Erreur de syntaxe), pour calculer le carré.
function carre(b) {
   return b * b;
}
console.log(carre(2));
console.log(carre(4));

// Avec deux nombres, retournez TRUE si la somme des deux nombres est inférieure à 100. Sinon, retournez FALSE.
function check(a, b) {
   if (a + b <= 100) {
      return true;
   }
   return false;
}
console.log(check(5, 20));
console.log(check(60, 55));

// Écrivez une fonction qui convertit les heures en secondes. Notez qu’il y a 60 secondes en une minute et 60 minutes en une heure.
function heureSeconde(heure) {
   // rendu minutes
   let minutes = heure * 60;
   // rendu secondes
   let secondes = minutes * 60;
   return secondes;
}
console.log(heureSeconde(1));
console.log(heureSeconde(5));

// Créez une fonction qui prend un nombre et renvoie TRUE s’il est inférieur ou égal à zéro, sinon retournez FALSE.
function checkNbr(n) {
   if (n <= 0) {
      return true;
   }
   return false;
}
console.log(checkNbr(1));
console.log(checkNbr(-1));
console.log(checkNbr(0));

// Créez une fonction qui renvoie TRUE lorsque nbr1 est égal à nbr2; sinon retournez FALSE.
function isEqual(nbr1, nbr2) {
   return nbr1 === nbr2;
}
console.log(isEqual(3, 6));
console.log(isEqual(1, "1"));
console.log(isEqual(1, 1));

// Créez une fonction qui renvoie TRUE si un entier est divisible par 5, sinon retournez FALSE.
function isDivisible(n) {
   if (n % 5 === 0) {
      return true;
   }
   return false;
}
console.log(isDivisible(5));
console.log(isDivisible(10));
console.log(isDivisible(6));

// Écrivez une fonction qui prend deux entiers (heures, minutes) et les convertit en secondes.
function hmTos(heure, minute) {
   return minute * 60 + heure * 60 * 60;
}
console.log(hmTos(1, 10));
console.log(hmTos(0, 59));
console.log(hmTos(0, 0));

// Écrivez une fonction pour inverser un tableau. Attention: N’utilisez pas la méthode intégrée reverse();
function reverseTab(tab) {
   let newTab = [];
   while (tab.length) {
      newTab.push(tab.pop());
   }
   return newTab;
}
console.log(reverseTab([1, 2, 3]));
console.log(reverseTab([1, 1, 2, 2, 3]));

// Créez une fonction qui prend un tableau et renvoie le dernier élément du tableau.
function getLastElem(tab) {
   return tab[tab.length - 1];
}
console.log(getLastElem([1, 2, 3, 4]));
console.log(getLastElem(["Alex", "Bob", "Emily"]));

// Exercice JavaScript Corrigé – Partie 3
// Créez une fonction qui vérifier l’égalité de deux paramètres a et b. La valeur et le type de paramètres doivent être testés afin d’avoir une égalité. La fonction doit renvoyer TRUE si les paramètres sont égaux et FALSE s’ils sont différents.

function checkEq(a, b) {
   if (a === b) {
      return true;
   }
   return false;
}

console.log(checkEq(5, 5));
console.log(checkEq(5, 0));
console.log(checkEq(5, false));
console.log(checkEq(5, "5"));

// Créez une fonction qui renvoie TRUE si une chaîne est vide et sinon renvoie FALSE.
function isEmpty(str) {
   return str ? false : true;
}
console.log(isEmpty("1"));
console.log(isEmpty("WayToLearnX"));
console.log(isEmpty("  "));
console.log(isEmpty(""));

// Concaténer deux chaînes en une seule chaîne
function concatStr(str1, str2) {
   return str1 + " | " + str2;
}
console.log(concatStr("True", "False"));
console.log(concatStr("On", "Off"));
console.log(concatStr("A", "B"));

// Créez une fonction qui prend un nom et renvoie un message d’accueil sous la forme d’une chaîne. N’utilisez pas une fonction normale mais utilisez une fonction fléchée(Arrow)

const msg = (name) => `Hello ${name}, Welcome to WayToLearnX!`;
console.log(msg("Thomas"));
console.log(msg("Alex"));
console.log(msg("Emily"));

// Écrivez une fonction qui renvoie la longueur d’une chaîne. Utiliser une fonction récursive.
function size(str) {
   // Si la chaîne est vide renvoie 0
   if (!str) {
      return 0;
   } else {
      return size(str.slice(0, -1)) + 1;
   }
}
console.log(size("alex"));
console.log(size("x"));
console.log(size(""));

/* function size(str) {
    let c = 0;
    for (let i = 0; i < ""; i++) {
        c = c++
    }
    return c
}
console.log(size("alex"));
console.log(size("x"));
console.log(size("")); */

function compareSize(str1, str2) {
   return str1.length === str2.length;
}
console.log(compareSize("AA", "BB"));
console.log(compareSize("123", "1"));
console.log(compareSize("Ali", "Bob"));

// Créez une fonction qui prend la hauteur et la largeur et trouve le périmètre d’un rectangle.
function getPerimeter(height, width) {
   // Largeur fois hauteur par 2 pour calculer le périmètre
   return (height + width) * 2;
}
console.log(getPerimeter(2, 6));
console.log(getPerimeter(3, 10));
console.log(getPerimeter(1, 5));

// Le problème du fermier...
function nbrsPattes(poulets, vaches, chevaux) {
   return poulets * 2 + vaches * 4 + chevaux * 4;
}
console.log(nbrsPattes(1, 4, 2));
console.log(nbrsPattes(2, 2, 2));
console.log(nbrsPattes(2, 0, 3));

// Créez une fonction qui prend un nombre comme argument et renvoie « pair » pour les nombres pairs et « impair » pour les nombres impairs.
function check(n) {
   if (n % 2 === 0) {
      return "pair";
   } else {
      return "impair";
   }
}
console.log(check(2));
console.log(check(7));
console.log(check(22));

// Exercice JavaScript Corrigé – Partie 4
// Créez une fonction pour concaténer deux tableaux entiers.
function concatener(tab1, tab2) {
   const array = tab1.concat(tab2);
   return array;
}
console.log(concatener([1, 2], [3, 4]));
console.log(concatener([9, 8], [1, 5, 6, 7]));
console.log(concatener([1, 1, 1], [2, 2, 2]));

// Créez une fonction qui trouve l’index d’un élément donné. Si l’élément n’existe pas, retournez -1.
function find(tab, val) {
   for (let i = 0; i < tab.length; i++) {
      if (tab[i] == val) return i;
   }
   return -1;
}
console.log(find([2, 7, 1], 7));
console.log(find([6, 9, 5], 6));
console.log(find([6, 7, 8], 9));

//   Écrivez une fonction pour vérifier si un tableau contient un nombre particulier.
function nbrExist(tab, val) {
   for (let i = 0; i < tab.length; i++) {
      if (tab[i] === val) {
         return true;
      }
   }
   return false;
}
console.log(nbrExist([6, 7, 8], 7));
console.log(nbrExist([1, 2, 3], 5));
console.log(nbrExist([], 0));

// Créez une fonction qui prend une chaîne (un nom aléatoire). Si le dernier caractère du nom est un « s », retournez TRUE, sinon retournez FALSE.

function checkS(str) {
   /*length commence à 0, avec le moins on commence par la dernière lettre*/
   return str[str.length - 1] === "s";
}
console.log(checkS("Thomas"));
console.log(checkS("Ali"));
console.log(checkS("Alex"));
console.log(checkS("Alvis"));

// Créez une fonction qui renvoie TRUE si une chaîne contient des espaces. Sinon renvoie FALSE.
function containSpaces(str) {
   return str.includes(" ");
}
console.log(containSpaces("Thomas"));
console.log(containSpaces("Hello World!"));
console.log(containSpaces(" "));
console.log(containSpaces(""));

// Créez une fonction qui prend un objet comme argument et renvoie une chaîne qui représente une personne. Les attributs de la personne devront être extraits des trois propriétés de l’objet...
function formatPrs(personne) {
   return `Il s'appelle ${personne.nom}, il a ${personne.age} ans et il habite à ${personne.adresse}`;
}
console.log(formatPrs({nom: "Thomas", age: "25", adresse: "Paris"}));
console.log(formatPrs({nom: "Joseph", age: "22", adresse: "Nantes"}));

// Créez une fonction qui prend une chaîne représentant l’humeur et renvoie une phrase au format suivant: « Aujourd’hui, je me sens {feeling} ». Cependant, si aucun argument n’est passé, retournez « Aujourd’hui, je me sens neutre ».
function myFeeling(feeling) {
   if (feeling === undefined) {
      console.log("Aujourd'hui, je me sens neutre");
   }
   return `${feeling}`;
}
console.log(myFeeling("heureux"));
console.log(myFeeling("triste"));
console.log(myFeeling());

// Créez une fonction qui renvoie le nombre d’arguments avec lesquels elle a été appelée.
function nbrArgs() {
   /* l'attribut vide contient "arguments" à la base*/
   return arguments.length;
}
console.log(nbrArgs());
console.log(nbrArgs({}));
console.log(nbrArgs("A"));
console.log(nbrArgs("A", "B"));

// Créez une fonction qui prend un mot et détermine s’il est pluriel ou singulier. Un mot pluriel est celui qui se termine par « s ». S’il est pluriel renvoyer TRUE sinon FALSE.
function check(str) {
   /* Récupérer la chaîne, puis la dernière lettre pour identifier le s*/
   if (str[str.length - 1] === "s") {
      return true;
   }
   return false;
   /*return str[str.length - 1] == 's';*/
}
console.log(check("enfants"));
console.log(check("filles"));
console.log(check("fille"));
console.log(check("enfant"));

// Exercice JavaScript Corrigé – Partie 5
// Écrivez une fonction qui prend un entier et: Si le nombre est un multiple de 3, retournez « Hello ». Si le nombre est un multiple de 5, retournez « World ». Si le nombre est un multiple de 3 et de 5, retournez « Hello World ».

function checkNbr(n) {
   if (n % 3 === 0) return "Hello";
   if (n % 5 === 0) return "World";
   if (n % 3 === 0 || n % 5 === 0) return "Hello World";
}
console.log(checkNbr(3));
console.log(checkNbr(5));
console.log(checkNbr(15));

// Écrivez l’expression régulière qui révèle le message caché. Vous devez supprimer tous les nombres pour révéler le message. Utilisez la classe de caractères \D dans votre expression.
let str = "242Welcome23 45to344 254324WayToLearnX!";
let patt = /\D */g;
let result = str.match(patt);
console.log(result.join(""));

// Créez une fonction qui prend un tableau avec des nombres et retourne un tableau avec les éléments multipliés par deux.
function tabX2(tab) {
   return tab.map((i) => i * 2);
}
console.log(tabX2([1, 2, 3]));
console.log(tabX2([5, 10, 20]));
console.log(tabX2([100, 200, 300]));

// Créez une fonction qui prend trois nombres comme arguments et renvoie TRUE si c’est un triangle, sinon renvoie FALSE.
function isTriangle(a, b, c) {
   /*Théorème d’inégalité, qui stipule que la somme des longueurs de deux côtés d’un triangle est toujours supérieure au troisième côté*/
   return a + b > c && b + c > a && c + a > b;
}
console.log(isTriangle(2, 3, 4));
console.log(isTriangle(2, 4, 5));
console.log(isTriangle(8, 2, 1));

// Créez une fonction qui renvoie la valeur ASCII du caractère transmis.
function charToAscii(c) {
   /*La méthode charCodeAt() renvoie un entier représentant l’unité de code UTF-16 à l’index donné.*/
   return c.charCodeAt(0);
}
console.log(charToAscii("A"));
console.log(charToAscii("a"));
console.log(charToAscii("+"));

// Avec une fraction sous forme d’une chaîne, indiquez si elle est supérieure ou non à 1 lorsqu’elle est évaluée.
function FracSup1(f) {
   /*fonction native d'évalutation*/
   return eval(f) > 1;
}
console.log(FracSup1("2/2"));
console.log(FracSup1("8/2"));
console.log(FracSup1("1/2"));

// Créez une fonction qui prend un tableau et renvoie la somme de tous les nombres du tableau.
function sum(tab) {
   let sum = 0;
   for (let i = 0; i < tab.length; i++) {
      sum += tab[i];
   }
   return sum;
}
console.log(sum([1, 1, 1]));
console.log(sum([1, 2, 3]));
console.log(sum([-2, 2, 1]));

// Créez une fonction qui prend un tableau de mots et le transforme en un tableau de longueur de chaque mot.
function countStr(tab) {
   return tab.map((el) => el.length);
}
console.log(countStr(["A", "B", "C"]));
console.log(countStr(["Welcome", "To", "WayToLearnX"]));
console.log(countStr(["Bob", "Ali", "Thomas"]));

// Créez une fonction qui renvoie le nombre de syllabes dans une chaîne.
function nbrOfSyllables(str) {
   // Ne fonctionne qu'avec des mots en 2 lettres par syllabe
   return str.length / 2;
}
console.log(nbrOfSyllables("SOSOSOSO"));
console.log(nbrOfSyllables("HAHAHAHAHA"));
console.log(nbrOfSyllables("RIRIRIRIRIRIRIRIRIRI"));

// Exercice JavaScript Corrigé – Partie 6
// Créez une fonction qui prend une chaîne et renvoie TRUE ou FALSE, selon que les caractères sont en ordre ou non.
function checkOrder(str) {
   let result;
   for (let i = 0; i < str.length - 1; i++) {
      if (str.charCodeAt(i) < str.charCodeAt(i + 1)) {
         result = true;
      } else {
         result = false;
      }
   }
   return result;
}
console.log(checkOrder("abc"));
console.log(checkOrder("zyx"));
console.log(checkOrder("123"));
console.log(checkOrder("aabbcc"));

// // Créez une fonction qui ajoute une sous-chaîne à la fin de chaque chaîne du tableau.
function addEnd(tableau, fin) {
   return tableau.map((debutMot) => `${debutMot}${fin}`);
}
console.log(addEnd(["accept", "achet", "adapt"], "able"));
console.log(addEnd(["aim", "act", "ard"], "ant"));

// Créez une fonction qui vérifie si l’argument est un entier ou une chaîne. Renvoie « int » s’il s’agit d’un entier et « string » s’il s’agit d’une chaîne.
function checkIntOrStr(x) {
   if (typeof x === "string") {
      return "string";
   } else if (typeof x === "number") {
      return "int";
   } else {
      return "Hello World";
   }
   // let y = typeof x === "string" ? "string" : typeof x === "number" ? "int" : "Hello World";
   // return y
}
console.log(checkIntOrStr("WayToLearnX"));
console.log(checkIntOrStr(1));
console.log(checkIntOrStr("250"));

// Créez une fonction qui prend une phrase et renvoie le nombre de mots.
function count(str) {
   return str.split(" ").length;
}
console.log(count("Welcome to WayToLearnX"));
console.log(count("Hello World"));
console.log(count("I am going to my school"));

// Créez une fonction récursive qui renvoie le total de tous les nombres impairs jusqu’à n(inclus). n sera donné comme un nombre impair.
function sommeImpair(n) {
   if (n === 1) return 1;
   return n + sommeImpair(n - 2);
}
console.log(sommeImpair(3));
console.log(sommeImpair(7));
console.log(sommeImpair(59));

// Créez une fonction qui renvoie TRUE si la chaîne passée en paramètre ne contient que des lettres majuscules ou minuscules.
function isSameCase(str) {
   return str === str.toUpperCase() || str === str.toLowerCase();
}
console.log(isSameCase("WayToLearnX"));
console.log(isSameCase("waytolearnx"));
console.log(isSameCase("WAYTOLEARNX"));

// Créez une fonction pour multiplier toutes les valeurs d’un tableau par la longueur du tableau donné.
function mulByLen(tab) {
   return tab.map((element) => element * tab.length);
}
console.log(mulByLen([1, 1, 1]));
console.log(mulByLen([1, 2, 3]));
console.log(mulByLen([0, 0, 0, 0, 2]));

// Créez une fonction pour supprimer toutes les valeurs nulles d’un tableau.
function deleteNull(tab) {
   const result = tab.filter((withoutNull) => withoutNull !== null);
   return result;
}
console.log(deleteNull(["Alex", null, "Emily", "Bob"]));
console.log(deleteNull([0, 1, null, 2, null, 3]));
console.log(deleteNull([null, null, null]));

// (...) Vous devez implémenter une fonction qui renvoie TRUE si c’est une année bissextile, ou FALSE si ce n’est pas le cas.
function bissextile(year) {
   return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
}

// // Exercice JavaScript Corrigé – Partie 7
// // Créez une fonction qui trouve tous les nombres pairs de 1 au nombre donné.


// // Exercice JavaScript Corrigé – Partie 8
// // Exercice JavaScript Corrigé – Partie 9
// // Exercice JavaScript Corrigé – Partie 10

let a = 10;
let b = 5;
function multi(a, b) {
   return a * b;
}
multi(a, b);
