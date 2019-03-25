---
title:  "Hide Your API Keys 🔑"
date:  2017-01-26T01:23:25.000Z
template: "post"
draft: false
slug:  hide-your-api-keys
category: "tutorial"
tags: [Python,API,GitHub,Application Development,Technology]
description: "If you plan on programming any applications and storing your code in a public GitHub repository then it is important that you protect your API keys 🔑 by ensuring that they are not searchable or…"
---

### How to Hide Your API Keys in Python 🔑

#### Protect your application’s API Keys while committing to Git.

<figure>

![black-and-white-code-programming-tech-79290](/media/hide-your-api-keys-0.jpeg)

</figure>

If you plan on programming any applications and storing your code in a public [GitHub](https://github.com/) repository then it is important that you **protect your API keys** 🔑 by ensuring that they are not searchable or otherwise publicly accessible.

#### What’s an API?

An application programming interface (API) is a structured set of instructions for building applications. If you want to leverage data from services such as Twitter, The New York Times, [Slack](https://medium.com/u/26d90a99f605), [Spotify](https://medium.com/u/60a317bb70e4), etc. then you should read their APIs to figure out how to structure your queries to receive data from their service or to post on their service.

[**Twitter Developer Documentation - Twitter Developers**  
_Twitter for Websites is a suite of embeddable widgets, buttons, and client-side scripting tools to integrate Twitter and…_dev.twitter.com](https://dev.twitter.com/docs "https://dev.twitter.com/docs")[](https://dev.twitter.com/docs)

[**Spotify Web API - Spotify Developer**  
_Our Web API lets your applications fetch data from the Spotify music catalog and manage user's playlists and saved…_developer.spotify.com](https://developer.spotify.com/web-api/ "https://developer.spotify.com/web-api/")[](https://developer.spotify.com/web-api/)

[**Slack API**  
_Slack APIs allow you to integrate complex services with Slack to go beyond the integrations we provide out of the box._api.slack.com](https://api.slack.com/ "https://api.slack.com/")[](https://api.slack.com/)

[**API Gallery - NYT Developers Network**  
_The Times Developer Network is our API clearinghouse and community. Here's how to get started:_developer.nytimes.com](https://developer.nytimes.com "https://developer.nytimes.com")[](https://developer.nytimes.com)

#### What are API keys?

API keys allow developers to access APIs and are unique keys associated with that particular developer and/or application. Just like you shouldn’t share your passwords you should **never** share your API keys. It is important to protect your API keys so that people do not take any actions as you which could result in your API key being revoked due to somebody else exceeding rate limits or abusing/violating an APIs terms of service. A rate limit is when an application limits the number of API calls that a specific application or user can make during a specified period of time.

#### How do I protect my API keys on Github?

Here’s how to hide API keys in Python from GitHub using config.py to store your sensitive API keys and tokens in a separate file from your main script. I used similar code when accessing the Twitter Search API for my [blackgirlmagic twitter bot](https://github.com/M0nica/blackgirlmagic).

[**M0nica/blackgirlmagic**  
_blackgirlmagic - #BlackGirlMagic RT Twitter Bot_github.com](https://github.com/M0nica/blackgirlmagic "https://github.com/M0nica/blackgirlmagic")[](https://github.com/M0nica/blackgirlmagic)

#### Create 3 Files in Your Application

**config.py**

This file will store your API keys. You just need to update the portion in the strings with your API keys, depending on the service you may or may not need all four types of API keys. These in particular are required to create a Twitter application.

```
undefined
```

**main_script.py**

This file will store your main script that needs to access the API keys. This file can be named whatever you like.

```
undefined
```

#### **.gitignore**

A .gitignore file tells GitHub to ignore the noted files, directories or files that end in specific extensions when committing files to GitHub. **This step is crucial to ensure that your config.py file does not end up viewable on GitHub! Here’s** [**a collection of useful .gitignore templates**](https://github.com/github/gitignore)**.**

[**github/gitignore**  
_A collection of useful .gitignore templates_github.com](https://github.com/github/gitignore "https://github.com/github/gitignore")[](https://github.com/github/gitignore)

```
undefined
```

Feel free to reach out below with any comments or questions that you have. I would love to know how you hide your API keys when creating applications in Python or any other languages.