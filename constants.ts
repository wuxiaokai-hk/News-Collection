
import { NewsArticle } from './types';

export const MOCK_ARTICLES: NewsArticle[] = [
  {
    id: '1',
    title: 'Global Markets React to New Tech Regulations',
    summary: 'Regulatory bodies proposed a unified framework for AI safety. Experts predict significant impacts on tech stock valuations by the end of Q4.',
    sources: [
      { name: 'CNN', color: 'bg-red-600', initial: 'CNN' },
      { name: 'BBC', color: 'bg-black', initial: 'BBC' },
      { name: 'Reuters', color: 'bg-orange-500', initial: 'R' }
    ],
    category: 'Market Analysis',
    readTime: '3 min read',
    published: '4 hours ago',
    perspectives: [
      {
        source: 'Reuters',
        initial: 'REU',
        color: 'bg-blue-600',
        sentiment: 'Neutral • Fact-heavy',
        label: 'Economic Impact',
        quote: '"Focuses on the deflationary impact on global markets and potential interest rate shifts."',
        detail: 'The report emphasizes technical trade data and supply-side metrics indicating a cooldown in semiconductor pricing.',
        icon: 'trending_up',
        categoryColor: 'text-primary bg-primary/10'
      },
      {
        source: 'NY Times',
        initial: 'NYT',
        color: 'bg-red-700',
        sentiment: 'In-depth • Contextual',
        label: 'Geopolitical Focus',
        quote: '"Highlights the tension between national security interests and corporate profit margins."',
        detail: 'Explores the diplomatic strain between G7 nations and manufacturing hubs as self-sufficiency becomes a priority.',
        icon: 'public',
        categoryColor: 'text-amber-500 bg-amber-500/10'
      }
    ]
  },
  {
    id: '2',
    title: 'Urban Centers Adopt "Green-Grid" Initiative',
    summary: 'Twelve major cities committed to a 2030 net-zero target today. The plan includes mandatory solar integration for all new commercial developments.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC--T57vAFhyqdFGO2QoYGu4wB-x8Sks0a7UqvQqByBs_YqnGEs19H6k9xnoPB23vwRxmIhmWaQlfV1ur_1Sr8JIxbGjirp5_-CHLem-pPA6UuA7Y1hhquLy-Rb5m4ubFlJpGU_kigOEttpNtEs5sNX2DvjuQ2QqaRq1j1FM-Dc_Fg53sxC0sLqPU22xwaeIZX8667b0hIzpK08EVotXVIxhC11eE7p6d-NKjbZXuuKLtbx7WylcTyR3fYxdlUAO4_rJKyLdJsddQc',
    sources: [
      { name: 'The Verge', color: 'bg-blue-700', initial: 'V' },
      { name: 'Wired', color: 'bg-slate-800', initial: 'W' }
    ],
    category: 'Sustainability',
    readTime: '5 min read',
    published: '2 hours ago'
  },
  {
    id: '3',
    title: 'The Global Semiconductor Shift: Economic Implications for 2024',
    summary: 'Domestic production across G7 nations increased by 15% in Q3, signaling a significant move toward self-sufficiency.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB82Ri51YzmJ2cwN2FOgsH2aBhbdvVQuSFC88_jWrdyg_3o8gTnH5AxyiNZp6bBZ22jT0T9ARne_wJ1Y9-uFUWGceyXoC92V3gmsA6zfhwKsh8Ob2shn1pD08ObRjxb-t8suUXlSS8LOh8874Xy9XEsYL2j1CfM3Sp2RUSB37i_JFMzzATpwW1ESnRKWO9sz2spVcIcyA3-_VgLbNiFGvYKsKdWSO0dWVM172a_km9BdJJ-m9EJGAsNzMaqaaCs05RnxnvXbVTI1qU',
    sources: [
      { name: 'Financial Times', color: 'bg-black', initial: 'FT' },
      { name: 'Wall Street Journal', color: 'bg-blue-900', initial: 'WSJ' }
    ],
    category: 'Tech Economy',
    readTime: '8 min read',
    published: 'Published 4 hours ago',
    analysis: {
      findings: [
        'Domestic production across G7 nations increased by 15% in Q3, signaling a significant move toward self-sufficiency.',
        'New trade agreements signed between EU and Asian partners aim to stabilize silicon supply chains by mid-2024.',
        'Projected price drops for consumer electronics (8-12%) expected as manufacturing yields improve globally.'
      ],
      timeline: [
        { date: 'Oct 12, 2023', event: 'Initial Trade Policy Revision', description: 'The Department of Commerce announces new restrictions on high-end chip exports.' },
        { date: 'Nov 28, 2023', event: 'EU Sovereignty Pact', description: 'European nations pool €43bn to incentivize localized fabrication plant construction.' },
        { date: 'Today', event: 'Economic Shift Confirmed', description: 'Current data suggests 2024 will see the lowest chip-import dependency in a decade.' }
      ]
    }
  }
];

