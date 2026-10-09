# JEEVA K — Professional Developer Portfolio

A modern, fast, responsive developer portfolio website built for **JEEVA K**, a final-year Computer Science and Engineering student at Er. Perumal Manimekalai College of Engineering (PMC Tech), Hosur, seeking entry-level IT and software engineering opportunities.

---

## 🌟 Highlights & Features

- **Accurate Resume Reflection**: Directly populated from Jeeva's resume with 100% factual accuracy (education, CGPA 7.53*, 2 Python internships, 9 certifications, 2 machine learning projects).
- **Modern Developer Aesthetic**: Dark navy hero section (`#0a192f`) paired with clean white/slate content sections, subtle gradients, and glassmorphic navigation.
- **Sticky Navigation**: Smooth scrolling to `#home`, `#about`, `#skills`, `#education`, `#experience`, `#projects`, `#certifications`, `#contact`, active section scroll spy, and mobile drawer menu.
- **Direct Resume Download**: Working Download button in both Navbar and Hero downloading the original PDF (`Jeeva_K_Resume.pdf`).
- **Deep-Dive Project Modals**: Complete architecture workflows and machine learning breakdowns for both the **Multimodal Alzheimer's Diagnostic Web Application** (VGG16 + B-GWO + SVM) and the **Phishing Detection System** (Text Preprocessing + Logistic Regression / Decision Tree).
- **Categorized Skills**: Verified skills organized without arbitrary proficiency ratings.
- **Interactive Contact Form**: Client-validated form (Name, Email, Subject, Message) triggering native `mailto:` links with clear status feedback.
- **Centralized Data Management**: All facts, links, and content are maintained in a single TypeScript file (`src/data/portfolioData.ts`).

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Build Tool**: [Vite 6](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 3.4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/) + Custom Scalable Brand Icons
- **Typography**: Inter / Plus Jakarta Sans

---

## 📁 Project Directory Structure

```text
jeeva-portfolio/
├── public/
│   ├── favicon.svg             # Developer brand SVG favicon
│   └── Jeeva_K_Resume.pdf      # Original resume PDF available for download
├── src/
│   ├── components/
│   │   ├── About.tsx           # Bio, career objective, strengths, academic trivia
│   │   ├── Certifications.tsx  # 9 verified credentials with category filter tabs
│   │   ├── Contact.tsx         # Direct contacts + validated contact inquiry form
│   │   ├── Education.tsx       # B.E. CSE, HSC, SSLC timeline cards
│   │   ├── Experience.tsx      # Growwpark, Apollo & VEI training roles
│   │   ├── Footer.tsx          # Minimal footer with copyright & quick links
│   │   ├── Hero.tsx            # Navy hero, developer Python card & call-to-actions
│   │   ├── Navbar.tsx          # Sticky glassmorphic nav with mobile drawer
│   │   ├── ProjectModal.tsx    # Detailed ML pipeline architecture modal
│   │   ├── Projects.tsx        # Featured project cards
│   │   ├── ScrollToTop.tsx     # Floating return-to-top button
│   │   └── SocialIcons.tsx     # Crisp SVG icons for GitHub and LinkedIn
│   ├── data/
│   │   └── portfolioData.ts    # Centralized data store for all portfolio facts
│   ├── App.tsx                 # Root component with scroll observer
│   ├── index.css               # Tailwind CSS directives and custom scrollbar
│   └── main.tsx                # Application mounting point
├── index.html                  # SEO meta tags, Open Graph data, fonts
├── tailwind.config.js          # Custom navy & brand colors configuration
├── postcss.config.js           # PostCSS setup
├── package.json
└── tsconfig.json
```

---

## 🚀 How to Run on Windows

### 1. Prerequisites
Ensure [Node.js](https://nodejs.org/) (v18 or higher) is installed. Check with:
```powershell
node -v
npm -v
```

### 2. Start the Development Server
```powershell
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production
To create an optimized production build:
```powershell
npm run build
```
This generates compiled, minified static files in the `dist/` directory.

### 4. Preview the Production Build Locally
```powershell
npm run preview
```

---

## 📝 How to Update Resume & Content

### To replace the Resume PDF:
1. Copy your new PDF file into the `public/` directory.
2. Name it `Jeeva_K_Resume.pdf` (or update `resumeFileName` and `resumeDownloadPath` in `src/data/portfolioData.ts`).

### To update text, projects, or links:
Edit `src/data/portfolioData.ts`:
- **Personal info**: Name, email, phone number, LinkedIn, GitHub URLs.
- **Projects**: Add new projects or update technical descriptions.
- **Skills**: Add or remove skills within their respective categories.
- **Certifications**: Add new verified certificates.

---

## 🌐 Deployment Instructions

### Option 1: Deploy to Vercel (Recommended, Free & 1-Click)
1. Push your repository to GitHub:
   ```powershell
   git init
   git add .
   git commit -m "Initial commit of Jeeva K portfolio"
   git branch -M main
   git remote add origin https://github.com/Jeeva3542/Jeeva-Portfolio.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
3. Click **Add New Project** and select `Jeeva-Portfolio`.
4. Leave defaults (Framework: Vite, Build command: `npm run build`, Output directory: `dist`).
5. Click **Deploy**. Your portfolio will be live in under 1 minute.

### Option 2: Deploy to GitHub Pages
1. In `vite.config.ts`, set the base path to your repository name:
   ```ts
   export default defineConfig({
     base: '/Jeeva-Portfolio/',
     plugins: [react()],
   })
   ```
2. Install `gh-pages`:
   ```powershell
   npm install -D gh-pages
   ```
3. Add deployment scripts to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
4. Run `npm run deploy`.

### Option 3: Deploy to Netlify
1. Sign in to [netlify.com](https://netlify.com).
2. Connect your GitHub repository.
3. Build command: `npm run build`, Publish directory: `dist`.
4. Click **Deploy Site**.

---

## 🔒 Authenticity & Verification Notes
- **Source of Truth**: Populated strictly from Jeeva K's uploaded resume and desktop certificates.
- **Excluded Details**: As requested, the zonal football achievement was excluded, and no fake percentages, ratings, or repository URLs were generated.
- **Contact Integrity**: Contact form validates inputs and uses direct `mailto:` protocol without assuming unconfigured email servers.
