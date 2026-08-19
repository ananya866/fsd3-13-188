import readline from "readline/promises";
import {writeFile,readFile} from"fs/promise"; 

import { stdin, stdout } from "process";

const FILE="products.json"
const saveCart=(cart)=>{
    await writeFile(FILE,JSON.stringify(cart,null,2));

};
const getCart = async() =>{
    const data = await readFile(FILE,"utf-8");
    return JSON.parse(data);
};

const addToCart = async(item) => {
    const products = await getCart();
    products.push(item);
    await saveCart(products);
};


const main = async () => {
  const cin = readline.createInterface({ input: stdin, output: stdout });
  let choice;5
  do{
  console.log("welcome to shopping cart 🛍️");
  console.log("1      Add to cart");
  console.log("2    show cart");3
  console.log("3     Remove Item");
  console.log("4     Update Quantity");
  console.log("5     checkout");
   choice = await cin.question("Enter your choice:");
  console.log("Entered choice:", choice);
  switch(Number(choice)){
    case 1:
        console.log("add to cart");
        break;
        case 2:
            console.log("show cart item");
            break;
            case 3:
                console.log("remove item");
                break;
                case 4: 
                    console.log("update quantity");
                    break;
                    case 5:
                        console.log("see you later...😄");
                        process.exit()
                        break;
                        default:
                            console.log("Invalid choice! try again😒");
  }
}while (choice != "5");

  cin.close();
};

main();
