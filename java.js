//tab = p. table
var tab = document.getElementById('tab')
var body = document.getElementsByTagName("body")[0]
//open/close
localStorage.removeItem("id")
function dontopen(element){
    var id = element.id
    if(document.getElementById(`${id}t`) != null){
        localStorage.setItem("id", id)
        document.getElementById(`${id}t`).style.display="block"
        document.getElementById(`${id}t`).style.transform="translate(-50%, -50%) scale(1)"
        tab.style.filter="blur(3px)"
        tab.style.opacity="0.8"
        tab.style.pointerEvents="none"
        body.style.overflow="hidden"
    } else{
        alert('Infelizmente o coleguinha responsavel por tal pesquisa ainda não contribuiu para o trabalho da turma \u{1F614}')
    }
}
function dontclose(){
    let id = localStorage.getItem("id")
    document.getElementById(`${id}t`).style.transform="translate(-50%, -50%) scale(0)"
    tab.style.filter=""
    tab.style.opacity="1"
    tab.style.pointerEvents="all"
    body.style.overflow="auto"
    setTimeout(() => {
        document.getElementById(`${id}t`).removeAttribute('style')
        localStorage.removeItem("id")
    }, 199)
}
