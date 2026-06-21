// ==========================================
// 📦 COMPLETE TOOLS DATABASE (ALL IN ONE)
// ==========================================
const tools = [
    // 🎬 VIDEO TOOLS
    { name: "YouTube Video Cutter", icon: "fab fa-youtube", color: "#ff0000", desc: "Cut any part from YouTube video (2hr → 10min)", link: "youtube-cutter.html", tag: "Video", category: "video", featured: true, new: true },
    { name: "Professional Screen Recorder", icon: "fas fa-video", color: "#e74c3c", desc: "Screen + Face Cam + Draw + Cloud Upload", link: "screen-recorder.html", tag: "Video", category: "video", featured: true, new: true },
    { name: "Video to MP3 Converter", icon: "fas fa-music", color: "#27ae60", desc: "Extract audio from video | Batch convert", link: "video-to-mp3.html", tag: "Audio", category: "video", featured: true, new: true },
    { name: "YouTube Thumbnail Downloader", icon: "fab fa-youtube", color: "#ff0000", desc: "Download any YouTube video thumbnail in HD", link: "yt-thumbnail.html", tag: "Download", category: "video", featured: false },
    { name: "YouTube Downloader", icon: "fab fa-youtube", color: "#ff0000", desc: "Download YouTube videos in HD/4K/MP3", link: "youtube-downloader.html", tag: "Video", category: "video", featured: false },
    { name: "Instagram Video Downloader", icon: "fab fa-instagram", color: "#e4405f", desc: "Download Reels, Videos & Posts - 100% Free", link: "instagram-video.html", tag: "Download", category: "video", featured: true },
    { name: "Instagram Story Saver", icon: "fab fa-instagram", color: "#e4405f", desc: "Download Instagram stories", link: "instagram-saver.html", tag: "Social", category: "image", featured: false },
    { name: "Facebook Video Downloader", icon: "fab fa-facebook", color: "#1877F2", desc: "Download Facebook videos & reels - Fast & Free", link: "facebook-video.html", tag: "Download", category: "video", featured: true },
     
    // 📄 PDF TOOLS
    { name: "PDF Merger", icon: "fas fa-file-pdf", color: "#e74c3c", desc: "Merge multiple PDFs into one | Drag to reorder", link: "pdf-merger.html", tag: "PDF", category: "pdf", featured: true },
    { name: "PDF Compressor", icon: "fas fa-compress-alt", color: "#e74c3c", desc: "Reduce PDF file size | Quality control", link: "pdf-compressor.html", tag: "PDF", category: "pdf", featured: true },
    { name: "PDF Page Remover", icon: "fas fa-trash-alt", color: "#e74c3c", desc: "Remove unwanted pages from PDF", link: "pdf-page-remover.html", tag: "PDF", category: "pdf", featured: true },
    { name: "Image to PDF", icon: "fas fa-file-image", color: "#e74c3c", desc: "Convert images (JPG/PNG) to PDF | Batch", link: "image-to-pdf.html", tag: "PDF", category: "pdf", featured: false },
    { name: "PDF to PowerPoint", icon: "fas fa-file-powerpoint", color: "#e74c3c", desc: "Convert PDF to PPTX | Each page = one slide", link: "pdf-to-ppt.html", tag: "PDF", category: "pdf", featured: false },
    
    // 🖼️ IMAGE TOOLS
    { name: "Professional Image Resizer", icon: "fas fa-arrows-alt", color: "#f39c12", desc: "Batch resize | Preset sizes | Format convert", link: "image-resizer.html", tag: "Image", category: "image", featured: true, new: true },
    { name: "Image Compressor", icon: "fas fa-compress-alt", color: "#667eea", desc: "Reduce image size without losing quality", link: "image-compressor.html", tag: "Image", category: "image", featured: true },
    { name: "Exam Photo Resizer", icon: "fas fa-id-card", color: "#2c3e50", desc: "Passport & Signature for SSC, UPSC, Bank, Railway", link: "exam-photo-resizer.html", tag: "Exam", category: "image", featured: true },
    
    // 🔧 UTILITY TOOLS
    { name: "Resume Builder", icon: "fas fa-file-alt", color: "#f39c12", desc: "Create professional resume in minutes", link: "resume-builder.html", tag: "Career", category: "utility", featured: true },
    { name: "QR Code Generator", icon: "fas fa-qrcode", color: "#e74c3c", desc: "Generate QR codes for any link/text", link: "qr-generator.html", tag: "Utility", category: "utility", featured: true },
    { name: "Text to Speech", icon: "fas fa-volume-up", color: "#1abc9c", desc: "Convert text to audio instantly", link: "text-to-speech.html", tag: "Audio", category: "utility", featured: false },
    { name: "Word Counter", icon: "fas fa-calculator", color: "#3498db", desc: "Count words, characters, sentences", link: "word-counter.html", tag: "Writing", category: "utility", featured: false },
    { name: "Age Calculator", icon: "fas fa-birthday-cake", color: "#e67e22", desc: "Calculate age from date of birth", link: "age-calculator.html", tag: "Calculator", category: "utility", featured: false },
    { name: "BMI Calculator", icon: "fas fa-heartbeat", color: "#27ae60", desc: "Check Body Mass Index", link: "bmi-calculator.html", tag: "Health", category: "utility", featured: false },
    { name: "Unit Converter", icon: "fas fa-ruler-combined", color: "#8e44ad", desc: "Convert length, weight, temperature", link: "unit-converter.html", tag: "Converter", category: "utility", featured: false },
    { name: "Color Picker", icon: "fas fa-eyedropper", color: "#d35400", desc: "Pick colors from screen", link: "color-picker.html", tag: "Design", category: "utility", featured: false },
    { name: "Timer & Stopwatch", icon: "fas fa-hourglass-half", color: "#f1c40f", desc: "Countdown timer and stopwatch", link: "timer-stopwatch.html", tag: "Utility", category: "utility", featured: false },
    { name: "Case Converter", icon: "fas fa-magic", color: "#9b59b6", desc: "Convert text to UPPER, lower, Title case", link: "case-converter.html", tag: "Text", category: "utility", featured: false },
    
    // 💻 DEVELOPER TOOLS
    { name: "JSON Formatter", icon: "fas fa-code", color: "#1abc9c", desc: "Format, beautify & validate JSON", link: "json-formatter.html", tag: "Developer", category: "developer", featured: true },
    { name: "Base64 Encoder", icon: "fas fa-code", color: "#16a085", desc: "Encode/Decode text to Base64", link: "base64-encoder.html", tag: "Developer", category: "developer", featured: false },
    { name: "URL Encoder", icon: "fas fa-link", color: "#2980b9", desc: "Encode/Decode URLs", link: "url-encoder.html", tag: "Developer", category: "developer", featured: false }
];

