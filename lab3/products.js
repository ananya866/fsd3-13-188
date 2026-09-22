const products=[
    {id:1,nmae:'marker',qty:100,price:15},
    {id:2,name:'duster',qty:50,price:10},
];

let nextId = 3;

export const getAllProducts = ()=>{
    return products;
};

export const addProducts = (item)=>{
    item.id = nextId;
    nextId++;
    products.push(item);
    return item;
};

export const deleteProduct = ()=>{
    const item = products.findIndex((prd)=>prd.id==pid);
    if(item==-1)
        return false;
    products.splice(item,1)
    console.log('product remainig:,products');
    return true;
};
















    