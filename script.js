
    window.revelar = ScrollReveal({reset:true})

    //topo do site
    revelar.reveal('.efeito-txt-topo',{
        duration: 2000,
        distance: '90px'
    })

    // titulos das sessões
    revelar.reveal('.titulo', {
        duration: 2000,
        distance: '90px',
        delay:300
    })
    //cards
    revelar.reveal('.t1', {
        duration: 2000,
        distance: '90px',
        delay:1000,
        origin: 'left'
    })
    revelar.reveal('.t2', {
        duration: 2000,
        distance: '90px',
        delay:2000,
        origin: 'rigth'
    })
    revelar.reveal('.t3', {
        duration: 2000,
        distance: '90px',
        delay:3000
    
    })
    revelar.reveal('.t4', {
        duration: 2000,
        distance: '90px',
        delay:4000,
        origin: 'rigth'
    })
    revelar.reveal('.t5', {
        duration: 2000,
        distance: '90px',
        delay:5000,
        origin: 'left'
    })
    function showDescription(cardId) {
        var description = document.getElementById("description-" + cardId);
        if (description.style.display === "block") {
            description.style.display = "none";
        } else {
            description.style.display = "block";
        }
    }
    // fotos 
    revelar.reveal('.efeito-foto1',{
        duration: 2000,
        distance: '90px',
        delay:1000,
        origin:'left'
    })
    revelar.reveal('.efeito-foto2',{
        duration: 2000,
        distance: '90px',
        delay:2000,
    })
    revelar.reveal('.efeito-foto3',{
        duration: 2000,
        distance: '90px',
        delay:2250,
        origin:'left'
    })
    revelar.reveal('.efeito-foto4',{
        duration: 2000,
        distance: '90px',
        delay:1000,
        origin:'rigth'
    })
    revelar.reveal('.efeito-foto5',{
        duration: 2000,
        distance: '90px',
        delay:2000,
        origin:'left'
    })
    //LOGIN
    revelar.reveal('.login',{
        duration: 2000,
        distance: '90px',
        delay:2000
    })
