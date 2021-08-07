/*
Alice has a list of good friends.

Define a method "makeFriend" to add a new friend to her list.
*/

let person = { //Codigo ya escrito en el ejercicio
    name: "Alice",
    friends: ["John", "Nina"],
    //Agrego las siguientes líneas:
    makeFriend: function (newFriend) {
      this.friends = this.friends + "," + newFriend;
      //Otra forma de hacerlo:
      //return this.friends.push(newFriend)
    }
  };

  /*
  DO NOT EDIT ANYTHING BELOW THIS LINE
  */
  
  person.makeFriend("Bob");
  
  console.log(
    `Expected result: 'John,Nina,Bob'. Actual result: ${person.friends}`
  );