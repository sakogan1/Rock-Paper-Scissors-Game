
let radio1 = document.getElementById("five")
let radio2 = document.getElementById("ten")
let radio3 = document.getElementById("fifteen")
let radio4 = document.getElementById("twenty")

let val1 = document.getElementById("five").value
let val2 = document.getElementById("ten").value
let val3 = document.getElementById("fifteen").value
let val4 = document.getElementById("twenty").value


let user = 0
let comp = 0
let count= 0


let cpu = match()
let userScoreOut = document.getElementById("scoreUser")
let compScoreOut = document.getElementById("scoreComp")
let score = document.querySelector(".score")
let res = document.querySelector(".res > p")
let get =document.querySelector(".rounds")
let rock = document.getElementById("rock")
let paper = document.getElementById("paper")
let scissors = document.getElementById("scissors")


    function getRadioValue(){
        radio1.addEventListener('click',()=>{
            document.getElementById("infoText").innerHTML +="<p>Five rounds selected:<p>"
            get.innerHTML="<span>"+count+"</span>"+"/"+"<span>"+val1+"</span>"
            
        })
        radio2.addEventListener('click',()=>{
            document.getElementById("infoText").innerHTML +="<p>Ten rounds selected:<p>"
            get.innerHTML="<span>"+count+"</span>"+"/"+"<span>"+val2+"</span>"
        })
        radio3.addEventListener('click',()=>{
            document.getElementById("infoText").innerHTML +="<p>Fifteen rounds selected:<p>"
            get.innerHTML="<span>"+count+"</span>"+"/"+"<span>"+val3+"</span>"
        })
        radio4.addEventListener('click',()=>{
            document.getElementById("infoText").innerHTML +="<p>Twenty rounds selected:<p>"
            get.innerHTML="<span>"+count+"</span>"+"/"+"<span>"+val4+"</span>"
        })
    }

    function updateCount1(){
        count++
        console.log(count)
        get.innerHTML="<span>"+count+"</span>"+"/"+"<span>"+val1+"</span>"
        if(count==5){
            alert("GAME OVER")
            user = 0
            comp = 0
            count= 0
         }
    }
    function updateCount2(){
        count++
        console.log(count)
        get.innerHTML="<span>"+count+"</span>"+"/"+"<span>"+val2+"</span>"
        if(count==10){
            alert("GAME OVER")
            user = 0
            comp = 0
            count= 0
         }
    }
    function updateCount3(){
        count++
        console.log(count)
        get.innerHTML="<span>"+count+"</span>"+"/"+"<span>"+val3+"</span>"
        if(count==15){
            alert("GAME OVER")
            user = 0
            comp = 0
            count= 0
         }
    }
    function updateCount4(){
        count++
        console.log(count)
        get.innerHTML="<span>"+count+"</span>"+"/"+"<span>"+val4+"</span>"
        if(count==20){
            alert("GAME OVER")
            user = 0
            comp = 0
            count= 0
         }
    }

    function compScore(){
    let select =["rock","paper","scissors"]
    let random = Math.floor(Math.random() * 3)
    // console.log(random)
    // console.log(select[random])
    return select[random] 
}

function match(args){
    
    let cpu = compScore()

    switch(args+cpu){
        case "rockscissors":
            console.log("YOU WIN")
            win(args,cpu);
            break 
        case "paperrock":
            console.log("YOU WIN")
            win(args,cpu);
            break 
        case "scissorspaper":
            console.log("YOU WIN!")
            win(args,cpu);
            break     
            case "rockpaper":
            console.log("YOU LOOSE")
            lose(args,cpu);  
            break
        case "paperscissors":
            console.log("YOU LOOSE")
            lose(args,cpu);  
            break
        case "scissorsrock": 
            console.log("YOU LOOSE")
            lose(args,cpu);  
            break
            case "rockrock":
            draw(args,cpu);
            console.log("Draw")
            break 
        case "paperpaper":
            draw(args,cpu);
            console.log("Draw")
            break 
        case "scissorsscissors":        
            draw(args,cpu);
        console.log("Draw")
        break 
}
}
function yourChoice1(){
    rock.addEventListener('click',()=>match("rock"),{once:"true"})
    if(radio1.checked==true){
        updateCount1()
    }
    if(radio2.checked==true){
        updateCount2()
    }
    if(radio3.checked==true){
        updateCount3()
    }
    if(radio4.checked==true){
        updateCount4()
    }
}
function yourChoice2(){
    scissors.addEventListener('click',()=>match("scissors"),{once:"true"})
    if(radio1.checked==true){
        updateCount1()
    }
    if(radio2.checked==true){
        updateCount2()
    }
    if(radio3.checked==true){
        updateCount3()
    }
    if(radio4.checked==true){
        updateCount4()
    }
}
function yourChoice3(){
    paper.addEventListener('click',()=>match("paper"),{once:"true"})
    if(radio1.checked==true){
        updateCount1()
    }
    if(radio2.checked==true){
        updateCount2()
    }
    if(radio3.checked==true){
        updateCount3()
    }
    if(radio4.checked==true){
        updateCount4()
    }
}
function win(args,cpu){
    user++
    userScoreOut.innerHTML = user
    res.innerHTML = `${args.charAt(0).toUpperCase() + args.slice(1)+"<sup>user</sup>"}` + " beats " + `${cpu.charAt(0).toUpperCase() + cpu.slice(1)+"<sup>comp</sup>"}` +". "+"<br>" + "YOU WIN !!! 👍"
    let selectButton = document.getElementById(args)
    selectButton.classList.add('winGlow')
    setTimeout(()=>{selectButton.classList.toggle('winGlow')},200)
}
function lose(args,cpu) {
    comp++
    compScoreOut.innerHTML = comp
    res.innerHTML = `${cpu.charAt(0).toUpperCase() + cpu.slice(1)+"<sup>comp</sup>"}` + " beats " + `${args.charAt(0).toUpperCase() + args.slice(1)+"<sup>user</sup>"}` +". "+"<br>" + "YOU LOOSE !!! 👎"   
    let selectButton = document.getElementById(args)
    selectButton.classList.add('looseGlow')
    setTimeout(()=>{selectButton.classList.toggle('looseGlow')},200)
}
function draw(args,cpu){
    res.innerHTML =  "DRAW 🤝" +"<br>"+"<br>"
    let selectButton = document.getElementById(args)
    selectButton.classList.add('drawGlow')
    setTimeout(()=>{selectButton.classList.toggle('drawGlow')},200)
}
