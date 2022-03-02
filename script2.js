/*tömbök (lista)*/

var tomb=[];
var tomb2=[2,3,4,5,6];
var tomb3=[4];

console.log(tomb.length);
console.log(tomb2.length);
console.log(tomb3.length);

tomb2[0]=12;

var txt="";
for (let index = 0; index < tomb2.length; index++) {
    txt += tomb2[index] + ", ";
    
}

console.log(txt);

var gyumolcs=["alma", "málna", "barack", "ribizli", "paradicsom"];
var gyumolcsSzin=["piros", "piros", "sárga", "piros", "piros"];
var gyumolcsAr=[240,500,300,250,500];

/*Van-e sárga színű gyümölcs */
var i=0;
while(i<gyumolcsSzin.length && !(gyumolcsSzin[i] === "sárga")){
    i++;
}
var vane=i<gyumolcsSzin.length;
console.log("Van sárga színű gyümölcs: " + vane);



/*Mennyi a piros szíynű összértéke? */
var ossz=0;
for (let index = 0; index < gyumolcsSzin.length; index++) {
    if(gyumolcsSzin[index] === "piros"){
        ossz= ossz+gyumolcsAr[index]
    }
    
}
console.log(ossz)


/*Hány 300ft alatti termék van? */
var db=0;
for (let k = 0; k < gyumolcsAr.length; k++) {
    if(gyumolcsAr[k]<300){
        db = db+1;
    }
    
}
console.log(db);
/*Van-e 1000ft feletti termék van? */

var j=0;
while(j<gyumolcsAr.length && !(gyumolcsAr[j]>1000)){
    j++
}
var van = j<gyumolcsAr.length;

console.log("Van drágább, mint 1000ft: "+ van);