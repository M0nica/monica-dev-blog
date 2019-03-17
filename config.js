'use strict';

module.exports = {
  url: 'https://lumen.netlify.com',
  title: 'monica.dev',
  subtitle: 'Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu.',
  copyright: 'monica.dev © All rights reserved.',
  disqusShortname: '',
  postsPerPage: 5,
  // googleAnalyticsId: 'UA-73379983-2',
  menu: [
    {
      label: 'Articles',
      path: '/'
    },
    {
      label: 'About me',
      // path: 'http://aboutmonica.com/'
      path: '/pages/about'
    },
    {
      label: 'Contact me',
      path: '/pages/contacts'
    }
  ],
  author: {
    name: 'Monica Powell',
    photo: '/monicaoncomputer.svg',
    bio: 'Product engineer. Building tech to bring people together IRL at <a href="http://www.meetup.com">Meetup</a>. Let’s chat about React, open-source || tech inclusion.🍿',
    contacts: {
      email: 'monica@aboutmonica.com',
      twitter: 'https://www.twitter.com/waterproofheart',
      github: 'https://www.github.com/m0nica'
      // rss: '#'
    }
  }
};
