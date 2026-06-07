window.addEventListener("load", () => {

    if(sessionStorage.getItem("loaderShown")){

        document.querySelector(".loader").style.display = "none";

        return;

    }

    sessionStorage.setItem("loaderShown","true");

    setTimeout(() => {

        document.querySelector(".loader")
        .classList.add("hide");

    }, 2500);

});

const menuToggle =
document.getElementById("menuToggle");

const navLinks =
document.getElementById("navLinks");

/* OUVRIR / FERMER MENU */

menuToggle.addEventListener("click", () => {

    menuToggle.classList.toggle("active");

    navLinks.classList.toggle("active");

});


/* FERMER MENU APRES CLIC SUR UN LIEN */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuToggle.classList.remove("active");

    });

});
const counters = document.querySelectorAll(".counter");
const statsSection = document.querySelector(".stats");

let started = false;

function startCounters(){

    if(started) return;

    started = true;

    counters.forEach(counter => {

        const target = +counter.getAttribute("data-target");

        let count = 0;

        const increment = target / 100;

        function updateCounter(){

            if(count < target){

                count += increment;

                counter.innerText = Math.ceil(count);

                setTimeout(updateCounter, 20);

            }else{

                counter.innerText = target + "+";

            }

        }

        updateCounter();

    });

}

window.addEventListener("scroll", () => {

    const sectionTop = statsSection.offsetTop;
    const sectionHeight = statsSection.offsetHeight;

    const scrollPosition = window.scrollY + window.innerHeight;

    if(scrollPosition > sectionTop + sectionHeight / 3){

        startCounters();

    }

});

    const portfolioImages =
document.querySelectorAll(".portfolio-item img");

const lightbox =
document.querySelector(".lightbox");

const lightboxImg =
document.querySelector(".lightbox-img");

const closeLightbox =
document.querySelector(".close-lightbox");

const prevBtn =
document.querySelector(".prev-lightbox");

const nextBtn =
document.querySelector(".next-lightbox");

let currentIndex = 0;

portfolioImages.forEach((image,index) => {

    image.addEventListener("click", () => {

        currentIndex = index;

        showImage();

        lightbox.classList.add("active");

    });

});

function showImage(){

    const nextIndex =
(currentIndex + 1)
% portfolioImages.length;

const preloadImg =
new Image();

preloadImg.src =
portfolioImages[nextIndex].src;

    lightboxImg.src =
    portfolioImages[currentIndex].src;

}

nextBtn.addEventListener("click", () => {

    currentIndex++;

    if(currentIndex >= portfolioImages.length){

        currentIndex = 0;

    }

    showImage();

});

prevBtn.addEventListener("click", () => {

    currentIndex--;

    if(currentIndex < 0){

        currentIndex =
        portfolioImages.length - 1;

    }

    showImage();

});

closeLightbox.addEventListener("click", () => {

    lightbox.classList.remove("active");

});

document.addEventListener("keydown", (e) => {

    if(!lightbox.classList.contains("active")) return;

    if(e.key === "ArrowRight"){

        nextBtn.click();

    }

    if(e.key === "ArrowLeft"){

        prevBtn.click();

    }

    if(e.key === "Escape"){

        lightbox.classList.remove("active");

    }

});
document.querySelectorAll(".portfolio-item img").forEach(img => {

    img.onclick = function(){

        console.log("IMAGE CLIQUEE");

    };

});
const canvas = document.getElementById("particles");

if(canvas){

    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];

    for(let i = 0; i < 50; i++){

        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: Math.random() * 3 + 1
        });

    }

    function animate(){

        ctx.clearRect(0,0,canvas.width,canvas.height);

        particles.forEach(p => {

            p.y -= 0.5;

            if(p.y < 0){
                p.y = canvas.height;
            }

            ctx.beginPath();
            ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
            ctx.fillStyle = "#FF1F2D";
            ctx.fill();

        });

        requestAnimationFrame(animate);

    }

    animate();

}
particlesJS("particles-js", {
    particles: {
        number: {
            value: 80
        },
        color: {
            value: "#FF1F2D"
        },
        shape: {
            type: "circle"
        },
        opacity: {
            value: 0.6
        },
        size: {
            value: 3
        },
        move: {
            enable: true,
            speed: 2
        },
        line_linked: {
            enable: true,
            color: "#FF1F2D",
            opacity: 0.3
        }
    }
});
const backToTop =
document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if(window.scrollY > 500){

        backToTop.classList.add("show");

    }else{

        backToTop.classList.remove("show");

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});
AOS.init({

    duration: 1200,

    once: true,

    offset: 100

});
const serviceCards =
document.querySelectorAll(".service-card");

