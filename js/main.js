// Initialize Icons
lucide.createIcons();

// Simple Single Page Application Router Logic
function navigate(pageId) {
    // Hide all sections
    document.querySelectorAll('.page-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show target section
    const target = document.getElementById('page-' + pageId);
    if (target) {
        target.classList.add('active');
        window.scrollTo(0, 0);
    }
}

// Modal Logic
function toggleVideo() {
    const modal = document.getElementById('video-modal');
    if (modal.classList.contains('hidden')) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        document.body.style.overflow = 'hidden';
    } else {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        document.body.style.overflow = 'auto';
    }
}

// Add active state to navigation buttons
document.addEventListener('DOMContentLoaded', () => {
    // Default route
    navigate('home');
});