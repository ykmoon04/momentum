const clock = document.querySelector("h2#clock");

function sayHello(){
    console.log("hello");

}

function paintTime(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const min = String(date.getMinutes()).padStart(2,"0");
    //const sec = String(date.getSeconds()).padStart(2,"0");
    // const hours = date.getHours().toString().padStart(2,"0");
    // const min = date.getMinutes().toString().padStart(2,"0");
    // const sec = date.getSeconds().toString().padStart(2,"0");

    clock.innerText = `${hours} : ${min}`;
}

paintTime();
setInterval(paintTime,1000);