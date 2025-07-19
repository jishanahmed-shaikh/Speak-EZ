# SpeakEZ

A mobile-first, accessible web app to empower non-verbal users to communicate using Text-to-Speech (TTS), smart suggestions, and contextual phrase buttons.

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) on your browser (preferably on a mobile device or using device emulation in browser dev tools).

---

## 📱 Mobile-First Testing
- Use Chrome/Edge/Firefox DevTools → Toggle Device Toolbar (Ctrl+Shift+M) to simulate mobile screens.
- All buttons are at least 44x44px for touch accessibility.
- Test TTS by typing or tapping phrase buttons.

---

## 🧠 Voice Model Integration
- The app uses the browser's built-in Web Speech API for TTS by default.
- **To connect to Google Gemini, OpenAI GPT-4, or other voice models:**
  - See `src/components/SmartSuggestions.tsx` for the placeholder where you can call your API and set suggestions.
  - See `src/components/TTSInput.tsx` for where to swap out the TTS engine.

---

## 🛠️ Customization
- Edit `src/app/page.tsx` to change layout or add features.
- Edit `src/components/` for modular UI and logic.
- Edit `src/app/globals.css` and Tailwind config for styles.

---

## 🧪 Testing
- Manual: Interact with all features in the browser, especially on mobile.
- Automated: Add tests using your preferred React/Next.js testing library.

---

## ☁️ Deploy on Vercel
1. Push your code to GitHub/GitLab.
2. Go to [vercel.com/new](https://vercel.com/new) and import your repo.
3. Set up environment variables if needed (for AI APIs, etc).
4. Click **Deploy**.

---

## 📝 Notes
- Favorites and custom phrases are stored in LocalStorage for offline support.
- Accessibility: Font size and contrast toggles are scaffolded for future implementation.
- Emergency button is always visible and accessible.

---

For questions or contributions, open an issue or PR!