serviceCards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect =
        card.getBoundingClientRect();

        const x =
        e.clientX - rect.left;

        const y =
        e.clientY - rect.top;

        const centerX =
        rect.width / 2;

        const centerY =
        rect.height / 2;

        const rotateY =
        ((x - centerX) / centerX) * 10;

        const rotateX =
        ((centerY - y) / centerY) * 10;

        card.style.transform =
        `perspective(1000px)
         rotateX(${rotateX}deg)
         rotateY(${rotateY}deg)
         translateY(-5px)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
        "perspective(1000px) rotateX(0) rotateY(0)";

    });

});
const searchInput =
document.getElementById("portfolioSearch");

const suggestions =
document.getElementById("suggestions");

const portfolioItems =
document.querySelectorAll(".portfolio-item");

const categories = [

    "logo",
    "branding",
    "packaging",
    "affiche",
    "invitation",
    "cover",
    "dessin",
    "identité visuelle",
    "dtf",
    "design textile",
    "site web",
    "charte graphique"
    


];

searchInput.addEventListener("input", () => {

    const value =
    searchInput.value.toLowerCase();

    suggestions.innerHTML = "";

    if(value === ""){

        suggestions.style.display = "none";

        portfolioItems.forEach(item => {

            item.style.display = "block";

        });

        return;

    }

    const filtered =
    categories.filter(category =>
        category.includes(value)
    );

    filtered.forEach(category => {

        const li =
        document.createElement("li");

        li.textContent = category;

        li.addEventListener("click", () => {

            searchInput.value = category;

            suggestions.style.display = "none";

            filterPortfolio(category);

        });

        suggestions.appendChild(li);

    });

    suggestions.style.display =
    filtered.length ? "block" : "none";

    filterPortfolio(value);

});

function filterPortfolio(search){

    portfolioItems.forEach(item => {

        const category =
        item.getAttribute("data-category")
        .toLowerCase();

        if(category.includes(search)){

            item.style.display = "block";

        }else{

            item.style.display = "none";

        }

    });

}
/* =========================
EMAILJS AFRO VECTEUR
========================= */

emailjs.init({
    publicKey: "kqbyx6X-6p2rSfIK1"
});

const contactForm = document.getElementById("contactForm");
const submitBtn =
document.getElementById("submitBtn");

const notification =
document.getElementById("notification");

if(contactForm){

    contactForm.addEventListener("submit", function(e){

        e.preventDefault();
        submitBtn.disabled = true;

submitBtn.innerHTML =
"ENVOI EN COURS...";

        emailjs.send(
            "service_52wllos",
            "template_4a89hmt",
            {
                name: document.getElementById("name").value,
                phone: document.getElementById("phone").value,
                email: document.getElementById("email").value,
                message: document.getElementById("message").value
            },
            {
                publicKey: "kqbyx6X-6p2rSfIK1"
            }
        )
        .then(function(){

            notification.classList.add("show");

setTimeout(() => {

    notification.classList.remove("show");

}, 3000);

submitBtn.disabled = false;

submitBtn.innerHTML =
"ENVOYER";
            contactForm.reset();

        })
        .catch(function(error){

    console.log(error);

    alert(
        "ERREUR : " +
        JSON.stringify(error)
    );

    submitBtn.disabled = false;

    submitBtn.innerHTML = "ENVOYER";

});

    });

}
const faqItems =
document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question =
    item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        item.classList.toggle("active");

    });

});
const imagesToPreload = [

    "images/portfolio1.jpg",
    "images/portfolio2.jpg",
    "images/portfolio3.jpg",
    "images/portfolio4.jpg",
    "images/portfolio5.jpg",
    "images/portfolio6.jpg"

];

imagesToPreload.forEach(src => {

    const img = new Image();

    img.src = src;

});
const openDevis =
document.querySelector(".open-devis");

const devisModal =
document.querySelector(".devis-modal");

const closeDevis =
document.querySelector(".close-devis");

if(openDevis){

    openDevis.addEventListener("click", (e) => {

        e.preventDefault();

        devisModal.classList.add("active");

    });

}

if(closeDevis){

    closeDevis.addEventListener("click", () => {

        devisModal.classList.remove("active");

    });

}

window.addEventListener("click", (e) => {

    if(e.target === devisModal){

        devisModal.classList.remove("active");

    }

});
const servicesData = {

logo: {

title: "Création de logo",

description: `

