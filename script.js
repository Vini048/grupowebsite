
    function showDescription(cardId) {
        var description = document.getElementById("description-" + cardId);
        if (description.style.display === "block") {
            description.style.display = "none";
        } else {
            description.style.display = "block";
        }
    }
    document.addEventListener('DOMContentLoaded', (event) => {
        const colorButton = document.getElementById('Luz');
        const colors = ['#fff'];
        let currentColorIndex = 0;
    
        Luz.addEventListener('click', () => {
            currentColorIndex = (currentColorIndex + 1) % colors.length;
            document.body.style.backgroundColor = colors[currentColorIndex];
        });
    });
