import React, { useState, useMemo, useEffect } from 'react';

const TRANSLATIONS = {
  en: {
    label: "English",
    speak: "Speak",
    suggestions: "Suggestions",
    favorites: "Favorites",
    profile: "Profile",
    access: "Accessibility",
    sos: "Emergency",
    home: "Home",
    typeMessage: "Type your message...",
    addToFavorites: "Add to favorites",
    removeFromFavorites: "Remove from favorites",
    noFavorites: "No favorites yet. Tap the star on a phrase to save it here.",
    adjustFont: "Adjust font size and contrast for better accessibility.",
    needHelp: "Need urgent help?",
    callForHelp: "Call for Help",
    alertMsg: "This will alert your emergency contact or nearby assistance.",
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
    suggestionPhrases: ["Good morning!", "Can I have breakfast?", "How are you?", "Thank you!", "Excuse me!", "Where is the restroom?", "Can you help me?", "I need directions.", "I feel sick.", "Nice to meet you."],
    categories: [{ name: "Greetings & Introductions", phrases: ["Hello!", "Good morning!", "How are you?", "Nice to meet you.", "Goodbye!", "See you soon!", "What's up?", "Long time no see!", "Take care!", "Have a nice day!"] }, { name: "Food & Dining", phrases: ["I'm hungry.", "Can I have some water?", "Can I have lunch?", "I can't eat this.", "Can I have a menu?", "Is this vegetarian?", "Can I have the bill?", "This is delicious!", "No sugar, please.", "Can I have more?"] }, { name: "Emergency & Health", phrases: ["I need help!", "Call 911!", "I'm lost.", "I feel sick.", "Please stay with me.", "I need a doctor!", "My phone is lost.", "I can't breathe.", "Where is the hospital?", "Help me, please!"] }, { name: "Travel & Directions", phrases: ["Where is the restroom?", "Where is the bus stop?", "How much is the fare?", "I need directions.", "Can you help me?", "Is this seat taken?", "How long is the ride?", "Where do I buy tickets?", "Is this the right train?", "What time is it?"] }, { name: "Shopping & Services", phrases: ["How much is this?", "Do you accept cards?", "Can I try this on?", "Is there a discount?", "Where is the fitting room?", "Can I return this?", "Do you have this in another size?", "It's too expensive.", "Can you gift wrap this?", "Thank you for your help!"] }, { name: "Health & Wellness", phrases: ["I need a pharmacy.", "I have a headache.", "I need medicine.", "Is there a clinic nearby?", "I feel dizzy.", "Can you call a doctor?", "I need to rest.", "Do you have a thermometer?", "I have an allergy.", "Can I get a prescription?"] }, { name: "Work & Office", phrases: ["I have a meeting.", "Can you send the report?", "Let's schedule a call.", "I need a break.", "Where is the conference room?", "Can you print this?", "Deadline is tomorrow.", "Let's discuss the project.", "Can I get your email?", "Thank you for your help!"] }, { name: "Family & Friends", phrases: ["How is your family?", "This is my friend.", "I miss you.", "Let's meet soon.", "How are the kids?", "Say hello to your parents.", "We are family.", "You are my best friend.", "Let's take a photo.", "See you at dinner!"] }, { name: "Weather & Nature", phrases: ["What's the weather?", "It's raining.", "It's sunny.", "Is it cold?", "Is it hot?", "Do I need an umbrella?", "It's windy.", "It's snowing.", "How's the weather tomorrow?", "It's a beautiful day!"] }, { name: "Directions & Places", phrases: ["Where is the bank?", "How do I get to the airport?", "Is it far?", "Turn left.", "Turn right.", "Go straight.", "Is there a map?", "Can you show me?", "Where is the hotel?", "Is this the right way?"] }]
  },
  hi: { 
    label: "Hindi",
    speak: "बोलें", suggestions: "सुझाव", favorites: "पसंदीदा", profile: "प्रोफ़ाइल", access: "सुलभता", sos: "आपातकालीन", home: "होम", typeMessage: "अपना संदेश लिखें...", addToFavorites: "पसंदीदा में जोड़ें", removeFromFavorites: "पसंदीदा से हटाएँ", noFavorites: "अभी तक कोई पसंदीदा नहीं। वाक्यांश को सहेजने के लिए स्टार टैप करें।", adjustFont: "बेहतर सुलभता के लिए फ़ॉन्ट आकार और कंट्रास्ट समायोजित करें।", needHelp: "आपातकालीन सहायता चाहिए?", callForHelp: "मदद के लिए कॉल करें", alertMsg: "यह आपके आपातकालीन संपर्क या पास के सहायता को सतर्क करेगा।", chooseLang: "भाषा चुनें", fontSize: "फ़ॉन्ट आकार", contrast: "कंट्रास्ट", preview: "पूर्वावलोकन", lightMode: "लाइट मोड", darkMode: "डार्क मोड", fontSizeSmall: "छोटा", fontSizeNormal: "सामान्य", fontSizeLarge: "बड़ा", currentSize: "वर्तमान", suggestionPhrases: ["सुप्रभात!", "क्या मैं नाश्ता कर सकता हूं?", "आप कैसे हैं?", "धन्यवाद!", "माफ़ कीजिए!", "शौचालय कहाँ है?", "क्या आप मेरी मदद कर सकते हैं?", "मुझे दिशा चाहिए।", "मैं बीमार महसूस कर रहा हूं।", "आपसे मिलकर खुशी हुई।"], categories: [{ name: "अभिवादन और परिचय", phrases: ["नमस्ते!", "सुप्रभात!", "आप कैसे हैं?", "आपसे मिलकर खुशी हुई।", "अलविदा!", "जल्दी मिलते हैं!", "क्या हाल है?", "बहुत दिनों बाद मिले!", "अपना ख्याल रखें!", "आपका दिन अच्छा हो!"] }, { name: "भोजन और खाना", phrases: ["मुझे भूख लगी है।", "क्या मैं पानी ले सकता हूं?", "क्या मैं दोपहर का भोजन कर सकता हूं?", "मैं यह नहीं खा सकता।", "क्या मैं मेन्यू देख सकता हूं?", "क्या यह शाकाहारी है?", "क्या मैं बिल ले सकता हूं?", "यह स्वादिष्ट है!", "चीनी नहीं, कृपया।", "क्या मैं और ले सकता हूं?"] }, { name: "आपातकाल और स्वास्थ्य", phrases: ["मुझे मदद चाहिए!", "112 को कॉल करें!", "मैं खो गया हूं।", "मैं बीमार महसूस कर रहा हूं।", "कृपया मेरे साथ रहें।", "मुझे डॉक्टर चाहिए!", "मेरा फोन खो गया है।", "मला सांस नहीं ले पा रहा।", "अस्पताल कहाँ है?", "कृपया मेरी मदद करें!"] }, { name: "यात्रा और दिशा", phrases: ["शौचालय कहाँ है?", "बस स्टॉप कहाँ है?", "किराया कितना है?", "मुझे दिशा चाहिए।", "क्या आप मेरी मदद कर सकते हैं?", "क्या यह सीट खाली है?", "यात्रा कितनी लंबी है?", "मैं टिकट कहाँ से खरीदूं?", "क्या यह सही ट्रेन है?", "समय क्या हुआ है?"] }, { name: "खरीदारी और सेवाएं", phrases: ["यह कितने का है?", "क्या आप कार्ड लेते हैं?", "क्या मैं इसे पहन कर देख सकता हूं?", "क्या कोई छूट है?", "फिटिंग रूम कहाँ है?", "क्या मैं इसे वापस कर सकता हूं?", "क्या यह दूसरे साइज़ में है?", "यह बहुत महंगा है।", "क्या आप इसे गिफ्ट रैप कर सकते हैं?", "आपकी मदद के लिए धन्यवाद!"] }, { name: "स्वास्थ्य और कल्याण", phrases: ["मुझे फार्मेसी चाहिए।", "मेरे सिर में दर्द है।", "मुझे दवा चाहिए।", "क्या यहाँ पास में कोई क्लिनिक है?", "मुझे चक्कर आ रहा है।", "क्या आप डॉक्टर को बुला सकते हैं?", "मुझे आराम करना है।", "क्या आपके पास थर्मामीटर है?", "मुझे एलर्जी है।", "क्या मैं प्रिस्क्रिप्शन ले सकता हूं?"] }, { name: "काम और कार्यालय", phrases: ["मेरी एक मीटिंग है।", "क्या आप रिपोर्ट भेज सकते हैं?", "चलिए कॉल शेड्यूल करते हैं।", "मुझे ब्रेक चाहिए।", "कॉन्फ्रेंस रूम कहाँ है?", "क्या आप इसे प्रिंट कर सकते हैं?", "डेडलाइन कल है।", "चलिए प्रोजेक्ट पर चर्चा करते हैं।", "क्या मैं आपका ईमेल ले सकता हूं?", "आपकी मदद के लिए धन्यवाद!"] }, { name: "परिवार और दोस्त", phrases: ["आपका परिवार कैसा है?", "यह मेरा दोस्त है।", "मैं आपको मिस करता हूं।", "चलिए जल्दी मिलते हैं।", "बच्चे कैसे हैं?", "अपने माता-पिता को नमस्ते कहना।", "हम परिवार हैं।", "आप मेरे सबसे अच्छे दोस्त हैं।", "चलिए फोटो खींचते हैं।", "रात के खाने में मिलते हैं!"] }, { name: "मौसम और प्रकृति", phrases: ["मौसम कैसा है?", "बारिश हो रही है।", "धूप है।", "क्या ठंड है?", "क्या गर्मी है?", "क्या मुझे छाता चाहिए?", "हवा चल रही है।", "बर्फ गिर रही है।", "कल मौसम कैसा रहेगा?", "आज बहुत सुंदर दिन है!"] }, { name: "दिशा और स्थान", phrases: ["बैंक कहाँ है?", "हवाई अड्डे कैसे जाना है?", "क्या यह दूर है?", "बाएं मुड़ें।", "दाएं मुड़ें।", "सीधे जाएं।", "क्या यहाँ नक्शा है?", "क्या आप मुझे दिखा सकते हैं?", "होटल कहाँ है?", "क्या यह सही रास्ता है?"] }] 
  },
  fr: { label: "French", speak: "Parler", suggestions: "Suggestions", favorites: "Favoris", profile: "Profil", access: "Accessibilité", sos: "Urgence", home: "Accueil", typeMessage: "Tapez votre message...", addToFavorites: "Ajouter aux favoris", removeFromFavorites: "Retirer des favoris", noFavorites: "Aucun favori pour l'instant. Appuyez sur l'étoile pour enregistrer une phrase ici.", adjustFont: "Ajustez la taille de la police et le contraste pour une meilleure accessibilité.", needHelp: "Besoin d'aide urgente?", callForHelp: "Appeler à l'aide", alertMsg: "Cela alertera votre contact d'urgence ou une assistance à proximité.", chooseLang: "Choisir la langue", fontSize: "Taille de police", contrast: "Contraste", preview: "Aperçu", lightMode: "Mode Clair", darkMode: "Mode Sombre", fontSizeSmall: "Petit", fontSizeNormal: "Normal", fontSizeLarge: "Grand", currentSize: "Actuel", suggestionPhrases: ["Bonjour!", "Puis-je prendre le petit déjeuner?", "Comment allez-vous?", "Merci!", "Excusez-moi!", "Où sont les toilettes?", "Pouvez-vous m'aider?", "J'ai besoin d'indications.", "Je me sens malade.", "Enchanté de vous rencontrer."], categories: [{ name: "Salutations et Présentations", phrases: ["Bonjour!", "Bonne matinée!", "Comment allez-vous?", "Enchanté de vous rencontrer.", "Au revoir!", "À bientôt!", "Quoi de neuf?", "Ça fait longtemps!", "Prenez soin de vous!", "Bonne journée!"] }, { name: "Nourriture et Restauration", phrases: ["J'ai faim.", "Puis-je avoir de l'eau?", "Puis-je déjeuner?", "Je ne peux pas manger ça.", "Puis-je voir le menu?", "Est-ce végétarien?", "Puis-je avoir l'addition?", "C'est délicieux!", "Sans sucre, s'il vous plaît.", "Puis-je en avoir plus?"] }, { name: "Urgence et Santé", phrases: ["J'ai besoin d'aide!", "Appelez le 15!", "Je suis perdu.", "Je me sens malade.", "Restez avec moi, s'il vous plaît.", "J'ai besoin d'un médecin!", "Mon téléphone est perdu.", "Je ne peux pas respirer.", "Où est l'hôpital?", "Aidez-moi, s'il vous plaît!"] }] },
  es: { label: "Spanish", speak: "Hablar", suggestions: "Sugerencias", favorites: "Favoritos", profile: "Perfil", access: "Accesibilidad", sos: "Emergencia", home: "Inicio", typeMessage: "Escribe tu mensaje...", addToFavorites: "Agregar a favoritos", removeFromFavorites: "Eliminar de favoritos", noFavorites: "Aún no hay favoritos. Toca la estrella para guardar una frase aquí.", adjustFont: "Ajusta el tamaño de fuente y el contraste para una mejor accesibilidad.", needHelp: "¿Necesitas ayuda urgente?", callForHelp: "Llamar por ayuda", alertMsg: "Esto alertará a tu contacto de emergencia o asistencia cercana.", chooseLang: "Elegir idioma", fontSize: "Tamaño de fuente", contrast: "Contraste", preview: "Vista previa", lightMode: "Modo Claro", darkMode: "Modo Oscuro", fontSizeSmall: "Pequeño", fontSizeNormal: "Normal", fontSizeLarge: "Grande", currentSize: "Actual", suggestionPhrases: ["¡Buenos días!", "¿Puedo desayunar?", "¿Cómo estás?", "¡Gracias!", "¡Disculpe!", "¿Dónde está el baño?", "¿Puedes ayudarme?", "Necesito direcciones.", "Me siento enfermo.", "Mucho gusto conocerte."], categories: [{ name: "Saludos y Presentaciones", phrases: ["¡Hola!", "¡Buenos días!", "¿Cómo estás?", "Mucho gusto conocerte.", "¡Adiós!", "¡Hasta pronto!", "¿Qué tal?", "¡Tanto tiempo sin verte!", "¡Cuídate!", "¡Que tengas buen día!"] }, { name: "Comida y Restaurantes", phrases: ["Tengo hambre.", "¿Puedo tomar agua?", "¿Puedo almorzar?", "No puedo comer esto.", "¿Puedo ver el menú?", "¿Es vegetariano?", "¿Puedo pedir la cuenta?", "¡Está delicioso!", "Sin azúcar, por favor.", "¿Puedo tener más?"] }, { name: "Emergencia y Salud", phrases: ["¡Necesito ayuda!", "¡Llama al 911!", "Estoy perdido.", "Me siento enfermo.", "Por favor quédate conmigo.", "¡Necesito un médico!", "Perdí mi teléfono.", "No puedo respirar.", "¿Dónde está el hospital?", "¡Ayúdame, por favor!"] }] },
  ar: { label: "Arabic", speak: "تحدث", suggestions: "اقتراحات", favorites: "المفضلة", profile: "الملف الشخصي", access: "إمكانية الوصول", sos: "الطوارئ", home: "الرئيسية", typeMessage: "اكتب رسالتك...", addToFavorites: "أضف إلى المفضلة", removeFromFavorites: "إزالة من المفضلة", noFavorites: "لا توجد مفضلات بعد. اضغط على النجمة لحفظ عبارة هنا.", adjustFont: "قم بضبط حجم الخط والتباين لتحسين إمكانية الوصول.", needHelp: "تحتاج إلى مساعدة عاجلة؟", callForHelp: "اتصل للمساعدة", alertMsg: "سيؤدي ذلك إلى تنبيه جهة الاتصال في حالات الطوارئ أو المساعدة القريبة.", chooseLang: "اختر اللغة", fontSize: "حجم الخط", contrast: "التباين", preview: "معاينة", lightMode: "الوضع المضيء", darkMode: "الوضع المظلم", fontSizeSmall: "صغير", fontSizeNormal: "عادي", fontSizeLarge: "كبير", currentSize: "الحالي", suggestionPhrases: ["صباح الخير!", "هل يمكنني تناول الإفطار؟", "كيف حالك؟", "شكراً!", "اعذرني!", "أين دورة المياه؟", "هل يمكنك مساعدتي؟", "أحتاج إلى الاتجاهات.", "أشعر بالمرض.", "تشرفنا بلقائك."], categories: [{ name: "التحيات والتعارف", phrases: ["مرحباً!", "صباح الخير!", "كيف حالك؟", "تشرفنا بلقائك.", "وداعاً!", "أراك قريباً!", "كيف الأحوال؟", "لم نرك منذ وقت طويل!", "اعتنِ بنفسك!", "أتمنى لك يوماً سعيداً!"] }, { name: "الطعام والمطاعم", phrases: ["أنا جائع.", "هل يمكنني الحصول على بعض الماء؟", "هل يمكنني تناول الغداء؟", "لا أستطيع أكل هذا.", "هل يمكنني رؤية القائمة؟", "هل هذا نباتي؟", "هل يمكنني الحصول على الفاتورة؟", "هذا لذيذ!", "بدون سكر، من فضلك.", "هل يمكنني الحصول على المزيد؟"] }, { name: "الطوارئ والصحة", phrases: ["أحتاج إلى مساعدة!", "اتصل بالاسعاف!", "أنا تائه.", "أشعر بالمرض.", "من فضلك ابق معي.", "أحتاج إلى طبيب!", "لقد فقدت هاتفي.", "لا أستطيع التنفس.", "أين المستشفى؟", "ساعدني، من فضلك!"] }] },
  zh: { label: "Chinese", speak: "说话", suggestions: "建议", favorites: "收藏", profile: "个人资料", access: "辅助功能", sos: "紧急情况", home: "主页", typeMessage: "输入您的消息...", addToFavorites: "添加到收藏", removeFromFavorites: "从收藏中删除", noFavorites: "暂无收藏。点击星号收藏短语。", adjustFont: "调整字体大小和对比度以获得更好的可访问性。", needHelp: "需要紧急帮助吗？", callForHelp: "呼救", alertMsg: "这将提醒您的紧急联系人或附近的援助。", chooseLang: "选择语言", fontSize: "字体大小", contrast: "对比度", preview: "预览", lightMode: "浅色模式", darkMode: "深色模式", fontSizeSmall: "小", fontSizeNormal: "正常", fontSizeLarge: "大", currentSize: "当前", suggestionPhrases: ["早上好！", "我可以吃早餐吗？", "你好吗？", "谢谢！", "打扰一下！", "洗手间在哪里？", "你能帮助我吗？", "我需要指路。", "我感觉不舒服。", "很高兴认识你。"], categories: [{ name: "问候与介绍", phrases: ["你好！", "早上好！", "你好吗？", "很高兴认识你。", "再见！", "待会见！", "最近怎么样？", "好久不见！", "保重！", "祝你有美好的一天！"] }, { name: "餐饮", phrases: ["我饿了。", "能给我点水吗？", "我可以吃午饭吗？", "我不能吃这个。", "我可以看一下菜单吗？", "这是素食吗？", "可以买单吗？", "这个很好吃！", "请不要加糖。", "我能再要一些吗？"] }, { name: "紧急情况与健康", phrases: ["我需要帮助！", "请拨打120！", "我迷路了。", "我感觉不舒服。", "请陪着我。", "我需要医生！", "我的手机丢了。", "我无法呼吸。", "医院在哪里？", "请帮帮我！"] }] },
  de: { label: "German", speak: "Sprechen", suggestions: "Vorschläge", favorites: "Favoriten", profile: "Profil", access: "Barrierefreiheit", sos: "Notfall", home: "Startseite", typeMessage: "Geben Sie Ihre Nachricht ein...", addToFavorites: "Zu Favoriten hinzufügen", removeFromFavorites: "Aus Favoriten entfernen", noFavorites: "Noch keine Favoriten. Tippen Sie auf den Stern, um einen Satz hier zu speichern.", adjustFont: "Passen Sie Schriftgröße und Kontrast für eine bessere Zugänglichkeit an.", needHelp: "Benötigen Sie dringende Hilfe?", callForHelp: "Hilfe rufen", alertMsg: "Dies benachrichtigt Ihren Notfallkontakt oder die nahegelegene Hilfe.", chooseLang: "Sprache wählen", fontSize: "Schriftgröße", contrast: "Kontrast", preview: "Vorschau", lightMode: "Heller Modus", darkMode: "Dunkler Modus", fontSizeSmall: "Klein", fontSizeNormal: "Normal", fontSizeLarge: "Groß", currentSize: "Aktuell", suggestionPhrases: ["Guten Morgen!", "Kann ich frühstücken?", "Wie geht es Ihnen?", "Danke!", "Entschuldigung!", "Wo ist die Toilette?", "Können Sie mir helfen?", "Ich brauche eine Wegbeschreibung.", "Ich fühle mich krank.", "Schön, Sie kennenzulernen."], categories: [{ name: "Begrüßungen & Vorstellungen", phrases: ["Hallo!", "Guten Morgen!", "Wie geht es Ihnen?", "Schön, Sie kennenzulernen.", "Auf Wiedersehen!", "Bis bald!", "Was geht ab?", "Lange nicht gesehen!", "Passen Sie auf sich auf!", "Schönen Tag noch!"] }, { name: "Essen & Trinken", phrases: ["Ich habe Hunger.", "Kann ich etwas Wasser haben?", "Kann ich zu Mittag essen?", "Das kann ich nicht essen.", "Kann ich die Speisekarte haben?", "Ist das vegetarisch?", "Kann ich die Rechnung haben?", "Das ist köstlich!", "Ohne Zucker, bitte.", "Kann ich mehr haben?"] }, { name: "Notfall & Gesundheit", phrases: ["Ich brauche Hilfe!", "Rufen Sie 112 an!", "Ich habe mich verlaufen.", "Ich fühle mich krank.", "Bitte bleiben Sie bei mir.", "Ich brauche einen Arzt!", "Mein Telefon ist weg.", "Ich kann nicht atmen.", "Wo ist das Krankenhaus?", "Helfen Sie mir, bitte!"] }] },
  mr: { 
    label: "Marathi",
    speak: "बोला", suggestions: "सूचना", favorites: "आवडी", profile: "प्रोफाइल", access: "प्रवेशयोग्यता", sos: "आपत्कालीन", home: "मुख्यपृष्ठ", typeMessage: "तुमचा संदेश टाइप करा...", addToFavorites: "आवडींमध्ये जोडा", removeFromFavorites: "आवडींमधून काढा", noFavorites: "अद्याप आवडीचे काहीही नाही. येथे वाक्यांश जतन करण्यासाठी तारा टॅप करा.", adjustFont: "उत्तम प्रवेशयोग्यतेसाठी फॉन्ट आकार आणि कॉन्ट्रास्ट समायोजित करा.", needHelp: "तातडीची मदत हवी आहे का?", callForHelp: "मदतीसाठी कॉल करा", alertMsg: "हे तुमच्या आपत्कालीन संपर्काला किंवा जवळच्या मदतीला सतर्क करेल.", chooseLang: "भाषा निवडा", fontSize: "फॉन्ट आकार", contrast: "कॉन्ट्रास्ट", preview: "पूर्वावलोकन", lightMode: "लाइट मोड", darkMode: "डार्क मोड", fontSizeSmall: "लहान", fontSizeNormal: "सामान्य", fontSizeLarge: "मोठा", currentSize: "सध्याचा", suggestionPhrases: ["शुभ सकाळ!", "मी नाश्ता करू शकतो का?", "तुम्ही कसे आहात?", "धन्यवाद!", "माफ करा!", "स्वच्छतागृह कुठे आहे?", "तुम्ही मला मदत करू शकता का?", "मला दिशानिर्देश हवे आहेत.", "मला बरे वाटत नाही.", "तुम्हाला भेटून आनंद झाला."], categories: [{ name: "शुभेच्छा आणि ओळख", phrases: ["नमस्कार!", "शुभ सकाळ!", "तुम्ही कसे आहात?", "तुम्हाला भेटून आनंद झाला.", "पुन्हा भेटू!", "लवकरच भेटू!", "काय चालले आहे?", "खूप दिवसांनी भेटलो!", "काळजी घ्या!", "तुमचा दिवस चांगला जावो!"] }, { name: "अन्न आणि जेवण", phrases: ["मला भूक लागली आहे.", "मला थोडे पाणी मिळेल का?", "मी जेवण करू शकतो का?", "मी हे खाऊ शकत नाही.", "मला मेनू मिळेल का?", "हे शाकाहारी आहे का?", "मला बिल मिळेल का?", "हे खूप चवदार आहे!", "कृपया साखर घालू नका.", "मला अजून मिळेल का?"] }, { name: "आपत्कालीन आणि आरोग्य", phrases: ["मला मदतीची गरज आहे!", "108 वर कॉल करा!", "मी हरवलो आहे.", "मला बरे वाटत नाही.", "कृपया माझ्यासोबत रहा.", "मला डॉक्टरची गरज आहे!", "माझा फोन हरवला आहे.", "मला श्वास घेता येत नाही.", "दवाखाना कुठे आहे?", "कृपया माझी मदत करा!"] }, { name: "प्रवास आणि दिशा", phrases: ["स्वच्छतागृह कुठे आहे?", "बस थांबा कुठे आहे?", "भाडे किती आहे?", "मला दिशानिर्देश हवे आहेत.", "तुम्ही मला मदत करू शकता का?", "ही जागा रिकामी आहे का?", "प्रवासाला किती वेळ लागेल?", "तिकिटे कुठे मिळतील?", "ही योग्य ट्रेन आहे का?", "किती वाजले?"] }, { name: "खरेदी आणि सेवा", phrases: ["याची किंमत किती आहे?", "तुम्ही कार्ड स्वीकारता का?", "मी हे वापरून पाहू शकतो का?", "काही सूट आहे का?", "फिटिंग रूम कुठे आहे?", "मी हे परत करू शकतो का?", "तुमच्याकडे दुसऱ्या आकारात आहे का?", "हे खूप महाग आहे.", "तुम्ही हे गिफ्ट रॅप करू शकता का?", "तुमच्या मदतीबद्दल धन्यवाद!"] }]
  }
};