let currentCategory = 'all';

// Display and Map Cards
function displayTools(filteredTools) {
    const grid = document.getElementById('toolsGrid');
    if(!grid) return;
    grid.innerHTML = filteredTools.map(tool => `
        <a href="${tool.link}" class="tool-card">
            ${tool.featured ? '<span class="featured-icon">⭐ Featured</span>' : ''}
            ${tool.new ? '<span class="featured-icon new-icon">🔥 NEW</span>' : ''}
            <div class="tool-icon" style="color:${tool.color}"><i class="${tool.icon}"></i></div>
            <h3>${tool.name}</h3>
            <p>${tool.desc}</p>
            <span class="tool-tag">${tool.tag}</span>
        </a>
    `).join('');
}

// Category Tabs Filters
function filterCategory(category) {
    currentCategory = category;
    document.querySelectorAll('.cat-tab').forEach(btn => btn.classList.remove('active'));
    
    if (window.event && window.event.target) {
        window.event.target.classList.add('active');
    }

    let filtered = tools;
    if(category !== 'all') {
        filtered = tools.filter(tool => tool.category === category);
    }
    
    const searchInput = document.getElementById('searchInput');
    const query = searchInput ? searchInput.value.toLowerCase() : '';
    if(query) {
        filtered = filtered.filter(tool => 
            tool.name.toLowerCase().includes(query) || 
            tool.tag.toLowerCase().includes(query) ||
            tool.desc.toLowerCase().includes(query)
        );
    }
    displayTools(filtered);
    checkEmptyGrid(filtered.length);
}

// Main Search Input Filter
function searchTools() {
    const searchInput = document.getElementById('searchInput');
    const query = searchInput ? searchInput.value.toLowerCase() : '';
    let filtered = tools;
    
    if(currentCategory !== 'all') {
        filtered = filtered.filter(tool => tool.category === currentCategory);
    }
    
    filtered = filtered.filter(tool => 
        tool.name.toLowerCase().includes(query) || 
        tool.tag.toLowerCase().includes(query) ||
        tool.desc.toLowerCase().includes(query)
    );
    
    displayTools(filtered);
    checkEmptyGrid(filtered.length);
}

// Fallback message when query mismatch
function checkEmptyGrid(count) {
    const grid = document.getElementById('toolsGrid');
    if(count === 0 && grid) {
        grid.innerHTML = `
            <div style="text-align:center; grid-column:1/-1; padding:50px;">
                <i class="fas fa-search" style="font-size:3rem; color:#ccc;"></i>
                <h3>No tools found</h3>
                <p>Try searching for "PDF", "Video", "Image", "YouTube"</p>
            </div>`;
    }
}

// Handle Layout Features (Navbar Mobile / Dark Theme)
function toggleMenu() {
    const navMenu = document.getElementById('navMenu');
    if(navMenu) navMenu.classList.toggle('active');
}

function toggleTheme() {
    document.body.classList.toggle('dark');
    const icon = document.querySelector('.theme-toggle i');
    if (icon) {
        if (document.body.classList.contains('dark')) {
            icon.className = 'fas fa-sun';
        } else {
            icon.className = 'fas fa-moon';
        }
    }
    localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
}

// Load Configuration on start
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
    const icon = document.querySelector('.theme-toggle i');
    if(icon) icon.className = 'fas fa-sun';
}

// Handle responsive dynamic mobile dropdown click logic
document.querySelectorAll('.nav-item').forEach(item => {
    const link = item.querySelector('.nav-link');
    const dropdown = item.querySelector('.dropdown-menu');
    if (dropdown && window.innerWidth <= 1024 && link) {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            item.classList.toggle('active-dropdown');
        });
    }
});

// Initial Fire on window load
displayTools(tools);