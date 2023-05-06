
  const buttons = document.querySelectorAll('.filter-button');
  const images = document.querySelectorAll('.square');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const tag = button.getAttribute('data-tag');

      // Hide all images
      images.forEach(image => {
        image.style.display = 'none';
      });

      // Show only images with matching data tag
      images.forEach(image => {
        if (image.querySelector('img').getAttribute('data-tag') === tag || tag === 'all') {
          image.style.display = 'block';
        }
      });

      // Set active button
      buttons.forEach(button => {
        button.classList.remove('active');
      });
      button.classList.add('active');
    });
  });

