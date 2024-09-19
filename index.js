start = 0;
end = 60;
duration = 5000;
id = "#skillOne"; 

function animateValue(id, start, end, duration) {
    let obj = document.querySelector(id);
    let startTimestamp = null;
    function step (timestamp){
        if (startTimestamp === null)
            startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// window.onload = function() {
//     animateValue('#skillOne', 0, 60, 5000);
// };

function startCounterWhenVisible() {
    const target = document.querySelector('#skillOne');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // The element is in view, start or restart the animation
                animateValue('#skillOne', 0, 60, 5000);
            }
        });
    }, { threshold: 0.5 }); // Threshold defines how much of the element is visible (50% here)
    
    observer.observe(target);
}

window.onload = function() {
    startCounterWhenVisible();
};

animateValue(id, start, end, duration)