var list1=[];
var arr4=[];
// var list3=[];
var orderedlist1=document.querySelector("#orderedlist1");

function function1(){
  var textInput = document.querySelector(".class2").value;
  console.log(textInput);
  var list1=textInput.split(",");
  console.log(list1);       //created string list

  for (i in list1){         // created integer list
    var z=Number(list1[i]);
    arr4.push(z);
    console.log(arr4)};
  displayList();

  // logic for array sorting

  var arr4s=arr4.toString();
  var arr4so=arr4.slice().sort((a,b)=>a-b);
  var arr4sos=arr4so.toString();
  var arr7=[-1,-1];
  if(arr4s!=arr4sos){
    sortingF(arr4);

  }
  else{
    document.querySelector(".class3").innerHTML="<p>"+"["+arr7+"]"+"</p>";

  }


  // sortingF() function definition.

  function sortingF(arr4){
    // finding value of s
    var i=0;
    while(i <arr4.length) {

      if(arr4[i]>arr4[i+1]){
        var s=i;
        break;
      }

        i++;
    }
    // #value of s


    // finding value of e
    var i=(arr4.length-1);
    // console.log(i);

    while(i>=0){
      if(arr4[i]<arr4[i-1]){
        // console.log(arr4[i]);
        var e=i;
        // console.log("e="+e);
        break;
      }
        i--;
    }
    // #value of e

    // splicing and concat
    arr4=arr4.slice(0,s).concat(arr4.slice(s,e+1).sort((a,b)=>a-b)).concat(arr4.slice(e+1,arr4.length));

    // #splicing and concat

    // finding min and max
    var arr5=arr4.slice(s,e+1);
    // console.log("arr5= "+arr5);
    var min=Math.min(...arr5);
    // console.log("min="+min);
    var max=Math.max(...arr5);
    // console.log("max="+max);

    // #finding min and max

    // comparing min

    var w=0;
    while(w<s-1){
      if(arr4[w]>min){
        s=w;
        // console.log("s= ",s);
        break;
      }
      w++;
    }

    // #comparing min

    // comparing max

    var w=e+1;
    while(w<arr4.length){
      if(arr4[w]<max){
        e=w;
        break;
      }
      w++;
    }


    // #comparing max

    // splicing and concat
    var arr6=arr4.slice(0,s).concat(arr4.slice(s,e+1).sort((a,b)=>a-b)).concat(arr4.slice(e+1,arr4.length));
    console.log("arr6 "+arr6);
    // #splicing and concat
    var arr8=[s,e];

    document.querySelector(".class3").innerHTML="<p>"+"["+arr8+"]"+"</p>";



  }


  // end logic for array sorting


  return false;

};

function displayList(){
  orderedlist1.innerHTML="";
  for (i in arr4){
    orderedlist1.innerHTML += '<li class="li1">'+i+". "+arr4[i]+'</li>';
  };
  var x = document.querySelectorAll("li");

  for (let i = 0; i < x.length; i++) {
    x[i].style.display="inline";
    x[i].style.backgroundColor = "pink";
    x[i].style.margin="10px";
    x[i].style.padding="10px";
    x[i].style.borderRadius="15% 15% 15% 15%/20% 20% 20% 20%";


  }
};
