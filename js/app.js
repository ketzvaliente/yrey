import {func} from "./img.js"
import {func2} from "./info.js"
import {func3} from "./card.js"

let a = document.getElementById("sectionOne")

let Obj1 ={
    title: "KAWASAKI H2R",
    desc: "The Kawasaki Ninja H2®R is the world's most powerful supercharged hypersport closed-course motorcycle. Experience the 998cc engine.",
    btn:"Contact Me",
    myImg: "../image/lu.jpg"
} 

let b = document.getElementById("sectionTwo")

let Obj2={
    title2: "TOP 3",
    img1: "../image/lg.jpg",
    desc1: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, est ratione aut veritatis placeat earum voluptatum blanditiis officiis soluta sunt quod atque modi dolor quibusdam, at illum commodi aspernatur quos.",
    btn1: "LearnMore",
    img2: "../image/lo.jpg",
    desc2: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, est ratione aut veritatis placeat earum voluptatum blanditiis officiis soluta sunt quod atque modi dolor quibusdam, at illum commodi aspernatur quos.",
    btn2: "Learn More",
    img3: "../image/li.jpg",
    desc3: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, est ratione aut veritatis placeat earum voluptatum blanditiis officiis soluta sunt quod atque modi dolor quibusdam, at illum commodi aspernatur quos.",
    btn3: "Learn More"
}

let {title, desc, btn, myImg} = Obj1
a.append(func2(title,desc,btn))
a.append(func(myImg))


let {title2, img1, desc1, btn1, img2, desc2, btn2, img3, desc3, btn3} = Obj2
b.append(func3(title2,img1,desc1,btn1,img2,desc2,btn2,img3,desc3,btn3)) 


