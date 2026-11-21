# Chikoti Pranav Kumar Portfolio

## Portfolio app

Run the site and contact endpoint together with `npm run dev:full` (`http://localhost:5173`, API on port 3001). Keep SMTP credentials only in the local `.env` or the backend host's secret settings. Use a newly generated Google App Password; never use a regular Gmail password or commit `.env`.

	Your supplied profile, project summaries, skills, education, experience, and achievements are entered in `src/data/portfolio.js`. Add a resume file path and avatar path when available. Repository and live demo URLs were not included, so case studies do not link to invented destinations. Add verified certificate URLs or images if you want to make the certification cards clickable.

	GitHub public repository and follower counts load from GitHub's public user API. LeetCode and CodeChef highlights use the supplied figures; LeetCode links to the profile, while no CodeChef URL was provided. No third-party stats service is used.

## Deploy

Vercel detects Node functions in the root `api/` directory and deploys them with the Vite site. Push to `main` and wait for the deployment. In Vercel project settings, add these environment variables for Production (and Preview if needed): `SMTP_HOST=smtp.gmail.com`, `SMTP_PORT=465`, `SMTP_SECURE=true`, `SMTP_USER=chikotipranavkumar@gmail.com`, `SMTP_PASSWORD` (a newly generated Google App Password), `CONTACT_TO=chikotipranavkumar@gmail.com`, and `CONTACT_FROM=chikotipranavkumar@gmail.com`.

Do not set `VITE_API_BASE_URL` for this same-origin Vercel deployment. Do not prefix SMTP variables with `VITE_`; those are exposed to browser code. Redeploy after adding or changing environment variables. Verify `https://portfolio-murex-six-z2gf30w3xr.vercel.app/api/health` returns `{"ok":true}`, then submit the contact form. Vercel's Node runtime permits authenticated SMTP on port 465, and the function awaits delivery before responding.

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
