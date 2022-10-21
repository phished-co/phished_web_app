const chartdata = [
  {
    date: "Jan 2022",
    'Emails sent': 6,
    "Times phished": 4,
  },
  {
    date: "Feb 2022",
    'Emails sent': 10,
    "Times phished": 8,
  },
  {
    date: "Mar 2022",
    'Emails sent': 14,
    "Times phished": 11,
  },
  {
    date: "Apr 2022",
    'Emails sent': 21,
    "Times phished": 12,
  },
  {
    date: "May 2022",
    'Emails sent': 25,
    "Times phished": 14,
  },
  {
    date: "Jun 2022",
    'Emails sent': 32,
    "Times phished": 15,
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
    link: "/about",
    label: "Features"
  },
  {
    link: "/pricing",
    label: "Pricing"
  },
  {
    link: "/learn",
    label: "Learn"
  },
  {
    link: "/community",
    label: "Community"
  }
]

export { categories }
export { chartdata }
export { cardmetrics }
export { links }