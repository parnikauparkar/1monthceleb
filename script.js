document.addEventListener('DOMContentLoaded', () => {
    // Page Navigation Logic
    let pages = document.querySelectorAll('.page');
    let startBtn = document.getElementById('startBtn');
    let nextPageBtn = document.getElementById('nextPageBtn');
    let backToHome = document.getElementById('backToHome');
    let yesBtn = document.getElementById('yesBtn');
    let noBtn = document.getElementById('noBtn');

    startBtn.addEventListener('click', () => navigateToPage('story'));
    nextPageBtn.addEventListener('click', () => navigateToPage('valentine'));
    backToHome.addEventListener('click', () => navigateToPage('home'));

    // Valentine Logic
    yesBtn.addEventListener('click', () => {
        document.getElementById('valentineResponse').textContent = "You just made my day!";
        yesBtn.disabled = true;
        noBtn.disabled = true;
    });

    // Disable No button
    noBtn.disabled = true;

    function navigateToPage(pageId) {
        pages.forEach(page => page.classList.remove('active'));
        document.getElementById(pageId).classList.add('active');
    }

    // GSAP Scroll Animations for Timeline
    gsap.from('.timeline-item', {
        opacity: 0,
        y: 50,
        stagger: 0.3,
        duration: 1.5,
        ease: 'power2.out',
    });

    // Custom Cursor Animation
    const cursor = document.createElement('div');
    cursor.id = 'cursor';
    document.body.appendChild(cursor);
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.pageX - cursor.offsetWidth / 2 + 'px';
        cursor.style.top = e.pageY - cursor.offsetHeight / 2 + 'px';
    });
    
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('mouseover', () => cursor.classList.add('hovered'));
        button.addEventListener('mouseout', () => cursor.classList.remove('hovered'));
    });
});
