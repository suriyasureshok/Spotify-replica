document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.querySelector('.sidebar');
    const toggleBtn = document.querySelector('.toggle-btn');
    const browseBtn = document.querySelector('.browse-btn');
    const genresSection = document.getElementById('genresSection');
    
    toggleBtn.addEventListener('click', function() {
        sidebar.classList.toggle('collapsed');
        
        // Update body margin when sidebar is collapsed/expanded
        document.body.style.marginLeft = sidebar.classList.contains('collapsed') ? '80px' : '240px';
    });

    browseBtn.addEventListener('click', function() {
        if (genresSection.style.display === 'none') {
            genresSection.style.display = 'block';
        } else {
            genresSection.style.display = 'none';
        }
    });
});
