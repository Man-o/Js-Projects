
let item1={id:1,img:"https://static.toiimg.com/thumb/63841432.cms?width=1200&height=900",name:'Dosa',price:40,qty:1,total:40}
let item2={id:2,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZc5bG_dnQBT0GZoPJN68yU2j32mS6Js2TgA&s",name:'Idly',price:30,qty:2}
let items=[item1,item2]
let htmlCode=`<tr>
                        <td>${item1.id}</td>
                        <td>
                             <img src=${item1.img} width="50px" height="50px" alt="">
                        </td>
                        <td>${item1.name}</td>
                        <td>${item1.price} &#8377</td>
                        <td>
                            <i class="bi bi-dash-circle-fill" onclick="dec()"></i>
                            <span id="qty">${item1.qty}</span>
                            <i class="bi bi-plus-circle-fill" onclick="inc()"></i>
                        </td>   
                        <td id='tot'>${item1.total}&#8377</td>
                </tr>`


let bodyTag=document.getElementById('tbody')
bodyTag.innerHTML=htmlCode
let disEl=1
let disQty=document.getElementById('qty')
disQty.textContent=disEl
let t=40
let total=document.getElementById('tot')
total.textContent=t


let dec=function(){
    if (disEl>1){
        --disEl
        disQty.textContent=disEl
        total.textContent=(t*disEl)
    }
    else disQty.textContent=disEl
}
let inc=function(){
    ++disEl
    disQty.textContent=disEl
    total.textContent=t*disEl
}
