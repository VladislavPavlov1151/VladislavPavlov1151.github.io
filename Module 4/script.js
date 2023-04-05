var names=new Array();
names[0]="Vlad";
names[1]="Sasha";
names[2]="Olena";
names[3]="Katya";
names[4]="Sergiy";
names[5]="Bogdan";
names[6]="Yaroslav";
names[7]="Vitaliy";
names[8]="Ostap";
names[9]="Artem";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}