const labels = document.querySelectorAll(".form label");
const email = document.querySelector("#email");
const spans = document.querySelectorAll(".form label span");

labels.forEach((label)=>{

    label.innerHTML = label.innerText
    .split("")
    .map((letter, idx)=> `<span style="transition-delay:${idx * 50}ms;">${letter}</span>`)
    .join("");



});

email.addEventListener("keyup", ()=>{

    if(email.value==""){
            document.querySelectorAll(".form label span").forEach(span=>{
            span.classList.remove("junto");
        });
    }else{
            document.querySelectorAll(".form label span").forEach(span=>{
            span.classList.add("junto");
        });
    }
});