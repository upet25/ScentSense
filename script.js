document.addEventListener("DOMContentLoaded", function () {
    // Get modal elements
    const modal = document.getElementById("termsModal");
    const closeBtn = document.querySelector(".close-btn");
    const nextBtn = document.querySelector(".next-btn");
    const radioButtons = document.querySelectorAll('input[name="agreement"]');
    const modalTitle = document.getElementById('modalTitle');

    // Close modal when clicking the X button
    closeBtn.addEventListener("click", function() {
        modal.style.display = "none";
        resetModal();
    });

    // Close modal when clicking outside
    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
            resetModal();
        }
    });

    // Handle radio button changes
    radioButtons.forEach(radio => {
        radio.addEventListener('change', function() {
            nextBtn.disabled = this.value === 'decline';
        });
    });
});

// Show terms modal
function showTerms() {
    document.getElementById('termsModal').style.display = 'block';
    const modalTitle = document.getElementById('modalTitle');
    modalTitle.innerHTML = '<strong>Terms & Conditions</strong>';
    modalTitle.className = '';
    showPage(1);
}

// Show specific page
function showPage(pageNumber) {
    document.getElementById('page1').style.display = pageNumber === 1 ? 'block' : 'none';
    document.getElementById('page2').style.display = pageNumber === 2 ? 'block' : 'none';
    
    // Update modal title based on page
    const modalTitle = document.getElementById('modalTitle');
    if (pageNumber === 1) {
        modalTitle.innerHTML = 'Terms & Conditions';
    } else {
        modalTitle.innerHTML = '<i class="fas fa-triangle-exclamation"></i> Disclaimer';
    }
}

// Accept terms and proceed
function acceptTerms() {
    const modal = document.getElementById("termsModal");
    modal.style.display = "none";
    resetModal();
    window.location.href = 'Main.html';
}

// Reset modal state
function resetModal() {
    document.getElementById('page1').style.display = 'block';
    document.getElementById('page2').style.display = 'none';
    const modalTitle = document.getElementById('modalTitle');
    modalTitle.innerHTML = '<strong>Terms & Conditions</strong>';
    modalTitle.className = '';
    const radios = document.getElementsByName('agreement');
    radios[1].checked = true; // Select "I do not accept" by default
    document.querySelector('.next-btn').disabled = true;
}

document.addEventListener('DOMContentLoaded', function() {
    // Sidebar toggle functionality
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');
    
    sidebarToggle.addEventListener('click', function() {
        sidebar.classList.toggle('collapsed');
        mainContent.classList.toggle('expanded');
        // Store sidebar state in localStorage
        localStorage.setItem('sidebarCollapsed', sidebar.classList.contains('collapsed'));
    });

    // Restore sidebar state from localStorage
    const sidebarCollapsed = localStorage.getItem('sidebarCollapsed') === 'true';
    if (sidebarCollapsed) {
        sidebar.classList.add('collapsed');
        mainContent.classList.add('expanded');
    }

    // Handle submenu toggling
    const menuItemsWithSubmenu = document.querySelectorAll('.menu-item-with-submenu');
    menuItemsWithSubmenu.forEach(item => {
        const link = item.querySelector('.has-submenu');
        link.addEventListener('click', function(e) {
            e.preventDefault();
            // Close all other open submenus
            menuItemsWithSubmenu.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('open');
                }
            });
            // Toggle current submenu
            item.classList.toggle('open');
        });
    });

    // Handle login form submission
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            // Add your login logic here
            console.log('Login attempted:', { username, password });
            
            // For demo purposes, just hide the modal
            document.querySelector('.login-modal').style.display = 'none';
        });
    }

    // Handle shop now button
    const shopNowBtn = document.querySelector('.shop-now-btn');
    if (shopNowBtn) {
        shopNowBtn.addEventListener('click', function() {
            document.querySelector('.login-modal').style.display = 'flex';
        });
    }

    // Handle add to cart buttons
    const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');
    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Show login modal if user is not logged in
            document.querySelector('.login-modal').style.display = 'flex';
        });
    });

    // Handle search
    const searchForm = document.querySelector('.search-container');
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const searchQuery = searchForm.querySelector('input').value;
            console.log('Search query:', searchQuery);
            // Add your search logic here
        });
    }

    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        const modal = document.querySelector('.login-modal');
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Handle sidebar navigation
    const sidebarLinks = document.querySelectorAll('.sidebar a:not(.has-submenu)');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Remove active class from all links
            sidebarLinks.forEach(l => l.classList.remove('active'));
            // Add active class to clicked link
            this.classList.add('active');
        });
    });

    // Handle search button click
    const searchBtn = document.querySelector('.search-btn');
    if (searchBtn) {
        searchBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const searchQuery = document.querySelector('.search-container input').value;
            console.log('Search query:', searchQuery);
            // Add your search logic here
        });
    }
});

function closeModal() {
    const modal = document.querySelector('.modal');
    if (modal) {
        modal.style.display = 'none';
    } else {
        console.error("Modal element not found!");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    // Get modal elements
    const modal = document.getElementById("termsModal");
    const closeBtn = document.querySelector(".close-btn");
    const nextBtn = document.querySelector(".next-btn");
    const radioButtons = document.querySelectorAll('input[name="agreement"]');
    const modalTitle = document.getElementById('modalTitle');

    // ✅ Check if close button exists before adding event listener
    if (closeBtn) {
        closeBtn.addEventListener("click", function() {
            modal.style.display = "none";
            resetModal();
        });
    } else {
        console.error("Close button not found!");
    }

    // ✅ Check if next button exists before using it
    if (nextBtn) {
        radioButtons.forEach(radio => {
            radio.addEventListener('change', function() {
                nextBtn.disabled = this.value === 'decline';
            });
        });
    } else {
        console.error("Next button not found!");
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Sidebar toggle functionality
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');

    if (sidebarToggle) { // ✅ Only run if sidebarToggle exists
        sidebarToggle.addEventListener('click', function() {
            sidebar.classList.toggle('collapsed');
            mainContent.classList.toggle('expanded');
            // Store sidebar state in localStorage
            localStorage.setItem('sidebarCollapsed', sidebar.classList.contains('collapsed'));
        });
    } else {
        console.error("Sidebar toggle button not found!");
    }
});

