let myImage = document.querySelector('img');
myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/firefox-icon.png') {
        myImage.setAttribute('src', 'images/ico13.png')
    }
    else {
        myImage.setAttribute('src', 'images/firefox-icon.png');
    }

}
function setHeading(name) {
    let myHeading = document.querySelector('h1');
    myHeading.textContent = 'Mozilla 酷毙了,' + name + '!';

}
function setUserName() {
    let myName = prompt('请输入你的名字');
    if(myName!=null&&myName!==''){
        localStorage.setItem('name', myName);
        setHeading(myName);
    }
    else{
        alert("请输入正确的名字!");
        setUserName();
    }
   
    

}
let storedName = localStorage.getItem('name');
if (!storedName) {
    setUserName();
}
else {
    setHeading(storedName);
}

let myButton = document.querySelector('button');
myButton.onclick = setUserName;