---
layout: default
title: Contact Me
---

<section id="contact">
  <h2>Contact Me</h2>

<div class="contact-container">
  <div class="left-panel">
    <h2>Other Info</h2>
    <div class="contact-option">kkddimitrov@gmail.com</div>
    <div class="contact-option"><a href="https://linkedin.com/in/kristian-k-dimitrov">LinkedIn</a></div>
  </div>

  <div class="right-panel">
      <form>
        <form id="contact-form" method="POST" class="contact-form">
      <label for="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Your name"
        required
      />

      <!-- Your Email -->
      <label for="email">Email</label>
      <input
        type="email"
        id="email"
        name="_replyto"
        placeholder="you@example.com"
        required
      />

      <!-- Your Message -->
      <label for="message">Message</label>
      <textarea
        id="message"
        name="message"
        rows="5"
        placeholder="Your message"
        required
      ></textarea>

      <button type="submit">Send Message</button>
    </form>
    </form>
  </div>
</div>

</section>