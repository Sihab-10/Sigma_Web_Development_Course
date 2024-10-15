/*
    Create a business name generator by combining list of ajectivs and 
    shop name and another word

    Adjectives:

    Crazy
    Amazing
    Fire

    Shop Name:
    Engine 
    Foods
    Garments

    Another Word:
    Bros
    Limited
    Hub
*/

function business_name_gen(a, s, w) {
  return a + s + w;
}
result1 = business_name_gen("Crazy", "Engine", "Bros");
result2 = business_name_gen("Amazing", "Foods", "Limited");
result3 = business_name_gen("Fire", "Garments", "Hub");

console.log("Your business name is : ", result1);
console.log("Your business name is : ", result2);
console.log("Your business name is : ", result3);
