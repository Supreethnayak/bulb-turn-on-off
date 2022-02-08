const bulbSwitch = document.querySelector('#bulbSwitch')
const bulb = document.querySelector('#bulb')
bulbSwitch.addEventListener('click',()=>{
    if(bulb.src.match('off')){
        bulb.src = 'bulb-on.gif'
        bulbSwitch.innerHTML = 'Turn OFF'
        bulbSwitch.style.color = 'red'
    }
    else {
        bulb.src = 'bulb-off.gif'
        bulbSwitch.innerHTML = 'Turn ON'
        bulbSwitch.style.color = 'green'
    }
})