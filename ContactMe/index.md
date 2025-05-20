---
layout: default
title: Contact Me
---

<section id="contact">
  <div class="contact-container">
    <div class="left-panel">
      <h2>Other Info</h2>
      <div class="contact-option"><a href="mailto:kkddimitrov@gmail.com">kkddimitrov@gmail.com</a></div>
      <div class="contact-option"><a href="https://linkedin.com/in/kristian-k-dimitrov">LinkedIn</a></div>
      <div class="contact-option">Phone: +44 07305558579</div>
    </div>

  <div class="right-panel">
    <form action="https://formspree.io/f/xanerzzn" method="POST" class="contact-form">
      <label for="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Your name"
        required
      />

  <label for="email">Email</label>
  <input
    type="email"
    id="email"
    name="email"
    placeholder="you@example.com"
    required
  />

  <label for="message">Message</label>
  <textarea
    id="message"
    name="message"
    rows="5"
    placeholder="Your message"
    required
  ></textarea>

      <!-- Submit button -->
  <button type="submit">Send Message</button>
</form>
</div>
</div>

  <link rel="stylesheet" href="/ContactMe/style.css">
</section>