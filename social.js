// Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:


// Milestone 1
// Creiamo il nostro array di oggetti che rappresentano ciascun post.
// Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
// id del post, numero progressivo da 1 a n
// nome autore,
// foto autore,
// data in formato americano (mm-gg-yyyy),
// testo del post,
// immagine (non tutti i post devono avere una immagine),
// numero di likes.

const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "06-25-2021"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "09-03-2021"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Marco Antonio",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "05-15-2021"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Giovanni Franco",
            "image": null
        },
        "likes": 56,
        "created": "04-03-2021"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Saul Goodman",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "03-05-2021"
    }
];



let postContainer = document.getElementById("container");
let proPic = null;

// Genera i post
for (let i = 0; i < posts.length; i++) {
    
    // BONUS Formatta le date in formato italiano (gg/mm/aaaa) 
    let dataArr = posts[i].created.split("-");
    let dataIta = dataArr[1] + "-" + dataArr[0] + "-" + dataArr[2];

    // BONUS Gestire l’assenza dell’immagine profilo; Genero le iniziali
    let nomeCognomeArr = posts[i].author.name.split(" ");
    let inizialiNome = nomeCognomeArr[0][0] + nomeCognomeArr[1][0];
    
    // Avatar
    if(posts[i].author.image == null) {
        proPic = inizialiNome;
    }
    else {
        proPic = `<img class="profile-pic" src="${posts[i].author.image}" alt="${posts[i].author.name}">`;
    }

    // Milestone 2
    // Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.
    
    postContainer.innerHTML += `
        <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        ${proPic}
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${posts[i].author.name}</div>
                        <div class="post-meta__time">${dataIta}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${posts[i].content}</div>
            <div class="post__image">
                <img src="${posts[i].media}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="${posts[i].id}">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-${posts[i].id}" class="js-likes-counter">${posts[i].likes}</b> persone
                    </div>
                </div> 
            </div>            
        </div>
    `;
}

// Milestone 3
// Se clicchiamo sul tasto “Mi Piace” cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo. Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.
// BONUS Al click su un pulsante “Mi Piace” di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone.

for (let i = 0; i < posts.length; i++) {
    document.querySelector(`[data-postid="${posts[i].id}"]`).addEventListener("click", function(e){
        e.preventDefault();
        if (this.classList.contains("like-button--liked")) {
            // Rimuove il like
            this.classList.remove("like-button--liked");
            document.getElementById(`like-counter-${posts[i].id}`).innerHTML = posts[i].likes;
        } else {
            // Aggiunge il like
            this.classList.add("like-button--liked");
            document.getElementById(`like-counter-${posts[i].id}`).innerHTML = posts[i].likes + 1;
        }
    });
}