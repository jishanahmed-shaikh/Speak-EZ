# 🗣️ SpeakEZ - Giving Voice to the Voiceless


<div align="center">
  <img src="public/Icon.jpg" alt="SpeakEZ Logo" width="150" height="150" style="border-radius: 20px;">
  
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
   git clone https://github.com/jishanahmed-shaikh/Speak-EZ.git
   cd Speak-EZ
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

### 🔧 Development Testing

- **DevTools Emulation**: Use `Ctrl+Shift+M` (Chrome/Edge/Firefox) to toggle device toolbar 📲
- **Touch Targets**: All interactive elements are minimum 44x44px for optimal touch accessibility 👆
- **TTS Testing**: Test speech functionality by typing text or tapping phrase buttons 🎵
- **Responsive Design**: Verify layouts work across different screen sizes (320px - 1200px+) 📐

### 📋 Testing Checklist

- [ ] TTS functionality works on target devices 🔊
- [ ] All buttons are easily tappable on mobile 📱
- [ ] Emergency button is always accessible 🚨
- [ ] Favorites save and load correctly 💾
- [ ] Smart suggestions appear contextually 🧠
- [ ] Offline functionality works without internet 🌐

---

## 🧠 AI Integration & Voice Models

### 🎤 Default TTS Engine

The application uses the browser's built-in **Web Speech API** for Text-to-Speech functionality by default - no additional setup required! 🎯

### 🤖 AI-Powered Smart Suggestions

Currently integrated with **Groq SDK** for intelligent phrase suggestions. The app supports multiple AI providers:

- **🟢 Groq** (Current) - Fast inference for real-time suggestions
- **🔵 OpenAI GPT-4** - Advanced language understanding
- **🟡 Google Gemini** - Multimodal AI capabilities
- **🟣 Custom Models** - Bring your own AI endpoint

### ⚙️ Configuration Guide

**Smart Suggestions Setup:**

```typescript
// src/components/SmartSuggestions.tsx
// Replace the placeholder with your preferred AI service
const suggestions = await yourAIService.generateSuggestions(context);
```

**Custom TTS Engine:**

```typescript
// src/components/TTSInput.tsx  
// Swap out Web Speech API with your preferred TTS service
const speak = (text: string) => {
  // Your custom TTS implementation here
};
```

### 🔑 Environment Variables

Create a `.env.local` file for API keys:

```env
GROQ_API_KEY=your_groq_api_key_here
OPENAI_API_KEY=your_openai_api_key_here
GOOGLE_AI_KEY=your_google_ai_key_here
```

---

## 🛠️ Customization & Development

### 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx          # 🏠 Main application layout
│   ├── globals.css       # 🎨 Global styles & Tailwind imports
│   └── layout.tsx        # 📱 Root layout configuration
├── components/           # 🧩 Reusable UI components
│   ├── TTSInput.tsx     # 🎤 Text-to-Speech input component
│   ├── SmartSuggestions.tsx # 🧠 AI-powered suggestions
│   └── ...              # 📦 Other modular components
├── hooks/               # 🪝 Custom React hooks
├── types/               # 📝 TypeScript type definitions
├── data/                # 📊 Static data and configurations
└── assets/              # 🖼️ Images, icons, and media files
```

### 🎨 Styling & Theming

- **Global Styles**: `src/app/globals.css` - Base styles and Tailwind imports
- **Component Styles**: Tailwind CSS classes for responsive design
- **Custom Themes**: Modify CSS variables for color schemes and typography
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

### 🔧 Key Customization Points

- **🏠 Layout Changes**: `src/app/page.tsx` - Main app structure and features
- **🧩 UI Components**: `src/components/` - Modular, reusable interface elements  
- **🎨 Visual Design**: Tailwind config and CSS variables for branding
- **📱 Mobile Optimization**: Touch targets, gestures, and mobile-specific features

---

## 🧪 Testing & Quality Assurance

### 🔍 Manual Testing

- **🖱️ Desktop Testing**: Verify all functionality works with mouse and keyboard
- **📱 Mobile Testing**: Test on actual devices or browser emulation
- **♿ Accessibility Testing**: Screen readers, keyboard navigation, color contrast
- **🔊 Audio Testing**: TTS functionality across different browsers and devices

### 🤖 Automated Testing (Recommended Setup)

```bash
# Install testing dependencies
npm install --save-dev @testing-library/react @testing-library/jest-dom jest

