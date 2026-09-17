/**
 * All page copy lives here so it can be revised without touching markup.
 * `lines` arrays are rendered with line breaks on wider screens only.
 * Only state facts confirmed by the brief or the real app screenshots.
 */
import type { Category, Menu } from '../lib/aggregate';

export const links = {
  login: 'https://remato.ivelico.com/',
  signup: 'https://remato.ivelico.com/',
};

/** Google Tag Manager container. Injected on every page by BaseLayout. */
export const gtm = {
  containerId: 'GTM-K37RTZXB',
};

export const meta = {
  lang: 'ja',
  siteName: 'ReMato（リマト）',
  title: 'ReMato（リマト）｜献立を選ぶだけで、材料がまとまる買い物リスト',
  description:
    'ReMato（リマト）は、献立を選ぶと材料を自動で合算し、売り場ごとに整理された買い物リストをつくるWebサービスです。無料で、メールアドレスだけで登録できます。',
  themeColor: '#00786f',
};

export const header = {
  logoAlt: 'ReMato リマト',
  login: 'ログイン',
};

export const cta = {
  label: '今すぐ試す',
  note: '無料・メールアドレスだけで登録',
};

export const demoCategories: Category[] = [
  { id: 'vegetables', label: '野菜・きのこ類' },
  { id: 'protein', label: 'お肉・魚介類・大豆製品' },
];

export const demoMenus: Menu[] = [
  {
    id: 'sukiyaki',
    name: 'すきやき',
    checked: true,
    ingredients: [
      { name: '白菜', amount: 300, category: 'vegetables' },
      { name: '牛肉', amount: 300, category: 'protein' },
    ],
  },
  {
    id: 'hakusai-soup',
    name: '白菜スープ',
    checked: true,
    ingredients: [{ name: '白菜', amount: 200, category: 'vegetables' }],
  },
  {
    id: 'curry',
    name: 'カレー',
    checked: false,
    ingredients: [
      { name: 'じゃがいも', amount: 300, category: 'vegetables' },
      { name: 'にんじん', amount: 200, category: 'vegetables' },
    ],
  },
];

export const hero = {
  title: '今日の献立、選んでみて。',
  lead: '選ぶだけで、材料がまとまる。',
  menuCardTitle: 'つくるもの',
  listCardTitle: '買うもの',
  arrowLabel: '自動で合算',
  demoHint: '料理を選ぶと、右のリストが変わります',
  emptyList: '料理を選ぶと、ここに材料がまとまります。',
};

export const problem = {
  titleLines: ['材料の合算、', '地味に面倒じゃないですか？'],
  bodyLines: [
    'いくつかの料理をつくる日は、同じ材料を',
    '足したり、売り場ごとにメモを並べ直したり。',
    'いつもの準備を、少しラクに。',
  ],
  imageAlt: 'テーブルに並べた白菜やにんじん、牛肉を見ながら、ノートに買い物メモを書いている手元',
};

export const features = {
  heading: 'ReMatoでできること',
  items: [
    {
      icon: 'calculator',
      title: '自動で合算',
      lines: ['重なる材料をひとつに。', '必要な量がすぐわかります。'],
    },
    {
      icon: 'cart',
      title: '売り場ごとに整理',
      lines: ['野菜やお肉など、', 'カテゴリごとにまとまります。'],
    },
    {
      icon: 'repeat',
      title: 'うちの定番を再利用',
      lines: ['よく作る料理を登録して、', '何度でも使えます。'],
    },
  ],
} as const;

export const steps = {
  titleBefore: 'かんたん',
  titleNumber: '3',
  titleAfter: 'ステップ',
  items: [
    { title: '定番を登録', caption: 'よく作る料理と材料を登録。' },
    { title: '献立を選ぶ', caption: 'つくりたい料理を選ぶだけ。' },
    { title: '買い物へ', caption: 'まとまったリストで買い物へ。' },
  ],
  registerCard: {
    title: 'うちの定番',
    nameLabel: '料理名',
    nameValue: 'すきやき',
    ingredientsLabel: '材料・分量',
    button: '登録する',
  },
  selectCard: {
    prompt: '作りたい献立を選んでみてください',
  },
};

export const screens = {
  title: '実際の画面',
  scrollHint: '横にスクロールして3つの画面を見る',
  items: [
    {
      image: 'login',
      caption: 'メールアドレスで登録',
      alt: 'ReMatoのログイン画面。メールアドレスの入力欄と「ログインリンクを送信」ボタンがあり、アカウントを持っていない場合は自動的に新規登録されると書かれている。',
    },
    {
      image: 'menu',
      caption: '献立を選ぶ',
      alt: 'ReMatoのメニュー画面。登録したメニュー「すきやき」が並び、下に「買い物リストを作る」ボタンと「登録」ボタンがある。',
    },
    {
      image: 'list',
      caption: '買い物リスト',
      alt: 'ReMatoのお買い物リスト画面。「野菜・きのこ類」にきゃべつ50 gとはくさい300 g、「お肉・魚介類・大豆製品」に牛肉300 gが並び、残りの点数が表示されている。',
    },
  ],
} as const;

export const people = {
  title: 'こんな人に',
  items: [
    '毎週の献立がだいたい決まっている',
    '家族の買い出し担当',
    '買い物前のメモづくりをラクにしたい',
  ],
  imageAlt: '食卓に並んだ肉じゃが、ごはん、みそ汁、サラダ',
};

export const faq = {
  title: 'よくある質問',
  items: [
    { q: '無料ですか？', a: 'はい、無料でご利用いただけます。' },
    { q: 'アプリのインストールは必要？', a: '不要です。ブラウザで使えます。' },
    { q: '登録には何が必要？', a: 'メールアドレスだけで登録できます。' },
  ],
};

export const finalCta = {
  title: 'いつもの献立から、はじめよう。',
};

export const footer = {
  tagline: 'ReMato = リストを、まとめる。',
  links: [
    { label: '利用規約', href: '/terms/' },
    { label: 'プライバシーポリシー', href: '/privacy/' },
  ],
};

export const legal = {
  terms: {
    title: '利用規約｜ReMato（リマト）',
    description:
      'ReMato（リマト）の利用規約です。本サービスの内容、利用登録、料金、禁止事項、免責事項、お問い合わせ先などを定めています。',
  },
  privacy: {
    title: 'プライバシーポリシー｜ReMato（リマト）',
    description:
      'ReMato（リマト）のプライバシーポリシーです。取得する情報、利用目的、外部サービスの利用、第三者への提供、開示・訂正・削除の手続きについて定めています。',
  },
};
