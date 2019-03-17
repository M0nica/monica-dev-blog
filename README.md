[![Netlify Status](https://api.netlify.com/api/v1/badges/a64eebe3-fcf8-44e1-b50d-7bdc29d02e76/deploy-status)](https://app.netlify.com/sites/vigilant-yalow-055dfc/deploys) 

The home of Monica Powell's tech musings.

#### Access Locally
```
$ git clone https://github.com/[GITHUB_USERNAME]/[REPO_NAME].git
$ cd [REPO_NAME]
$ yarn
$ yarn run develop
```
To test the CMS locally, you'll need run a production build of the site:
```
$ yarn run build
$ yarn run serve
```

## Folder Structure

```
└── content
    ├── pages
    └── posts
└── static
    ├── admin
    └── media
└── src
    ├── assets
    │   └── scss
    │       ├── base
    │       └── mixins
    ├── cms
    │   └── preview-templates
    ├── components
    │   ├── Feed
    │   ├── Icon
    │   ├── Layout
    │   ├── Page
    │   ├── Pagination
    │   ├── Post
    │   │   ├── Author
    │   │   ├── Comments
    │   │   ├── Content
    │   │   ├── Meta
    │   │   └── Tags
    │   └── Sidebar
    │       ├── Author
    │       ├── Contacts
    │       ├── Copyright
    │       └── Menu
    ├── constants
    ├── templates
    └── utils

```
