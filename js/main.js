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

// Table Accordion Logic (Satır Aç/Kapa)
function toggleRow(rowId) {
    const row = document.getElementById(rowId);
    if (row.classList.contains('hidden')) {
        row.classList.remove('hidden');
    } else {
        row.classList.add('hidden');
    }
}