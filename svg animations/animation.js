 var initialpath="M 200 150 Q 600 150 1190 150" 
 var finalPath="M 200 150 Q 600 150 1190 150" 


 var string = document.querySelector("#string")

 string.addEventListener("mousemove",function(dets)
{
    path=`M 200 150 Q ${dets.x} ${dets.y}  1190 150` 

    gsap.to("svg path",{
       attr :{d:path},
       duration:0.3,
       ease: "bounce.out",

    })

})

 string.addEventListener("mouseleave",function()
{
    gsap.to("svg path",{
       attr :{d:finalPath},
       duration:2.5,
       ease: "elastic.out(1,0.2)",
       
    })
})