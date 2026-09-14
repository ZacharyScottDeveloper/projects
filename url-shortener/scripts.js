// 1. Particle Systems Tracking Pointer Logic
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


// 2. Core Operational Pipeline Connection
const GOOGLE_SCRIPT_URL = "https://google.com";
const form = document.getElementById('shortenerForm') || document.forms[0]; 
const resultContainer = document.getElementById('result');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const longUrlInput = document.getElementById('longUrl');
    if (!longUrlInput) return;
    
    const longUrl = longUrlInput.value.trim();
    if (!longUrl.startsWith('http')) {
        alert('Invalid URL');
        return;
    }

    const slug = Math.random().toString(36).substring(2, 7);
    
    // Ensure parent layout displays if hidden by styles
    const resultWrapper = document.getElementById('resultWrapper');
    if (resultWrapper) resultWrapper.classList.remove('hidden');

    // Display active generation phase status
    resultContainer.innerText = "Saving to Google Sheet...";

    try {
        // Fire data payload safely to Google Scripts API without halting execution
        fetch(GOOGLE_SCRIPT_URL, {
            redirect: "follow", 
            method: "POST",
            headers: {
                "Content-Type": "text/plain;charset=utf-8"
            },
            body: JSON.stringify({ slug: slug, url: longUrl })
        });
    
        // Print final short link anchor cleanly onto screen
        const shortUrl = "https://zescott.com" + slug;
        resultContainer.innerHTML = `Short link: <a href="${shortUrl}" id="targetShortUrl" target="_blank">${shortUrl}</a>`;

    } catch (err) {
        resultContainer.innerText = "Dashboard script error.";
    }
});


// 3. Independent Copy-To-Clipboard Action Tracker
const copyBtn = document.getElementById('copyBtn');
if (copyBtn) {
    copyBtn.addEventListener('click', () => {
        const linkElement = document.getElementById('targetShortUrl');
        
        // Safety lock: prevent blank copy sequences if execution hasn't fired yet
        if (!linkElement || !linkElement.textContent.startsWith('http')) {
            return;
        }

        navigator.clipboard.writeText(linkElement.textContent).then(() => {
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
