// On clicking remove button the item should be removed from DOM as well as localstorage.


var bucket=JSON.parse(localStorage.getItem("coffee"))||[];

console.log(bucket);

display(bucket);

function display(bucket){

    bucket.map(function(ele,index){

        var div=document.createElement("div");

        var img=document.createElement("img");
        img.src=ele.image;

        var title=document.createElement("p");
        title.innerText=ele.title;

        let price=document.createElement("p");
        price.innerText=ele.price;

        let btn=document.createElement("button");
        btn.innerText="Remove";
        btn.setAttribute("id","remove_coffee");
        btn.addEventListener("click",function(){
            bucket.splice(index,1);
            localStorage.setItem("coffee",JSON.stringify(bucket));
            div.remove();
            window.location.reload();
        })
        div.append(img,title,price,btn);
        document.getElementById("bucket").append(div)


    })
}