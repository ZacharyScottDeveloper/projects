const imageInput = document.getElementById('imageInput');
const dropZone = document.getElementById('dropZone');
const pixelSlider = document.getElementById('pixelSlider');
const sliderValue = document.getElementById('sliderValue');
const downloadBtn = document.getElementById('downloadBtn');
const output = document.getElementById("canvas"); 
const octx = output.getContext("2d"); 

const small = document.createElement("canvas"); 
const sctx = small.getContext("2d"); 

output.width = 640; 
output.height = 640;

let loadedImage = null; 

function processImage() {
    if (!loadedImage) return;

    const resolution = parseInt(pixelSlider.value);
    sliderValue.textContent = `${resolution} x ${resolution}`;

    small.width = resolution;
    small.height = resolution;

    sctx.drawImage(loadedImage, 0, 0, resolution, resolution);
    
    octx.imageSmoothingEnabled = false; 
    octx.drawImage(small, 0, 0, output.width, output.height);
}

function handleImageFile(files) {
    if (files.length > 0) {
        const file = files[0];
        if (file && file.type.startsWith('image/')) {
            const img = new Image();
            img.src = URL.createObjectURL(file);
            
            img.onload = function() {
                loadedImage = img; 
                processImage();    
            };
        }
    }
}

imageInput.addEventListener('change', function(event) {
    handleImageFile(event.target.files);
});

['dragenter', 'dragover'].forEach(eventName => {
    dropZone.addEventListener(eventName, (e) => {
        e.preventDefault();
        dropZone.classList.add('dragover');
    }, false);
});

['dragleave', 'drop'].forEach(eventName => {
    dropZone.addEventListener(eventName, (e) => {
        e.preventDefault();
        dropZone.classList.remove('dragover');
    }, false);
});

dropZone.addEventListener('drop', (e) => {
    const dt = e.dataTransfer;
    handleImageFile(dt.files);
});

pixelSlider.addEventListener('input', processImage);

downloadBtn.addEventListener('click', function() {
    if (!loadedImage) {
        alert("Please upload or drop an image first!");
        return;
    }
    
    const link = document.createElement('a');
    link.download = 'pixel-art.png';
    link.href = output.toDataURL('image/png');
    link.click();
});
