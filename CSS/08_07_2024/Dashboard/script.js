function toggleNav() {
    const nav = document.getElementById('nav-menu');
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
}

function toggleProfileDropdown() {
    const dropdown = document.getElementById('profile-dropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

function editProfile() {
    alert('Edit Profile Clicked');
}
function logout(){
    window.location.href='../../LoginPage/index.html'
}

function readMore() {
    const text = document.querySelector('.read-more .text');
    const btn = document.querySelector('.read-more .btn');
    if (text.style.maxHeight) {
        text.style.maxHeight = null;
        btn.textContent = "Read More";
    } else {
        text.style.maxHeight = text.scrollHeight + "px";
        btn.textContent = "Read Less";
    }
}

document.getElementById('profile-icon').addEventListener('click', toggleProfileDropdown);
