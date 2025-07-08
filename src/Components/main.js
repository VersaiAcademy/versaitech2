// Counter Design
document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
        let obj = document.getElementById(id);
        let current = start; // Added `let` for variable declaration
        let range = end - start;
        let increment = end > start ? 1 : -1;
        let step = Math.abs(Math.floor(duration / range));
        let timer = setInterval(() => {
            current += increment;
            obj.textContent = current;
            if (current === end) {
                clearInterval(timer);
            }
        }, step);
    }

    counter("count1", 0, 2287, 3000); // Ensure the element with id `count1` exists in your HTML
    counter("count2", 0, 1257, 3000);
    counter("count3", 0, 5287, 3000);
    counter("count4", 0, 7187, 3000);
});
