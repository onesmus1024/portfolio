
let oldvalue=0;
let newvalue = 0;

window.addEventListener("scroll",()=>{
    newvalue =window.pageYOffset;
    if(oldvalue>newvalue){
        
        window.document.getElementById("navbar").classList.remove("scroll1");
        
    }
    else{
        document.getElementById("navbar").classList.add("scroll1")
    }
    oldvalue=newvalue;
})

var paragraph = document.getElementById("name");
var myname = "Onesmus Wambugu";
var counter =0;
function ones (){
    if(counter < myname.length){
        paragraph.textContent = paragraph.textContent + myname[counter];
        counter++;
    }
    else{
        clearInterval(writenameInterval)
    }
}

var writenameInterval =setInterval(ones,300)
var about = document.getElementById("about")
window.addEventListener("scroll",()=>{
    var viewport = window.innerHeight;
    var aboutTop = about.getBoundingClientRect().top;
    if(aboutTop<viewport-200){
        about.classList.add("hide");
    }
    else{
        about.classList.remove("hide");
    }
})

var testimonial = document.getElementById("container")
window.addEventListener("scroll",()=>{
    var viewport = window.innerHeight;
    var testimonialTop = about.getBoundingClientRect().top;
    if(testimonialTop<viewport+150){
        testimonial.classList.add("containershow");
    }
    else{
        testimonial.classList.remove("containershow");
    }
})