export const MOCK_SOURCES = [
  { name: 'TechCrunch', logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDwcmFABBGT3Jw8dAVOaAoXFQ50pWWYW9xYe2fsQNAS2yEFcLLMNXX3jDtF9G4YaNFh3x9e-jYkiVhYfAfQdUDqA1ExC0j3O6heZpg3tpUkyMULds06UjoKOnPMc5x9raSmyPsxN4bhNWt9HKJWb-WRg3sgnqwdaUyRO6V6NWF2tlMt7wYboLOUE7kDljM9t6qHDuS4L6FKH9-B1IMcINPbdnLV5-p6K29mgZoNVfxWWMJnb-A_nwcYgaFrvzq8fgjaAE7hCqUwF88' },
  { name: 'NYT', logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBh9IqTZbR4FIaeLKg-_gjlq3ZMqI3R-rSThgWbA2OXT0nBK82rV3PjsnAKhg0FV68fVIA9mZu4RgP68pM-H92hudHGzUYLGkKJ3E-eDMqXoQ4hzyGkz85Vav79MFNWrqBdrVrfTBTnODaR0qwyrf1qaOROFBTkfmYlwxpoLBZeES__KuSEHCuSnlnRBZA-STs-pruzZIEULn4DpsaFAz0nkyPwAT_uWflFf3j1fIMhWMRfVbxGxoN8f_1zTgZJ2RyPTpzexnj45WA' },
  { name: 'Wired', logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD06yJikzAWsBJsyW5Pyng5MntWt0FT5SMDEev3pXd8QFFEsJpSqOfMm5A42ruVCnzzAZXMBdUXTe37nlxd-QDwr1tE4SHqY6BKaFl5X9OmtaY9XjxcERBqfvHrLXRR5L16QOyGSkTwEFqP1pmWZ_yehL9rtyk4TfpvsA6fIc2JWIbRCPp2pCjXoC70NirzOY7LP-dpDsyfHNWLN5YNmBPSvRC1ww0wPPhZuqu4apeTHFytygJ5exk_eX-WEnX4xuE3hz5PFMYs5gg' },
  { name: 'The Verge', logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAAjjurm_iopkkISlIwtNNqRpTL05FhJXjSKL4U9yC048L6aeefLsq0QcQkGODq8Y4OKC7BG1pm-jNTE2Wc60oK3YBNEx2L1bQi5ryG_D-3x954ayHc91HSVgyMDkKvnNIZLPY2Uh1HBcpzLTQWp8GkadsxeQP4rlWqVQU0tVE-LilZ0rtSzutyQQN7GRvPdjT--7Fg7p53HrNgs_QOXEJKPaEwLPfcTr6WkHEpFbL_nswWtjYAW5dHodH7Z-ixvgA__BTMFiataYs' }
];

export const MOCK_INTERESTS = [
  { id: 'ai', name: 'AI & Robotics', icon: 'memory', reports: '2.4k Reports Today', color: 'text-blue-500 bg-blue-500/10' },
  { id: 'sustainability', name: 'Sustainability', icon: 'eco', reports: 'Trending Topic', color: 'text-green-500 bg-green-500/10' },
  { id: 'space', name: 'Space Exploration', icon: 'rocket_launch', reports: '840 New Sources', color: 'text-amber-500 bg-amber-500/10' },
  { id: 'macro', name: 'Macroeconomics', icon: 'account_balance', reports: 'Global Coverage', color: 'text-purple-500 bg-purple-500/10' }
];
