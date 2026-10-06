import pptxgen from 'pptxgenjs';

const pptx = new pptxgen();
pptx.layout = 'LAYOUT_WIDE';
pptx.author = 'Nomthandazo Michelle Mahlaba';
pptx.subject = 'Personal portfolio presentation';
pptx.title = 'Nomthandazo Michelle Mahlaba — Portfolio';
pptx.company = 'Nomthandazo Michelle Mahlaba';
pptx.lang = 'en-ZA';
pptx.theme = {
  headFontFace: 'Aptos Display',
  bodyFontFace: 'Aptos',
  lang: 'en-ZA',
};
pptx.defineSlideMaster({
  title: 'MASTER',
  background: { color: '07111F' },
  objects: [
    { rect: { x: 0, y: 7.18, w: 13.333, h: 0.32, fill: { color: '0D9488' }, line: { color: '0D9488' } } },
    { text: { text: 'NOMTHANDAZO MICHELLE MAHLABA', options: { x: 0.55, y: 7.26, w: 5.6, h: 0.12, fontFace: 'Aptos', fontSize: 6.5, color: 'CCFBF1', bold: true, margin: 0 } } },
    { text: { text: 'PERSONAL PORTFOLIO', options: { x: 10.3, y: 7.26, w: 2.45, h: 0.12, fontFace: 'Aptos', fontSize: 6.5, color: 'CCFBF1', align: 'right', margin: 0 } } },
  ],
  slideNumber: { x: 12.85, y: 7.24, color: 'CCFBF1', fontFace: 'Aptos', fontSize: 7 },
});

const C = { navy: '07111F', panel: '0D1C2E', panel2: '11263A', teal: '2DD4BF', tealDark: '0D9488', cyan: '67E8F9', white: 'F8FAFC', muted: 'A8B7C7', soft: 'D7E3EC', line: '24405A' };
const W = 13.333;

function addTitle(slide, eyebrow, title, subtitle = '') {
  slide.addText(eyebrow.toUpperCase(), { x: 0.7, y: 0.48, w: 5.5, h: 0.2, fontSize: 9, bold: true, color: C.teal, charSpacing: 2, margin: 0 });
  slide.addText(title, { x: 0.7, y: 0.82, w: 10.8, h: 0.55, fontSize: 27, bold: true, color: C.white, margin: 0, breakLine: false, fit: 'shrink' });
  if (subtitle) slide.addText(subtitle, { x: 0.72, y: 1.52, w: 10.8, h: 0.32, fontSize: 11, color: C.muted, margin: 0, fit: 'shrink' });
}

function addPanel(slide, x, y, w, h, fill = C.panel) {
  slide.addShape(pptx.ShapeType.roundRect, { x, y, w, h, rectRadius: 0.08, fill: { color: fill }, line: { color: C.line, width: 0.7 } });
}

function addBulletList(slide, items, x, y, w, fontSize = 13, color = C.soft, gap = 0.35) {
  items.forEach((item, i) => {
    const yy = y + i * gap;
    slide.addShape(pptx.ShapeType.ellipse, { x, y: yy + 0.08, w: 0.08, h: 0.08, fill: { color: C.teal }, line: { color: C.teal } });
    slide.addText(item, { x: x + 0.22, y: yy, w: w - 0.22, h: 0.25, fontSize, color, margin: 0, breakLine: false, fit: 'shrink' });
  });
}

