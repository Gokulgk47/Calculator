// To type numbers
var display=(content)=>{
    result.value+=content
}

// to clear in AC
var cleardisp=()=>{
    result.value=""
}

var lastclr=()=>{
  result.value=result.value.slice(0,-1)
}

var evaluatee=()=>{
    try{
        result.value=eval(result.value)
    }catch{
        result.value="Invalid"
    }
}