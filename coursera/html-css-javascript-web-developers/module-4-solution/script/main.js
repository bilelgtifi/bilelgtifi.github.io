var names=new Array();
names[0]="Janna";
names[1]="Darius";
names[2]="Akali";
names[3]="Evelynn";
names[4]="Jax";
names[5]="Garen";
names[6]="Jax";
names[7]="Fizz";
names[8]="Ezreal";
names[9]="Ekko";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hi "+ names[i])
	}
}