// Cover
{
  const slide = pptx.addSlide('MASTER');
  slide.background = { color: C.navy };
  slide.addShape(pptx.ShapeType.arc, { x: 8.55, y: -1.3, w: 5.3, h: 5.3, line: { color: C.tealDark, width: 2, transparency: 20 }, adjustPoint: 0.25, rotate: 20 });
  slide.addShape(pptx.ShapeType.arc, { x: 9.5, y: 0.2, w: 4.3, h: 4.3, line: { color: C.cyan, width: 1, transparency: 60 }, adjustPoint: 0.25, rotate: 20 });
  slide.addText('PERSONAL\nPORTFOLIO', { x: 0.75, y: 1.05, w: 5.8, h: 0.9, fontSize: 14, bold: true, color: C.teal, charSpacing: 3, breakLine: false, margin: 0, fit: 'shrink' });
  slide.addText('Nomthandazo\nMichelle Mahlaba', { x: 0.72, y: 2.1, w: 7.7, h: 1.5, fontSize: 34, bold: true, color: C.white, breakLine: false, margin: 0, fit: 'shrink' });
  slide.addText('Grade 12 Graduate  |  Aspiring Professional', { x: 0.76, y: 3.85, w: 6.5, h: 0.35, fontSize: 16, color: C.cyan, margin: 0, fit: 'shrink' });
  slide.addText('A motivated, dependable, and enthusiastic young professional ready to learn, grow, and contribute.', { x: 0.76, y: 4.55, w: 6.2, h: 0.7, fontSize: 16, color: C.muted, breakLine: false, margin: 0, fit: 'shrink' });
  slide.addText('2025', { x: 10.5, y: 5.35, w: 1.8, h: 0.55, fontSize: 30, bold: true, color: C.teal, align: 'right', margin: 0 });
  slide.addText('GRADE 12 COMPLETED', { x: 9.15, y: 5.95, w: 3.15, h: 0.22, fontSize: 9, bold: true, color: C.muted, align: 'right', charSpacing: 1.4, margin: 0 });
}

// Profile
{
  const slide = pptx.addSlide('MASTER');
  addTitle(slide, '01 / Profile', 'A positive attitude with a strong work ethic', 'A snapshot of who I am and what I bring to a professional environment.');
  addPanel(slide, 0.7, 2.15, 7.3, 4.35);
  slide.addText('ABOUT ME', { x: 1.05, y: 2.52, w: 2, h: 0.2, fontSize: 10, bold: true, color: C.teal, charSpacing: 1.5, margin: 0 });
  slide.addText('I completed Grade 12 at Leondale Secondary School in 2025. I am a determined and hard-working person who enjoys collaborating with new people and taking on new challenges with confidence.', { x: 1.05, y: 2.92, w: 6.5, h: 1.12, fontSize: 18, color: C.white, breakLine: false, margin: 0, fit: 'shrink', valign: 'mid' });
  slide.addText('I am currently seeking an opportunity where I can develop my skills, learn from others, and make a meaningful contribution.', { x: 1.05, y: 4.55, w: 6.25, h: 0.72, fontSize: 15, color: C.muted, breakLine: false, margin: 0, fit: 'shrink' });
  slide.addShape(pptx.ShapeType.line, { x: 1.05, y: 5.65, w: 6.1, h: 0, line: { color: C.line, width: 1 } });
  slide.addText('Open to learning • Open to opportunities • Ready to contribute', { x: 1.05, y: 5.92, w: 6.4, h: 0.25, fontSize: 11, color: C.cyan, margin: 0, fit: 'shrink' });
  addPanel(slide, 8.35, 2.15, 4.25, 4.35, C.panel2);
  slide.addText('QUICK FACTS', { x: 8.75, y: 2.52, w: 2, h: 0.2, fontSize: 10, bold: true, color: C.teal, charSpacing: 1.5, margin: 0 });
  const facts = [['Location', 'Katlehong South'], ['Languages', 'English · isiZulu'], ['School', 'Leondale Secondary'], ['Interests', 'Reading · Netball']];
  facts.forEach(([label, value], i) => {
    const y = 3.05 + i * 0.72;
    slide.addText(label, { x: 8.75, y, w: 1.25, h: 0.2, fontSize: 10, color: C.muted, margin: 0 });
    slide.addText(value, { x: 10.1, y, w: 2.05, h: 0.25, fontSize: 13, bold: true, color: C.white, margin: 0, fit: 'shrink' });
  });
}

