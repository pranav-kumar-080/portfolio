# Chikoti Pranav Kumar Portfolio

## Portfolio app

Run the site and contact endpoint together with `npm run dev:full` (`http://localhost:5173`, API on port 3001). Gmail SMTP is configured in the local `.env` for `chikotipranavkumar@gmail.com`; set `SMTP_PASSWORD` to a Google App Password to enable delivery. Create one at https://myaccount.google.com/apppasswords (Google requires 2-Step Verification), then restart `npm run dev:full`. Do not use your regular Gmail password or commit `.env`.

	Your supplied profile, project summaries, skills, education, experience, and achievements are entered in `src/data/portfolio.js`. Add a resume file path and avatar path when available. Repository and live demo URLs were not included, so case studies do not link to invented destinations. Add verified certificate URLs or images if you want to make the certification cards clickable.

	GitHub public repository and follower counts load from GitHub's public user API. LeetCode and CodeChef highlights use the supplied figures; LeetCode links to the profile, while no CodeChef URL was provided. No third-party stats service is used.

Run `npm run build` for the static `dist/` output. Deploy the Express API separately and configure the production API URL and SMTP environment variables on the server.

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
