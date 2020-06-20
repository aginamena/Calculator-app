const buttons = document.querySelector("article");
const input = document.querySelector("input");
buttons.addEventListener("click", function(event){
  let eventObj = event.target;
  if(eventObj.tagName == "BUTTON"){
    if(eventObj.id == "AC") input.value = "";
    else if(eventObj.id == "equals"){
      input.value = eval(input.value);
    }
    else input.value += eventObj.textContent;
  }
});
