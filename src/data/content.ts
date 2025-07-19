import { Translations, Language, Category } from "@/types";

export const FAVORITES_KEY = "speakez_favorites";

export const LANGUAGES: Language[] = [
  { code: "en", label: "English" },
  { code: "mr", label: "Marathi" },
  { code: "hi", label: "Hindi" },
  { code: "fr", label: "French" },
  { code: "es", label: "Spanish" },
  { code: "ar", label: "Arabic" },
  { code: "zh", label: "Chinese" },
  { code: "de", label: "German" },
];

export const TRANSLATIONS: Translations = {
  en: {
    // Navigation
    home: "Home",
    suggestions: "Suggestions",
    favorites: "Favorites",
    access: "Accessibility",
    sos: "Emergency",
    about: "About",
    profile: "Profile",

    // Home View
    speak: "Speak",
    typeMessage: "Type your message...",
    addToFavorites: "Add to favorites",
    removeFromFavorites: "Remove from favorites",

    // Favorites View
    noFavorites: "No favorites yet. Tap the star on a phrase to save it here.",

    // Accessibility View
    adjustFont: "Adjust font size and contrast for better accessibility.",
    chooseLang: "Choose Language",
    fontSize: "Font Size",
    contrast: "Contrast",
    preview: "Preview",
    lightMode: "Light Mode",
    darkMode: "Dark Mode",
    fontSizeSmall: "Small",
    fontSizeNormal: "Normal",
    fontSizeLarge: "Large",
    currentSize: "Current",
    
    // SOS/Emergency View
    needHelp: "Need urgent help?",
    callForHelp: "Call for Help",
    alertMsg: "This will alert your emergency contact or nearby assistance.",
    locationStatusGetting: 'Getting your location...',
    locationStatusError: 'Unable to get location',
    locationStatusSuccess: '📍 Location:',
    selectEmergencyMessage: 'Select emergency message:',
    sendLocation: 'Send Location',
    flashing: 'Flashing...',
    flashAlert: 'Flash Alert',
    vibrating: 'Vibrating...',
    vibrateAlert: 'Vibrate Alert',
    quickContacts: 'Quick Emergency Contacts:',
    contact911: '📞 911',
    contactMedical: '🏥 Medical',
    emergencyContacts: 'Emergency Contacts',
    alert: 'Alert',
    locationShare: 'Location Share',
    locationShareDesc: 'Share your location with contacts',
    visualAlert: 'Visual Alert',
    visualAlertDesc: 'Flash screen for attention',
    vibrateAlertDesc: 'SOS vibration pattern',
    preWritten: 'Pre-written',
    preWrittenDesc: 'Quick emergency messages',

    // About View
    aboutTitle: "About SpeakEZ",
    ourMission: "Our Mission",
    missionText: "SpeakEZ is designed to break down communication barriers for people with Speech Disabilities. We believe that technology should empower all users, regardless of their abilities or language preferences.",
    keyFeatures: "Key Features",
    feature1: "Text-to-Voice conversion",
    feature2: "Multi-language support for Global accessibility",
    feature3: "Customizable interface with dark/light themes",
    feature4: "Emergency SOS functionality",
    feature5: "Favorite & Frequently used phrases for quick communication",
    accessibilityFirst: "Accessibility First",
    accessibilityText: "SpeakEZ ensures that users with Speech Disabilities can communicate effectively. Our interface is simple and optimized for screen readers and touch accessibility.",
    appVersion: "SpeakEZ v1.0",
    appTagline: "Making communication accessible for everyone with Speech Disabilities",

    // Content
    emergencyMessages: [
        "🚨 EMERGENCY: I need immediate help! Please call 911 and come to my location.",
        "🚨 MEDICAL EMERGENCY: I'm having a medical emergency. Please send help immediately.",
        "🚨 DANGER: I'm in danger and cannot speak. Please call police immediately.",
        "🚨 HELP: I need assistance. I am mute and cannot call. Please help me.",
        "🚨 ACCIDENT: I've been in an accident. Please send medical help to my location."
    ],
    suggestionPhrases: [
      "Good morning!",
      "Can I have breakfast?",
      "How are you?",
      "Thank you!",
      "Excuse me!",
      "Where is the restroom?",
      "Can you help me?",
      "I need directions.",
      "I feel sick.",
      "Nice to meet you."
    ],
    categories: [
      { name: "Greetings & Introductions", phrases: ["Hello!", "Good morning!", "How are you?", "Nice to meet you.", "Goodbye!", "See you soon!", "What's up?", "Long time no see!", "Take care!", "Have a nice day!"] },
      { name: "Food & Dining", phrases: ["I'm hungry.", "Can I have some water?", "Can I have lunch?", "I can't eat this.", "Can I have a menu?", "Is this vegetarian?", "Can I have the bill?", "This is delicious!", "No sugar, please.", "Can I have more?"] },
      { name: "Emergency & Health", phrases: ["I need help!", "Call 911!", "I'm lost.", "I feel sick.", "Please stay with me.", "I need a doctor!", "My phone is lost.", "I can't breathe.", "Where is the hospital?", "Help me, please!"] },
      { name: "Travel & Directions", phrases: ["Where is the restroom?", "Where is the bus stop?", "How much is the fare?", "I need directions.", "Can you help me?", "Is this seat taken?", "How long is the ride?", "Where do I buy tickets?", "Is this the right train?", "What time is it?"] },
      { name: "Shopping & Services", phrases: ["How much is this?", "Do you accept cards?", "Can I try this on?", "Is there a discount?", "Where is the fitting room?", "Can I return this?", "Do you have this in another size?", "It's too expensive.", "Can you gift wrap this?", "Thank you for your help!"] },
    ]
  },
  hi: {
    // Navigation
    home: "होम",
    suggestions: "सुझाव",
    favorites: "पसंदीदा",
    access: "सुलभता",
    sos: "आपातकालीन",
    about: "हमारे बारे में",
    profile: "प्रोफ़ाइल",

    // Home View
    speak: "बोलें",
    typeMessage: "अपना संदेश लिखें...",
    addToFavorites: "पसंदीदा में जोड़ें",
    removeFromFavorites: "पसंदीदा से हटाएँ",

    // Favorites View
    noFavorites: "अभी तक कोई पसंदीदा नहीं। वाक्यांश को सहेजने के लिए स्टार टैप करें।",

    // Accessibility View
    adjustFont: "बेहतर सुलभता के लिए फ़ॉन्ट आकार और कंट्रास्ट समायोजित करें।",
    chooseLang: "भाषा चुनें",
    fontSize: "फ़ॉन्ट आकार",
    contrast: "कंट्रास्ट",
    preview: "पूर्वावलोकन",
    lightMode: "लाइट मोड",
    darkMode: "डार्क मोड",
    fontSizeSmall: "छोटा",
    fontSizeNormal: "सामान्य",
    fontSizeLarge: "बड़ा",
    currentSize: "वर्तमान",

    // SOS/Emergency View
    needHelp: "आपातकालीन सहायता चाहिए?",
    callForHelp: "मदद के लिए कॉल करें",
    alertMsg: "यह आपके आपातकालीन संपर्क या पास के सहायता को सतर्क करेगा।",
    locationStatusGetting: 'आपका स्थान प्राप्त किया जा रहा है...',
    locationStatusError: 'स्थान प्राप्त करने में असमर्थ',
    locationStatusSuccess: '📍 स्थान:',
    selectEmergencyMessage: 'आपातकालीन संदेश चुनें:',
    sendLocation: 'स्थान भेजें',
    flashing: 'फ्लैश हो रहा है...',
    flashAlert: 'फ्लैश अलर्ट',
    vibrating: 'कंपन हो रहा है...',
    vibrateAlert: 'कंपन अलर्ट',
    quickContacts: 'त्वरित आपातकालीन संपर्क:',
    contact911: '📞 112',
    contactMedical: '🏥 चिकित्सा',
    emergencyContacts: 'आपातकालीन संपर्क',
    alert: 'सतर्क',
    locationShare: 'स्थान साझा करें',
    locationShareDesc: 'संपर्कों के साथ अपना स्थान साझा करें',
    visualAlert: 'दृश्य अलर्ट',
    visualAlertDesc: 'ध्यान आकर्षित करने के लिए स्क्रीन फ्लैश करें',
    vibrateAlertDesc: 'एसओएस कंपन पैटर्न',
    preWritten: 'पहले से लिखे',
    preWrittenDesc: 'त्वरित आपातकालीन संदेश',

    // About View
    aboutTitle: "SpeakEZ के बारे में",
    ourMission: "हमारा मिशन",
    missionText: "SpeakEZ को संचार बाधाओं को तोड़ने और डिजिटल इंटरैक्शन को सभी के लिए सुलभ बनाने के लिए डिज़ाइन किया गया है। हमारा मानना ​​है कि प्रौद्योगिकी को सभी उपयोगकर्ताओं को उनकी क्षमताओं या भाषा वरीयताओं की परवाह किए बिना सशक्त बनाना चाहिए।",
    keyFeatures: "मुख्य विशेषताऐं",
    feature1: "वॉयस-टू-टेक्स्ट और टेक्स्ट-टू-वॉयस रूपांतरण",
    feature2: "वैश्विक पहुंच के लिए बहु-भाषा समर्थन",
    feature3: "डार्क/लाइट थीम के साथ अनुकूलन योग्य इंटरफ़ेस",
    feature4: "आपातकालीन एसओएस कार्यक्षमता",
    feature5: "त्वरित संचार के लिए पसंदीदा वाक्यांश",
    accessibilityFirst: "पहुंच सबसे पहले",
    accessibilityText: "सार्वभौमिक डिजाइन सिद्धांतों के साथ निर्मित, SpeakEZ यह सुनिश्चित करता है कि विभिन्न क्षमताओं वाले उपयोगकर्ता प्रभावी ढंग से संवाद कर सकें। हमारा इंटरफ़ेस स्क्रीन रीडर, वॉयस नेविगेशन और टच एक्सेसिबिलिटी के लिए अनुकूलित है।",
    appVersion: "SpeakEZ v1.0",
    appTagline: "संचार को सभी के लिए सुलभ बनाना",

    // Content
    emergencyMessages: [
        "🚨 आपातकाल: मुझे तत्काल मदद की आवश्यकता है! कृपया 112 पर कॉल करें और मेरे स्थान पर आएं।",
        "🚨 चिकित्सा आपातकाल: मुझे एक चिकित्सा आपातकाल है। कृपया तुरंत मदद भेजें।",
        "🚨 खतरा: मैं खतरे में हूं और बोल नहीं सकता। कृपया तुरंत पुलिस को बुलाएं।",
        "🚨 मदद: मुझे सहायता की आवश्यकता है। मैं मूक हूं और कॉल नहीं कर सकता। कृपया मेरी मदद करें।",
        "🚨 दुर्घटना: मेरी दुर्घटना हो गई है। कृपया मेरे स्थान पर चिकित्सा सहायता भेजें।"
    ],
    suggestionPhrases: [
      "सुप्रभात!",
      "क्या मैं नाश्ता कर सकता हूं?",
      "आप कैसे हैं?",
      "धन्यवाद!",
      "माफ़ कीजिए!",
      "शौचालय कहाँ है?",
      "क्या आप मेरी मदद कर सकते हैं?",
      "मुझे दिशा चाहिए।",
      "मैं बीमार महसूस कर रहा हूं।",
      "आपसे मिलकर खुशी हुई।"
    ],
    categories: [
      { name: "अभिवादन और परिचय", phrases: ["नमस्ते!", "सुप्रभात!", "आप कैसे हैं?", "आपसे मिलकर खुशी हुई।", "अलविदा!", "जल्दी मिलते हैं!", "क्या हाल है?", "बहुत दिनों बाद मिले!", "अपना ख्याल रखें!", "आपका दिन अच्छा हो!"] },
      { name: "भोजन और खाना", phrases: ["मुझे भूख लगी है।", "क्या मैं पानी ले सकता हूं?", "क्या मैं दोपहर का भोजन कर सकता हूं?", "मैं यह नहीं खा सकता।", "क्या मैं मेन्यू देख सकता हूं?", "क्या यह शाकाहारी है?", "क्या मैं बिल ले सकता हूं?", "यह स्वादिष्ट है!", "चीनी नहीं, कृपया।", "क्या मैं और ले सकता हूं?"] },
      { name: "आपातकाल और स्वास्थ्य", phrases: ["मुझे मदद चाहिए!", "112 को कॉल करें!", "मैं खो गया हूं।", "मैं बीमार महसूस कर रहा हूं।", "कृपया मेरे साथ रहें।", "मुझे डॉक्टर चाहिए!", "मेरा फोन खो गया है।", "मैं सांस नहीं ले पा रहा।", "अस्पताल कहाँ है?", "कृपया मेरी मदद करें!"] },
      { name: "यात्रा और दिशा", phrases: ["शौचालय कहाँ है?", "बस स्टॉप कहाँ है?", "किराया कितना है?", "मुझे दिशा चाहिए।", "क्या आप मेरी मदद कर सकते हैं?", "क्या यह सीट खाली है?", "यात्रा कितनी लंबी है?", "मैं टिकट कहाँ से खरीदूं?", "क्या यह सही ट्रेन है?", "समय क्या हुआ है?"] },
      { name: "खरीदारी और सेवाएं", phrases: ["यह कितने का है?", "क्या आप कार्ड लेते हैं?", "क्या मैं इसे पहन कर देख सकता हूं?", "क्या कोई छूट है?", "फिटिंग रूम कहाँ है?", "क्या मैं इसे वापस कर सकता हूं?", "क्या यह दूसरे साइज़ में है?", "यह बहुत महंगा है।", "क्या आप इसे गिफ्ट रैप कर सकते हैं?", "आपकी मदद के लिए धन्यवाद!"] },
    ]
  },
  fr: {
    // Navigation
    home: "Accueil",
    suggestions: "Suggestions",
    favorites: "Favoris",
    access: "Accessibilité",
    sos: "Urgence",
    about: "À propos",
    profile: "Profil",

    // Home View
    speak: "Parler",
    typeMessage: "Tapez votre message...",
    addToFavorites: "Ajouter aux favoris",
    removeFromFavorites: "Retirer des favoris",

    // Favorites View
    noFavorites: "Aucun favori pour l'instant. Appuyez sur l'étoile pour enregistrer une phrase ici.",

    // Accessibility View
    adjustFont: "Ajustez la taille de la police et le contraste pour une meilleure accessibilité.",
    chooseLang: "Choisir la langue",
    fontSize: "Taille de police",
    contrast: "Contraste",
    preview: "Aperçu",
    lightMode: "Mode Clair",
    darkMode: "Mode Sombre",
    fontSizeSmall: "Petit",
    fontSizeNormal: "Normal",
    fontSizeLarge: "Grand",
    currentSize: "Actuel",

    // SOS/Emergency View
    needHelp: "Besoin d'aide urgente?",
    callForHelp: "Appeler à l'aide",
    alertMsg: "Cela alertera votre contact d'urgence ou une assistance à proximité.",
    locationStatusGetting: 'Obtention de votre position...',
    locationStatusError: 'Impossible d\'obtenir la position',
    locationStatusSuccess: '📍 Position:',
    selectEmergencyMessage: 'Sélectionnez le message d\'urgence:',
    sendLocation: 'Envoyer la position',
    flashing: 'Clignotement...',
    flashAlert: 'Alerte Flash',
    vibrating: 'Vibration...',
    vibrateAlert: 'Alerte Vibreur',
    quickContacts: 'Contacts d\'urgence rapides:',
    contact911: '📞 112',
    contactMedical: '🏥 Médical',
    emergencyContacts: 'Contacts d\'urgence',
    alert: 'Alerter',
    locationShare: 'Partage de position',
    locationShareDesc: 'Partagez votre position avec vos contacts',
    visualAlert: 'Alerte visuelle',
    visualAlertDesc: 'Faire clignoter l\'écran pour attirer l\'attention',
    vibrateAlertDesc: 'Modèle de vibration SOS',
    preWritten: 'Pré-écrit',
    preWrittenDesc: 'Messages d\'urgence rapides',

    // About View
    aboutTitle: "À propos de SpeakEZ",
    ourMission: "Notre Mission",
    missionText: "SpeakEZ est conçu pour éliminer les barrières de communication et rendre l'interaction numérique accessible à tous. Nous pensons que la technologie doit autonomiser tous les utilisateurs, quelles que soient leurs capacités ou leurs préférences linguistiques.",
    keyFeatures: "Caractéristiques Clés",
    feature1: "Conversion de la voix en texte et du texte en voix",
    feature2: "Prise en charge multilingue pour une accessibilité mondiale",
    feature3: "Interface personnalisable avec des thèmes sombres/clairs",
    feature4: "Fonctionnalité SOS d'urgence",
    feature5: "Phrases favorites pour une communication rapide",
    accessibilityFirst: "L'accessibilité d'abord",
    accessibilityText: "Conçu selon des principes de conception universelle, SpeakEZ garantit que les utilisateurs ayant des capacités diverses peuvent communiquer efficacement. Notre interface est optimisée pour les lecteurs d'écran, la navigation vocale et l'accessibilité tactile.",
    appVersion: "SpeakEZ v1.0",
    appTagline: "Rendre la communication accessible à tous",

    // Content
    emergencyMessages: [
        "🚨 URGENCE : J'ai besoin d'une aide immédiate ! Veuillez appeler le 112 et venir à ma position.",
        "🚨 URGENCE MÉDICALE : J'ai une urgence médicale. Veuillez envoyer de l'aide immédiatement.",
        "🚨 DANGER : Je suis en danger et ne peux pas parler. Veuillez appeler la police immédiatement.",
        "🚨 AIDE : J'ai besoin d'assistance. Je suis muet et ne peux pas appeler. Aidez-moi s'il vous plaît.",
        "🚨 ACCIDENT : J'ai eu un accident. Veuillez envoyer une aide médicale à ma position."
    ],
    suggestionPhrases: [
      "Bonjour!",
      "Puis-je prendre le petit déjeuner?",
      "Comment allez-vous?",
      "Merci!",
      "Excusez-moi!",
      "Où sont les toilettes?",
      "Pouvez-vous m'aider?",
      "J'ai besoin d'indications.",
      "Je me sens malade.",
      "Enchanté de vous rencontrer."
    ],
    categories: [
      { name: "Salutations et Présentations", phrases: ["Bonjour!", "Bonne matinée!", "Comment allez-vous?", "Enchanté de vous rencontrer.", "Au revoir!", "À bientôt!", "Quoi de neuf?", "Ça fait longtemps!", "Prenez soin de vous!", "Bonne journée!"] },
      { name: "Nourriture et Restauration", phrases: ["J'ai faim.", "Puis-je avoir de l'eau?", "Puis-je déjeuner?", "Je ne peux pas manger ça.", "Puis-je voir le menu?", "Est-ce végétarien?", "Puis-je avoir l'addition?", "C'est délicieux!", "Sans sucre, s'il vous plaît.", "Puis-je en avoir plus?"] },
      { name: "Urgence et Santé", phrases: ["J'ai besoin d'aide!", "Appelez le 15!", "Je suis perdu.", "Je me sens malade.", "Restez avec moi, s'il vous plaît.", "J'ai besoin d'un médecin!", "Mon téléphone est perdu.", "Je ne peux pas respirer.", "Où est l'hôpital?", "Aidez-moi, s'il vous plaît!"] },
      { name: "Voyage et Directions", phrases: ["Où sont les toilettes?", "Où est l'arrêt de bus?", "Combien coûte le trajet?", "J'ai besoin d'indications.", "Pouvez-vous m'aider?", "Cette place est-elle libre?", "Combien de temps dure le trajet?", "Où acheter des billets?", "Est-ce le bon train?", "Quelle heure est-il?"] },
      { name: "Achats et Services", phrases: ["Combien ça coûte?", "Acceptez-vous les cartes?", "Puis-je l'essayer?", "Y a-t-il une remise?", "Où est la cabine d'essayage?", "Puis-je le retourner?", "L'avez-vous dans une autre taille?", "C'est trop cher.", "Pouvez-vous l'emballer?", "Merci pour votre aide!"] },
    ]
  },
  es: {
    // Navigation
    home: "Inicio",
    suggestions: "Sugerencias",
    favorites: "Favoritos",
    access: "Accesibilidad",
    sos: "Emergencia",
    about: "Acerca de",
    profile: "Perfil",

    // Home View
    speak: "Hablar",
    typeMessage: "Escribe tu mensaje...",
    addToFavorites: "Agregar a favoritos",
    removeFromFavorites: "Eliminar de favoritos",

    // Favorites View
    noFavorites: "Aún no hay favoritos. Toca la estrella para guardar una frase aquí.",

    // Accessibility View
    adjustFont: "Ajusta el tamaño de fuente y el contraste para una mejor accesibilidad.",
    chooseLang: "Elegir idioma",
    fontSize: "Tamaño de fuente",
    contrast: "Contraste",
    preview: "Vista previa",
    lightMode: "Modo Claro",
    darkMode: "Modo Oscuro",
    fontSizeSmall: "Pequeño",
    fontSizeNormal: "Normal",
    fontSizeLarge: "Grande",
    currentSize: "Actual",

    // SOS/Emergency View
    needHelp: "¿Necesitas ayuda urgente?",
    callForHelp: "Llamar por ayuda",
    alertMsg: "Esto alertará a tu contacto de emergencia o asistencia cercana.",
    locationStatusGetting: 'Obteniendo su ubicación...',
    locationStatusError: 'No se puede obtener la ubicación',
    locationStatusSuccess: '📍 Ubicación:',
    selectEmergencyMessage: 'Seleccione el mensaje de emergencia:',
    sendLocation: 'Enviar ubicación',
    flashing: 'Parpadeando...',
    flashAlert: 'Alerta de Flash',
    vibrating: 'Vibrando...',
    vibrateAlert: 'Alerta de Vibración',
    quickContacts: 'Contactos de emergencia rápidos:',
    contact911: '📞 911',
    contactMedical: '🏥 Médico',
    emergencyContacts: 'Contactos de emergencia',
    alert: 'Alertar',
    locationShare: 'Compartir ubicación',
    locationShareDesc: 'Comparte tu ubicación con tus contactos',
    visualAlert: 'Alerta visual',
    visualAlertDesc: 'Pantalla parpadeante para llamar la atención',
    vibrateAlertDesc: 'Patrón de vibración SOS',
    preWritten: 'Preescrito',
    preWrittenDesc: 'Mensajes de emergencia rápidos',

    // About View
    aboutTitle: "Acerca de SpeakEZ",
    ourMission: "Nuestra Misión",
    missionText: "SpeakEZ está diseñado para romper las barreras de comunicación y hacer que la interacción digital sea accesible para todos. Creemos que la tecnología debe empoderar a todos los usuarios, independientemente de sus habilidades o preferencias de idioma.",
    keyFeatures: "Características Clave",
    feature1: "Conversión de voz a texto y de texto a voz",
    feature2: "Soporte multilingüe para accesibilidad global",
    feature3: "Interfaz personalizable con temas oscuros/claros",
    feature4: "Funcionalidad SOS de emergencia",
    feature5: "Frases favoritas para una comunicación rápida",
    accessibilityFirst: "La accesibilidad primero",
    accessibilityText: "Construido con principios de diseño universal, SpeakEZ garantiza que los usuarios con diversas habilidades puedan comunicarse de manera efectiva. Nuestra interfaz está optimizada para lectores de pantalla, navegación por voz y accesibilidad táctil.",
    appVersion: "SpeakEZ v1.0",
    appTagline: "Haciendo la comunicación accesible para todos",

    // Content
    emergencyMessages: [
        "🚨 EMERGENCIA: ¡Necesito ayuda inmediata! Por favor llame al 911 y venga a mi ubicación.",
        "🚨 EMERGENCIA MÉDICA: Tengo una emergencia médica. Por favor envíe ayuda de inmediato.",
        "🚨 PELIGRO: Estoy en peligro y no puedo hablar. Por favor llame a la policía de inmediato.",
        "🚨 AYUDA: Necesito asistencia. Soy mudo y no puedo llamar. Por favor ayúdenme.",
        "🚨 ACCIDENTE: He tenido un accidente. Por favor envíe ayuda médica a mi ubicación."
    ],
    suggestionPhrases: [
      "¡Buenos días!",
      "¿Puedo desayunar?",
      "¿Cómo estás?",
      "¡Gracias!",
      "¡Disculpe!",
      "¿Dónde está el baño?",
      "¿Puedes ayudarme?",
      "Necesito direcciones.",
      "Me siento enfermo.",
      "Mucho gusto conocerte."
    ],
    categories: [
      { name: "Saludos y Presentaciones", phrases: ["¡Hola!", "¡Buenos días!", "¿Cómo estás?", "Mucho gusto conocerte.", "¡Adiós!", "¡Hasta pronto!", "¿Qué tal?", "¡Tanto tiempo sin verte!", "¡Cuídate!", "¡Que tengas buen día!"] },
      { name: "Comida y Restaurantes", phrases: ["Tengo hambre.", "¿Puedo tomar agua?", "¿Puedo almorzar?", "No puedo comer esto.", "¿Puedo ver el menú?", "¿Es vegetariano?", "¿Puedo pedir la cuenta?", "¡Está delicioso!", "Sin azúcar, por favor.", "¿Puedo tener más?"] },
      { name: "Emergencia y Salud", phrases: ["¡Necesito ayuda!", "¡Llama al 911!", "Estoy perdido.", "Me siento enfermo.", "Por favor quédate conmigo.", "¡Necesito un médico!", "Perdí mi teléfono.", "No puedo respirar.", "¿Dónde está el hospital?", "¡Ayúdame, por favor!"] },
      { name: "Viajes y Direcciones", phrases: ["¿Dónde está el baño?", "¿Dónde está la parada de autobús?", "¿Cuánto cuesta el boleto?", "Necesito direcciones.", "¿Puedes ayudarme?", "¿Está ocupado este asiento?", "¿Cuánto dura el viaje?", "¿Dónde compro boletos?", "¿Es este el tren correcto?", "¿Qué hora es?"] },
      { name: "Compras y Servicios", phrases: ["¿Cuánto cuesta esto?", "¿Aceptan tarjetas?", "¿Puedo probármelo?", "¿Hay descuento?", "¿Dónde está el probador?", "¿Puedo devolverlo?", "¿Lo tienen en otra talla?", "Es muy caro.", "¿Pueden envolverlo?", "¡Gracias por tu ayuda!"] },
    ]
  },
  ar: {
    // Navigation
    home: "الرئيسية",
    suggestions: "اقتراحات",
    favorites: "المفضلة",
    access: "إمكانية الوصول",
    sos: "الطوارئ",
    about: "حول",
    profile: "الملف الشخصي",

    // Home View
    speak: "تحدث",
    typeMessage: "اكتب رسالتك...",
    addToFavorites: "أضف إلى المفضلة",
    removeFromFavorites: "إزالة من المفضلة",

    // Favorites View
    noFavorites: "لا توجد مفضلات بعد. اضغط على النجمة لحفظ عبارة هنا.",

    // Accessibility View
    adjustFont: "قم بضبط حجم الخط والتباين لتحسين إمكانية الوصول.",
    chooseLang: "اختر اللغة",
    fontSize: "حجم الخط",
    contrast: "التباين",
    preview: "معاينة",
    lightMode: "الوضع المضيء",
    darkMode: "الوضع المظلم",
    fontSizeSmall: "صغير",
    fontSizeNormal: "عادي",
    fontSizeLarge: "كبير",
    currentSize: "الحالي",

    // SOS/Emergency View
    needHelp: "تحتاج إلى مساعدة عاجلة؟",
    callForHelp: "اتصل للمساعدة",
    alertMsg: "سيؤدي ذلك إلى تنبيه جهة الاتصال في حالات الطوارئ أو المساعدة القريبة.",
    locationStatusGetting: 'جاري الحصول على موقعك...',
    locationStatusError: 'غير قادر على الحصول على الموقع',
    locationStatusSuccess: '📍 الموقع:',
    selectEmergencyMessage: 'اختر رسالة الطوارئ:',
    sendLocation: 'إرسال الموقع',
    flashing: 'يومض...',
    flashAlert: 'تنبيه فلاش',
    vibrating: 'يهتز...',
    vibrateAlert: 'تنبيه اهتزاز',
    quickContacts: 'جهات اتصال الطوارئ السريعة:',
    contact911: '📞 123',
    contactMedical: '🏥 طبي',
    emergencyContacts: 'جهات اتصال الطوارئ',
    alert: 'تنبيه',
    locationShare: 'مشاركة الموقع',
    locationShareDesc: 'شارك موقعك مع جهات الاتصال',
    visualAlert: 'تنبيه مرئي',
    visualAlertDesc: 'وميض الشاشة لجذب الانتباه',
    vibrateAlertDesc: 'نمط اهتزاز SOS',
    preWritten: 'مكتوب مسبقًا',
    preWrittenDesc: 'رسائل طوارئ سريعة',

    // About View
    aboutTitle: "حول SpeakEZ",
    ourMission: "مهمتنا",
    missionText: "تم تصميم SpeakEZ لكسر حواجز الاتصال وجعل التفاعل الرقمي في متناول الجميع. نحن نؤمن بأن التكنولوجيا يجب أن تمكن جميع المستخدمين، بغض النظر عن قدراتهم أو تفضيلاتهم اللغوية.",
    keyFeatures: "الميزات الرئيسية",
    feature1: "تحويل الصوت إلى نص والنص إلى صوت",
    feature2: "دعم متعدد اللغات للوصول العالمي",
    feature3: "واجهة قابلة للتخصيص مع سمات داكنة/فاتحة",
    feature4: "وظيفة الطوارئ SOS",
    feature5: "عبارات مفضلة للتواصل السريع",
    accessibilityFirst: "إمكانية الوصول أولاً",
    accessibilityText: "تم تصميم SpeakEZ بمبادئ التصميم العالمي، ويضمن أن يتمكن المستخدمون ذوو القدرات المختلفة من التواصل بفعالية. تم تحسين واجهتنا لقارئات الشاشة والملاحة الصوتية وإمكانية الوصول باللمس.",
    appVersion: "SpeakEZ v1.0",
    appTagline: "جعل التواصل في متناول الجميع",

    // Content
    emergencyMessages: [
        "🚨 طوارئ: أحتاج إلى مساعدة فورية! يرجى الاتصال برقم الطوارئ والحضور إلى موقعي.",
        "🚨 طوارئ طبية: لدي حالة طبية طارئة. يرجى إرسال المساعدة على الفور.",
        "🚨 خطر: أنا في خطر ولا أستطيع التحدث. يرجى الاتصال بالشرطة على الفور.",
        "🚨 مساعدة: أحتاج إلى مساعدة. أنا أبكم ولا أستطيع الاتصال. الرجاء مساعدتي.",
        "🚨 حادث: لقد تعرضت لحادث. يرجى إرسال مساعدة طبية إلى موقعي."
    ],
    suggestionPhrases: [
      "صباح الخير!",
      "هل يمكنني تناول الإفطار؟",
      "كيف حالك؟",
      "شكراً!",
      "اعذرني!",
      "أين دورة المياه؟",
      "هل يمكنك مساعدتي؟",
      "أحتاج إلى الاتجاهات.",
      "أشعر بالمرض.",
      "تشرفنا بلقائك."
    ],
    categories: [
      { name: "التحيات والتعارف", phrases: ["مرحباً!", "صباح الخير!", "كيف حالك؟", "تشرفنا بلقائك.", "وداعاً!", "أراك قريباً!", "كيف الأحوال؟", "لم نرك منذ وقت طويل!", "اعتنِ بنفسك!", "أتمنى لك يوماً سعيداً!"] },
      { name: "الطعام والمطاعم", phrases: ["أنا جائع.", "هل يمكنني الحصول على بعض الماء؟", "هل يمكنني تناول الغداء؟", "لا أستطيع أكل هذا.", "هل يمكنني رؤية القائمة؟", "هل هذا نباتي؟", "هل يمكنني الحصول على الفاتورة؟", "هذا لذيذ!", "بدون سكر، من فضلك.", "هل يمكنني الحصول على المزيد؟"] },
      { name: "الطوارئ والصحة", phrases: ["أحتاج إلى مساعدة!", "اتصل بالاسعاف!", "أنا تائه.", "أشعر بالمرض.", "من فضلك ابق معي.", "أحتاج إلى طبيب!", "لقد فقدت هاتفي.", "لا أستطيع التنفس.", "أين المستشفى؟", "ساعدني، من فضلك!"] },
      { name: "السفر والاتجاهات", phrases: ["أين دورة المياه؟", "أين محطة الحافلات؟", "كم هي الأجرة؟", "أحتاج إلى الاتجاهات.", "هل يمكنك مساعدتي؟", "هل هذا المقعد محجوز؟", "كم تستغرق الرحلة؟", "أين أشتري التذاكر؟", "هل هذا هو القطار الصحيح؟", "كم الساعة؟"] },
      { name: "التسوق والخدمات", phrases: ["كم سعر هذا؟", "هل تقبلون البطاقات؟", "هل يمكنني تجربة هذا؟", "هل يوجد خصم؟", "أين غرفة القياس؟", "هل يمكنني إرجاع هذا؟", "هل لديكم هذا بمقاس آخر؟", "إنه غالي جداً.", "هل يمكنك تغليفه كهدية؟", "شكراً لمساعدتك!"] },
    ]
  },
  zh: {
    // Navigation
    home: "主页",
    suggestions: "建议",
    favorites: "收藏",
    access: "辅助功能",
    sos: "紧急情况",
    about: "关于",
    profile: "个人资料",

    // Home View
    speak: "说话",
    typeMessage: "输入您的消息...",
    addToFavorites: "添加到收藏",
    removeFromFavorites: "从收藏中删除",

    // Favorites View
    noFavorites: "暂无收藏。点击星号收藏短语。",

    // Accessibility View
    adjustFont: "调整字体大小和对比度以获得更好的可访问性。",
    chooseLang: "选择语言",
    fontSize: "字体大小",
    contrast: "对比度",
    preview: "预览",
    lightMode: "浅色模式",
    darkMode: "深色模式",
    fontSizeSmall: "小",
    fontSizeNormal: "正常",
    fontSizeLarge: "大",
    currentSize: "当前",

    // SOS/Emergency View
    needHelp: "需要紧急帮助吗？",
    callForHelp: "呼救",
    alertMsg: "这将提醒您的紧急联系人或附近的援助。",
    locationStatusGetting: '正在获取您的位置...',
    locationStatusError: '无法获取位置',
    locationStatusSuccess: '📍 位置:',
    selectEmergencyMessage: '选择紧急消息:',
    sendLocation: '发送位置',
    flashing: '闪烁中...',
    flashAlert: '闪光警报',
    vibrating: '振动中...',
    vibrateAlert: '振动警报',
    quickContacts: '快速紧急联系人:',
    contact911: '📞 110',
    contactMedical: '🏥 医疗',
    emergencyContacts: '紧急联系人',
    alert: '警报',
    locationShare: '位置共享',
    locationShareDesc: '与联系人共享您的位置',
    visualAlert: '视觉警报',
    visualAlertDesc: '闪烁屏幕以引起注意',
    vibrateAlertDesc: 'SOS 振动模式',
    preWritten: '预写',
    preWrittenDesc: '快速紧急消息',

    // About View
    aboutTitle: "关于 SpeakEZ",
    ourMission: "我们的使命",
    missionText: "SpeakEZ 旨在打破沟通障碍，让每个人都能进行数字互动。我们相信，技术应该为所有用户赋能，无论他们的能力或语言偏好如何。",
    keyFeatures: "主要特点",
    feature1: "语音转文本和文本转语音",
    feature2: "多语言支持，实现全球可访问性",
    feature3: "可自定义的深色/浅色主题界面",
    feature4: "紧急求救功能",
    feature5: "用于快速交流的收藏短语",
    accessibilityFirst: "无障碍优先",
    accessibilityText: "SpeakEZ 采用通用设计原则构建，确保不同能力的用户都能有效沟通。我们的界面针对屏幕阅读器、语音导航和触摸辅助功能进行了优化。",
    appVersion: "SpeakEZ v1.0",
    appTagline: "让每个人都能轻松交流",

    // Content
    emergencyMessages: [
        "🚨 紧急情况：我需要立即帮助！请拨打110并到我的位置来。",
        "🚨 医疗紧急情况：我遇到了医疗紧急情况。请立即派人来帮助。",
        "🚨 危险：我处于危险之中，无法说话。请立即报警。",
        "🚨 帮助：我需要帮助。我是哑巴，无法打电话。请帮帮我。",
        "🚨 事故：我出了事故。请派医疗救助到我的位置。"
    ],
    suggestionPhrases: [
        "早上好！",
        "我可以吃早餐吗？",
        "你好吗？",
        "谢谢！",
        "打扰一下！",
        "洗手间在哪里？",
        "你能帮助我吗？",
        "我需要指路。",
        "我感觉不舒服。",
        "很高兴认识你。"
    ],
    categories: [
        { name: "问候与介绍", phrases: ["你好！", "早上好！", "你好吗？", "很高兴认识你。", "再见！", "待会见！", "最近怎么样？", "好久不见！", "保重！", "祝你有美好的一天！"] },
        { name: "餐饮", phrases: ["我饿了。", "能给我点水吗？", "我可以吃午饭吗？", "我不能吃这个。", "我可以看一下菜单吗？", "这是素食吗？", "可以买单吗？", "这个很好吃！", "请不要加糖。", "我能再要一些吗？"] },
        { name: "紧急情况与健康", phrases: ["我需要帮助！", "请拨打120！", "我迷路了。", "我感觉不舒服。", "请陪着我。", "我需要医生！", "我的手机丢了。", "我无法呼吸。", "医院在哪里？", "请帮帮我！"] },
        { name: "旅行与方向", phrases: ["洗手间在哪里？", "公交车站在哪里？", "票价是多少？", "我需要指路。", "你能帮助我吗？", "这个座位有人吗？", "车程有多长？", "我在哪里买票？", "这是正确的火车吗？", "现在几点了？"] },
        { name: "购物与服务", phrases: ["这个多少钱？", "你们接受刷卡吗？", "我可以试穿吗？", "有折扣吗？", "试衣间在哪里？", "我可以退货吗？", "这个有其他尺码吗？", "太贵了。", "可以帮我礼品包装吗？", "谢谢你的帮助！"] },
    ]
  },
  de: {
    // Navigation
    home: "Startseite",
    suggestions: "Vorschläge",
    favorites: "Favoriten",
    access: "Barrierefreiheit",
    sos: "Notfall",
    about: "Über",
    profile: "Profil",

    // Home View
    speak: "Sprechen",
    typeMessage: "Geben Sie Ihre Nachricht ein...",
    addToFavorites: "Zu Favoriten hinzufügen",
    removeFromFavorites: "Aus Favoriten entfernen",

    // Favorites View
    noFavorites: "Noch keine Favoriten. Tippen Sie auf den Stern, um einen Satz hier zu speichern.",

    // Accessibility View
    adjustFont: "Passen Sie Schriftgröße und Kontrast für eine bessere Zugänglichkeit an.",
    chooseLang: "Sprache wählen",
    fontSize: "Schriftgröße",
    contrast: "Kontrast",
    preview: "Vorschau",
    lightMode: "Heller Modus",
    darkMode: "Dunkler Modus",
    fontSizeSmall: "Klein",
    fontSizeNormal: "Normal",
    fontSizeLarge: "Groß",
    currentSize: "Aktuell",

    // SOS/Emergency View
    needHelp: "Benötigen Sie dringende Hilfe?",
    callForHelp: "Hilfe rufen",
    alertMsg: "Dies benachrichtigt Ihren Notfallkontakt oder die nahegelegene Hilfe.",
    locationStatusGetting: 'Ihr Standort wird abgerufen...',
    locationStatusError: 'Standort konnte nicht abgerufen werden',
    locationStatusSuccess: '📍 Standort:',
    selectEmergencyMessage: 'Notfallnachricht auswählen:',
    sendLocation: 'Standort senden',
    flashing: 'Blinkt...',
    flashAlert: 'Blitzalarm',
    vibrating: 'Vibriert...',
    vibrateAlert: 'Vibrationsalarm',
    quickContacts: 'Schnelle Notfallkontakte:',
    contact911: '📞 112',
    contactMedical: '🏥 Medizinisch',
    emergencyContacts: 'Notfallkontakte',
    alert: 'Alarmieren',
    locationShare: 'Standort teilen',
    locationShareDesc: 'Teilen Sie Ihren Standort mit Kontakten',
    visualAlert: 'Visueller Alarm',
    visualAlertDesc: 'Bildschirm blinken lassen, um Aufmerksamkeit zu erregen',
    vibrateAlertDesc: 'SOS-Vibrationsmuster',
    preWritten: 'Vorgeschrieben',
    preWrittenDesc: 'Schnelle Notfallnachrichten',

    // About View
    aboutTitle: "Über SpeakEZ",
    ourMission: "Unsere Mission",
    missionText: "SpeakEZ wurde entwickelt, um Kommunikationsbarrieren abzubauen und die digitale Interaktion für alle zugänglich zu machen. Wir glauben, dass Technologie alle Benutzer befähigen sollte, unabhängig von ihren Fähigkeiten oder Sprachpräferenzen.",
    keyFeatures: "Hauptmerkmale",
    feature1: "Sprach-zu-Text- und Text-zu-Sprache-Umwandlung",
    feature2: "Mehrsprachige Unterstützung für globale Zugänglichkeit",
    feature3: "Anpassbare Benutzeroberfläche mit dunklen/hellen Themen",
    feature4: "Notfall-SOS-Funktionalität",
    feature5: "Lieblingsphrasen für schnelle Kommunikation",
    accessibilityFirst: "Barrierefreiheit zuerst",
    accessibilityText: "SpeakEZ wurde nach universellen Designprinzipien entwickelt und stellt sicher, dass Benutzer mit unterschiedlichen Fähigkeiten effektiv kommunizieren können. Unsere Benutzeroberfläche ist für Bildschirmleser, Sprachnavigation und Touch-Zugänglichkeit optimiert.",
    appVersion: "SpeakEZ v1.0",
    appTagline: "Kommunikation für alle zugänglich machen",

    // Content
    emergencyMessages: [
        "🚨 NOTFALL: Ich brauche sofortige Hilfe! Bitte rufen Sie 112 an und kommen Sie zu meinem Standort.",
        "🚨 MEDIZINISCHER NOTFALL: Ich habe einen medizinischen Notfall. Bitte schicken Sie sofort Hilfe.",
        "🚨 GEFAHR: Ich bin in Gefahr und kann nicht sprechen. Bitte rufen Sie sofort die Polizei.",
        "🚨 HILFE: Ich brauche Unterstützung. Ich bin stumm und kann nicht anrufen. Bitte helfen Sie mir.",
        "🚨 UNFALL: Ich hatte einen Unfall. Bitte schicken Sie medizinische Hilfe zu meinem Standort."
    ],
    suggestionPhrases: [
        "Guten Morgen!",
        "Kann ich frühstücken?",
        "Wie geht es Ihnen?",
        "Danke!",
        "Entschuldigung!",
        "Wo ist die Toilette?",
        "Können Sie mir helfen?",
        "Ich brauche eine Wegbeschreibung.",
        "Ich fühle mich krank.",
        "Schön, Sie kennenzulernen."
    ],
    categories: [
        { name: "Begrüßungen & Vorstellungen", phrases: ["Hallo!", "Guten Morgen!", "Wie geht es Ihnen?", "Schön, Sie kennenzulernen.", "Auf Wiedersehen!", "Bis bald!", "Was geht ab?", "Lange nicht gesehen!", "Passen Sie auf sich auf!", "Schönen Tag noch!"] },
        { name: "Essen & Trinken", phrases: ["Ich habe Hunger.", "Kann ich etwas Wasser haben?", "Kann ich zu Mittag essen?", "Das kann ich nicht essen.", "Kann ich die Speisekarte haben?", "Ist das vegetarisch?", "Kann ich die Rechnung haben?", "Das ist köstlich!", "Ohne Zucker, bitte.", "Kann ich mehr haben?"] },
        { name: "Notfall & Gesundheit", phrases: ["Ich brauche Hilfe!", "Rufen Sie 112 an!", "Ich habe mich verlaufen.", "Ich fühle mich krank.", "Bitte bleiben Sie bei mir.", "Ich brauche einen Arzt!", "Mein Telefon ist weg.", "Ich kann nicht atmen.", "Wo ist das Krankenhaus?", "Helfen Sie mir, bitte!"] },
        { name: "Reisen & Wegbeschreibungen", phrases: ["Wo ist die Toilette?", "Wo ist die Bushaltestelle?", "Wie viel kostet die Fahrt?", "Ich brauche eine Wegbeschreibung.", "Können Sie mir helfen?", "Ist dieser Platz frei?", "Wie lange dauert die Fahrt?", "Wo kaufe ich Tickets?", "Ist das der richtige Zug?", "Wie spät ist es?"] },
        { name: "Einkaufen & Dienstleistungen", phrases: ["Wie viel kostet das?", "Akzeptieren Sie Karten?", "Kann ich das anprobieren?", "Gibt es einen Rabatt?", "Wo ist die Umkleidekabine?", "Kann ich das zurückgeben?", "Haben Sie das in einer anderen Größe?", "Das ist zu teuer.", "Können Sie das als Geschenk verpacken?", "Danke für Ihre Hilfe!"] },
    ]
  },
  mr: {
    // Navigation
    home: "मुख्यपृष्ठ",
    suggestions: "सूचना",
    favorites: "आवडी",
    access: "प्रवेशयोग्यता",
    sos: "आपत्कालीन",
    about: "बद्दल",
    profile: "प्रोफाइल",

    // Home View
    speak: "बोला",
    typeMessage: "तुमचा संदेश टाइप करा...",
    addToFavorites: "आवडींमध्ये जोडा",
    removeFromFavorites: "आवडींमधून काढा",

    // Favorites View
    noFavorites: "अद्याप आवडीचे काहीही नाही. येथे वाक्यांश जतन करण्यासाठी तारा टॅप करा.",

    // Accessibility View
    adjustFont: "उत्तम प्रवेशयोग्यतेसाठी फॉन्ट आकार आणि कॉन्ट्रास्ट समायोजित करा.",
    chooseLang: "भाषा निवडा",
    fontSize: "फॉन्ट आकार",
    contrast: "कॉन्ट्रास्ट",
    preview: "पूर्वावलोकन",
    lightMode: "लाइट मोड",
    darkMode: "डार्क मोड",
    fontSizeSmall: "लहान",
    fontSizeNormal: "सामान्य",
    fontSizeLarge: "मोठा",
    currentSize: "सध्याचा",

    // SOS/Emergency View
    needHelp: "तातडीची मदत हवी आहे का?",
    callForHelp: "मदतीसाठी कॉल करा",
    alertMsg: "हे तुमच्या आपत्कालीन संपर्काला किंवा जवळच्या मदतीला सतर्क करेल.",
    locationStatusGetting: 'तुमचे स्थान मिळवत आहे...',
    locationStatusError: 'स्थान मिळवता आले नाही',
    locationStatusSuccess: '📍 स्थान:',
    selectEmergencyMessage: 'आपत्कालीन संदेश निवडा:',
    sendLocation: 'स्थान पाठवा',
    flashing: 'फ्लॅशिंग...',
    flashAlert: 'फ्लॅश अलर्ट',
    vibrating: 'कंपन होत आहे...',
    vibrateAlert: 'कंपन अलर्ट',
    quickContacts: 'त्वरित आपत्कालीन संपर्क:',
    contact911: '📞 100',
    contactMedical: '🏥 वैद्यकीय',
    emergencyContacts: 'आपत्कालीन संपर्क',
    alert: 'सतर्क',
    locationShare: 'स्थान शेअर करा',
    locationShareDesc: 'तुमचे स्थान संपर्कांसह शेअर करा',
    visualAlert: 'दृश्यमान अलर्ट',
    visualAlertDesc: 'लक्ष वेधण्यासाठी स्क्रीन फ्लॅश करा',
    vibrateAlertDesc: 'SOS कंपन पॅटर्न',
    preWritten: 'पूर्व-लिखित',
    preWrittenDesc: 'त्वरित आपत्कालीन संदेश',

    // About View
    aboutTitle: "SpeakEZ बद्दल",
    ourMission: "आमचे ध्येय",
    missionText: "SpeakEZ संवाद अडथळे दूर करण्यासाठी आणि डिजिटल संवाद प्रत्येकासाठी प्रवेशयोग्य बनविण्यासाठी डिझाइन केलेले आहे. आमचा विश्वास आहे की तंत्रज्ञानाने सर्व वापरकर्त्यांना त्यांच्या क्षमता किंवा भाषेच्या प्राधान्यांची पर्वा न करता सक्षम केले पाहिजे.",
    keyFeatures: "मुख्य वैशिष्ट्ये",
    feature1: "व्हॉइस-टू-टेक्स्ट आणि टेक्स्ट-टू-व्हॉइस रूपांतरण",
    feature2: "जागतिक प्रवेशयोग्यतेसाठी बहु-भाषा समर्थन",
    feature3: "गडद/फिकट थीमसह सानुकूल करण्यायोग्य इंटरफेस",
    feature4: "आपत्कालीन एसओएस कार्यक्षमता",
    feature5: "जलद संवादासाठी आवडते वाक्ये",
    accessibilityFirst: "प्रवेशयोग्यता प्रथम",
    accessibilityText: "सार्वत्रिक डिझाइन तत्त्वांसह तयार केलेले, SpeakEZ हे सुनिश्चित करते की विविध क्षमता असलेले वापरकर्ते प्रभावीपणे संवाद साधू शकतील. आमचा इंटरफेस स्क्रीन रीडर, व्हॉइस नेव्हिगेशन आणि टच प्रवेशयोग्यतेसाठी ऑप्टिमाइझ केलेला आहे.",
    appVersion: "SpeakEZ v1.0",
    appTagline: "संवाद प्रत्येकासाठी प्रवेशयोग्य बनवणे",

    // Content
    emergencyMessages: [
        "🚨 आपत्कालीन: मला त्वरित मदतीची गरज आहे! कृपया 100 वर कॉल करा आणि माझ्या स्थानावर या.",
        "🚨 वैद्यकीय आपत्कालीन: मला वैद्यकीय आपत्कालीन स्थिती आहे. कृपया त्वरित मदत पाठवा.",
        "🚨 धोका: मी धोक्यात आहे आणि बोलू शकत नाही. कृपया त्वरित पोलिसांना कॉल करा.",
        "🚨 मदत: मला मदतीची गरज आहे. मी बोलू शकत नाही आणि कॉल करू शकत नाही. कृपया माझी मदत करा.",
        "🚨 अपघात: माझा अपघात झाला आहे. कृपया माझ्या स्थानावर वैद्यकीय मदत पाठवा."
    ],
    suggestionPhrases: [
        "शुभ सकाळ!",
        "मी नाश्ता करू शकतो का?",
        "तुम्ही कसे आहात?",
        "धन्यवाद!",
        "माफ करा!",
        "स्वच्छतागृह कुठे आहे?",
        "तुम्ही मला मदत करू शकता का?",
        "मला दिशानिर्देश हवे आहेत.",
        "मला बरे वाटत नाही.",
        "तुम्हाला भेटून आनंद झाला."
    ],
    categories: [
        { name: "शुभेच्छा आणि ओळख", phrases: ["नमस्कार!", "शुभ सकाळ!", "तुम्ही कसे आहात?", "तुम्हाला भेटून आनंद झाला.", "पुन्हा भेटू!", "लवकरच भेटू!", "काय चालले आहे?", "खूप दिवसांनी भेटलो!", "काळजी घ्या!", "तुमचा दिवस चांगला जावो!"] },
        { name: "अन्न आणि जेवण", phrases: ["मला भूक लागली आहे.", "मला थोडे पाणी मिळेल का?", "मी जेवण करू शकतो का?", "मी हे खाऊ शकत नाही.", "मला मेनू मिळेल का?", "हे शाकाहारी आहे का?", "मला बिल मिळेल का?", "हे खूप चवदार आहे!", "कृपया साखर घालू नका.", "मला अजून मिळेल का?"] },
        { name: "आपत्कालीन आणि आरोग्य", phrases: ["मला मदतीची गरज आहे!", "108 वर कॉल करा!", "मी हरवलो आहे.", "मला बरे वाटत नाही.", "कृपया माझ्यासोबत रहा.", "मला डॉक्टरची गरज आहे!", "माझा फोन हरवला आहे.", "मला श्वास घेता येत नाही.", "दवाखाना कुठे आहे?", "कृपया माझी मदत करा!"] },
        { name: "प्रवास आणि दिशा", phrases: ["स्वच्छतागृह कुठे आहे?", "बस थांबा कुठे आहे?", "भाडे किती आहे?", "मला दिशानिर्देश हवे आहेत.", "तुम्ही मला मदत करू शकता का?", "ही जागा रिकामी आहे का?", "प्रवासाला किती वेळ लागेल?", "तिकिटे कुठे मिळतील?", "ही योग्य ट्रेन आहे का?", "किती वाजले?"] },
        { name: "खरेदी आणि सेवा", phrases: ["याची किंमत किती आहे?", "तुम्ही कार्ड स्वीकारता का?", "मी हे वापरून पाहू शकतो का?", "काही सूट आहे का?", "फिटिंग रूम कुठे आहे?", "मी हे परत करू शकतो का?", "तुमच्याकडे दुसऱ्या आकारात आहे का?", "हे खूप महाग आहे.", "तुम्ही हे गिफ्ट रॅप करू शकता का?", "तुमच्या मदतीबद्दल धन्यवाद!"] },
    ]
  }
};
