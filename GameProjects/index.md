---
layout: default
title: Home
---

<section id="projects">
  <h2>My Game Projects</h2>

  <div class="project">
    <h3><a href="https://krabgor.itch.io/purgatory">Can't Escape: Purgatory</a></h3>
    <p>A short and dark psychological walking-sim in which the player is trapped in a never ending corridor.</p>

    <div class="carousel">
      <button class="prev" onclick="changeSlide(-1)">&#10094;</button>
      <a href="https://krabgor.itch.io/purgatory">
        <img id="carousel-image" src="/assets/purgatory/p1.png" alt="Can't Escape: Purgatory Screenshot">
      </a>
      <button class="next" onclick="changeSlide(1)">&#10095;</button>
    </div>
  </div>

  <div class="project">
    <h3>Space Shooter</h3>
    <p>A top‑down shooter made with OpenGL. Implements particle effects and AI enemies.</p>
    <a href="https://github.com/KristianKKD/space-shooter">GitHub Repo</a>
  </div>

  <link rel="stylesheet" href="/GameProjects/style.css">
  <script src="/GameProjects/script.js" defer></script>
</section>
