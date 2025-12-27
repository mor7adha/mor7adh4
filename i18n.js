// Simple bilingual i18n (AR/EN) with RTL/LTR switching
const dict = {
  ar: {
    'nav.about':'عنّي',
    'nav.skills':'المهارات',
    'nav.projects':'التدريب والـLabs',
    'nav.services':'مجالات التركيز',
    'nav.resume':'السيرة',
    'nav.contact':'تواصل',
    'hero.eyebrow':'الأمن السيبراني · اختبار اختراق · شبكات',
    'hero.title':'مرحباً، أنا <span class="accent">منصور محمد عياش</span>',
    'hero.sub':'طالب أمن سيبراني في السنة الأخيرة (متوقع التخرج 2026) أبحث عن فرصة مبتدئة كـ <strong>مختبر اختراق</strong>. لدي أساس قوي في مسار <strong>CCNA</strong>، وتقنيات الويب، ومفاهيم الأمن، مع تطبيق عملي عبر مواد الجامعة وتدريب ذاتي (Labs).',
    'hero.cta1':'ابدأ التواصل',
    'hero.cta2':'استعراض المزيد',
    'about.title':'عنّي',
    'about.text':'أنا منصور محمد عياش، طالب أمن سيبراني في السنة الأخيرة بجامعة العلوم والتكنولوجيا (متوقع 2026). أركز على بناء أساس قوي في اختبار الاختراق والشبكات عبر الدراسة والممارسة العملية.',
    'about.mission.title':'الهدف',
    'about.mission.text':'تطوير مهارات عملية في الأمن السيبراني مع التزام أخلاقي بالتعلم والتوثيق.',
    'about.values.title':'القيم',
    'about.values.text':'الالتزام، المسؤولية، النزاهة، وتوثيق واضح قابل للمراجعة.',
    'about.langs.title':'اللغات',
    'about.langs.text':'العربية · English (Intermediate)',
    'skills.title':'المهارات',
    'skills.defense.title':'الأمن والاختبار',
    'skills.network.title':'الشبكات',
    'skills.secprog.title':'البرمجة وتقنيات الويب',
    'skills.certs.title':'الشهادات',
    'projects.title':'التدريب والـLabs',
    'projects.p1.title':'تدريبات CCNA العملية',
    'projects.p1.text':'ممارسة عملية في أساسيات التوجيه والتحويل وSubnetting وVLAN.',
    'projects.p2.title':'تدريب تصميم الويب',
    'projects.p2.text':'بناء صفحات متجاوبة باستخدام HTML وJavaScript مع التركيز على واجهة نظيفة.',
    'projects.p3.title':'دراسة الأمن وتدريب ذاتي',
    'projects.p3.text':'تطبيق مفاهيم الأمن وتمارين أولية في أمن الويب لبناء أساس اختبار الاختراق.',
    'services.title':'مجالات التركيز',
    'services.vuln.title':'أمن تطبيقات الويب (مبتدئ)',
    'services.vuln.text':'قوائم تحقق وتمارين تعليمية لتقييم أساسيات أمن تطبيقات الويب.',
    'services.hard.title':'أساسيات الشبكات',
    'services.hard.text':'مسار CCNA: أساسيات Routing/Switching مع تدريب منهجي على Troubleshooting.',
    'services.net.title':'أساسيات البرمجة',
    'services.net.text':'Python scripting وتقنيات الويب (HTML/JavaScript) لدعم التعلم والأتمتة.',
    'services.secprog.title':'تصميم الويب',
    'services.secprog.text':'مواقع شخصية بسيطة وتصميم واجهات متجاوبة بشكل احترافي.',
    'resume.title':'السيرة الذاتية',
    'resume.text':'يمكنك تحميل السيرة الذاتية بصيغة PDF أو استعراض النسخة HTML.',
    'resume.view':'استعراض السيرة',
    'resume.download':'تحميل',
    'contact.title':'تواصل معي',
    'contact.text':'للتعاون، التدريب، أو الفرص الوظيفية للمستوى المبتدئ:',
    'contact.send':'إرسال الرسالة',
    'contact.name':'الاسم',
    'contact.email':'البريد الإلكتروني',
    'contact.subject':'الموضوع',
    'contact.message':'الرسالة',
    'contact.hint':'عادةً أرد خلال ٢٤–٤٨ ساعة.',
    'contact.sideTitle':'معلومات إضافية',
    'contact.sideText':'يمكنك التواصل مباشرة عبر البريد أو الهاتف، أو فتح موقع العنوان على الخريطة.',
    'footer.rights':'جميع الحقوق محفوظة'
  },
  en: {
    'nav.about':'About',
    'nav.skills':'Skills',
    'nav.projects':'Labs',
    'nav.services':'Focus Areas',
    'nav.resume':'Resume',
    'nav.contact':'Contact',
    'hero.eyebrow':'Cybersecurity · Penetration Testing · Networking',
    'hero.title':'Hi, I\'m <span class="accent">Mansour Mohammed Ayash</span>',
    'hero.sub':'Final-year Cybersecurity student (expected graduation 2026) seeking an entry-level <strong>Penetration Tester</strong> role. Strong fundamentals in <strong>CCNA-track networking</strong>, web technologies, and security concepts, with a hands-on approach through coursework and self-directed labs.',
    'hero.cta1':'Get in touch',
    'hero.cta2':'Explore',
    'about.title':'About',
    'about.text':'I’m Mansour Mohammed Ayash, a final-year Cybersecurity student at the University of Science and Technology (expected 2026). I’m focused on building strong fundamentals in penetration testing and networking through coursework and hands-on practice.',
    'about.mission.title':'Goal',
    'about.mission.text':'Build practical cybersecurity skills with an ethical, documentation-driven learning approach.',
    'about.values.title':'Values',
    'about.values.text':'Integrity, responsibility, and clear, auditable documentation.',
    'about.langs.title':'Languages',
    'about.langs.text':'Arabic · English (Intermediate)',
    'skills.title':'Skills',
    'skills.defense.title':'Security & Testing',
    'skills.network.title':'Networking',
    'skills.secprog.title':'Programming & Web',
    'skills.certs.title':'Certificates',
    'projects.title':'Labs & Coursework',
    'projects.p1.title':'CCNA Practice Labs',
    'projects.p1.text':'Hands-on practice in routing, switching, subnetting, and VLAN fundamentals.',
    'projects.p2.title':'Web Design Practice',
    'projects.p2.text':'Built responsive pages using HTML and JavaScript with a focus on clean UI.',
    'projects.p3.title':'Security Coursework & Self-Directed Labs',
    'projects.p3.text':'Applied core security concepts and introductory web security exercises to build penetration testing fundamentals.',
    'services.title':'Focus Areas',
    'services.vuln.title':'Web Security (Entry-level)',
    'services.vuln.text':'Learning-based assessments and security checklists for web applications.',
    'services.hard.title':'Networking Fundamentals',
    'services.hard.text':'CCNA-track routing/switching basics and structured troubleshooting practice.',
    'services.net.title':'Programming Basics',
    'services.net.text':'Python scripting and web basics (HTML/JavaScript) to support learning and automation.',
    'services.secprog.title':'Web Design',
    'services.secprog.text':'Simple personal websites and UI layouts with clean, responsive styling.',
    'resume.title':'Resume',
    'resume.text':'You can download the resume as a PDF or view the HTML version.',
    'resume.view':'View Resume',
    'resume.download':'Download',
    'contact.title':'Contact Me',
    'contact.text':'For collaboration, internships, or entry-level opportunities:',
    'contact.send':'Send message',
    'contact.name':'Name',
    'contact.email':'Email',
    'contact.subject':'Subject',
    'contact.message':'Message',
    'contact.hint':'I usually reply within 24–48 hours.',
    'contact.sideTitle':'Additional info',
    'contact.sideText':'Reach me via email or phone, or open the location on the map.',
    'footer.rights':'All rights reserved'
  }
};
function applyLanguage(lang){
  const isEN = lang === 'en';
  document.documentElement.lang = isEN ? 'en' : 'ar';
  document.documentElement.dir  = isEN ? 'ltr' : 'rtl';
  document.body.classList.toggle('ltr', isEN);

  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    const html = dict[lang]?.[key];
    if(html !== undefined){ el.innerHTML = html; }
  });

  document.querySelectorAll('[data-i18n-wrap]').forEach(label=>{
    const key = label.getAttribute('data-i18n-wrap');
    const text = dict[lang]?.[key];
    if(text !== undefined){
      const input = label.querySelector('input,textarea');
      label.childNodes.forEach(n=>{ if(n.nodeType===3){ n.textContent=''; }});
      label.insertBefore(document.createTextNode(text+' '), input);
      if(input && input.placeholder){
        if(key==='contact.name'){ input.placeholder = isEN ? 'Your full name' : 'اسمك الكامل'; }
        if(key==='contact.email'){ input.placeholder = isEN ? 'example@mail.com' : 'example@mail.com'; }
        if(key==='contact.message'){ input.placeholder = isEN ? 'Type your message here' : 'اكتب رسالتك هنا'; }
      }
    }
  });

  localStorage.setItem('lang', lang);
}

const initial = localStorage.getItem('lang') || 'en';
applyLanguage(initial);
document.querySelector('#langToggle')?.addEventListener('click', ()=>{
  const next = (localStorage.getItem('lang') === 'ar') ? 'en' : 'ar';
  applyLanguage(next);
});
