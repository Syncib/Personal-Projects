document.addEventListener("DOMContentLoaded", function(event){

document.querySelector("#generate").addEventListener("click",function(){
var mul = document.querySelector("#givnum").value;
var j = document.querySelector("#givrng").value;
var buildHtml="";
for (i=1;i<=j;i++){
buildHtml+="<p>"+mul+" * "+i+" = "+mul*i+"</p>"
}
console.log(buildHtml);
document.querySelector("#outtable").innerHTML=buildHtml;
})

})