# Run tests
npm test
```

**Suggested Testing Libraries:**

- **Jest** - Unit testing framework 🧪
- **React Testing Library** - Component testing utilities 🔬
- **Cypress** - End-to-end testing 🎯
- **Axe** - Accessibility testing 🦮

### 📊 Performance Testing

- **Lighthouse** - Performance, accessibility, and SEO audits 🚀
- **Web Vitals** - Core web performance metrics 📈
- **Mobile Performance** - Test on slower devices and networks 📶

---

## 🚀 Deployment

### ☁️ Deploy on Vercel (Recommended)

**Quick Deploy:**
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/speakez)

**Manual Deployment:**

1. **📤 Push to Repository**

   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **🔗 Connect to Vercel**
   - Visit [vercel.com/new](https://vercel.com/new)
   - Import your GitHub/GitLab repository
   - Vercel will auto-detect Next.js configuration

3. **⚙️ Environment Variables**

   ```env
   GROQ_API_KEY=your_groq_api_key
   OPENAI_API_KEY=your_openai_api_key
   NEXT_PUBLIC_APP_URL=https://your-app.vercel.app
   ```

4. **🎉 Deploy**
   - Click **Deploy** button
   - Your app will be live in minutes!

### 🌐 Alternative Deployment Options

- **Netlify** - Static site hosting with serverless functions 🟢
- **Railway** - Full-stack deployment platform 🚂  
- **AWS Amplify** - Scalable cloud hosting ☁️
- **Docker** - Containerized deployment 🐳

### 📈 Production Checklist

- [ ] Environment variables configured 🔑
- [ ] Custom domain setup (optional) 🌐
- [ ] Analytics integration 📊
- [ ] Error monitoring (Sentry, LogRocket) 🐛
- [ ] Performance monitoring 🚀

---

## �  Technical Notes & Architecture

### 💾 Data Storage

- **LocalStorage**: Favorites and custom phrases persist offline 🔄
- **Session Management**: User preferences maintained across browser sessions
- **Data Privacy**: All user data stays on device - no external storage 🔒

### ♿ Accessibility Features

- **WCAG 2.1 AA Compliant**: Meets international accessibility standards ✅
- **Screen Reader Support**: Semantic HTML and ARIA labels 🔊
- **Keyboard Navigation**: Full functionality without mouse 🎹
- **High Contrast Mode**: Enhanced visibility options 🌓
- **Touch Accessibility**: 44px minimum touch targets 👆

### 🏗️ Architecture Highlights

- **React 19**: Latest React features with concurrent rendering ⚛️
- **Next.js 15**: App Router with server components 🏃‍♂️
- **TypeScript**: Type-safe development experience 📝
- **Tailwind CSS 4**: Utility-first styling with modern features 🎨
- **Web Speech API**: Native browser TTS integration 🗣️

---

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### 🐛 Bug Reports

Found a bug? Please [open an issue](https://github.com/jishanahmed-shaikh/Speak-EZ/issues) with:

- Clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Browser/device information

### ✨ Feature Requests  

Have an idea? [Create a feature request](https://github.com/jishanahmed-shaikh/Speak-EZ/issues) with:

- Detailed description of the feature
- Use case and benefits
- Mockups or examples (if applicable)

### 🔧 Pull Requests

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Web Speech API** - For native browser TTS support 🎤
- **Tailwind CSS** - For beautiful, responsive styling 🎨
- **Next.js Team** - For the amazing React framework 🚀
- **Accessibility Community** - For guidance on inclusive design ♿
- **Contributors** - Thank you to everyone who helps improve SpeakEZ! 👥

---

<div align="center">
  
  **Made with ❤️ for the Specially-Abled Community**
  
  [🌟 Star this repo](https://github.com/jishanahmed-shaikh/Speak-EZ) • [🐛 Report Bug](https://github.com/jishanahmed-shaikh/Speak-EZ/issues) • [💡 Request Feature](https://github.com/jishanahmed-shaikh/Speak-EZ/issues)
  
  ---
  
  *Empowering Communication, One voice at a time* 🗣️✨
  
</div>
