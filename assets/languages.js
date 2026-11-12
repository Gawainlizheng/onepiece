const selectors = ['.logo small','nav a[href="#story"]','nav a[href="#crew"]','.kicker','.chapter','#title','.lead','.cta','.bubble','.panel figcaption','.strip span:nth-child(1)','.strip span:nth-child(2)','.strip span:nth-child(3)','#story-title','.section-top > span','.card:nth-child(1) h3','.card:nth-child(1) p','.card:nth-child(2) h3','.card:nth-child(2) p','.card:nth-child(3) h3','.card:nth-child(3) p','.vote h3','.vote p','[data-team="parrot"]','[data-team="monkey"]','footer span:first-child','footer span:last-child'];
const translations = {
  'zh-CN': {
    title: 'One Piece of Cookie · 宝藏只有一块！',
    description: '一只鹦鹉、一只猴子，与藏在海贼宝藏箱里的一块曲奇。冒险，现在开场！',
    alt: '海贼漫画插画：宝藏箱里的一块巧克力曲奇，鹦鹉和猴子争着伸向它',
    home: 'One Piece of Cookie 首页', nav: '主导航', group: '选择支持的角色',
    idle: '故事才刚开始，下一站，一起出发。',
    parrot: '鹦鹉收到你的应援，已经展开翅膀：这块曲奇，我叼定了！',
    monkey: '猴子收到你的应援，已经卷起袖子：别眨眼，马上到手！'
  },
  en: {
    title: 'One Piece of Cookie · Just One Cookie!',
    description: 'A parrot, a monkey, and a single cookie inside a pirate treasure chest. Let the adventure begin!',
    alt: 'Pirate manga illustration: a parrot and a monkey reach for a single chocolate chip cookie inside an open treasure chest',
    home: 'One Piece of Cookie home', nav: 'Main navigation', group: 'Choose your favorite treasure hunter',
    idle: 'Our story is just beginning. Set sail with us!',
    parrot: 'The parrot spreads its wings: Thanks for the support! That cookie is mine!',
    monkey: 'The monkey rolls up its sleeves: Thanks for the support! Blink and you’ll miss it!',
    text: ['OF COOKIE / A BITE OF ADVENTURE','The treasure','Pick your crew ↗','THE GREAT COOKIE ADVENTURE','CHAPTER 001 · TREASURE AHOY!','The legendary<br>treasure is…<br><span>ONE COOKIE!</span>','Across the sea. Into the treasure chest.<br>No gold. No jewels. Just one delicious cookie, and two rivals who refuse to give in.','Join the treasure hunt <span aria-hidden="true">↘</span>','MINE!!','One cookie. Two rivals. One great adventure.','01 COOKIE / THE ONLY TREASURE','02 RIVALS / NO BACKING DOWN','∞ ADVENTURES / NEVER ENDING','A different kind of treasure.','Not all treasure is silver and gold.','The treasure · The last cookie','Golden, crunchy, and packed with chocolate. Sitting quietly in the chest, it has turned the whole deck upside down.','The parrot · An aerial raid','“Finders keepers!” This loudmouthed sailor is ready to swoop down and snatch the prize.','The monkey · Quick hands','“Just a little taste!” An innocent grin, lightning-fast hands. That cookie is almost within reach.','Whose side are you on?','Cheer for your favorite treasure hunter. Or maybe sharing is the sweetest ending.','Team Parrot','Team Monkey','© One Piece of Cookie · Small cookie. Big adventure.','An original pirate tale · For curious minds and hungry hearts']
  },
  ja: {
    title: 'One Piece of Cookie · お宝はクッキー1枚！',
    description: '海賊の宝箱に眠る、たった1枚のクッキー。それを狙うオウムとサル。冒険が今、始まる！',
    alt: '海賊漫画風イラスト：開いた宝箱の中の1枚のチョコチップクッキーに、オウムとサルが手を伸ばしている',
    home: 'One Piece of Cookie ホーム', nav: 'メインナビゲーション', group: '応援するキャラクターを選ぶ',
    idle: '物語はまだ始まったばかり。さあ、一緒に出航しよう！',
    parrot: '応援を受けたオウムが翼を広げた！「そのクッキー、いただきだ！」',
    monkey: '応援を受けたサルが腕まくり！「まばたきする間に、いただき！」',
    text: ['OF COOKIE / クッキー1枚の大冒険','お宝の物語','誰を応援？ ↗','クッキーをめぐる大冒険','第001話 · お宝発見！','伝説のお宝は、<br>なんと、たった<br><span>クッキー1枚！</span>','海を越え、宝箱を開けると——<br>金も宝石もない。あるのはおいしそうなクッキー1枚と、一歩も譲らないふたりだけ。','お宝争奪戦を見に行く <span aria-hidden="true">↘</span>','オレのだ！！','クッキー1枚。ライバルふたり。大冒険の始まり。','01 COOKIE / たったひとつのお宝','02 RIVALS / どちらも譲らない','∞ ADVENTURES / 冒険は続く','この宝箱、ひと味ちがう。','お宝は、金や銀だけじゃない。','お宝 · 最後の1枚','こんがりサクサク、チョコたっぷり。宝箱の真ん中に眠る1枚が、甲板じゅうを大騒ぎに。','オウム · 空から急襲','「先に見つけたもん勝ち！」大声自慢の船乗りは、急降下でお宝をさらう気満々。','サル · すばやい手','「ちょっと味見するだけ！」無邪気な笑顔に、すばやい動き。クッキーに一番近い手は、もう動いている。','この1枚、誰を応援する？','お気に入りのお宝ハンターを応援しよう。分け合うのが、一番おいしい結末かも。','オウムを応援','サルを応援','© One Piece of Cookie · 小さなクッキー、大きな冒険。','オリジナル海賊物語 · 好奇心と食いしん坊に捧ぐ']
  }
};
translations['zh-CN'].text = selectors.map(selector => document.querySelector(selector).innerHTML);
let currentLanguage = 'en';
let selectedTeam = null;
let manualChoice = false;
const picker = document.getElementById('language');
function applyLanguage(language) {
  if (!Object.hasOwn(translations, language)) language = 'en';
  currentLanguage = language;
  const copy = translations[language];
  document.documentElement.lang = language;
  document.title = copy.title;
  document.querySelector('meta[name="description"]').content = copy.description;
  document.querySelector('.panel img').alt = copy.alt;
  document.querySelector('.logo').setAttribute('aria-label', copy.home);
  document.querySelector('nav').setAttribute('aria-label', copy.nav);
  document.querySelector('.choices').setAttribute('aria-label', copy.group);
  selectors.forEach((selector, index) => { document.querySelector(selector).innerHTML = copy.text[index]; });
  document.getElementById('result').textContent = copy[selectedTeam || 'idle'];
  picker.value = language;
}
picker.addEventListener('change', () => {
  manualChoice = true;
  applyLanguage(picker.value);
  try { localStorage.setItem('cookie-language', currentLanguage); } catch { /* Storage may be disabled. */ }
});
document.querySelectorAll('[data-team]').forEach(button => button.addEventListener('click', () => {
  selectedTeam = button.dataset.team;
  document.querySelectorAll('[data-team]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
  document.getElementById('result').textContent = translations[currentLanguage][selectedTeam];
}));
async function initializeLanguage() {
  let saved;
  try { saved = localStorage.getItem('cookie-language'); } catch { /* Continue with IP detection. */ }
  if (saved && Object.hasOwn(translations, saved)) { applyLanguage(saved); return; }
  applyLanguage('en');
  try {
    const response = await fetch('/api/language', { cache: 'no-store', signal: AbortSignal.timeout(4000) });
    if (!response.ok) return;
    const data = await response.json();
    if (!manualChoice) applyLanguage(data.language);
  } catch { /* Offline, local preview, or service unavailable: keep English. */ }
}
initializeLanguage();
