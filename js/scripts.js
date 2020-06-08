$(document).ready(function() {
  $("form#groceryList").submit(function(event) {
    event.preventDefault();
    const item1 = $("input#item1").val();
    const item2 = $("input#item2").val();
    const item3 = $("input#item3").val();
    const item4 = $("input#item4").val();
    const item5 = $("input#item5").val();
    const item6 = $("input#item6").val();
    const groceriesArray = [item1, item2, item3, item4, item5, item6];
    const sortedArray = groceriesArray.sort();
    let uppercaseArray = []
    sortedArray.forEach(function(grocery) {
      uppercaseArray.push(grocery.toUpperCase());
    });
});
});
