// Simple bilingual i18n (AR/EN) with RTL/LTR switching
const dict = {
  ar: {
    'nav.about': 'عنّي',
    'nav.skills': 'المهارات',
    'nav.projects': 'الأعمال',
    'nav.services': 'الخبرات',
    'nav.resume': 'السيرة',
    'nav.contact': 'تواصل',
    'hero.eyebrow': 'أمن سيبراني · شبكات · برمجة آمنة',
    'hero.title': 'مرحباً، أنا <span class="accent">مرتضى علي الجدره</span>',
    'hero.sub': 'خريج أمن سيبراني وشبكات بتركيز قوي على <strong>اختبار الاختراق</strong> وتقييم الثغرات. لدي ١٠ أشهر من الخبرة العملية في كشف العيوب الأمنية وتأمين الأنظمة، وأستخدم خبرتي في بايثون، وتطوير الويب، والذكاء الاصطناعي لتقديم حلول أمنية مبتكرة.',
    'hero.cta1': 'ابدأ التواصل',
    'hero.cta2': 'استعراض الأعمال',
    'about.title': 'عنّي',
    'about.text': 'أنا مرتضى علي الجدره، خريج بكالوريوس الأمن السيبراني والشبكات من جامعة العلوم والتكنولوجيا (٢٠٢١–٢٠٢٦). لدي شغف بالقرصنة الأخلاقية، والدفاع عن الشبكات، وتحليل البرمجيات الخبيثة.',
    'about.mission.title': 'الهدف',
    'about.mission.text': 'بناء أنظمة مرنة وآمنة باستخدام أحدث تقنيات اختبار الاختراق والأتمتة.',
    'about.values.title': 'التعليم',
    'about.values.text': 'بكالوريوس أمن سيبراني (UST) · دراسات اللغة الإنجليزية (TOEFL) · الثانوية العامة (مدرسة القلم الذهبي).',
    'about.langs.title': 'اللغات',
    'about.langs.text': 'العربية (اللغة الأم) · الإنجليزية (TOEIC Certified)',
    'skills.title': 'المهارات',
    'skills.defense.title': 'الأمن والاختبار',
    'skills.network.title': 'الشبكات',
    'skills.secprog.title': 'البرمجة والتصميم',
    'skills.certs.title': 'الشهادات',
    'projects.title': 'أبرز المشاريع',
    'projects.p1.title': 'نظام DER3 للكشف عن التسلل',
    'projects.p1.text': 'قائد مشروع نظام ذكي للكشف عن الهجمات السيبرانية ومنعها باستخدام منهجية هجينة تعتمد على تعلم الآلة.',
    'projects.p1.demo': 'إليك نسخة تجريبية من المشروع:',
    'projects.p1.link': 'mor7adha.netlify.app',
    'projects.p2.title': 'أداة CriptX للتشفير',
    'projects.p2.text': 'تطوير أداة أمان قوية للملفات تستخدم خوارزميات التشفير القياسية وتقنيات إخفاء المعلومات المتقدمة.',
    'projects.p3.title': 'موقع مركز لوتس الطبي',
    'projects.p3.text': 'تصميم واجهات مستخدم عصرية (UI) متصلة بقاعدة بيانات آمنة لإدارة البيانات بكفاءة.',
    'services.title': 'الخبرات المهنية',
    'services.vuln.title': 'اختبار الاختراق (VertoCore)',
    'services.vuln.text': '١٠ أشهر، إجراء اختبارات اختراق شاملة على تطبيقات الويب والشبكات لتخفيف الثغرات.',
    'services.hard.title': 'أتمتة الأمن',
    'services.hard.text': 'استخدام سكربتات Python لأتمتة التقييمات الأمنية وزيادة كفاءة كشف التهديدات.',
    'services.net.title': 'التعاون البرمجي الآمن',
    'services.net.text': 'العمل مع فرق التطوير لتطبيق ممارسات البرمجة الآمنة (Secure Coding Practices).',
    'services.secprog.title': 'الدفاع المدعوم بالذكاء الاصطناعي',
    'services.secprog.text': 'تطبيق أدوات الذكاء الاصطناعي لمحاكاة سيناريوهات الهجوم وتعزيز استراتيجيات الدفاع.',
    'resume.title': 'السيرة الذاتية',
    'resume.text': 'يمكنك تحميل السيرة الذاتية بصيغة PDF أو استعراض النسخة الحالية.',
    'resume.view': 'استعراض السيرة',
    'resume.download': 'تحميل',
    'contact.title': 'تواصل معي',
    'contact.text': 'متاح للفرص الوظيفية والتعاون المهني في مجال الأمن السيبراني. تواصل معي مباشرة:',
    'contact.github': 'جيت هب',
    'contact.instagram': 'انستقرام',
    'contact.whatsapp': 'واتساب',
    'contact.linkedin': 'لينكد إن',
    'contact.facebook': 'فيسبوك',
    'contact.email': 'البريد الإلكتروني',
    'footer.rights': 'جميع الحقوق محفوظة'
  },
  en: {
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.services': 'Experience',
    'nav.resume': 'Resume',
    'nav.contact': 'Contact',
    'hero.eyebrow': 'Penetration Tester · Network Security · Python',
    'hero.title': 'Hi, I\'m <span class="accent">MORTADHA ALI AL-JODRAH</span>',
    'hero.sub': 'Cybersecurity and Networks graduate with a strong focus on <strong>penetration testing</strong> and vulnerability assessment. I have 10 months of practical experience in identifying security flaws and securing systems, leveraging Python, web development, and AI tools to deliver innovative security solutions.',
    'hero.cta1': 'Get in touch',
    'hero.cta2': 'View Projects',
    'about.title': 'About Me',
    'about.text': 'I am Mortadha Ali Al-Jodrah, a Bachelor of Cybersecurity and Networks graduate from the University of Science and Technology (Sep 2021 – 2026). My focus lies in ethical hacking, network defense, and malware analysis.',
    'about.mission.title': 'Goal',
    'about.mission.text': 'Developing robust security solutions through continuous learning and proven leadership skills.',
    'about.values.title': 'Education',
    'about.values.text': 'B.Sc. Cybersecurity (UST) · English Language Studies (TOEFL Prep) · High School Diploma (The Golden Pen School).',
    'about.langs.title': 'Languages',
    'about.langs.text': 'English (TOEFL Certified) · Arabic (Native)',
    'skills.title': 'Skills',
    'skills.defense.title': 'Security & Research',
    'skills.network.title': 'Networking',
    'skills.secprog.title': 'Programming & Design',
    'skills.certs.title': 'Certifications',
    'projects.title': 'Featured Projects',
    'projects.p1.title': '"DER3" Intelligent IDS/IPS',
    'projects.p1.text': 'Project Lead for a smart security system detecting cyberattacks using a hybrid machine learning approach. Led team to "Excellent" score.',
    'projects.p1.demo': 'Here is a demo version of the project:',
    'projects.p1.link': 'mor7adha.netlify.app',
    'projects.p2.title': '"CriptX" Encryption Tool',
    'projects.p2.text': 'Developed a robust file security tool utilizing industry-standard encryption and advanced steganography techniques.',
    'projects.p3.title': 'Lotus Medical Center Website',
    'projects.p3.text': 'Designed modern, user-friendly UI interfaces connected to a secure database system for efficient data management.',
    'services.title': 'Professional Experience',
    'services.vuln.title': 'Penetration Tester (VertoCore)',
    'services.vuln.text': 'May 2025 – Feb 2026. Conducted comprehensive pentesting on web apps/networks to mitigate vulnerabilities.',
    'services.hard.title': 'Security Automation',
    'services.hard.text': 'Utilized Python scripts to automate security assessments, increasing efficiency in threat detection.',
    'services.net.title': 'Secure Coding',
    'services.net.text': 'Collaborated with web development teams to implement secure coding practices.',
    'services.secprog.title': 'AI-Driven Defense',
    'services.secprog.text': 'Applied advanced AI tools to simulate attack scenarios and enhance defense strategies.',
    'resume.title': 'Resume',
    'resume.text': 'Download my resume as PDF or view the web version.',
    'resume.view': 'View Resume',
    'resume.download': 'Download',
    'contact.title': 'Contact Me',
    'contact.text': 'Available for penetration testing roles and security consulting. Connect with me via:',
    'contact.github': 'GitHub',
    'contact.instagram': 'Instagram',
    'contact.whatsapp': 'WhatsApp',
    'contact.linkedin': 'LinkedIn',
    'contact.facebook': 'Facebook',
    'contact.email': 'Email',
    'footer.rights': 'All rights reserved'
  }
};
function applyLanguage(lang) {
  const isEN = lang === 'en';
  document.documentElement.lang = isEN ? 'en' : 'ar';
  document.documentElement.dir = isEN ? 'ltr' : 'rtl';
  document.body.classList.toggle('ltr', isEN);

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const html = dict[lang]?.[key];
    if (html !== undefined) { el.innerHTML = html; }
  });

  document.querySelectorAll('[data-i18n-wrap]').forEach(label => {
    const key = label.getAttribute('data-i18n-wrap');
    const text = dict[lang]?.[key];
    if (text !== undefined) {
      const input = label.querySelector('input,textarea');
      label.childNodes.forEach(n => { if (n.nodeType === 3) { n.textContent = ''; } });
      label.insertBefore(document.createTextNode(text + ' '), input);
      if (input && input.placeholder) {
        if (key === 'contact.name') { input.placeholder = isEN ? 'Your full name' : 'الاسم الكامل'; }
        if (key === 'contact.email') { input.placeholder = isEN ? 'your.email@example.com' : 'بريدك الإلكتروني'; }
        if (key === 'contact.message') { input.placeholder = isEN ? 'Type your message here...' : 'اكتب تفاصيل رسالتك هنا...'; }
      }
    }
  });

  localStorage.setItem('lang', lang);
}

const initial = localStorage.getItem('lang') || 'en';
applyLanguage(initial);
document.querySelector('#langToggle')?.addEventListener('click', () => {
  const next = (localStorage.getItem('lang') === 'ar') ? 'en' : 'ar';
  applyLanguage(next);
});
