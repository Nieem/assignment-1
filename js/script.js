function changeText(id) {
    id.innerHTML = "Ooops!";
}





// const collection = document.getElementsByClassName(".example");
//     collection[0].style.backgroundColor = "red";

    // let buttons = document.getElementsByClassName('button');
    // console.log(buttons);
    // for (let i = 0; i < buttons.length; i++) {
    //    // collection[i].style.backgroundColor = "red";
    //    buttons[i].addEventListener("click", () => {
    //               console.log(buttons[i].value);
    //          });
    //   }


      const nodeList = document.querySelectorAll(".button");
      console.log(nodeList);
      for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].style.backgroundColor = "red";
      }

    //  buttons.forEach((btn) => {


    //     btn.addEventListener("click", () => {
    //          console.log(btn.value);
    //      });
    //})