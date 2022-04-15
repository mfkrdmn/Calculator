
var durum = false;  //Everything With a "Value" is True, Everything Without a "Value" is False

var opt= "" ;

var sonuc = 0;

var opr = document.querySelectorAll(".opr");

var rakam = document.querySelectorAll(".rakam");

var islem = document.querySelector("#islem");

var gosterge = document.querySelector("#gosterge");


//The forEach() method calls a function for each element in an array.
    rakam.forEach(function(element){

        element.onclick=function(){

            if(islem.textContent=="0" || durum){
                islem.textContent=""
            }

            islem.textContent=islem.textContent+this.textContent;
            //In JavaScript, the this keyword refers to an object.
            //Which object depends on how this is being used or called.
            /*Burada this rakam divini refer ediyor. forEach verdiğmiz için de hangi dive 
            tıklandıysa o divi çalıştırıyor*/

            durum=false; //durum hatalı mı diye kontrol eder, değilse devam eder
        }


    })

        opr.forEach(function(element){

            element.onclick=function(){
                durum=true;
                opr=this.textContent;   //this burada basılan opr nin textcontent ini al demek

                gosterge.textContent=gosterge.textContent + "" + islem.textContent + "" + opr;

                switch(opt){    //switch case de islem bir defa döner ve dönmesini istediğim işlemi döndürür

                    case "+": islem.textContent = (sonuc + Number(islem.textContent));break;
                    case "-": islem.textContent = (sonuc - Number(islem.textContent));break;
                    case "*": islem.textContent = (sonuc * Number(islem.textContent));break;
                    case "/": islem.textContent = (sonuc / Number(islem.textContent));break;
                    default:break; //default switch i bitirir, break döngüyü kırar

                }
                sonuc = Number(islem.textContent);
                opt = opr;
            }


        })