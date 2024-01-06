//Closure :Function bundled with its lexical environment is known as a closure. Whenever function is returned, even if its vanished in execution context but still it remembers the reference it was pointing to.
  //example
  function x(){
  let a=10;
    function y(){
      console.log(a)
    }
    y()
  }
x() //10
let z=x()
.... after 1000+lines we can call z() then
z() //10
