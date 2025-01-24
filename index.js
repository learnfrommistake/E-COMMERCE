function add(){
    var a=10;
    var b=12
    console.log(a+b)

}
add()

function sum(num1,num2){
    return num1+num2
}
console.log((12,12));

const array=[12,12,23,345,56,67]
const newaaray=array.map(e=>{
    return e*2;
})
console.log(newaaray)

array.forEach(function sum(e) {
    return e*3
    
})
console.log(sum)

function abc(){
    var sum=12;
    var sum1=24;
    return (sum+sum1)
}console.log(abc())

// function Animation(){
//     var tl=gsap.timeline();
//     tl.from(" .main-first",{
//         x: "100",
//         duration: 1,
//         delay: 1,
//         stagger:.3,
//         ease: Power3.easeInOut
//     })
    
//     // .to(".main-second",{
//     //     y: "100%",
//     //     duration: 2,
//     //     delay: 1,
//     //     ease: Expo.easeInOut
//     // })
//     .to("#loader",{
//         height: "0",
//         duration: 1,
//         ease: Expo.easeInOut
//     })
//     .to("#green",{
//         height: "100%",
//         top:0,
//         duration: 1,
//         delay:-1,
//         ease: Expo.easeInOut
//     })
//     .to("#green",{
//         height: "0%",
//         duration: 1,
//         ease: Expo.easeInOut
//     })
       
// }
// Animation();
// $(function(){
// 	$(".head2").typed({
// 		strings: ["Super", "Value", "Deals"],
// 		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
// 		stringsElement: null,
// 		// typing speed
// 		typeSpeed: 30,
// 		// time before typing starts
// 		startDelay: 1200,
// 		// backspacing speed
// 		backSpeed: 20,
// 		// time before backspacing
// 		backDelay: 500,
// 		// loop
// 		loop: true,
// 		// false = infinite
// 		loopCount: 5,
// 		// show cursor
// 		showCursor: false,
// 		// character for cursor
// 		cursorChar: "|",
// 		// attribute to type (null == text)
// 		attr: null,
// 		// either html or text
// 		contentType: 'html',
// 		// call when done callback function
// 		callback: function() {},
// 		// starting callback function before each string
// 		preStringTyped: function() {},
// 		//callback for every typed string
// 		onStringTyped: function() {},
// 		// callback for reset
// 		resetCallback: function() {}
// 	});
// });
      AOS.init();
