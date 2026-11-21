# Chikoti Pranav Kumar Portfolio

## Portfolio app

Run the site and contact endpoint together with `npm run dev:full` (`http://localhost:5173`, API on port 3001). Keep SMTP credentials only in the local `.env` or the backend host's secret settings. Use a newly generated Google App Password; never use a regular Gmail password or commit `.env`.

	Your supplied profile, project summaries, skills, education, experience, and achievements are entered in `src/data/portfolio.js`. Add a resume file path and avatar path when available. Repository and live demo URLs were not included, so case studies do not link to invented destinations. Add verified certificate URLs or images if you want to make the certification cards clickable.

	GitHub public repository and follower counts load from GitHub's public user API. LeetCode and CodeChef highlights use the supplied figures; LeetCode links to the profile, while no CodeChef URL was provided. No third-party stats service is used.

## Deploy

Build the frontend with `npm run build` and publish the `dist/` directory to a static host such as Vercel or Netlify. In that host's build environment, set `VITE_API_BASE_URL` to the public origin of the API, for example `https://your-api-service.onrender.com` (no trailing slash), then redeploy the frontend.

Deploy the Express API as a Node service from this repository with start command `npm run server`. On the backend host, set `CLIENT_ORIGIN` to the exact deployed frontend origin and configure `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASSWORD`, `CONTACT_TO`, and `CONTACT_FROM`. Never set SMTP credentials as `VITE_*` variables; those are included in browser code. The backend must allow outbound SMTP on port 465 for Gmail.

After both deploys, verify `https://your-api-service.onrender.com/api/health` returns `{"ok":true}`, then submit the contact form on the deployed frontend. A static-only deployment cannot send mail without the separate API service.

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
