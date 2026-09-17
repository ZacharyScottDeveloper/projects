const dot = document.getElementById('customDot');
const tail = document.getElementById('customTail');
let mouseX = 0, mouseY = 0, tailX = 0, tailY = 0;

window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (dot) {
        dot.style.left = mouseX + 'px';
        dot.style.top = mouseY + 'px';
    }
});

function animateCursor() {
    tailX += (mouseX - tailX) * 0.15;
    tailY += (mouseY - tailY) * 0.15;
    if (tail) {
        tail.style.left = tailX + 'px';
        tail.style.top = tailY + 'px';
    }
    requestAnimationFrame(animateCursor);
}
animateCursor();


const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzIEbYZ7h6dGXZY2_lBfK7M5RQVk5byKCSHa9cdCpTtXK2V2vvboQGhA3detWWPCavESQ/exec";
const form = document.getElementById('shortenerForm');
const resultWrapper = document.getElementById('resultWrapper');
const shortLink = document.getElementById('shortenedUrl');
const copyBtn = document.getElementById('copyBtn');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const longUrlInput = document.getElementById('longUrl');
    const longUrl = longUrlInput.value.trim();
    
    if (!longUrl.startsWith('http')) {
        alert('Invalid URL');
        return;
    }

    const slug = Math.random().toString(36).substring(2, 7);
    
    // Display the loader screen state inside the grid card
    resultWrapper.classList.remove('hidden');
    shortLink.innerText = "Saving to Google Sheet...";
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
    
        const shortUrl = "https://zescott.com/" + slug;
        shortLink.innerText = shortUrl;
        shortLink.href = shortUrl;

    } catch (err) {
        shortLink.innerText = "Dashboard framework processing error.";
        shortLink.href = "#";
    }
});


if (copyBtn) {
    copyBtn.addEventListener('click', () => {
        if (shortLink.href === window.location.href + "#" || !shortLink.innerText.startsWith('http')) {
            return;
        }

        navigator.clipboard.writeText(shortLink.innerText).then(() => {
            const defaultText = copyBtn.textContent;
            copyBtn.textContent = 'Copied!';
            copyBtn.style.color = '#67e8f9';
            
            setTimeout(() => {
                copyBtn.textContent = defaultText;
                copyBtn.style.color = '';
            }, 2000);
        });
    });
}
