'use client';

import { FormEvent, useState } from 'react';
import styles from './ContactForm.module.css';

const recipient = 'indra.cse@iitbhu.ac.in';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = encodeURIComponent(`AutoAnn-Indic Query from ${name || 'Website Visitor'}`);
    const body = encodeURIComponent(
      `Hello,\n\nMy name is ${name || '[Your Name]'}.\nMy email is ${email || '[Your Email]'}.\n\nI would like to know more about the AutoAnn-Indic challenge.\n\nRegards,\n${name || ''}`
    );

    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  }

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit}>
      <label className={styles.field}>
        <span className={styles.label}>Name</span>
        <input
          className={styles.input}
          type="text"
          name="name"
          placeholder="Enter your name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
      </label>

      <label className={styles.field}>
        <span className={styles.label}>Email</span>
        <input
          className={styles.input}
          type="email"
          name="email"
          placeholder="Enter your email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </label>

      <button type="submit" className={styles.button}>
        Send Message
      </button>
    </form>
  );
}