✓ Logo professionnel unique<br>
✓ Design moderne et mémorable<br>
✓ Format PNG HD<br>
✓ Format JPG HD<br>
✓ Format PDF<br>
✓ Fichier vectoriel AI/EPS<br>
✓ Version couleur<br>
✓ Version noir et blanc<br><br>

<strong>Délai :</strong> 2 à 5 jours

`,

whatsapp:
"https://wa.me/243990100602?text=Bonjour%20Afro%20Vecteur,%20je%20souhaite%20un%20devis%20pour%20la%20création%20d'un%20logo."

},

charte: {

title: "Charte Graphique",

description: `

✓ Définition des couleurs de marque<br>
✓ Sélection des typographies<br>
✓ Guide d'utilisation du logo<br>
✓ Identité visuelle cohérente<br>
✓ Document PDF professionnel<br><br>

<strong>Délai :</strong> 3 à 7 jours

`,

whatsapp:
"https://wa.me/243990100602?text=Bonjour%20Afro%20Vecteur,%20je%20souhaite%20un%20devis%20pour%20une%20charte%20graphique."

},

affiche: {

title: "Affiches Publicitaires",

description: `

✓ Affiches promotionnelles<br>
✓ Affiches événementielles<br>
✓ Design impactant et moderne<br>
✓ Optimisation impression HD<br>
✓ Formats réseaux sociaux inclus<br><br>

<strong>Délai :</strong> 1 à 3 jours

`,

whatsapp:
"https://wa.me/243990100602?text=Bonjour%20Afro%20Vecteur,%20je%20souhaite%20un%20devis%20pour%20une%20affiche%20publicitaire."

},

carte: {

title: "Cartes de Visite",

description: `

✓ Design recto-verso<br>
✓ Préparation pour impression<br>
✓ Version numérique incluse<br>
✓ Style professionnel haut de gamme<br>
✓ Adaptation à votre identité visuelle<br><br>

<strong>Délai :</strong> 1 à 2 jours

`,

whatsapp:
"https://wa.me/243990100602?text=Bonjour%20Afro%20Vecteur,%20je%20souhaite%20un%20devis%20pour%20des%20cartes%20de%20visite."

},

packaging: {

title: "Packaging",

description: `

✓ Design d'emballage produit<br>
✓ Mise en valeur de la marque<br>
✓ Préparation pour impression<br>
✓ Packaging alimentaire ou cosmétique<br>
✓ Maquette de présentation 3D<br><br>

<strong>Délai :</strong> 3 à 7 jours

`,

whatsapp:
"https://wa.me/243990100602?text=Bonjour%20Afro%20Vecteur,%20je%20souhaite%20un%20devis%20pour%20un%20packaging."

},

reseaux: {

title: "Réseaux Sociaux",

description: `

✓ Publications Facebook<br>
✓ Publications Instagram<br>
✓ Publications TikTok<br>
✓ Visuels professionnels<br>
✓ Cohérence graphique de marque<br><br>

<strong>Délai :</strong> 1 à 3 jours

`,

whatsapp:
"https://wa.me/243990100602?text=Bonjour%20Afro%20Vecteur,%20je%20souhaite%20un%20devis%20pour%20des%20visuels%20réseaux%20sociaux."

},

flyer: {

title: "Flyers",

description: `

✓ Flyers publicitaires<br>
✓ Mise en page professionnelle<br>
✓ Impression HD<br>
✓ Formats A4, A5 ou personnalisés<br>
✓ Version numérique incluse<br><br>

<strong>Délai :</strong> 1 à 3 jours

`,

whatsapp:
"https://wa.me/243990100602?text=Bonjour%20Afro%20Vecteur,%20je%20souhaite%20un%20devis%20pour%20un%20flyer."

},

depliant: {

title: "Dépliants",

description: `

✓ Dépliant 2 volets<br>
✓ Dépliant 3 volets<br>
✓ Présentation professionnelle<br>
✓ Mise en page stratégique<br>
✓ Préparation impression HD<br><br>

<strong>Délai :</strong> 2 à 4 jours

