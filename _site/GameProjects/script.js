document.addEventListener('DOMContentLoaded', function() {
    // Get all carousel containers
    const carousels = document.querySelectorAll('.carousel-container');
    
    carousels.forEach(carousel => {
        const slides = carousel.querySelectorAll('.carousel-slide');
        const prevBtn = carousel.querySelector('.carousel-prev');
        const nextBtn = carousel.querySelector('.carousel-next');
        const dots = carousel.querySelector('.carousel-dots');
        
        if (!slides.length) return; // Skip if no slides
        
        let currentSlide = 0;
        
        // Create dots if they don't exist
        if (dots && slides.length > 1) {
            // Clear any existing dots
            dots.innerHTML = '';
            
            // Create new dots
            for (let i = 0; i < slides.length; i++) {
                const dot = document.createElement('span');
                dot.classList.add('carousel-dot');
                if (i === 0) dot.classList.add('active');
                dot.dataset.index = i;
                dot.addEventListener('click', () => {
                    goToSlide(i);
                });
                dots.appendChild(dot);
            }
        }
        
        // Show the first slide
        showSlide(currentSlide);
        
        // Add event listeners for the buttons
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                currentSlide = (currentSlide - 1 + slides.length) % slides.length;
                showSlide(currentSlide);
            });
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                currentSlide = (currentSlide + 1) % slides.length;
                showSlide(currentSlide);
            });
        }
        
        // Function to show a specific slide
        function showSlide(index) {
            // Hide all slides
            slides.forEach(slide => {
                slide.style.display = 'none';
            });
            
            // Show the current slide
            slides[index].style.display = 'block';
            
            // Update the active dot
            if (dots) {
                const activeDots = dots.querySelectorAll('.carousel-dot');
                activeDots.forEach((dot, i) => {
                    if (i === index) {
                        dot.classList.add('active');
                    } else {
                        dot.classList.remove('active');
                    }
                });
            }
        }
        
        // Function to go to a specific slide
        function goToSlide(index) {
            currentSlide = index;
            showSlide(currentSlide);
        }
        
        // Optional: Auto-advance slides every 5 seconds
        // Uncomment the following code if you want auto-advancing
        /*
        let autoAdvance = setInterval(() => {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }, 5000);
        
        // Pause auto-advance when hovering over carousel
        carousel.addEventListener('mouseenter', () => {
            clearInterval(autoAdvance);
        });
        
        // Resume auto-advance when mouse leaves carousel
        carousel.addEventListener('mouseleave', () => {
            autoAdvance = setInterval(() => {
                currentSlide = (currentSlide + 1) % slides.length;
                showSlide(currentSlide);
            }, 5000);
        });
        */
    });
});