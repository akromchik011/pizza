let elSelect = document.querySelector('.select')
let elQalinlik = document.querySelector('#qalinlik')
let elValKattalik = document.querySelector('#kattalik')
let elUstigaInput = document.querySelectorAll('.ustiga-input')
let elKattaLable = document.querySelectorAll('.lable-katta')
let elUstiga = document.querySelector('#ustiga')
let elQoshimchaInput = document.querySelectorAll ('.qoshimcha-input')
let elQoshimcha = document.querySelector('#qoshimcha')


elSelect.addEventListener('change', (e)=>{
    elQalinlik.textContent = e.target.value
})

for(let lable of elKattaLable) {
    lable.addEventListener('click', (e)=>{
        elValKattalik.textContent = lable.textContent
        
    })
}

const arrInput = []
for (let lable of elUstigaInput){
    lable.addEventListener('click',(e)=>{
        arrInput.push(e.target.value)
        const unicArr = new Set(arrInput)
        console.log(unicArr);
        elUstiga.innerHTML = ''
        for (let key of unicArr){
            let newSpan = document.createElement('span')
            newSpan.textContent = key
            elUstiga.appendChild(newSpan)
        }
    })
}

const arrQoshimchaInput = []
for (let lable of elQoshimchaInput){
    lable.addEventListener('click',(e)=>{
        arrQoshimchaInput.push(e.target.value)
        const unicueArr = new Set(arrQoshimchaInput)
        console.log(unicueArr);
        elQoshimcha.innerHTML = ''
        for (let key of unicueArr){
            let secondSpan = document.createElement('span')
            secondSpan.textContent = key
            elQoshimcha.appendChild(secondSpan)
        }
    })
}