// Education
{
  const slide = pptx.addSlide('MASTER');
  addTitle(slide, '02 / Education', 'Building a strong foundation', 'Grade 12 completed at Leondale Secondary School in 2025.');
  addPanel(slide, 0.7, 2.18, 12, 1.25, C.panel2);
  slide.addText('GRADE 12', { x: 1.05, y: 2.48, w: 2.2, h: 0.3, fontSize: 20, bold: true, color: C.white, margin: 0 });
  slide.addText('Leondale Secondary School', { x: 4.05, y: 2.45, w: 3.4, h: 0.25, fontSize: 15, bold: true, color: C.teal, margin: 0 });
  slide.addText('Completed 2025', { x: 9.7, y: 2.48, w: 2.4, h: 0.22, fontSize: 12, color: C.muted, align: 'right', margin: 0 });
  slide.addText('SUBJECTS PASSED', { x: 0.72, y: 3.95, w: 3.5, h: 0.2, fontSize: 10, bold: true, color: C.teal, charSpacing: 1.5, margin: 0 });
  addPanel(slide, 0.7, 4.3, 5.75, 1.85);
  addBulletList(slide, ['English First Additional Language', 'isiZulu Home Language', 'Mathematics', 'Geography'], 1.05, 4.68, 5, 13, C.soft, 0.34);
  addPanel(slide, 6.85, 4.3, 5.85, 1.85);
  addBulletList(slide, ['Physical Sciences', 'Life Sciences', 'Life Orientation', 'Strong willingness to keep learning'], 7.2, 4.68, 5.15, 13, C.soft, 0.34);
}

// Strengths
{
  const slide = pptx.addSlide('MASTER');
  addTitle(slide, '03 / Strengths', 'Skills I bring to a team', 'Personal attributes and abilities reflected in my CV.');
  const left = ['Communication', 'Interpersonal skills', 'Writing', 'Conflict resolution'];
  const right = ['Negotiation', 'Analytical thinking', 'Creativity', 'Teamwork'];
  addPanel(slide, 0.7, 2.2, 5.75, 3.9);
  addPanel(slide, 6.85, 2.2, 5.85, 3.9);
  slide.addText('COMMUNICATION & COLLABORATION', { x: 1.05, y: 2.58, w: 4.8, h: 0.22, fontSize: 10, bold: true, color: C.teal, charSpacing: 1.3, margin: 0 });
  addBulletList(slide, left, 1.05, 3.12, 5.0, 16, C.white, 0.58);
  slide.addText('PROBLEM SOLVING & GROWTH', { x: 7.2, y: 2.58, w: 4.8, h: 0.22, fontSize: 10, bold: true, color: C.teal, charSpacing: 1.3, margin: 0 });
  addBulletList(slide, right, 7.2, 3.12, 5.05, 16, C.white, 0.58);
  slide.addText('I am energetic, optimistic, friendly, determined, hard working, zealous, enthusiastic, and confident in my abilities.', { x: 1.0, y: 6.42, w: 11.3, h: 0.3, fontSize: 13, italic: true, color: C.cyan, align: 'center', margin: 0, fit: 'shrink' });
}

// Interests
{
  const slide = pptx.addSlide('MASTER');
  addTitle(slide, '04 / Beyond the Classroom', 'Interests that keep me balanced', 'The activities I enjoy and the qualities they reflect.');
  addPanel(slide, 0.7, 2.25, 5.55, 3.65, C.panel2);
  addPanel(slide, 7.05, 2.25, 5.65, 3.65, C.panel2);
  slide.addText('READING', { x: 1.15, y: 2.75, w: 3, h: 0.35, fontSize: 23, bold: true, color: C.white, margin: 0 });
  slide.addText('Reading helps me stay curious, focused, and open to new ideas.', { x: 1.15, y: 3.45, w: 4.35, h: 0.75, fontSize: 16, color: C.muted, margin: 0, fit: 'shrink' });
  slide.addText('NETBALL', { x: 7.5, y: 2.75, w: 3, h: 0.35, fontSize: 23, bold: true, color: C.white, margin: 0 });
  slide.addText('Netball keeps me active and strengthens teamwork, discipline, and perseverance.', { x: 7.5, y: 3.45, w: 4.45, h: 0.75, fontSize: 16, color: C.muted, margin: 0, fit: 'shrink' });
  slide.addText('ENGLISH  ·  ISIZULU', { x: 1.15, y: 5.1, w: 3.5, h: 0.25, fontSize: 11, bold: true, color: C.teal, charSpacing: 1.4, margin: 0 });
  slide.addText('Languages', { x: 7.5, y: 5.1, w: 2, h: 0.25, fontSize: 11, bold: true, color: C.teal, charSpacing: 1.4, margin: 0 });
}

