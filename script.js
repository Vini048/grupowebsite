
    function showDescription(cardId) {
        var description = document.getElementById("description-" + cardId);
        if (description.style.display === "block") {
            description.style.display = "none";
        } else {
            description.style.display = "block";
        }
    }
