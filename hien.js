document.addEventListener('navLoaded', function() {
    document.getElementById('lang-checkbox').addEventListener('change', function() {
      if (this.checked) {
        document.getElementById('en-content').style.display = 'none';
        document.getElementById('hi-content').style.display = 'block';
        document.getElementById('lang-label').textContent = 'HI';
      } else {
        document.getElementById('en-content').style.display = 'block';
        document.getElementById('hi-content').style.display = 'none';
        document.getElementById('lang-label').textContent = 'EN';
      }
    });
    // Set initial state
    document.getElementById('lang-checkbox').checked = false;
    document.getElementById('en-content').style.display = 'block';
    document.getElementById('hi-content').style.display = 'none';
    document.getElementById('lang-label').textContent = 'EN';
  });