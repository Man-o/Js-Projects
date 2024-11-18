let likebtn=document.getElementById('likes')
let dislikebtn=document.getElementById('dislikes')
let likecount=document.getElementById('lc')
let dislikecount=document.getElementById('dlc')
let total=document.getElementById('total')

let like=localStorage.getItem('li')?localStorage.getItem('li'):0;
let dislike=localStorage.getItem('dli')?localStorage.getItem('dli'):0;
let tot=localStorage.getItem('tot')?localStorage.getItem('tot'):0;

likecount.textContent=like;
dislikecount.textContent=dislike;
total.textContent=tot;

likebtn.addEventListener('click',function(){
    ++like
    localStorage.setItem('li',like)
    likecount.textContent=localStorage.getItem('li');
    ++tot
    localStorage.setItem('tot',tot)
    total.textContent=localStorage.getItem('tot'); 
})

dislikebtn.addEventListener('click',function(){
    ++dislike
    localStorage.setItem('dli',dislike)
    dislikecount.textContent=localStorage.getItem('dli');
    ++tot
    localStorage.setItem('tot',tot)
    total.textContent=localStorage.getItem('tot'); 
})
// localStorage.clear()



