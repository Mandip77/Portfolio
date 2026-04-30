# 🌐 Personal Developer Portfolio

Welcome to my personal developer portfolio! This is a responsive web application built with **React.js** to showcase my skills, projects, and contact information in a professional and interactive way.

## ✨ Features

- **Hero Section:** Eye-catching introduction with name, title, and call-to-action.
- **About Section:** A brief summary about me and my background.
- **Skills Section:** Visual display of technical skills with animated progress bars.
- **Projects Section:** Project cards with descriptions, links, and responsive layout.
- **Contact Section:** Validated contact form with real-time feedback and accessibility improvements.
- **Navigation & Footer:** Accessible navigation and styled footer with dynamic year.
- **Robustness & Performance:** Error boundary, lazy-loading for sections, scroll-triggered animations, and optimized media loading.

## 🛠️ Tech Stack

- **Frontend:** React.js (React 18)
- **Styling:** styled-components via `GlobalStyles.js` (project uses styled-components rather than `App.css`)
- **Hooks:** Custom hooks in `src/hooks/` (e.g., `useIntersectionObserver`)
- **Icons:** React Icons
- **Forms:** Client-side validation (built-in) and optional EmailJS for submissions

## 📁 Project Structure

Typical structure (`react/myprofile/src`):

- `components/`: UI components (About, Contact, Footer, Hero, Navigation, Projects, Skills, etc.)
- `hooks/`: custom hooks such as `useIntersectionObserver.js`
- `App.js`: application bootstrap (uses `ErrorBoundary` and lazy-loaded sections)
- `index.js`: React entry point
- `GlobalStyles.js`: styled-components global styles


## 🚀 Getting Started

1. Clone the repository

```bash
git clone https://github.com/yourusername/your-portfolio.git
cd your-portfolio/react/myprofile
```
2. Install dependencies

```bash
npm install
```
3. Start the development server

```bash
npm start
```

Open http://localhost:3000 to view the app.

### Testing

Run unit tests:

```bash
npm test
```

### Deployment

Deploy to Netlify, Vercel, or GitHub Pages. Build for production:

```bash
npm run build
```

Then follow your chosen host's deployment instructions.

### EmailJS (client-side) setup

This project currently sends contact form submissions via EmailJS using the EmailJS REST API. EmailJS keys are required at build time so they end up in the static bundle the site serves.

1. Obtain keys from EmailJS:

	- `service_id` (REACT_APP_EMAILJS_SERVICE_ID)
	- `template_id` (REACT_APP_EMAILJS_TEMPLATE_ID)
	- `public_key` (REACT_APP_EMAILJS_PUBLIC_KEY)

2. Locally: copy `.env.example` to `.env` and fill in the values, then run `npm run build` or `npm start`.

3. For GitHub Pages builds (recommended): add the three values as repository secrets and inject them during your CI build (for example, set environment variables in your GitHub Actions workflow) so the built static files include the configuration.

4. Example `.env` (do not commit):

```env
REACT_APP_EMAILJS_SERVICE_ID=service_xxx
REACT_APP_EMAILJS_TEMPLATE_ID=template_xxx
REACT_APP_EMAILJS_PUBLIC_KEY=public_xxx
```

Security note: the EmailJS public key is intended to be public for client-side use, but do not commit any secret admin keys. If you prefer not to expose keys at all, use a server-side relay instead (not applicable for GitHub Pages without an external host).


📸 Preview

📬 Contact

Feel free to connect with me via the Contact section on the site or reach out via [your email or LinkedIn].
📄 License

This project is open source and available under the MIT License.

Made with ❤️ by Mandip Amgain

---

Let me know if you'd like help adding deployment instructions (e.g., Netlify, GitHub Pages) or customizing content like your project list or contact form.
