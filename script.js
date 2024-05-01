function toggleLanguage() {
      var langButton = document.getElementById('langButton');
      var contentHeading = document.getElementById('content');
      var homeLink = document.querySelector('nav ul li:nth-child(1) a');
      var articlesLink = document.querySelector('nav ul li:nth-child(2) a');
      var aboutLink = document.querySelector('nav ul li:nth-child(3) a');
      var contactLink = document.querySelector('nav ul li:nth-child(4) a');
      var safety_gear_content=document.getElementById("safety_gear");
      var health_guide=document.getElementById("health_guide");
      var manual_book=document.getElementById("manual_book");
      var changeLanguageText = langButton.textContent.trim();

      if (changeLanguageText === 'Change Language') {
        langButton.textContent = 'ಭಾಷೆ ಬದಲಾಯಿಸಿ';
        contentHeading.textContent = 'ವಿಷಯಗಳು :-';
        homeLink.textContent = 'ಮುಖಪುಟ';
        articlesLink.textContent = 'ಲೇಖನಗಳು';
        aboutLink.textContent = 'ನಮ್ಮ ಬಗ್ಗೆ';
        contactLink.textContent = 'ಸಂಪರ್ಕ';
      } else {
        langButton.textContent = 'Change Language';
        contentHeading.textContent = 'Contents :-';
        homeLink.textContent = 'Home';
        articlesLink.textContent = 'Articles';
        aboutLink.textContent = 'About';
        contactLink.textContent = 'Contact';
      }
    }