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
            
            // On hover: show featured image and details with smooth dissolve transition
            card.addEventListener('mouseenter', function() {
                console.log('Mouse enter - Setting background:', bgImage);
                
                // Fade out current image
                featuredImage.classList.remove('active');
                
                // Wait for fade-out to complete, then change image and fade in
                setTimeout(() => {
                    // Set new background-image
                    featuredImage.style.backgroundImage = bgImage;
                    featuredSection.classList.add('image-active');
                    
                    // Fade in new image
                    featuredImage.classList.add('active');
                    
                    // Update details with smooth transition
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
                        
                        // Only fade in details if not already active
                        if (!featuredDetails.classList.contains('active')) {
                            featuredDetails.classList.add('active');
                        }
                    }
                    
                    console.log('Featured image and details displayed with dissolve transition');
                }, 300); // Match fade-out duration
            });
            
            // On mouse leave: hide featured image and details with soft fade
            card.addEventListener('mouseleave', function() {
                console.log('Mouse leave - Fading out background');
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
// Portfolio Background Image on Card Hover
// =====================================================

document.addEventListener('DOMContentLoaded', () => {
    const portfolioBgImage = document.getElementById('portfolioBgImage');
    const portfolioCards = document.querySelectorAll('.portfolio-card');

    if (!portfolioBgImage || portfolioCards.length === 0) return;

    let currentCard = null;

    portfolioCards.forEach((card) => {
        card.addEventListener('mouseenter', function() {
            const imageElement = card.querySelector('.portfolio-image');
            if (imageElement && card !== currentCard) {
                const bgImage = window.getComputedStyle(imageElement).backgroundImage;

                // Dissolve effect: fade to halfway, change image, fade back
                portfolioBgImage.style.transition = 'opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
                portfolioBgImage.style.opacity = '0.5';

                setTimeout(() => {
                    // Change background image at midpoint of fade
                    portfolioBgImage.style.backgroundImage = bgImage;
                    portfolioBgImage.style.opacity = '1';
                }, 300);

                currentCard = card;
            }
        });

        card.addEventListener('mouseleave', function() {
            if (card === currentCard) {
                portfolioBgImage.style.transition = 'opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
                portfolioBgImage.style.opacity = '0';
                currentCard = null;
            }
        });
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
// Scroll-Triggered Animations for Project Cards & Titles
// =====================================================

const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Element entering viewport
            entry.target.classList.remove('slide-out');
            entry.target.classList.add('slide-in');
        } else {
            // Element leaving viewport (scrolling up)
            entry.target.classList.remove('slide-in');
            entry.target.classList.add('slide-out');
        }
    });
}, {
    threshold: 0.2,
    rootMargin: '0px'
});

document.addEventListener('DOMContentLoaded', () => {
    // Observe hero for scroll-triggered animations
    const hero = document.querySelector('.hero');
    if (hero) {
        cardObserver.observe(hero);
    }

    // Observe all project cards for scroll-triggered animations
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        cardObserver.observe(card);
    });

    // Observe all portfolio cards for scroll-triggered animations
    const portfolioCards = document.querySelectorAll('.portfolio-card');
    portfolioCards.forEach(card => {
        cardObserver.observe(card);
    });

    // Observe section titles for scroll-triggered animations
    const sectionTitles = document.querySelectorAll('.section-title');
    sectionTitles.forEach(title => {
        cardObserver.observe(title);
    });

    // Observe footer for scroll-triggered animations
    const footer = document.querySelector('.footer');
    if (footer) {
        cardObserver.observe(footer);
    }

    // Observe all celestial cards for scroll-triggered animations
    const celestialCards = document.querySelectorAll('.celestial-card');
    celestialCards.forEach(card => {
        cardObserver.observe(card);
    });

    // Observe calculator section for scroll-triggered animations
    const calculatorSection = document.querySelector('.calculator-section');
    if (calculatorSection) {
        cardObserver.observe(calculatorSection);
    }
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
// Solar System Calculator
// =====================================================

document.addEventListener('DOMContentLoaded', () => {
    const calculateBtn = document.getElementById('calculate-btn');
    const earthYearsInput = document.getElementById('earth-years');
    const calculationResults = document.getElementById('calculation-results');
    const resultsContent = document.getElementById('results-content');

    // Planet orbital data (years per orbit around the sun)
    const planets = {
        'Mercury': { orbitalPeriod: 0.24, distance: 57.9, moons: 0, icon: '☿️' },
        'Venus': { orbitalPeriod: 0.62, distance: 108.2, moons: 0, icon: '♀️' },
        'Earth': { orbitalPeriod: 1.0, distance: 149.6, moons: 1, icon: '♁️' },
        'Mars': { orbitalPeriod: 1.88, distance: 227.9, moons: 2, icon: '♂️' },
        'Jupiter': { orbitalPeriod: 11.86, distance: 778.5, moons: 95, icon: '♃️' },
        'Saturn': { orbitalPeriod: 29.46, distance: 1434.0, moons: 146, icon: '♄️' },
        'Uranus': { orbitalPeriod: 84.01, distance: 2871.0, moons: 27, icon: '♅️' },
        'Neptune': { orbitalPeriod: 164.79, distance: 4495.1, moons: 16, icon: '♆️' },
        'Pluto': { orbitalPeriod: 248.0, distance: 5906.4, moons: 5, icon: '♇️' }
    };

    if (calculateBtn && earthYearsInput) {
        calculateBtn.addEventListener('click', () => {
            const earthYears = parseFloat(earthYearsInput.value);

            if (isNaN(earthYears) || earthYears <= 0) {
                resultsContent.innerHTML = '<p style="color: var(--accent-pink);">Please enter a valid positive number</p>';
                calculationResults.style.display = 'block';
                return;
            }

            // Calculate revolutions and orbital data for each planet
            let html = '';
            for (const [planet, data] of Object.entries(planets)) {
                const revolutions = (earthYears / data.orbitalPeriod).toFixed(2);
                const distanceInAU = (data.distance / 149.6).toFixed(2);
                
                html += `
                    <div style="border-left-width: 4px; border-left-style: solid; transition: all 0.3s ease; padding: 16px;">
                        <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px;">
                            <span style="font-size: 1.4rem;">${data.icon}</span>
                            <strong style="font-size: 1.1rem;">${planet}</strong>
                        </div>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size: 0.9rem;">
                            <p><span style="opacity: 0.7;">Revolutions:</span> <span style="color: var(--primary-color); font-weight: 600;">${revolutions}</span></p>
                            <p><span style="opacity: 0.7;">Period:</span> <span style="color: var(--primary-color); font-weight: 600;">${data.orbitalPeriod} years</span></p>
                            <p><span style="opacity: 0.7;">Distance:</span> <span style="color: var(--primary-color); font-weight: 600;">${data.distance}M km</span></p>
                            <p><span style="opacity: 0.7;">AU:</span> <span style="color: var(--primary-color); font-weight: 600;">${distanceInAU}</span></p>
                            <p><span style="opacity: 0.7;">Moons:</span> <span style="color: var(--primary-color); font-weight: 600;">${data.moons}</span></p>
                        </div>
                    </div>
                `;
            }

            resultsContent.innerHTML = html;
            calculationResults.style.display = 'block';

            // Smooth scroll to results
            setTimeout(() => {
                calculationResults.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }, 100);
        });

        // Allow Enter key to trigger calculation
        earthYearsInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                calculateBtn.click();
            }
        });
    }
});

