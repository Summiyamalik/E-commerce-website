// JavaScript for Hero Section Sidebar
document.addEventListener("DOMContentLoaded", function() {
    // Sidebar active item selection
    document.querySelectorAll(".sidebar ul li").forEach(item => {
        item.addEventListener("click", function() {
            document.querySelectorAll(".sidebar ul li").forEach(li => {
                li.classList.remove("active");
            });
            this.classList.add("active");
            
            // You could add functionality to load different content based on selection
            // loadCategoryContent(this.dataset.category);
        });
    });

    // Add cart count functionality
    const cartIcon = document.querySelector('.icon:nth-child(4)');
    if (cartIcon) {
        let cartCount = 0;
        
        // Example: Update cart count when items are added (you would replace this with actual cart logic)
        function updateCartCount() {
            cartCount++;
            const countElement = document.querySelector('.cart-count');
            if (countElement) {
                countElement.textContent = cartCount;
                countElement.style.display = cartCount > 0 ? 'block' : 'none';
            }
        }
        
        // For demo purposes - remove in production
        cartIcon.addEventListener('click', function(e) {
            if (!e.target.classList.contains('cart-count')) {
                updateCartCount();
            }
        });
    }
});

// Flash Sale Countdown Timer
function startCountdown() {
    const endTime = new Date().getTime() + (3 * 24 * 60 * 60 * 1000); // 3 days from now
    
    function formatTime(number) {
        return number < 10 ? `0${number}` : number;
    }

    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = endTime - now;
        
        if (timeLeft > 0) {
            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
            
            document.getElementById("days").textContent = formatTime(days);
            document.getElementById("hours").textContent = formatTime(hours);
            document.getElementById("minutes").textContent = formatTime(minutes);
            document.getElementById("seconds").textContent = formatTime(seconds);
            
            // Add pulse animation when time is running low
            if (hours < 1) {
                const countdown = document.getElementById("countdown");
                countdown.classList.add('pulse');
            }
        } else {
            document.getElementById("countdown").innerHTML = "<div>Sale Ended!</div>";
        }
    }
    
    updateCountdown(); // Run immediately to avoid delay
    setInterval(updateCountdown, 1000);
}

// Initialize countdown when DOM is loaded
document.addEventListener("DOMContentLoaded", startCountdown);

// Enhanced Services Section Interaction
document.addEventListener("DOMContentLoaded", function() {
    const serviceBoxes = document.querySelectorAll(".service-box");

    serviceBoxes.forEach(box => {
        const icon = box.querySelector(".service-icon");
        
        box.addEventListener("mouseenter", () => {
            box.style.transform = "translateY(-8px)";
            box.style.boxShadow = "0 12px 20px rgba(0, 0, 0, 0.12)";
            
            if (icon) {
                icon.style.transform = "translateY(-5px)";
                icon.style.backgroundColor = "#2a52be";
                icon.style.color = "white";
            }
        });

        box.addEventListener("mouseleave", () => {
            box.style.transform = "translateY(0)";
            box.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.08)";
            
            if (icon) {
                icon.style.transform = "translateY(0)";
                icon.style.backgroundColor = "white";
                icon.style.color = "#2a52be";
            }
        });
        
        // Click handler for service boxes
        box.addEventListener("click", function() {
            // You could add navigation or modal opening functionality here
            console.log(`Service selected: ${box.querySelector('h4').textContent}`);
        });
    });
});

// Newsletter Form Submission
document.addEventListener("DOMContentLoaded", function() {
    const newsletterForm = document.querySelector(".newsletter-form");
    
    if (newsletterForm) {
        const subscribeBtn = newsletterForm.querySelector(".subscribe-btn");
        const emailInput = newsletterForm.querySelector("input[type='email']");
        const privacyCheck = newsletterForm.querySelector("#privacy-check");
        
        subscribeBtn.addEventListener("click", function(e) {
            e.preventDefault();
            
            if (!emailInput.value) {
                alert("Please enter your email address");
                return;
            }
            
            if (!privacyCheck.checked) {
                alert("Please agree to the privacy policy");
                return;
            }
            
            // Here you would typically send the data to your server
            console.log(`Subscribing email: ${emailInput.value}`);
            
            // Show success message
            alert("Thank you for subscribing!");
            emailInput.value = "";
            privacyCheck.checked = false;
        });
    }
});

// Product Deal Cards Interaction
document.addEventListener("DOMContentLoaded", function() {
    const dealCards = document.querySelectorAll(".deal-card");
    
    dealCards.forEach(card => {
        const discountBadge = card.querySelector(".discount");
        
        card.addEventListener("mouseenter", () => {
            if (discountBadge) {
                discountBadge.style.transform = "scale(1.1)";
                discountBadge.style.backgroundColor = "#ff4d4d";
            }
        });
        
        card.addEventListener("mouseleave", () => {
            if (discountBadge) {
                discountBadge.style.transform = "scale(1)";
                discountBadge.style.backgroundColor = "#ffecec";
            }
        });
        
        card.addEventListener("click", function() {
            // Navigate to product page or show quick view
            const productName = card.querySelector("p").textContent;
            console.log(`Viewing product: ${productName}`);
        });
    });
});

// Mobile Menu Toggle (for responsive design)
document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-icon");
    const navLeft = document.querySelector(".nav-left");
    
    if (menuToggle && navLeft) {
        menuToggle.addEventListener("click", function() {
            navLeft.classList.toggle("active");
            menuToggle.textContent = navLeft.classList.contains("active") ? "✕ " : "☰ ";
        });
    }
});