`,

whatsapp:
"https://wa.me/243990100602?text=Bonjour%20Afro%20Vecteur,%20je%20souhaite%20un%20devis%20pour%20un%20dépliant."

},

invitation: {

title: "Invitations",

description: `

✓ Mariage<br>
✓ Anniversaire<br>
✓ Conférence<br>
✓ Événement professionnel<br>
✓ Version numérique et impression<br><br>

<strong>Délai :</strong> 1 à 2 jours

`,

whatsapp:
"https://wa.me/243990100602?text=Bonjour%20Afro%20Vecteur,%20je%20souhaite%20un%20devis%20pour%20une%20invitation."

},

marque: {

title: "Design de Marque",

description: `

✓ Construction d'image de marque<br>
✓ Positionnement visuel<br>
✓ Identité professionnelle<br>
✓ Cohérence graphique complète<br>
✓ Valorisation de votre entreprise<br><br>

<strong>Délai :</strong> 5 à 10 jours

`,

whatsapp:
"https://wa.me/243990100602?text=Bonjour%20Afro%20Vecteur,%20je%20souhaite%20un%20devis%20pour%20un%20design%20de%20marque."

}

};
const serviceButtons =
document.querySelectorAll(".service-details-btn");

const serviceModal =
document.querySelector(".service-modal");

const serviceTitle =
document.getElementById("serviceTitle");

const serviceDescription =
document.getElementById("serviceDescription");

const serviceWhatsapp =
document.getElementById("serviceWhatsapp");

const closeServiceModal =
document.querySelector(".close-service-modal");

serviceButtons.forEach(button => {

button.addEventListener("click", () => {

const service =
button.dataset.service;

serviceTitle.textContent =
servicesData[service].title;

serviceDescription.innerHTML =
servicesData[service].description;

serviceWhatsapp.href =
servicesData[service].whatsapp;

serviceModal.classList.add("active");

});

});

closeServiceModal.addEventListener("click", () => {

serviceModal.classList.remove("active");

});
const skillBars =
document.querySelectorAll(".skill-progress");

let skillsAnimated = false;

function animateSkills(){

    if(skillsAnimated) return;

    skillsAnimated = true;

    skillBars.forEach(bar => {

        bar.style.width =
        bar.dataset.width;

    });

}

const skillsSection =
document.querySelector(".skills-section");

window.addEventListener("scroll", () => {

    if(!skillsSection) return;

    const sectionTop =
    skillsSection.getBoundingClientRect().top;

    if(sectionTop < window.innerHeight - 100){

        animateSkills();

    }

});

const blogData = {

logo: {

title:
"Pourquoi un logo est essentiel pour une entreprise ?",

content: `

Un logo est bien plus qu'un simple dessin.

Il représente l'identité de votre entreprise et permet à vos clients de vous reconnaître rapidement.

Un logo professionnel améliore la crédibilité, la mémorisation de la marque et la confiance des consommateurs.

Chez Afro Vecteur, nous créons des logos modernes, stratégiques et adaptés à chaque activité.

`

},

afrique: {

title:
"Les tendances du design africain en 2026",

content: `

Le design africain connaît une évolution remarquable.

Les couleurs inspirées de la culture africaine, les formes géométriques modernes et les typographies audacieuses sont de plus en plus utilisées.

Les entreprises cherchent aujourd'hui à valoriser leur identité culturelle tout en restant modernes.

`

},

ia: {

title:
"Comment l'intelligence artificielle transforme le design graphique ?",

content: `

L'intelligence artificielle permet aujourd'hui de gagner du temps dans la création visuelle.

Des outils comme ChatGPT, Adobe Firefly ou Gemini assistent les designers dans la génération d'idées, la rédaction et la création graphique.

L'IA ne remplace pas la créativité humaine, mais elle devient un outil puissant pour améliorer la productivité.

`

}

};

const blogButtons =
document.querySelectorAll(".open-blog");

const blogModal =
document.querySelector(".blog-modal");

const blogTitle =
document.getElementById("blogTitle");

const blogText =
document.getElementById("blogText");

const closeBlog =
document.querySelector(".close-blog");

blogButtons.forEach(button => {

    button.addEventListener("click", () => {

        const article =
        button.dataset.article;

        blogTitle.textContent =
        blogData[article].title;

        blogText.textContent =
        blogData[article].content;

        blogModal.classList.add("active");

    });

});

closeBlog.addEventListener("click", () => {

    blogModal.classList.remove("active");

});
