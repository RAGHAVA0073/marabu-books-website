/* =========================================
   FINAL CTA + BUTTON ANIMATIONS
   ========================================= */

/* Top navigation spacing */
.navbar {
  padding-left: 6%;
  padding-right: 6%;
}

.navbar .subscribe-btn {
  margin-left: 24px;
}

/* Hero "ENTER THE STORY WORLD" */
.hero a {
  display: inline-block;
  position: relative;
  transition: transform 0.3s ease, text-shadow 0.3s ease;
  animation: heroButtonFloat 2.8s ease-in-out infinite;
}

.hero a:hover {
  transform: translateY(-4px) scale(1.04);
  text-shadow: 0 0 18px rgba(255, 215, 120, 0.8);
}

/* Click to Buy */
a[href="#"] {
  display: inline-block;
  position: relative;
  transition: transform 0.3s ease, text-shadow 0.3s ease;
  animation: buyButtonGlow 2.2s ease-in-out infinite;
}

a[href="#"]:hover {
  transform: translateY(-4px) scale(1.05);
  text-shadow: 0 0 18px rgba(255, 215, 120, 0.9);
}

/* Coming Soon */
button:disabled,
.coming-soon,
.disabled {
  animation: comingSoonGlow 2.5s ease-in-out infinite;
  transition: transform 0.3s ease;
}

button:disabled:hover,
.coming-soon:hover,
.disabled:hover {
  transform: translateY(-3px);
}

/* Follow MARABU BOOKS */
a[href*="youtube"] {
  transition: transform 0.3s ease, text-shadow 0.3s ease;
}

section a[href*="youtube"]:not(.subscribe-btn) {
  display: inline-block;
  animation: followGlow 2.4s ease-in-out infinite;
}

section a[href*="youtube"]:hover {
  transform: translateY(-4px) scale(1.04);
  text-shadow: 0 0 18px rgba(255, 215, 120, 0.8);
}


/* =========================================
   ANIMATION KEYFRAMES
   ========================================= */

@keyframes heroButtonFloat {
  0%, 100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-5px);
  }
}

@keyframes buyButtonGlow {
  0%, 100% {
    transform: translateY(0);
    filter: brightness(1);
  }

  50% {
    transform: translateY(-4px);
    filter: brightness(1.25);
  }
}

@keyframes comingSoonGlow {
  0%, 100% {
    opacity: 0.85;
    filter: brightness(1);
  }

  50% {
    opacity: 1;
    filter: brightness(1.25);
  }
}

@keyframes followGlow {
  0%, 100% {
    transform: translateY(0);
    filter: brightness(1);
  }

  50% {
    transform: translateY(-4px);
    filter: brightness(1.2);
  }
}


/* =========================================
   MOBILE
   ========================================= */

@media (max-width: 800px) {

  .navbar {
    padding-left: 5%;
    padding-right: 5%;
  }

  .navbar .subscribe-btn {
    margin-left: 12px;
  }

  .hero a,
  a[href="#"],
  section a[href*="youtube"] {
    animation-duration: 3s;
  }
}
