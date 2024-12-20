const tl = gsap.timeline({

});

tl
.from('.logo',{
    opacity: 0,
    duration: 0.5,
    y: -50,
    delay: 0.6
})
.from('.one p, .account', {
    opacity: 0,
    duration: 0.5,
    y: -50,
    stagger: 0.2
} ,'-=0.2')

.from('.left p, .left i', {
    opacity: 0,
    x: -100,
    duration: 0.5,
    stagger: 0.1
})

const tl2 = gsap.timeline();
tl2
.from('.container h4, .container h1, .container p', {
    opacity: 0,
    x: -100,
    duration: 0.5,
    stagger: 0.1,
    delay: 1.8,

})
ScrollTrigger.create({
    trigger: ".container p",
    start: "top 70%", // When the top of the trigger element hits the center of the viewport
    end: "top 20%", // When the bottom of the trigger element hits the top of the viewport
    onEnter: () => tl2.play(), // Play animation when entering viewport
    onLeave: () => tl2.reverse(), // Reverse animation when leaving viewport
    onEnterBack: () => tl2.play(), // Play animation when re-entering viewport from above
    onLeaveBack: () => tl2.reverse() // Reverse animation when leaving viewport upwards
});


const tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: '.page2',
        scroller: 'body',
        start: 'top 70%',
        end: 'top 10%',
    }
});

tl3.from('.page2 .container2 .text1 h3, .page2 .container2 .text1 h1, .page2 .container2 .text1 p, .ones', {
    opacity: 0,
    duration: 1,
    x: -300,
    stagger: 0.15,
})

tl3.from('.page2 .container2 .image1', {
    opacity: 0,
    y: 200,
    duration: 0.8,
}, '-=1')

tl3.from('.number1', {
    opacity: 0,
    duration: 1,
}, '-=0.5')

ScrollTrigger.create({
    trigger: '.page2',
    scroller: 'body',
    start: 'top 70%',
    end: 'top 10%',
    onEnter: () => tl3.play(),
    onLeave: () => tl3.reverse(),
    onEnterBack: () => tl3.play(),
    onLeaveBack: ()=> tl3.reverse()
})

const tl4 = gsap.timeline({
    scrollTrigger: {
        trigger: '.page3',
        scroller: 'body',
        start: 'top 70%',
        end: 'top 10%',
    }
});

tl4.from('.page3 .container3 .text2 h3, .page3 .container3 .text2 h1, .page3 .container3 .text2 p, .twos', {
    opacity: 0,
    duration: 1,
    x: 300,
    stagger: 0.15,
})

tl4.from('.page3 .container3 .image2', {
    opacity: 0,
    x: -200,
    duration: 0.8,
}, '-=1')

tl4.from('.number2', {
    opacity: 0,
    duration: 1,
}, '-=0.5')

ScrollTrigger.create({
    trigger: '.page3',
    scroller: 'body',
    start: 'top 70%',
    end: 'top 10%',
    onEnter: () => tl4.play(),
    onLeave: () => tl4.reverse(),
    onEnterBack: () => tl4.play(),
    onLeaveBack: ()=> tl4.reverse()
})
const tl5 = gsap.timeline({
    scrollTrigger: {
        trigger: '.page4',
        scroller: 'body',
        start: 'top 70%',
        end: 'top 10%',
    }
})

tl5.from('.page4 .container4 .text3 h3, .page4 .container4 .text3 h1, .page4 .container4 .text3 p, .threes', {
    opacity: 0,
    duration: 1,
    x: -300,
    stagger: 0.15,
})

tl5.from('.page4 .container4 .image3', {
    opacity: 0,
    x: 200,
    duration: 0.8,
}, '-=1')

tl5.from('.number3', {
    opacity: 0,
    duration: 1,
}, '-=0.5')

ScrollTrigger.create({
    trigger: '.page4',
    scroller: 'body',
    start: 'top 70%',
    end: 'top 10%',
    onEnter: () => tl5.play(),
    onLeave: () => tl5.reverse(),
    onEnterBack: () => tl5.play(),
    onLeaveBack: ()=> tl5.reverse()
})
document.querySelector('#scroll_down').addEventListener('mouseover', ()=>{
    gsap.to('#scroll_down',{
        scale: 1.3,
        backgroundColor: '#FBD784',
        color: 'black',
        borderRadius: '5px',
        x: 10   
    })
    gsap.to('#scroll_down i',{
        color: 'black',
        rotate: 360,
        scale: 1.3,
    })

})
document.querySelector('#scroll_down').addEventListener('mouseout', ()=>{
    gsap.to('#scroll_down',{
        scale: 1,
        backgroundColor: 'transparent',
        color: 'white',
        x: 0

    })
    gsap.to('#scroll_down i',{
        color: 'white',
        rotate: 0,
        scale: 1

    })
})


document.querySelector('.ones').addEventListener('mouseover', ()=>{
    console.log('mousemoves')
    
    gsap.to('#readmore',{
        scale: 1.4,
        backgroundColor: '#FBD784',
        color: 'black',
        borderRadius: '5px',
        x: 10   
    })
    gsap.to('.img_anim img', {
        x: 0,
        duration: 0.4
    })

})
document.querySelector('.ones').addEventListener('mouseout', ()=>{
    gsap.to('#readmore',{
        scale: 1,
        backgroundColor: 'transparent',
        color: '#FBD784',
        x: 0

    })
    gsap.to('.img_anim img', {
        x: -50,
        duration: 0.4
    })
})




document.querySelector('.twos').addEventListener('mouseover', ()=>{
    console.log('mousemoves')
    
    gsap.to('#readmore',{
        scale: 1.4,
        backgroundColor: '#FBD784',
        color: 'black',
        borderRadius: '5px',
        x: 10   
    })
    gsap.to('.img_anim img', {
        x: 0,
        duration: 0.4
    })

})
document.querySelector('.twos').addEventListener('mouseout', ()=>{
    gsap.to('#readmore',{
        scale: 1,
        backgroundColor: 'transparent',
        color: '#FBD784',
        x: 0

    })
    gsap.to('.img_anim img', {
        x: -50,
        duration: 0.4
    })
})


document.querySelector('.threes').addEventListener('mouseover', ()=>{
    console.log('mousemoves')
    
    gsap.to('#readmore',{
        scale: 1.4,
        backgroundColor: '#FBD784',
        color: 'black',
        borderRadius: '5px',
        x: 10   
    })
    gsap.to('.img_anim img', {
        x: 0,
        duration: 0.4
    })

})
document.querySelector('.threes').addEventListener('mouseout', ()=>{
    gsap.to('#readmore',{
        scale: 1,
        backgroundColor: 'transparent',
        color: '#FBD784',
        x: 0

    })
    gsap.to('.img_anim img', {
        x: -50,
        duration: 0.4
    })
})


