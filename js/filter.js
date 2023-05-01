// Get all portfolio images
const portfolioImages = document.querySelectorAll('.portfolio-image');
// Get all filter buttons
const filterButtons = document.querySelectorAll('.filter-button');

// Set initial active filter button to "all"
let activeFilterButton = document.querySelector('.active');
let activeFilterValue = activeFilterButton.getAttribute('data-tag');

// Add click event listener to each filter button
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Get the value of the clicked button (i.e., the filter tag)
    const filterValue = button.getAttribute('data-tag');

    // Update active filter button
    activeFilterButton.classList.remove('active');
    button.classList.add('active');
    activeFilterButton = button;
    activeFilterValue = filterValue;

    // Hide all portfolio images with a transition
    portfolioImages.forEach(image => {
      image.style.transition = 'opacity 0.5s ease-out';
      image.style.opacity = '0';
    });

    // Wait for the images to fade out before showing relevant images
    setTimeout(() => {
      // Loop through each portfolio image
      portfolioImages.forEach(image => {
        // Get the tags assigned to the current image
        const tags = image.getAttribute('data-tag').split(',');

        // Check if the current image has the filter tag assigned
        if (tags.includes(filterValue) || filterValue === 'all') {
          // Show the image if it matches the filter tag, or if the "all" button was clicked
          image.style.display = 'block';
          // Fade in the image with a transition
          setTimeout(() => {
            image.style.transition = 'opacity 1s ease-in-out';
            image.style.opacity = '1';
          }, 50);
        } else {
          // Hide the image if it doesn't match the filter tag
          image.style.display = 'none';
        }
      });
    }, 200);
  });
});

document.querySelector('.filters').classList.add('fade-in');

var grid = document.querySelector(".portfolio-grid");
grid.classList.add("loaded");


