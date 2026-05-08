export const navbarData = {
  homeTitle: "Lucie",
}

export const footerData = {
  author: 'Lucie Mingmei Hao',
  aboutAuthor: 'Hi! I am Lucie, a Research IT Developer at the University of Exeter.',
  authorInterest:
    "Web, research and design",
  aboutTheSite:
    "This is a site about the work I do.",
}

export const homePage = {
  title: "Hello. I'm Lucie Mingmei Hao.",
  description:
    'Web, research and design',
}

export const blogsPage = {
  title: 'Projects',
  description: 'This is a collection of projects I have worked on over time, spanning digital humanities, research software, interactive prototypes, games, film and music work, and creative digital practice.',
}

export const categoryPage = {
  title: 'Categories',
  description: 'Explore categories created from tags across all projects.',
}

export const aboutPage = {
  title: 'Lucie Mingmei Hao',
  description: '',
  aboutMe: [
    'Lucie is a Research IT developer in the Research IT team based in the Digital Humanities Lab at the University of Exeter. Her career path has spanned software development, design and digital research. For the past five years, her footprint across DH labs, universities and startups in the UK and Ireland, where she has contributed to a wide range of multi-disciplinary industrial and research projects. These projects span various subject areas and disciplines, including cultural heritage, history, classics, languages and literature, art, film and media studies, as well as digital health technologies and the application of AI.',
    'More recently, Lucie has focused on collaborative computational projects for arts and cultural research that draw on DH methods and technologies. As a developer, she contributes to the design and development of software tools and digital platforms that support research in the humanities: the creation of web resources and searchable databases, the production of digital editions of texts with TEI/XML and eXist-db, the development of custom mapping solutions with Leaflet JavaScript library, the creation of websites for digital collections and metadata in Omeka. She is especially interested in how technology can deepen our understanding of the past, open up access to complex historical materials, and make research data more discoverable and meaningful for both specialist and public audiences. ',
    'At Exeter, she is currently the developer for the AHRC-funded projects Women’s Screen Work in the Archives Made Visible, Learning Anglo-French, and Rediscovering the Tudor Domesday, and has been the developer for the AHRC/DFG-funded project Connecting Late Antiquities.',
    ],
  }

export const seoData = {
  title: `Lucie Mingmei Hao`,
  ogTitle: `Hi! I am Lucie, a Research IT Developer at the University of Exeter.`,
  description: `Hi! I am Lucie, a Research IT Developer at the University of Exeter.`,
  twitterDescription: `Hi! I am Lucie, a Research IT Developer at the University of Exeter.`,
  image: 'https://lucie07.github.io/dev/_ipx/q_70&s_400x400/lucie-mingmei-hao.jpg',
  mySite: 'https://lucie07.github.io/dev/',
  twitterHandle: '@qdnvubp',
  mailAddress: 'luciemmh@gmail.com',
}

export const socialLinks = {
  githubLink: 'https://github.com/lucie07',
  linkedinLink: 'https://www.linkedin.com/in/lucie-mingmei/',
  twitterLink: 'https://x.com/lucienhlm',
}

export const siteMetaData = [
  {
    name: 'description',
    content: seoData.description,
  },
  // Test on: https://developers.facebook.com/tools/debug/ or https://socialsharepreview.com/
  { property: 'og:site_name', content: seoData.mySite },
  { property: 'og:type', content: 'website' },
  {
    property: 'og:url',
    content: seoData.mySite,
  },
  {
    property: 'og:title',
    content: seoData.ogTitle,
  },
  {
    property: 'og:description',
    content: seoData.description,
  },
  {
    property: 'og:image',
    content: seoData.image,
  },
  // Test on: https://cards-dev.twitter.com/validator or https://socialsharepreview.com/
  { name: 'twitter:site', content: seoData.twitterHandle },
  { name: 'twitter:card', content: 'summary_large_image' },
  {
    name: 'twitter:url',
    content: seoData.mySite,
  },
  {
    name: 'twitter:title',
    content: seoData.ogTitle,
  },
  {
    name: 'twitter:description',
    content: seoData.twitterDescription,
  },
  {
    name: 'twitter:image',
    content: seoData.image,
  },
]
