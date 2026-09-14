const dot = document.getElementById('customDot');
const tail = document.getElementById('customTail');

let mouseX = 0;
let mouseY = 0;
let tailX = 0;
let tailY = 0;

// Custom cursor
window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    dot.style.left = mouseX + 'px';
    dot.style.top = mouseY + 'px';
});

// Cursor tail animation
function animateCursor() {
    tailX += (mouseX - tailX) * 0.15;
    tailY += (mouseY - tailY) * 0.15;

    tail.style.left = tailX + 'px';
    tail.style.top = tailY + 'px';

    requestAnimationFrame(animateCursor);
}

animateCursor();


// Google Apps Script
const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbzn_ZJ4N3foQvoMEPnuGqsU91-cn-ci2v_wgb0jr54NLghTWEDhsnzaT_Fg96MOayU7/exec";

const form = document.getElementById('shortenerForm');
const resultWrapper = document.getElementById('resultWrapper');
const statusLabel = document.getElementById('statusLabel');
const shortLink = document.getElementById('shortenedUrl');
const copyBtn = document.getElementById('copyBtn');


form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const longUrl = document.getElementById('longUrl').value.trim();

    // Check URL
    if (!longUrl.startsWith('http://') && !longUrl.startsWith('https://')) {
        alert('Invalid URL destination.');
        return;
    }

    // Generate random 5-character slug
    const slug = Math.random()
        .toString(36)
        .substring(2, 7);

    resultWrapper.classList.remove('hidden');

    statusLabel.innerText = "Syncing with Google Core Array...";
    shortLink.innerText = "Processing matrix alignment...";
    shortLink.href = "#";

    try {
        await fetch(GOOGLE_SCRIPT_URL, {
            method: "POST",
            mode: "no-cors",
            redirect: "follow",
            headers: {
                "Content-Type": "text/plain;charset=utf-8"
            },
            body: JSON.stringify({
                slug: slug,
                url: longUrl
            })
        });

        // Your actual short URL
        const finalShortUrl = "https://zescott.com/" + slug;

        statusLabel.innerText = "Optimized Destination Secured:";
        shortLink.innerText = finalShortUrl;
        shortLink.href = finalShortUrl;

    } catch (err) {
        console.error(err);

        statusLabel.innerText = "Terminal Pipeline Breakdown.";
        shortLink.innerText = "Dashboard framework processing error.";
    }
});


// Copy button
copyBtn.addEventListener('click', async () => {

    if (!shortLink.innerText.startsWith('http')) {
        return;
    }

    try {
        await navigator.clipboard.writeText(shortLink.innerText);

        const oldText = copyBtn.textContent;

        copyBtn.textContent = 'Copied!';
        copyBtn.style.color = '#67e8f9';

        setTimeout(() => {
            copyBtn.textContent = oldText;
            copyBtn.style.color = '';
        }, 2000);

    } catch (err) {
        console.error("Copy failed:", err);
    }
});
