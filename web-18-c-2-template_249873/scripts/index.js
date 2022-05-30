// Add the coffee to local storage with key "coffee"

let menu=document.getElementById("menu");

async function getCoffe(){

    try{
        let url=`https://masai-mock-api.herokuapp.com/coffee/menu`;

        let res=await fetch(url);

        let data=await res.json();

       data=data.menu.data

        console.log(data);
        display(data)
    }catch(error){
        console.log("error:",error)
    }
}

getCoffe()

function display(data){

    
    data.map(function(ele){

        let div=document.createElement("div");

        let img=document.createElement("img");
        img.src=ele.image;
        
        let title=document.createElement("p");
        title.innerText=ele.title;

        let price=document.createElement("p");
        price.innerText=ele.price;

        let btn=document.createElement("button");
        btn.setAttribute("id","add_to_bucket");
        btn.innerText="Add to bucket";
        btn.addEventListener("click",function(){
            addtobucket(ele)
        });
        div.append(img,title,price,btn);
        document.getElementById("menu").append(div);

    });
}

bucketArr=[];

function addtobucket(ele){

    ele.quant=1;
    bucketArr.push(ele);
    localStorage.setItem("coffee",JSON.stringify(bucketArr));
    var count=document.getElementById("coffee_count");
    count.innerText=bucketArr.length;
}