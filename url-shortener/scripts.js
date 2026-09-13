const dot = document.getElementById('customDot');
const tail = document.getElementById('customTail');
let mouseX = 0, mouseY = 0, tailX = 0, tailY = 0;

window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = mouseX + 'px';
    dot.style.top = mouseY + 'px';
});

function animateCursor() {
    tailX += (mouseX - tailX) * 0.15;
    tailY += (mouseY - tailY) * 0.15;
    tail.style.left = tailX + 'px';
    tail.style.top = tailY + 'px';
    requestAnimationFrame(animateCursor);
}
animateCursor();

const GOOGLE_SCRIPT_URL = "https://google.com";
const form = document.getElementById('shortenerForm');
const resultWrapper = document.getElementById('resultWrapper');
const statusLabel = document.getElementById('statusLabel');
const shortLink = document.getElementById('shortenedUrl');
const copyBtn = document.getElementById('copyBtn');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const longUrl = document.getElementById('longUrl').value.trim();
    
    if (!longUrl.startsWith('http')) {
        alert('Invalid URL destination framework.');
        return;
    }

    const slug = Math.random().toString(36).substring(2, 7);
    
    resultWrapper.classList.remove('hidden');
    statusLabel.innerText = "Syncing with Google Core Array...";
    shortLink.innerText = "Processing matrix alignment...";
    shortLink.href = "#";

    try {
        fetch(GOOGLE_SCRIPT_URL, {
            redirect: "follow", 
            method: "POST",
            headers: {
                "Content-Type": "text/plain;charset=utf-8"
            },
            body: JSON.stringify({ slug: slug, url: longUrl })
        });
    
        const finalShortUrl = "https://zescott.com" + slug;
        statusLabel.innerText = "Optimized Destination Secured:";
        shortLink.innerText = finalShortUrl;
        shortLink.href = finalShortUrl;

    } catch (err) {
        statusLabel.innerText = "Terminal Pipeline Breakdown.";
        shortLink.innerText = "Dashboard framework processing error.";
    }
});

copyBtn.addEventListener('click', () => {
    if (shortLink.href === window.location.href + "#" || !shortLink.innerText.startsWith('http')) return;
    
    navigator.clipboard.writeText(shortLink.innerText).then(() => {
        const legacyText = copyBtn.textContent;
        copyBtn.textContent = 'Copied!';
        copyBtn.style.color = '#67e8f9';
        setTimeout(() => {
            copyBtn.textContent = legacyText;
            copyBtn.style.color = '';
        }, 2000);
    });
});
