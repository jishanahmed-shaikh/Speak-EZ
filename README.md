<div align="center">
  <img src="public/Icon.jpg" alt="SpeakEZ Logo" width="120" height="120" style="border-radius: 20px;">
  
  # 🗣️ SpeakEZ
  
  **Empowering Communication Through Technology** 💬✨
  
  A mobile-first, accessible web application designed to empower non-verbal users to communicate effectively using Text-to-Speech (TTS), intelligent suggestions, and contextual phrase buttons.
  
  ![Next.js](https://img.shields.io/badge/Next.js-15.4.1-black?style=for-the-badge&logo=next.js&logoColor=white)
  ![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)
  ![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
  ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
  ![Vercel](https://img.shields.io/badge/Vercel-Deploy-000000?style=for-the-badge&logo=vercel&logoColor=white)
  
  ![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)
  ![Version](https://img.shields.io/badge/Version-0.1.0-blue?style=for-the-badge)
  ![Mobile First](https://img.shields.io/badge/Mobile-First-FF6B6B?style=for-the-badge&logo=mobile&logoColor=white)
  ![Accessibility](https://img.shields.io/badge/Accessibility-Ready-4ECDC4?style=for-the-badge&logo=accessibility&logoColor=white)
</div>

---

## ✨ Features

🎯 **Core Functionality**
- 🗣️ **Text-to-Speech (TTS)** - Convert text to natural speech using Web Speech API
- 🧠 **Smart Suggestions** - AI-powered contextual phrase recommendations
- 📱 **Mobile-First Design** - Optimized for touch devices and mobile screens
- ♿ **Accessibility Ready** - WCAG compliant with proper contrast and touch targets
- 💾 **Offline Support** - LocalStorage for favorites and custom phrases
- 🚨 **Emergency Button** - Always accessible emergency communication

🎨 **User Experience**
- 🌈 **Customizable Interface** - Adjustable font sizes and contrast settings
- ⭐ **Favorites System** - Save frequently used phrases for quick access
- 🔄 **Smart Context** - Contextual phrase suggestions based on usage patterns
- 📝 **Custom Phrases** - Create and manage personalized communication sets

---

## 🚀 Getting Started

### 📦 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18 or higher) 🟢
- **npm** or **yarn** package manager 📦

### 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/speakez.git
   cd speakez
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) 🌐
   
   > 💡 **Pro Tip**: For the best experience, use mobile device emulation in your browser's dev tools or test on an actual mobile device!

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
