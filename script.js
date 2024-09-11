const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
function circleScaling(){

    var xscale = 1;
    var yscale = 1;
    var xprev = 0;
    var yprev = 0;
    var timeout = 0;

window.addEventListener('mousemove', function(event) {
   this.clearTimeout(timeout);
   xscale = gsap.utils.clamp(.8,1.2,event.clientX - xprev);    
   yscale = gsap.utils.clamp(.8,1.2,event.clientY - yprev);
   xprev = event.clientX;
   yprev = event.clientY;
   circleMouseFollower(xscale, yscale );

   timeout = this.setTimeout(function() {
    document.querySelector("#circle").style.transform = `translate(${event.clientX}px, ${event.clientY}px , scale(1,1))` 
   },100);
})

    
}
circleScaling();

function circleMouseFollower(xscale, yscale){
    window.addEventListener('mousemove', function(event){
        document.querySelector("#circle").style.transform = `translate(${event.clientX}px, ${event.clientY}px) scale(${xscale}, ${yscale})`;
    });
}
circleMouseFollower();