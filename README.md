# Mohammad Saquib Portfolio - How to Run

This is a modern web application built with **React** and **Vite**. 

## ⚠️ Important: Why you are seeing errors
If you try to open `index.html` directly from your file explorer (e.g., `file:///C:/...`), you will see **CORS errors** and **Failed to load resource** errors. 

**This is normal.** Modern web browsers block certain features (like JavaScript modules) when loaded directly from a file path for security reasons. To run this website, you **must** use a local web server.

---

## 🚀 How to Run Locally

### Option 1: Using Node.js (Recommended)
If you have Node.js installed on your computer:
1. Open your terminal/command prompt in this folder.
2. Run `npm install` to install the necessary tools.
3. Run `npm run dev` to start the local development server.
4. Open the URL provided in the terminal (usually `http://localhost:3000`).

### Option 2: Using VS Code "Live Server"
If you use Visual Studio Code:
1. Install the **Live Server** extension.
2. Right-click on `index.html` in the file explorer.
3. Select **"Open with Live Server"**.

### Option 3: Using Python
If you have Python installed:
1. Open your terminal in this folder.
2. Run `python -m http.server 8000`.
3. Open `http://localhost:8000` in your browser.

---

## 🌐 How to Run on HTTPS
When you deploy this website to a hosting provider (like Vercel, Netlify, or GitHub Pages), they will automatically provide an **HTTPS** connection for you. 

For local development with HTTPS, Vite can be configured with a plugin like `@vitejs/plugin-basic-ssl`, but it is usually not necessary for a portfolio website.

---

## 📦 Standalone Version
If you need a version that works **without** any setup, I have provided a `standalone.html` file in this project. You can open that file directly in any browser, although a local server is still recommended for the best experience.