// =====================================================
// Page Load Animation
// =====================================================

window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// =====================================================
// Scroll Animations & Parallax Effect
// =====================================================

document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer for scroll-triggered animations
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('slide-in');
                entry.target.classList.remove('slide-out');
            } else {
                entry.target.classList.remove('slide-in');
                entry.target.classList.add('slide-out');
            }
        });
    }, observerOptions);

    // Observe all celestial cards and calculator section
    const celestialCards = document.querySelectorAll('.celestial-card');
    const calculatorSection = document.querySelector('.calculator-section');
    
    celestialCards.forEach(card => {
        observer.observe(card);
    });
    
    if (calculatorSection) {
        observer.observe(calculatorSection);
    }

    // Parallax effect for calculator section
    const calculatorParallax = document.querySelector('.calculator-section');
    
    if (calculatorParallax) {
        window.addEventListener('scroll', () => {
            const scrollPosition = window.scrollY;
            const elementPosition = calculatorParallax.getBoundingClientRect().top + window.scrollY;
            const scrollPercent = (scrollPosition - (elementPosition - window.innerHeight)) / window.innerHeight;
            
            // Apply parallax transform (slower scroll = 30px offset)
            const parallaxOffset = scrollPercent * 30;
            calculatorParallax.style.transform = `translateY(${parallaxOffset}px)`;
        });
    }
});

