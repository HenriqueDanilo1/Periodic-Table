//tab = p. table
let tab = document.getElementById('tab')
let body = document.getElementsByTagName("body")[0]
let missclick = 1
//open/close
localStorage.removeItem("id")
function dontopen(element){
    let id = element.id
    document.getElementById('closebynullclick').setAttribute("class", "close-this-shit")
    document.getElementById('closebynullclick').setAttribute("onclick", "dontclose()")
    localStorage.setItem("id", id)
    let info = document.querySelector(`#${id}t`)
    info.style.display="block"
    info.style.transform="translate(-50%, -50%) scale(1)"
    document.querySelector(`#${id}t #mv`).innerHTML=`<div class="m3d"><model-viewer src="vaquinha ;3/${id}.glb" camera-controls autoplay ar ar-modes="webxr scene-viewer" shadow-intensity="0" camera-orbit="45deg 70deg 0m"></model-viewer></div>`//mv == model viwer
    tab.style.filter="blur(3px)"
    tab.style.opacity="0.8"
    tab.style.pointerEvents="none"
    body.style.overflowY="hidden"
    tab.style.paddingRight="15px"
}
function dontclose(){
    let id = localStorage.getItem('id')
    document.getElementById('closebynullclick').removeAttribute("class")
    document.getElementById('closebynullclick').removeAttribute("onclick")
    document.getElementById(`${id}t`).style.transform="translate(-50%, -50%) scale(0)"
    tab.style.paddingRight=""
    tab.style.filter=""
    tab.style.opacity="1"
    tab.style.pointerEvents="all"
    body.style.overflow="auto"
    document.querySelector(`#${id}t #mv`).innerHTML=''
    setTimeout(() => {
        document.getElementById(`${id}t`).removeAttribute('style')
        localStorage.removeItem("id")
    }, 199)
}

// melhore