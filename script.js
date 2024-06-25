function process(){
    const celsius = Number(document.getElementById("input").value)
    const fahrenheit = (celsius*1.8)+32
    const result = document.querySelector("#result")
    result.innerHTML =fahrenheit
  }
  function process1(){
    const fahrenheit = Number(document.getElementById("input1").value)
    const celsius = ((fahrenheit-32)*5)/9
    const result1=document.querySelector("#result1")
    result1.innerHTML=celsius
  }