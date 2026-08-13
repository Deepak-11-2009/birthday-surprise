function nextScreen(screenId) {

    const screens = document.querySelectorAll(".screen");

    screens.forEach(screen => {
        screen.classList.remove("active");
    });

    const next = document.getElementById(screenId);

    next.classList.add("active");

    // Birthday celebration
    if (screenId === "birthday") {
        createConfetti();
        createFloatingHearts();
    }

    if (screenId === "message") {
    typeLetter();
}

    // Final surprise
    if (screenId === "final") {
        createFloatingHearts();
    }
}


/* =========================
   CONFETTI
========================= */

function createConfetti() {

    const container =
        document.getElementById("confetti-container");

    container.innerHTML = "";

    const symbols = [
        "🎉",
        "🎊",
        "✨",
        "💖",
        "💕",
        "⭐",
        "🌸"
    ];

    for (let i = 0; i < 100; i++) {

        const piece = document.createElement("div");

        piece.className = "confetti";

        piece.innerHTML =
            symbols[Math.floor(Math.random() * symbols.length)];

        piece.style.left =
            Math.random() * 100 + "%";

        piece.style.top =
            Math.random() * -20 + "%";

        piece.style.fontSize =
            Math.random() * 15 + 10 + "px";

        piece.style.animationDuration =
            Math.random() * 3 + 2 + "s";

        piece.style.animationDelay =
            Math.random() * 2 + "s";

        container.appendChild(piece);
    }
}


/* =========================
   FLOATING HEARTS
========================= */

function createFloatingHearts() {

    const container =
        document.getElementById("confetti-container");

    const hearts = [
        "💖",
        "💕",
        "💗",
        "💓",
        "✨"
    ];

    for (let i = 0; i < 25; i++) {

        const heart =
            document.createElement("div");

        heart.className = "floating-heart";

        heart.innerHTML =
            hearts[Math.floor(Math.random() * hearts.length)];

        heart.style.left =
            Math.random() * 100 + "%";

        heart.style.animationDuration =
            Math.random() * 4 + 4 + "s";

        heart.style.animationDelay =
            Math.random() * 3 + "s";

        container.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 9000);
    }
}/* =========================
   PHOTO SLIDESHOW
========================= */

let currentSlide = 0;

function changeSlide(direction) {

    const slides = document.querySelectorAll(".slide");

    slides[currentSlide].classList.remove("active-slide");

    currentSlide += direction;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    slides[currentSlide].classList.add("active-slide");
}
/* =========================
   TYPING LOVE LETTER
========================= */

const birthdayLetter = `For my special person... 🌙

I still remember the first time I saw you.
I don't know how to explain it,
but somewhere in that moment,
something in me changed.

Before I even knew you,
before I knew your stories or your dreams,
before all those random conversations began...

I think a small part of me had already fallen for you.

And then somehow,
we started talking.

At first, it was about the most random things—
conversations that sometimes made absolutely no sense,
yet somehow became the conversations
I looked forward to the most.

I loved those little moments.
The silly conversations.
The unexpected laughs.
The things that meant nothing to anyone else
but somehow meant everything to me.

And then there was your smile...

There is something about it
that could make an ordinary moment
feel a little brighter.

But what stayed with me even more
was the way you treated me.

You made me feel special.
You said beautiful things when I needed them.
You supported me when I wasn't feeling my best.
Somehow, you knew how to make me smile
even on days when I didn't feel like smiling.

And maybe that's when I realized
this wasn't just a simple friendship to me anymore.

I had fallen for you.

Not suddenly.
Not because of one perfect moment.

But through all those tiny moments
that slowly became important to me.

Your words.
Your kindness.
Your smile.
The way you made me feel seen.

And Manu,
if there's one thing I want you to know today,
it's this:

I'm grateful.

Grateful that I got to experience
what it felt like to be cared for by you.

Grateful for every beautiful word
you gave me when I needed it.

Grateful for every random conversation
that started with absolutely nothing
and somehow became a memory I wanted to keep.

I don't know what the future holds.
I don't know where our paths will lead.

But I didn't want another birthday of yours
to pass without telling you something
I've carried quietly for a long time.

I fell for you the day I saw you.
And I kept falling, little by little,
with every moment I got to know you.

So today, on your birthday,
I just want to say thank you.

Thank you for making me feel special.
Thank you for being there when I needed someone.
Thank you for the smiles, the words,
and even the conversations that made no sense.

You are the beautiful part of my story.

And no matter what happens from here,
I'll always be grateful
that our paths crossed.

Happy Birthday, My love. 🎂❤️

I hope life gives you
all the happiness you've given to others.

And I hope, someday,
when you look back at this little surprise,
you smile and remember
that someone once cared about you
more deeply than he knew how to say.`;


let typingStarted = false;

function typeLetter(){

    if(typingStarted) return;

    typingStarted = true;

    const box =
        document.getElementById("typed-message");

    const button =
        document.getElementById("lastSurpriseBtn");

    box.innerHTML = "";

    let i = 0;

    function type(){

        if(i < birthdayLetter.length){

            box.innerHTML =
                birthdayLetter.substring(0,i+1) +
                '<span class="cursor">|</span>';

            i++;

            setTimeout(type,35);

        }else{

            box.innerHTML = birthdayLetter;

            button.style.display = "inline-block";

        }

    }

    type();

}/* =========================
   SURPRISE COUNTDOWN
========================= */

function startSurprise() {

    const screens =
        document.querySelectorAll(".screen");

    screens.forEach(screen => {
        screen.classList.remove("active");
    });

    document
        .getElementById("countdown")
        .classList.add("active");

    const number =
        document.getElementById("countdown-number");

    let count = 3;

    number.textContent = count;

    const timer = setInterval(() => {

        count--;

        if (count > 0) {

            number.textContent = count;

        } else {

            clearInterval(timer);

            number.textContent = "✨";

            setTimeout(() => {

                nextScreen("question");

            }, 700);

        }

    }, 1000);
}/* =========================
   QUESTION BUTTON
========================= */

function yesClicked() {

    createConfetti();

    setTimeout(() => {
        nextScreen("birthday");
    }, 500);

}
/* =========================
   AUTOMATIC PHOTO SLIDESHOW
========================= */

setInterval(() => {

    const memoriesScreen =
        document.getElementById("memories");

    // Only change photos when the Memories screen is visible
    if (memoriesScreen.classList.contains("active")) {
        changeSlide(1);
    }

}, 4000);