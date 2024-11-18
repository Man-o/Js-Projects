let item_1={id:1,img:'https://vismaifood.com/storage/app/uploads/public/8b4/19e/427/thumb__1200_0_0_0_auto.jpg',name:'Masala Dosa',price:90,qty:1};
let item_2={id:2,img:'https://t3.ftcdn.net/jpg/03/62/02/26/360_F_362022640_fZ6UM0JycJlFDdBiR1pYlNddKfdGvYwR.jpg',name:'Idly',price:40,qty:1};
let item_3={id:3,img:'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/01/pongal-ven-pongal-500x500.jpg',name:'Pongal',price:60,qty:2};
let item_4={id:4,img:'https://www.awesomecuisine.com/wp-content/uploads/2020/03/poori-masala-kizhangu.jpg',name:'Poori',price:50,qty:1};

let items=[item_1,item_2,item_3,item_4]

function displayItems(products){
    if(products.length!=0){
        let eachProduct=``
        for(let product of products){
            eachProduct+=`<div class="col-md-3">
                            <div class="card mb-3">
                                <div class="card-header">
                                    <img src="${product.img}" alt="" class="img-fluid">
                                </div>
                                <div class="card-body text-center">
                                    <h1>${product.name}</h1>
                                    <h5>${product.price }.00 &#8377</h5>
                                    <h5>
                                    <i class="bi bi-dash-circle-fill"></i>
                                    <span>${product.qty}</span>
                                    <i class="bi bi-plus-circle-fill"></i>
                                    </h5>
                                </div>
                            </div>
                        </div>`
            document.getElementById('display-item').innerHTML=eachProduct;
    }
    }
    
    
}
displayItems(items)

