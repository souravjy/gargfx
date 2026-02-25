// 1. Define your XML files here
// 'thumbColor' is used to generate a unique gradient for the thumbnail
const xmlFiles = [
    {
        id: 1,
        name: "Glitch Effect V1",
        filePath: "GargFX_Senta_.xml", // Path to your file
        thumbColor: "linear-gradient(45deg, #ff0099, #493240)"
    },
    {
        id: 2,
        name: "Smooth Fade Transition",
        filePath: "xml/smooth-fade.xml",
        thumbColor: "linear-gradient(45deg, #2193b0, #6dd5ed)"
    },
    {
        id: 3,
        name: "Neon Pulse Preset",
        filePath: "xml/neon-pulse.xml",
        thumbColor: "linear-gradient(45deg, #833ab4, #fd1d1d)"
    },
    {
        id: 4,
        name: "Cinematic Letterbox",
        filePath: "xml/letterbox.xml",
        thumbColor: "linear-gradient(45deg, #000000, #434343)"
    },
    {
        id: 5,
        name: "RGB Split Overlay",
        filePath: "xml/rgb-split.xml",
        thumbColor: "linear-gradient(45deg, #C6FFDD, #FBD786)"
    },
    {
        id: 6,
        name: "Wave Distortion",
        filePath: "xml/wave-distort.xml",
        thumbColor: "linear-gradient(45deg, #00c6ff, #0072ff)"
    }
];

// 2. Function to create a card HTML string
function createCard(file) {
    return `
        <div class="card">
            <div class="card-thumbnail" style="background: ${file.thumbColor}">
                <!-- You can replace this text with an <img> tag if you have real thumbnails -->
                <span>XML</span>
            </div>
            <div class="card-content">
                <h3 class="file-name">${file.name}</h3>
                <a href="${file.filePath}" class="download-btn" download>
                    Download XML
                </a>
            </div>
        </div>
    `;
}

// 3. Render the cards to the webpage
const gridContainer = document.getElementById('xml-grid');

if (gridContainer) {
    // Loop through the data and add HTML to the page
    xmlFiles.forEach(file => {
        gridContainer.innerHTML += createCard(file);
    });
}