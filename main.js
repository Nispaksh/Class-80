array_name_of_students=[];

function submit(){
var Displaystudentarray=[];  
for(var j=1; j<=5; j++);
{
var n_o_s=document.getElementById("name"+j).value;
console.log(n_o_s);
array_name_of_students.push(n_o_s);
}

console.log(array_name_of_students);
var length_of_array_nos =array_name_of_students.length;
console.log(length_of_array_nos);

for  (var i=0; i<length_of_array_nos; i++);
{
    Displaystudentarray.push("<h4> Name-"+array_name_of_students[i]+"</h4>");
    console.log(Displaystudentarray);
}
console.log(Displaystudentarray);
document.getElementById("Displaywithcomma").innerHTML=Displaystudentarray;
  
 var removecomma=Displaystudentarray.join("");
 console.log("removecomma")
document.getElementById("Displaywithoutcomma").innerHTML=removecomma;

document.getElementById("submit").style.display = "none";
document.getElementById("sort").style.display = "inline-block";
}