// Portfolio project
{
  const slide = pptx.addSlide('MASTER');
  addTitle(slide, '05 / Portfolio Project', 'My online professional profile', 'A growing digital portfolio designed to introduce me to future employers.');
  addPanel(slide, 0.7, 2.22, 7.3, 3.9);
  slide.addText('PERSONAL PORTFOLIO WEBSITE', { x: 1.08, y: 2.65, w: 5.2, h: 0.3, fontSize: 19, bold: true, color: C.white, margin: 0, fit: 'shrink' });
  slide.addText('This portfolio presents my education, strengths, interests, personal profile, and contact details in a professional and easy-to-navigate format.', { x: 1.08, y: 3.3, w: 6.2, h: 1, fontSize: 17, color: C.muted, margin: 0, fit: 'shrink' });
  slide.addText('TECHNOLOGIES', { x: 1.08, y: 4.75, w: 2, h: 0.2, fontSize: 10, bold: true, color: C.teal, charSpacing: 1.5, margin: 0 });
  ['React', 'TypeScript', 'Tailwind CSS'].forEach((tag, i) => {
    slide.addText(tag, { x: 1.08 + i * 1.55, y: 5.18, w: 1.35, h: 0.3, fontSize: 11, bold: true, color: C.cyan, align: 'center', fill: { color: C.navy, transparency: 5 }, line: { color: C.tealDark, width: 0.7 }, margin: 0.08, fit: 'shrink' });
  });
  addPanel(slide, 8.35, 2.22, 4.35, 3.9, C.panel2);
  slide.addText('WHAT IT SHOWS', { x: 8.75, y: 2.65, w: 2.8, h: 0.2, fontSize: 10, bold: true, color: C.teal, charSpacing: 1.5, margin: 0 });
  addBulletList(slide, ['Professional introduction', 'Education and subjects', 'Skills and personal attributes', 'Interests and contact details'], 8.75, 3.15, 3.45, 13, C.soft, 0.58);
}

// Contact
{
  const slide = pptx.addSlide('MASTER');
  addTitle(slide, '06 / Contact', 'Thank you for your time', 'I would welcome the opportunity to learn, grow, and contribute.');
  addPanel(slide, 0.7, 2.35, 7.2, 3.65, C.panel2);
  slide.addText('LET’S CONNECT', { x: 1.1, y: 2.8, w: 2.4, h: 0.2, fontSize: 10, bold: true, color: C.teal, charSpacing: 1.5, margin: 0 });
  slide.addText('Nomthandazo Michelle Mahlaba', { x: 1.1, y: 3.3, w: 5.8, h: 0.4, fontSize: 22, bold: true, color: C.white, margin: 0, fit: 'shrink' });
  slide.addText('Grade 12 Graduate  |  Aspiring Professional', { x: 1.1, y: 3.88, w: 5.8, h: 0.3, fontSize: 14, color: C.cyan, margin: 0 });
  slide.addText('nomthandazomahlaba8@gmail.com\n0752693498\nKatlehong South, South Africa', { x: 1.1, y: 4.55, w: 5.8, h: 0.9, fontSize: 16, color: C.soft, breakLine: false, margin: 0, fit: 'shrink' });
  addPanel(slide, 8.35, 2.35, 4.35, 3.65);
  slide.addText('NEXT CHAPTER', { x: 8.75, y: 2.8, w: 2.5, h: 0.2, fontSize: 10, bold: true, color: C.teal, charSpacing: 1.5, margin: 0 });
  slide.addText('Ready to learn.\nReady to work hard.\nReady to grow.', { x: 8.75, y: 3.35, w: 3.2, h: 1.35, fontSize: 24, bold: true, color: C.white, breakLine: false, margin: 0, fit: 'shrink' });
  slide.addText('Thank you for considering my profile.', { x: 8.75, y: 5.25, w: 3.2, h: 0.3, fontSize: 12, color: C.muted, margin: 0 });
}

pptx.writeFile({ fileName: 'public/Nomthandazo_Mahlaba_Portfolio_Presentation.pptx' });