const PhraseButton = ({ phrase, onSpeak, isFavorited, onToggleFavorite, className }) => {
  return (
    <div className={`relative flex items-center justify-between gap-2 rounded-xl p-3 font-semibold text-left transition-all duration-200 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500 ${className}`}>
      <button
        onClick={() => onSpeak(phrase)}
        className="flex-grow text-left focus:outline-none w-full h-full"
        aria-label={`Speak phrase: ${phrase}`}
      >
        {phrase}
      </button>
      <button
        onClick={(e) => {
            e.stopPropagation(); 
            onToggleFavorite();
        }}
        className="flex-shrink-0 rounded-full p-1.5 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white z-10"
        aria-label={isFavorited ? 'Remove from favorites' : 'Add to favorites'}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill={isFavorited ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.5">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      </button>
    </div>
  );
};


export function MainView({
  input = '',
  setInput = () => {},
  handleSpeak = () => {},
  isFavorited = () => false,
  handleFavorite = () => {},
  handleUnfavorite = () => {},
  selectedLanguage = 'en',
  contrast = false
}) {
  const T = useMemo(() => TRANSLATIONS[selectedLanguage] || TRANSLATIONS['en'], [selectedLanguage]);
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  const [activeCategory, setActiveCategory] = useState(0);
  const [suggestionPhrases, setSuggestionPhrases] = useState(T.suggestionPhrases || []);
  const [categories, setCategories] = useState(T.categories || []);
  const [quickSuggestions, setQuickSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isQuickSuggestLoading, setIsQuickSuggestLoading] = useState(false);
  const [error, setError] = useState(null);
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  // const groq = new Groq({ apiKey: process.env.NEXT_PUBLIC_GROQ_API_KEY }); // Removed Groq client

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  useEffect(() => {
    const fetchInitialPhrases = async () => {
      setIsLoading(true);
      setError(null);

      const languageName = T.label || 'English';
      const prompt = `Generate a list of common conversational phrases for a speech assistance app. The user's selected language is ${languageName}. Please provide: 1. A list of 10 general suggestion phrases. 2. A list of 10 categories, each with 10 relevant phrases. All generated text, including category names and all phrases, MUST be in ${languageName}. Return the response as a single JSON object with two keys: "suggestionPhrases" (an array of strings) and "categories" (an array of objects, where each object has "name" and "phrases" keys).`;

      const payload = {
        contents: [{ role: "user", parts: [{ text: prompt }] }],
        generationConfig: {
          responseMimeType: "application/json",
          responseSchema: { type: "OBJECT", properties: { suggestionPhrases: { type: "ARRAY", items: { type: "STRING" } }, categories: { type: "ARRAY", items: { type: "OBJECT", properties: { name: { type: "STRING" }, phrases: { type: "ARRAY", items: { type: "STRING" } } }, required: ["name", "phrases"] } } }, required: ["suggestionPhrases", "categories"] }
        }
      };

      try {
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
        const response = await fetch(apiUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
        if (!response.ok) throw new Error(`API call failed with status: ${response.status}`);
        const result = await response.json();
        if (result.candidates && result.candidates[0]?.content?.parts[0]?.text) {
          const parsedData = JSON.parse(result.candidates[0].content.parts[0].text);
          setSuggestionPhrases(parsedData.suggestionPhrases || T.suggestionPhrases);
          setCategories(parsedData.categories || T.categories);
        } else { throw new Error("Unexpected API response structure."); }
      } catch (err) {
        console.error("Error fetching from Gemini API:", err);
        setError(`Failed to load dynamic phrases. Using default suggestions.`);
        setSuggestionPhrases(T.suggestionPhrases || []);
        setCategories(T.categories || []);
      } finally {
        setIsLoading(false);
      }
    };
    
    if (isOnline) {
        fetchInitialPhrases();
    } else {
        setError("No internet connection. Showing offline suggestions.");
        setSuggestionPhrases(T.suggestionPhrases || []);
        setCategories(T.categories || []);
        setIsLoading(false);
    }
  }, [selectedLanguage, T, isOnline]);

  useEffect(() => {
    if (!isOnline || !input || input.trim().length < 3) {
      setQuickSuggestions([]);
      return;
    }
    const handler = setTimeout(() => {
      const fetchQuickSuggestions = async () => {
        setIsQuickSuggestLoading(true);
        const languageName = T.label || 'English';
        const prompt = `A user is typing "${input}" into a speech assistance app. The app's language is set to ${languageName}. Provide 3 short, relevant phrase completions or related suggestions. The suggestions MUST be in ${languageName}. Return the result as a JSON array of strings.`;
        const payload = {
          contents: [{ role: "user", parts: [{ text: prompt }] }],
          generationConfig: { responseMimeType: "application/json", responseSchema: { type: "ARRAY", items: { type: "STRING" } } }
        };
        try {
          const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
          const response = await fetch(apiUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
          if (!response.ok) throw new Error("Quick suggestions API call failed.");
          const result = await response.json();
          if (result.candidates && result.candidates[0]?.content?.parts[0]?.text) {
            const parsedData = JSON.parse(result.candidates[0].content.parts[0].text);
            setQuickSuggestions(parsedData || []);
          }
        } catch (err) {
          console.error("Error fetching quick suggestions:", err);
          setQuickSuggestions([]);
        } finally {
          setIsQuickSuggestLoading(false);
        }
      };
      fetchQuickSuggestions();
    }, 500);
    return () => clearTimeout(handler);
  }, [input, selectedLanguage, T.label, isOnline]);

  useEffect(() => {
    if (categories && activeCategory >= categories.length) { setActiveCategory(0); }
  }, [categories, activeCategory]);

  const renderSkeleton = (count, className) => (
    Array.from({ length: count }).map((_, index) => (
      <div key={index} className={`animate-pulse bg-gray-200 dark:bg-gray-700 rounded-xl ${className}`}></div>
    ))
  );

  const handleToggleFavorite = (phrase) => {
    if (isFavorited(phrase)) {
      handleUnfavorite(phrase);
    } else {
      handleFavorite(phrase);
    }
  };

  return (
    <>
      <div className="flex flex-col gap-2 pt-1">
        <textarea
          className={`w-full rounded-xl border px-4 py-3 text-base font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[72px] max-h-[120px] shadow-sm resize-none ${contrast ? 'border-gray-500 bg-gray-700 text-white placeholder-gray-400' : 'border-gray-300/80 bg-white text-gray-900 placeholder-gray-500'}`}
          placeholder={T.typeMessage || 'Type your message here...'}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          aria-label={T.typeMessage || 'Type a message to speak'}
          maxLength={200}
        />
        <button
          className={`w-full rounded-xl px-4 py-3 font-semibold text-base min-h-[48px] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-md transition disabled:cursor-not-allowed flex items-center justify-center gap-2 ${contrast ? 'bg-blue-500 text-white hover:bg-blue-400 disabled:bg-gray-600 disabled:text-gray-400' : 'bg-blue-600 text-white hover:bg-blue-700 disabled:bg-gray-400 disabled:text-gray-300'}`}
          onClick={() => handleSpeak(input)}
          aria-label={T.speak || 'Speak typed message'}
          disabled={!input || !input.trim()}
        >
          <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
            <path strokeLinecap='round' strokeLinejoin='round' d='M15.536 8.464A5 5 0 0118 12a5 5 0 01-2.464 4.536M12 18.5V5.5L7 10H3v4h4l5 4.5z' />
          </svg>
          {T.speak || 'Speak'}
        </button>
      </div>

      {(isQuickSuggestLoading || quickSuggestions.length > 0) && (
        <div className="mt-3 flex gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent -mx-4 px-4">
          {isQuickSuggestLoading ? renderSkeleton(3, 'w-32 h-10 flex-shrink-0') : quickSuggestions.map((phrase, index) => (
            <div key={`quick-${index}`} className="flex-shrink-0">
              <PhraseButton phrase={phrase} onSpeak={handleSpeak} isFavorited={isFavorited(phrase)} onToggleFavorite={() => handleToggleFavorite(phrase)} className={`whitespace-nowrap text-sm ${contrast ? 'bg-gray-600 border border-gray-500 hover:bg-gray-500 text-gray-200' : 'bg-gray-100 border border-gray-200 hover:bg-blue-50 text-gray-700'}`} />
            </div>
          ))}
        </div>
      )}

      <div className="mt-4">
        <div className="flex items-center gap-2 mb-2">
          <svg xmlns='http://www.w3.org/2000/svg' className='w-6 h-6 text-yellow-500 dark:text-yellow-400' fill='currentColor' viewBox='0 0 24 24'>
            <path d='M12 2L9.16 8.9L2 9.27L7.45 14.14L5.82 21L12 17.27L18.18 21L16.54 14.14L22 9.27L14.84 8.9L12 2Z' />
          </svg>
          <h2 className={`text-lg font-bold ${contrast ? 'text-gray-200' : 'text-gray-800'}`}>{T.suggestions || 'Suggestions'}</h2>
        </div>
        {error && <p className="text-red-500 text-sm px-4">{error}</p>}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent -mx-4 px-4">
          {isLoading ? renderSkeleton(5, 'w-36 h-12 flex-shrink-0') : (suggestionPhrases || []).map((phrase, index) => (
            <div key={`${selectedLanguage}-${phrase}-${index}`} className="flex-shrink-0">
              <PhraseButton phrase={phrase} onSpeak={handleSpeak} isFavorited={isFavorited(phrase)} onToggleFavorite={() => handleToggleFavorite(phrase)} className={`whitespace-nowrap ${contrast ? 'bg-gray-700 border border-stone-500 hover:bg-gray-600 text-gray-200' : 'bg-white border border-stone-300 hover:bg-blue-50 hover:border-blue-400 text-gray-800'}`}  />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex-1 flex flex-col">
        <div className="flex gap-2.5 mb-3 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-blue-200 scrollbar-track-transparent -mx-4 px-4">
          {isLoading ? renderSkeleton(5, 'w-32 h-14 flex-shrink-0') : (categories || []).map((cat, idx) => (
            <button key={`${selectedLanguage}-${cat.name}-${idx}`} className={`flex-shrink-0 px-4 w-32 h-14 flex items-center justify-center text-center rounded-xl text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 ${activeCategory === idx ? (contrast ? 'bg-blue-500 text-white shadow-lg' : 'bg-blue-600 text-white shadow-lg') : (contrast ? 'bg-gray-700 text-gray-200 hover:bg-gray-600 border border-gray-600' : 'bg-white text-gray-700 hover:bg-blue-100 border border-gray-200')}`} onClick={() => setActiveCategory(idx)} aria-current={activeCategory === idx}>
              <span className="block w-full overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>{cat.name}</span>
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-3">
          {isLoading ? renderSkeleton(10, 'h-16') : (categories && categories[activeCategory]?.phrases || []).map((phrase, index) => (
            <PhraseButton key={`${selectedLanguage}-${phrase}-${index}`} phrase={phrase} onSpeak={handleSpeak} isFavorited={isFavorited(phrase)} onToggleFavorite={() => handleToggleFavorite(phrase)} className={`w-full h-full ${contrast ? 'bg-gray-700 border border-stone-500 hover:bg-gray-600 text-gray-200' : 'bg-white border border-stone-300 hover:bg-blue-50 hover:border-blue-400 text-gray-800'}`} />
          ))}
        </div>
      </div>
    </>
  );
}

export default MainView;
