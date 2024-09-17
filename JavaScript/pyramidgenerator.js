let charcter="*";  // character can  be change to anything
const count=8;  // for the total number of row 
const rows=[];
let inverted=true;  // for normal pyramid change the boolean value to false

function padRow(rowNumber,rowCount){
   return " ".repeat(rowCount-rowNumber)+charcter.repeat(2*rowNumber-1)+" ".repeat(rowCount-rowNumber);
}

for (let i=1;i<=count;i++){
    if(inverted){
        rows.unshift(padRow(i,count));
    }else{
        rows.push(padRow(i,count));0
    }
}
/* Using while loop for original 
while (rows.length < count) {
  rows.push(padRow(rows.length + 1, count));
}*/

/* Using for loop for inverted
for (let i = count; i > 0; i--) {
  rows.push(padRow(i, count));
}*/

let result="";
for(const row of rows){
 result=result +"\n" +row;
}
console.log(result);