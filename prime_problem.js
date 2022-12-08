let number=17;
let count=0;
for(let i=0; i<=number.length; i++){
	if(number%i==0){
	count++;
}
}
	if(count==2){
console.log("It is not a prime);
}
	else{
console.log("It is a prime");
}