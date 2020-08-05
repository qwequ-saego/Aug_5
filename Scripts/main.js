

const section= document.getElementById('section');

const btn_change= document.querySelector('#change-word');

const words= ['Hi there!', 'My Second Element appearing', 'Pneumonoultramicroscopicsilicovocanoconiosis', 'flocconauccinihipilification'];

const colors=['linen','skyBlue','indigo','orange'];

let  cur_word= words.length-1;
let cur_color= colors.length-1;

section.innerHTML = `<p> ${words[cur_word]}</p>`;
section.style.color= colors[cur_word];

// function wordChange(words, colors) {
//     cur_word --;
//     section.innerHTML= `<p> ${words[cur_word]}</p>`;
// } if (words==0) {
//     cur_word= words.length-1;
//     cur_color=colors.length-1;
// } 
// else{
//     section.innerHTML= `<p> ${words[cur_word]}</p>`;
//     section.style.color= colors[cur_word];
// }

btn_change.addEventListener('click', (e)=>{
    if(cur_word==0){
        cur_word=words.length-1;
    }
    else{
        cur_word --;
    }
    
    section.innerHTML=`<p> ${words[cur_word]} </p>`;
    section.style.color= colors[cur_word];
});


