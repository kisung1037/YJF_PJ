var canvas = document.querySelector("#myCanvas");
var context = canvas.getContext("2d");
var time;

context.fillStyle="#000000";
context.font="25px Stylish";

setInterval(drawCan, 1000);

function drawCan(){
    context.clearRect(0,0,canvas.width,canvas.height);
    calcTime();
    context.fillText(time, 500,40);
}

function calcTime(){
    var d = new Date();
    var hour = d.getHours();
    var min = d.getMinutes();
    var sec = d.getSeconds();
    time = hour+" : "+min+" : "+sec;
}


























// var MSUB = document.querySelectorAll(".js-sub"),
//     MDSUB = document.querySelectorAll(".sub")

// var sub0 = MSUB[0];
// var sub0_1 = MDSUB[0];
// var sub1 = MSUB[0];
// var sub1_1 = MDSUB[0];
// var sub2 = MSUB[1];
// var sub2_1 = MDSUB[1];
// var SUB1_CL = sub1_1.classList;
// const SUB2_CL = sub2_1.classList;

// function loadMenu() {
//     sub1.addEventListener("mouseover", subMenu)
//     sub1_1.addEventListener("mouseleave" , subOut)
//     sub2.addEventListener("mouseover", subMenu2)
//     sub2_1.addEventListener("mouseleave" , subOut)
// }

// function mouseOver() {
//     while(true){
//         if(subArr[i] == false){
//             SUB1_CL.remove("sub");
//             SUB1_CL.add("subOn");
//         }else if (subArr[i] == true){
//             SUB1_CL.remove("subOn");
//             SUB1_CL.add("sub");
//         }
//     }
// }
// function subOut() {
//     SUB1_CL.remove("subOn")
//     SUB1_CL.add("sub")
//     // SUB2_CL.remove("subOn")
//     // SUB2_CL.add("sub")
// }
// function subMenu() {
//         if(SUB1_CL.value !== "subOn"){
//             SUB1_CL.remove("sub")
//             SUB1_CL.add("subOn")
//         }else{
//             SUB1_CL.remove("subOn")
//             SUB1_CL.add("sub")
//         } 
// }
// // function subMenu2() {
//     if(SUB2_CL.value !== "subOn"){
//         SUB2_CL.remove("sub")
//         SUB2_CL.add("subOn")
//     }else{
//         SUB2_CL.remove("subOn")
//         SUB2_CL.add("sub")
//     }
// }
