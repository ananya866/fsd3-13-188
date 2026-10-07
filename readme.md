# Project setup

1. create two folder frontend and backend
2. go to frontend `cd frontend`
    - type `npm create vite@latest`
    - press `Y` if asked to install
    - enter `.` in project name
    - select 'react' as framework from arrow key
    - select JavaScript from variant by arrow key
    - select ESLint by arrow key
    - select Yes and press enter

3. setup tailwind in react project 
   - install tailwind css using `npm install tailwindcss @tailwindcss/vite`
   - open vite.config.js as below image 
   ![alt text](image.png)
   - remove all content of index.css then write `@import "tailwindcss"`@import "tailwindcss"`in index.css 
   - in react style can be added into html by className beacuse class is pre defined key word in react
   - when js fuction returns directly html content , called component
   # Rules
   1. start with captical letter
   2. it must return html
   3. must be closed at the calling time
   4.it can be used any were and any time