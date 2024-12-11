// Select the scrollable image and the main content
const scrollImage = document.getElementById('scroll-image');
const mainContent = document.querySelector('main'); 

// Add a scroll event listener to the main content
mainContent.addEventListener('scroll', () => {
    // Calculate the scroll percentage
    const scrollTop = mainContent.scrollTop;
    const scrollHeight = mainContent.scrollHeight - mainContent.clientHeight;
    const scrollPercent = scrollTop / scrollHeight;

    // Move the image vertically based on scroll percentage
    const imageHeight = scrollImage.offsetHeight - window.innerHeight;
    scrollImage.style.top = `-${imageHeight * scrollPercent}px`;
});