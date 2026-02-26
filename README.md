# Bosta Recruitment Task | Next.js High-Performance E-Commerce

This repository contains my solution for the **Bosta technical assessment**. It is a modern, fully optimized E-commerce application built
with **Next.js**, focused on delivering an exceptional user experience and top-tier performance.

---

## Lighthouse Performance Audit

The application has been meticulously optimized to achieve industry-leading metrics across all categories.

1. SEO: 100 (fully optimized)
2. Best Practices: 100 (Compliant)
3. Accessibility: 100 (Inclusive)
4. Performance: 90 (High Speed)

---

## Tech Stack & Why Next.js?

While React is powerful, **Next.js** was chosen as the optimal solution for this e-commerce business for several strategic reasons:

### 1. Advanced Rendering Patterns (SEO & UX)

- **SSG & SSR:** By leveraging Static Site Generation and Server-Side Rendering, we ensure that product pages are pre-rendered. This is
  critical for E-commerce SEO (making products discoverable by search engines) and providing an instant "First Contentful Paint" for users.

### 2. Enhanced Security

- **Server Actions:** Used to handle data mutations directly on the server, reducing the attack surface by keeping logic away from the
  client-side.
- **Secure Cookies:** Implementation of HttpOnly and Secure cookies to ensure user sessions and authentication data are handled with
  industry-standard security.

### 3. Peak Performance & Caching

- **Server-Side Rendering:** Moving the heavy lifting to the server reduces the JavaScript bundle sent to the client, which is key to our
  **90+ Performance score**.
- **Data Caching:** Utilizing Next.js's sophisticated caching layer to minimize API calls and ensure lightning-fast page transitions.

---

## Technical Features

- **Styling:** Tailwind CSS for a modern, responsive, and utility-first UI.
- **Optimization:** Native Image optimization and automatic code splitting.
- **Responsive Design:** Seamless experience across Mobile, Tablet, and Desktop.

---

## Project Routing & Architecture

The project follows a clean, modular structure with the following primary routes:

### Shopping Flow

- `GET /products?page={1:3}`: **Product Listing** - Includes server-side pagination for fast data retrieval.
- `GET /product/{id}`: **Product Details** - Dynamic routing with optimized metadata for SEO.
- `GET /cert`: **Shopping Cart** - A streamlined checkout experience.

### Authentication

- `GET /auth/login`: Secure login portal.
- `GET /auth/signup`: User registration flow.

### Management

- `GET /dashboard/create-product`: **Admin Dashboard** - A dedicated interface for product catalog management.
