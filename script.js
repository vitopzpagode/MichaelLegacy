
/* ==========================================
   MICHAEL JACKSON — THE LEGACY FOREVER
   INTERACTIONS & ANIMATIONS
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    // ELEMENTS

    const loader = document.getElementById("loader");
    const navbar = document.getElementById("navbar");
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");
    const cursorGlow = document.querySelector(".cursor-glow");

    // ==========================================
    // LOADER
    // ==========================================

    window.addEventListener("load", () => {
        setTimeout(() => {
            loader?.classList.add("hidden");
        }, 500);
    });

    // Fallback caso algum recurso demore para carregar.

    setTimeout(() => {
        loader?.classList.add("hidden");
    }, 4000);


    // ==========================================
    // NAVBAR SCROLL
    // ==========================================

    function updateNavbar() {
        if (!navbar) return;

        navbar.classList.toggle("scrolled", window.scrollY > 60);
    }

    window.addEventListener("scroll", updateNavbar, { passive: true });

    updateNavbar();


    // ==========================================
    // MOBILE MENU
    // ==========================================

    function closeMenu() {
        menuToggle?.classList.remove("active");
        navLinks?.classList.remove("open");
        menuToggle?.setAttribute("aria-expanded", "false");
        document.body.classList.remove("menu-open");
    }

    menuToggle?.addEventListener("click", () => {

        const isOpen = navLinks.classList.toggle("open");

        menuToggle.classList.toggle("active", isOpen);
        menuToggle.setAttribute("aria-expanded", String(isOpen));

        document.body.classList.toggle("menu-open", isOpen);
    });

    navLinks?.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", event => {
        if (event.key === "Escape") {
            closeMenu();
            closeAlbumModal();
        }
    });


    // ==========================================
    // SCROLL REVEAL
    // ==========================================

    const revealElements = document.querySelectorAll(".reveal");

    const revealObserver = new IntersectionObserver((entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);
            }

        });

    }, {
        threshold: 0.12,
        rootMargin: "0px 0px -35px 0px"
    });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });


    // ==========================================
    // ACTIVE NAVIGATION
    // ==========================================

    const sections = document.querySelectorAll("main section[id]");
    const navigationLinks = document.querySelectorAll(".nav-links a");

    const sectionObserver = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                navigationLinks.forEach(link => {

                    link.classList.remove("active");

                    if (link.getAttribute("href") === `#${entry.target.id}`) {
                        link.classList.add("active");
                    }

                });

            }

        });

    }, {
        rootMargin: "-35% 0px -55% 0px"
    });

    sections.forEach(section => {
        sectionObserver.observe(section);
    });


    // ==========================================
    // CURSOR LIGHT EFFECT
    // ==========================================

    if (cursorGlow && window.matchMedia("(pointer: fine)").matches) {

        document.addEventListener("mousemove", event => {

            cursorGlow.style.left = `${event.clientX}px`;
            cursorGlow.style.top = `${event.clientY}px`;

        });

    } else if (cursorGlow) {

        cursorGlow.style.display = "none";

    }


    // ==========================================
    // ALBUM DATABASE
    // ==========================================

    const albums = [

        {
            title: "Got to Be There",
            year: "1972",
            wiki: "Got to Be There",
            description: "Michael Jackson's debut solo studio album, featuring a blend of soul, pop and R&B.",
            tracks: [
                "Ain't No Sunshine",
                "I Wanna Be Where You Are",
                "Girl Don't Take Your Love from Me",
                "Got to Be There",
                "Rockin' Robin"
            ]
        },

        {
            title: "Ben",
            year: "1972",
            wiki: "Ben (Michael Jackson album)",
            description: "His second solo studio album, featuring the emotional title track that became an international hit.",
            tracks: [
                "Ben",
                "Greatest Show on Earth",
                "People Make the World Go Round",
                "We've Got a Good Thing Going",
                "What Goes Around Comes Around"
            ]
        },

        {
            title: "Music & Me",
            year: "1973",
            wiki: "Music & Me",
            description: "A collection that captures Michael's developing voice and artistry during his early solo years.",
            tracks: [
                "With a Child's Heart",
                "Up Again",
                "All the Things You Are",
                "Happy",
                "Music and Me"
            ]
        },

        {
            title: "Forever, Michael",
            year: "1975",
            wiki: "Forever, Michael",
            description: "His fourth solo studio album for Motown, showing a more mature musical direction.",
            tracks: [
                "We're Almost There",
                "Take Me Back",
                "One Day in Your Life",
                "Dear Michael",
                "Just a Little Bit of You"
            ]
        },

        {
            title: "Off the Wall",
            year: "1979",
            wiki: "Off the Wall",
            description: "A landmark album produced by Quincy Jones that helped establish Michael as a major solo superstar.",
            tracks: [
                "Don't Stop 'Til You Get Enough",
                "Rock with You",
                "Working Day and Night",
                "Off the Wall",
                "She's Out of My Life"
            ]
        },

        {
            title: "Thriller",
            year: "1982",
            wiki: "Thriller (Michael Jackson album)",
            description: "One of the most influential and commercially successful albums in music history.",
            tracks: [
                "Wanna Be Startin' Somethin'",
                "Baby Be Mine",
                "The Girl Is Mine",
                "Thriller",
                "Beat It",
                "Billie Jean",
                "Human Nature"
            ]
        },

        {
            title: "Bad",
            year: "1987",
            wiki: "Bad (album)",
            description: "A powerful album that expanded Michael's artistic identity through ambitious production and unforgettable songs.",
            tracks: [
                "Bad",
                "The Way You Make Me Feel",
                "Speed Demon",
                "Liberian Girl",
                "Smooth Criminal",
                "Man in the Mirror"
            ]
        },

        {
            title: "Dangerous",
            year: "1991",
            wiki: "Dangerous (Michael Jackson album)",
            description: "An ambitious album combining pop, R&B, new jack swing and socially conscious songwriting.",
            tracks: [
                "Jam",
                "Why You Wanna Trip on Me",
                "In the Closet",
                "Remember the Time",
                "Heal the World",
                "Black or White"
            ]
        },

        {
            title: "HIStory",
            year: "1995",
            wiki: "HIStory: Past, Present and Future, Book I",
            description: "A double album combining a collection of greatest hits with new material.",
            tracks: [
                "Scream",
                "They Don't Care About Us",
                "Stranger in Moscow",
                "Earth Song",
                "You Are Not Alone",
                "History"
            ]
        },

        {
            title: "Blood on the Dance Floor",
            year: "1997",
            wiki: "Blood on the Dance Floor: HIStory in the Mix",
            description: "A remix album containing five new songs and remixes of tracks from HIStory.",
            tracks: [
                "Blood on the Dance Floor",
                "Morphine",
                "Superfly Sister",
                "Ghosts",
                "Is It Scary"
            ]
        },

        {
            title: "Invincible",
            year: "2001",
            wiki: "Invincible (Michael Jackson album)",
            description: "Michael's final studio album released during his lifetime, featuring contemporary R&B and pop production.",
            tracks: [
                "Unbreakable",
                "Heartbreaker",
                "Invincible",
                "Break of Dawn",
                "Heaven Can Wait",
                "You Rock My World"
            ]
        }

    ];


    // ==========================================
    // LOAD REAL ALBUM ARTWORK
    // ==========================================

    const albumCards = document.querySelectorAll(".album-card");

    async function loadAlbumArtwork() {

        for (let index = 0; index < albums.length; index++) {

            const album = albums[index];
            const card = albumCards[index];

            if (!card) continue;

            const image = card.querySelector(".album-cover img");

            if (!image) continue;

            try {

                const endpoint =
                    "https://en.wikipedia.org/api/rest_v1/page/summary/" +
                    encodeURIComponent(album.wiki);

                const response = await fetch(endpoint);

                if (!response.ok) {
                    throw new Error("Album artwork unavailable");
                }

                const data = await response.json();

                if (!data.thumbnail?.source) {
                    throw new Error("No album artwork found");
                }

                image.src = data.thumbnail.source;

                image.alt = `${album.title} (${album.year}) album cover`;

                image.onerror = () => {
                    image.style.display = "none";
                };

            } catch (error) {

                // Mantém o fundo editorial do álbum
                // caso a imagem não esteja disponível.

                image.style.display = "none";

            }

        }

    }

    loadAlbumArtwork();


    // ==========================================
    // ALBUM MODAL
    // ==========================================

    const albumModal = document.getElementById("albumModal");
    const modalClose = document.getElementById("modalClose");

    const modalTitle = document.getElementById("modalTitle");
    const modalYear = document.getElementById("modalYear");
    const modalDescription = document.getElementById("modalDescription");
    const modalTracks = document.getElementById("modalTracks");
    const modalImage = document.getElementById("modalImage");

    function openAlbumModal(index) {

        const album = albums[index];

        if (!album || !albumModal) return;

        const card = albumCards[index];
        const cardImage = card?.querySelector(".album-cover img");

        modalTitle.textContent = album.title;
        modalYear.textContent = album.year;
        modalDescription.textContent = album.description;

        modalTracks.innerHTML = "";

        album.tracks.forEach((track, position) => {

            const item = document.createElement("li");

            item.textContent =
                `${String(position + 1).padStart(2, "0")} — ${track}`;

            modalTracks.appendChild(item);

        });

        modalImage.src = cardImage?.src || "";
        modalImage.alt = `${album.title} album cover`;

        albumModal.classList.add("open");
        albumModal.setAttribute("aria-hidden", "false");

        document.body.classList.add("menu-open");

    }

    function closeAlbumModal() {

        if (!albumModal) return;

        albumModal.classList.remove("open");
        albumModal.setAttribute("aria-hidden", "true");

        document.body.classList.remove("menu-open");

    }

    document.querySelectorAll(".album-button").forEach(button => {

        button.addEventListener("click", () => {

            const index = Number(button.dataset.album);

            openAlbumModal(index);

        });

    });

    modalClose?.addEventListener("click", closeAlbumModal);

    albumModal?.addEventListener("click", event => {

        if (event.target === albumModal) {
            closeAlbumModal();
        }

    });


    // ==========================================
    // SMOOTH ANCHOR NAVIGATION
    // ==========================================

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", event => {

            const targetId = link.getAttribute("href");

            if (!targetId || targetId === "#") return;

            const target = document.querySelector(targetId);

            if (!target) return;

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

            history.replaceState(null, "", targetId);

        });

    });


    // ==========================================
    // IMAGE FALLBACK
    // ==========================================

    document.querySelectorAll(".album-cover img").forEach(image => {

        image.addEventListener("error", () => {
            image.style.display = "none";
        });

    });


    // ==========================================
    // PARALLAX EFFECT
    // ==========================================

    const heroBackground = document.querySelector(".hero-background");

    let ticking = false;

    window.addEventListener("scroll", () => {

        if (ticking || !heroBackground) return;

        ticking = true;

        requestAnimationFrame(() => {

            if (window.scrollY < window.innerHeight) {

                const offset = window.scrollY * 0.18;

                heroBackground.style.backgroundPositionY =
                    `center calc(35% + ${offset}px)`;

            }

            ticking = false;

        });

    }, { passive: true });


    // ==========================================
    // RESPONSIVE CLEANUP
    // ==========================================

    window.addEventListener("resize", () => {

        if (window.innerWidth > 780) {
            closeMenu();
        }

    });


    // ==========================================
    // INITIALIZATION
    // ==========================================

    console.log(
        "%c MICHAEL JACKSON — THE LEGACY FOREVER ",
        "background:#050505;color:#c6a45c;font-size:14px;padding:12px;"
    );

    console.log("All interactive components initialized.");

});
