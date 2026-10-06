# Express

1. create project folder
2. goto project and open terminal
3. execute `npm init -y`
4. install `npm i nodemon -D`
5. install `npm i express`
6. open package.json
    a. change `type:;'module'`
    b. update script {
        "start":"node prg1.js",
        "dev":"nodemon prg1.js"
    }
7. create prg1.js in folder
8. add folderName/node_modules in .gitignore
# send
 - send function is use to revent back content to the client,it may be html,json,html file,plain file .we can also add status code with status function,it can be chain with send function 

# map
- this function is used to iterated any array.it must return new array.
```
array.map((item)=>{

})
array.map((item)=>())
```
- in first synatax we have to use explicit return keyword wher as in syntax 2 does not require.
- exclude number of property from any json abject.
````
const {p1,p2,....rest} = product;
# search
- to search any item in json array we use "find" method.it will return null on unsuccessfull or object on successfull.