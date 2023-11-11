const btn = document.getElementById('emoji-btn');
const copy = document.querySelector('span');
let emojis = [];

const emojichange = async () => {

    let res  = await fetch('https://emoji-api.com/emojis?access_key=1ce9b701f975ba7b63dd065ab1e09f26e3d1e83d')
    res = await res.json()

    for(let i = 0;i<res.length;i++){
        emojis.push(res[i].character)
    }

}

emojichange();

btn.addEventListener('mouseover',() => {
    btn.innerText = emojis[Math.floor(Math.random()*emojis.length)];
})



btn.addEventListener('click', () => {
    btn.innerText = emojis[Math.floor(Math.random()*emojis.length)];
    // Get emoji text
    let emoji = btn.innerText;
    
    // Copy to clipboard
    navigator.clipboard.writeText(emoji);
    
    
        copy.style.top = '110%'
        copy.style.transition = 'top 0.3s ease'
  
   
    copy.style.opacity = 1;
  
    
    setTimeout(() => {
      btn.innerText = emoji; 
    }, 1000);

    setTimeout(()=>{
        copy.style.opacity = 0;
    },1000)
  
  });


