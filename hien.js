// Helper function to update the nav text and font based on language
function updateNavLanguage(lang) {
  const navList = document.getElementById('nav-list');
  const navMapping = {
    "Home": { en: "Home", hi: "मुख्यपृष्ठ" },
    "Ayurveda": { en: "Ayurveda", hi: "आयुर्वेद" },
    "Yoga": { en: "Yoga", hi: "योग" },
    "Science": { en: "Science", hi: "विज्ञान" },
    "Philosophy": { en: "Philosophy", hi: "दर्शन" },
    "Literature": { en: "Literature", hi: "साहित्य" },
    "Purushartha": { en: "Purushartha", hi: "पुरुषार्थ" },
    "Stories": { en: "Stories", hi: "कथाएँ" }
  };

  const disclaimerMapping = {
    en: "*We are not responsible for any misinterpretation of our work.",
    hi: "*हमारे कार्य के किसी भी प्रकार के त्रुटिपूर्ण अर्थ-ग्रहण के लिए हम उत्तरदायी नहीं हैं।"
  };

  // Iterate over each link in the nav list
  const liElements = navList.getElementsByTagName('li');
  for (let li of liElements) {
    const a = li.querySelector('a');
    // Retrieve the original English text from the data attribute
    const englishText = a.getAttribute('data-english');
    // Use the mapping to get the correct text for the current language
    if (navMapping[englishText]) {
      a.textContent = navMapping[englishText][lang];
    }
  }

  // Update nav font based on the language
  if (lang === 'hi') {
    navList.style.fontFamily = "'HindiFont', sans-serif";
  } else {
    navList.style.fontFamily = "'RomanFont', sans-serif";
  }
}

document.addEventListener('navLoaded', function() {
  const langCheckbox = document.getElementById('lang-checkbox');
  const langLabel = document.getElementById('lang-label');

  // Get language from localStorage or default to English
  let storedLang = localStorage.getItem('language') || 'en';
  if (storedLang === 'hi') {
    langCheckbox.checked = true;
    langLabel.textContent = 'HI';
    document.getElementById('hi-content').style.display = 'block';
    document.getElementById('en-content').style.display = 'none';
  } else {
    langCheckbox.checked = false;
    langLabel.textContent = 'EN';
    document.getElementById('hi-content').style.display = 'none';
    document.getElementById('en-content').style.display = 'block';
  }

  // Update the nav text and font initially
  updateNavLanguage(storedLang);

  // Listen for toggle changes
  langCheckbox.addEventListener('change', function() {
    let lang = this.checked ? 'hi' : 'en';
    localStorage.setItem('language', lang);
    if (lang === 'hi') {
      document.getElementById('hi-content').style.display = 'block';
      document.getElementById('en-content').style.display = 'none';
      langLabel.textContent = 'HI';
    } else {
      document.getElementById('hi-content').style.display = 'none';
      document.getElementById('en-content').style.display = 'block';
      langLabel.textContent = 'EN';
    }
    // Update navigation based on the new language
    updateNavLanguage(lang);
  });
});


document.addEventListener('disclaimerLoaded', function() {
  // Immediately update disclaimer text once loaded
  const lang = localStorage.getItem('language') || 'en';
  updateDisclaimerLanguage(lang);
});

// Call this function within your existing language update logic
function updateDisclaimerLanguage(lang) {
  const disclaimerMapping = {
    en: "*We are not responsible for any misinterpretation of our work.",
    hi: "*हमारे कार्य के किसी भी प्रकार के त्रुटिपूर्ण अर्थ-ग्रहण के लिए हम उत्तरदायी नहीं हैं।"
  };
  
  const disclaimerText = document.getElementById('disclaimer-text');
  
  if (disclaimerText) {
    disclaimerText.textContent = disclaimerMapping[lang];
    disclaimerText.style.fontFamily = lang === 'hi' ? "'HindiFont', sans-serif" : "'RomanFont', sans-serif";
  }
}

