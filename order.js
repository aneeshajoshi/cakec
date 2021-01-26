function order(){
    let name = document.querySelector("#name").value
    let cake= document.querySelector("#ck").value
  var ord=confirm(name+cake+"confirm your order")
  if(ord==true){
      alert("order placed successfully")
  }
  else{
      alert("Something went wrong")
  }

}