const chartdata = [
  {
    date: "Jan 2022",
    sent: 6,
    success: 4,
  },
  {
    date: "Feb 2022",
    sent: 10,
    success: 8,
  },
  {
    date: "Mar 2022",
    sent: 14,
    success: 11,
  },
  {
    date: "Apr 2022",
    sent: 21,
    success: 12,
  },
  {
    date: "May 2022",
    sent: 25,
    success: 14,
  },
  {
    date: "Jun 2022",
    sent: 32,
    success: 15,
  },
];

const categories = [
  {
    delta: '10.9%',
    deltaType: 'decrease',
    id: '1',
    metric: 'Henry Leung',
    percentageValue: 24,
    target: '34 days remaining',
    text: 'Phishing avoiding rate'
  },
  {
    delta: '4.8%',
    deltaType: 'moderateDecrease',
    id: '2',
    metric: 'Wim Teuling',
    percentageValue: 82,
    target: '4 days remaining',
  },
  {
    delta: '6.2%',
    deltaType: 'moderateIncrease',
    id: '3',
    metric: 'Daemon Baldwin',
    percentageValue: 32,
    target: '27 days remaining',
  },
  {
    delta: '8.3%',
    deltaType: 'moderateIncrease',
    id: '4',
    metric: 'Amalia Fowler',
    percentageValue: 65,
    target: '12 days remaining',
  },
];

const cardmetrics = [
  [{
    title: 'Total Emails Sent',
    metric: '72',
  },
  {
    title: 'Total Times Phished',
    metric: '18',
  },
  {
    title: 'Rank Among Your Fish',
    metric: '#3',
  },
  {
    title: 'Worldwide Ranking',
    metric: 'Top 64%'
  }],
  [{
    title: 'Total Emails Sent',
    metric: '64',
  },
  {
    title: 'Total Times Phished',
    metric: '21',
  },
  {
    title: 'Rank Among Your Fish',
    metric: '#4',
  },
  {
    title: 'Worldwide Ranking',
    metric: 'Top 78%'
  }],
  [{
    title: 'Total Emails Sent',
    metric: '30',
  },
  {
    title: 'Total Times Phished',
    metric: '4',
  },
  {
    title: 'Rank Among Your Fish',
    metric: '#2',
  },
  {
    title: 'Worldwide Ranking',
    metric: 'Top 46%'
  }],
  [{
    title: 'Total Emails Sent',
    metric: '47',
  },
  {
    title: 'Total Times Phished',
    metric: '3',
  },
  {
    title: 'Rank Among Your Fish',
    metric: '#1',
  },
  {
    title: 'Worldwide Ranking',
    metric: 'Top 21%'
  }],
];

const links = [
  {
    link: "/",
    label: "Home"
  },
  {
    link: "/about",
    label: "About"
  },
  {
    link: "/learn",
    label: "Learn"
  },
  // {
  //   link: "/dashboard",
  //   label: "Dashboard"
  // }
]

const data = [
  {
    image:
      '../ArticleSplash/Quiz.png',
    title: `Can you spot the phishing email? Take our new quiz!`,
    category: 'quiz',
    id: 'quiz',
    date: 'September 07 2022'
  },
  {
    image:
      '../ArticleSplash/Ocean.png',
    title: 'The most common types of phishing (and how to avoid them)',
    category: 'article',
    id: '2',
    content: 'This is the content of the article 1',
    date: 'September 14 2022'
  },
  {
    image:
      '../ArticleSplash/Browser.png',
    title: 'How Cyber Threats Work',
    category: 'article',
    id: '3',
    content: 'This is the content of the article 2',
    date: 'September 21 2022'
  },
  {
    image:
      '../ArticleSplash/Drown.png',
    title: 'How to help the older adults in your life get cyber safe',
    category: 'article',
    id: '4',
    content: 'This is the content of the article 3',
    date: 'October 05 2022'
  },
  {
    image:
      '../ArticleSplash/Shield.png',
    title: "Senior's guide to staying cyber safe",
    category: 'article',
    id: '5',
    content: 'This is the content of the article 4',
    date: 'October 12 2022'
  },
  {
    image:
      '../ArticleSplash/laptop.png',
    title: 'How anyone can become a confident online shopper',
    category: 'article',
    id: '6',
    content: 'This is the content of the article 5',
    date: 'October 24 2022'
  },
];

export { categories }
export { chartdata }
export { cardmetrics }
export { links }
export { data }