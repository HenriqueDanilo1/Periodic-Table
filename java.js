//tab = p. table
var tab = document.getElementById('tab')
var body = document.getElementsByTagName("body")[0]
let missclick = 1
//open/close
localStorage.removeItem("id")
function dontopen(element){
    var id = element.id
    if(document.getElementById(`${id}t`) != null){
        document.getElementById('mobilemimimi').setAttribute("class", "close-this-shit")
        document.getElementById('mobilemimimi').setAttribute("onclick", "dontclose()")
        localStorage.setItem("id", id)
        var info = document.querySelector(`#${id}t`)
        info.style.display="block"
        info.style.transform="translate(-50%, -50%) scale(1)"
        document.querySelector(`#${id}t #mv`).innerHTML=`<div class="m3d"><model-viewer src="vaquinha ;3/${id}.glb" camera-controls autoplay ar ar-modes="webxr scene-viewer" shadow-intensity="0"></model-viewer></div>`//mv == model viwer
        tab.style.filter="blur(3px)"
        tab.style.opacity="0.8"
        tab.style.pointerEvents="none"
        body.style.overflow="hidden"
    } else{
        alert('Infelizmente o coleguinha responsavel por tal pesquisa ainda não contribuiu para o trabalho da turma \u{1F614}')
    }
}
function dontclose(){
            let id = localStorage.getItem('id')
            document.getElementById('mobilemimimi').removeAttribute("class")
            document.getElementById('mobilemimimi').removeAttribute("onclick")
            document.getElementById(`${id}t`).style.transform="translate(-50%, -50%) scale(0)"
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
