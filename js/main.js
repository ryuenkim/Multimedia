// =====================================================
// Featured Image Display on Card Hover
// =====================================================

document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');
    const featuredImage = document.getElementById('featured-image');
    const featuredDetails = document.getElementById('featured-details');
    const featuredSection = document.querySelector('.featured-projects');
    
    console.log('Featured image element found:', featuredImage);
    console.log('Featured details element found:', featuredDetails);
    console.log('Number of project cards:', projectCards.length);
    
    projectCards.forEach((card, index) => {
        const link = card.querySelector('a[href*="project-"]');
        const bgImage = card.getAttribute('data-bg');
        const title = card.querySelector('.project-title a')?.textContent || '';
        const category = card.querySelector('.project-category')?.textContent || '';
        const description = card.querySelector('.project-description')?.textContent || '';
        const tagsContainer = card.querySelector('.project-tags');
        const tags = tagsContainer ? Array.from(tagsContainer.querySelectorAll('.tag')).map(tag => tag.textContent) : [];
        
        console.log(`Card ${index}:`, {link: !!link, bgImage: bgImage, title, category});
        
        if (link && bgImage && featuredImage) {
            const href = link.getAttribute('href');
            
            // On hover: show featured image and details
            card.addEventListener('mouseenter', function() {
                console.log('Mouse enter - Setting background:', bgImage);
                // Set background-image
                featuredImage.style.backgroundImage = bgImage;
                featuredImage.classList.add('active');
                featuredSection.classList.add('image-active');
                
                // Update details
                if (featuredDetails) {
                    const detailsTitle = featuredDetails.querySelector('.details-title');
                    const detailsCategory = featuredDetails.querySelector('.details-category');
                    const detailsDescription = featuredDetails.querySelector('.details-description');
                    const detailsTags = featuredDetails.querySelector('.details-tags');
                    
                    if (detailsTitle) detailsTitle.textContent = title;
                    if (detailsCategory) detailsCategory.textContent = category;
                    if (detailsDescription) detailsDescription.textContent = description;
                    
                    if (detailsTags) {
                        detailsTags.innerHTML = tags.map(tag => `<span class="tag">${tag}</span>`).join('');
                    }
                    
                    featuredDetails.classList.add('active');
                }
                
                console.log('Featured image and details displayed');
            });
            
            // On mouse leave: hide featured image and details
            card.addEventListener('mouseleave', function() {
                console.log('Mouse leave - Removing background');
                featuredImage.classList.remove('active');
                featuredSection.classList.remove('image-active');
                if (featuredDetails) {
                    featuredDetails.classList.remove('active');
                }
            });
            
            // On click: navigate
            card.addEventListener('click', (e) => {
                if (e.target.tagName === 'A' || e.target.classList.contains('btn')) {
                    return;
                }
                window.location.href = href;
            });
        }
    });
});

// =====================================================
// Progress Bar
// =====================================================

const createProgressBar = () => {
    const progressBar = document.createElement('div');
    progressBar.id = 'progress-bar';
    document.body.appendChild(progressBar);
};

window.addEventListener('scroll', () => {
    const progressBar = document.getElementById('progress-bar');
    if (!progressBar) return;
    
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = window.scrollY;
    const progress = (scrolled / windowHeight) * 100;
    
    progressBar.style.width = progress + '%';
});

// Create progress bar on load
document.addEventListener('DOMContentLoaded', () => {
    createProgressBar();
});

// =====================================================
// Scroll-Triggered Animations
// =====================================================

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
});

// Observe all elements with scroll-animation class
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.scroll-animate');
    animatedElements.forEach(el => observer.observe(el));
});

// =====================================================
// Back-to-Top Button
// =====================================================

const backToTopBtn = document.getElementById('back-to-top');

// Show/hide button based on scroll position
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});

// Smooth scroll to top
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// =====================================================
// Smooth Scroll for Anchor Links
// =====================================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// =====================================================
// Navbar Active Link Update on Scroll
// =====================================================

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const navLinks = document.querySelectorAll('.nav-menu a');

    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    // Always highlight the correct page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
});

// =====================================================
// Interactive Elements
// =====================================================

// Add hover effects to project cards
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-15px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// =====================================================
// Custom Cursor
// =====================================================

const cursorCircle = document.createElement('div');
cursorCircle.style.cssText = `
    position: fixed;
    width: 30px;
    height: 30px;
    border: 2px solid rgba(0, 212, 255, 0.5);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    display: none;
    box-shadow: 0 0 10px rgba(0, 212, 255, 0.3);
`;

document.body.appendChild(cursorCircle);

let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    cursorCircle.style.left = (mouseX - 15) + 'px';
    cursorCircle.style.top = (mouseY - 15) + 'px';
    cursorCircle.style.display = 'block';
});

// Show custom cursor over interactive elements
document.addEventListener('mouseover', (e) => {
    if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.classList.contains('btn')) {
        cursorCircle.style.borderColor = 'rgba(181, 55, 242, 0.8)';
        cursorCircle.style.boxShadow = '0 0 20px rgba(181, 55, 242, 0.5)';
    }
});

document.addEventListener('mouseout', (e) => {
    if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.classList.contains('btn')) {
        cursorCircle.style.borderColor = 'rgba(0, 212, 255, 0.5)';
        cursorCircle.style.boxShadow = '0 0 10px rgba(0, 212, 255, 0.3)';
    }
});

document.addEventListener('mouseleave', () => {
    cursorCircle.style.display = 'none';
});

// =====================================================
// Page Load Animation
// =====================================================

window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});
