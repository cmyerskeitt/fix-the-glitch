function correct(string){
    console.log(string.length)
        return string.replace(/0/g, "O")
      .replace(/5/g, "S")
      .replace(/1/g, "I");
   
}