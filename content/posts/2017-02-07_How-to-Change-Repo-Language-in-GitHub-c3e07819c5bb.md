---
title:  "How to Change Repo Language in GitHub"
date:  2017-02-07T14:17:11.000Z
template: "post"
draft: false
slug:  how-to-change-repo-language-in-github
category: "tutorial"
tags: [Github,Linguistics,Programming Languages,Coding,Web Development]
description: "I recently started working on a Weather app in Flask to auto-detect a user’s location based off of their IP address. After committing some updates to GitHub my app switched from being labeled as…"
---

### How to Change Repo Language in GitHub

#### Is GitHub telling you that your repository is 98.9% CSS or HTML when it isn’t? Here’s how to resolve that issue every time.

<figure>

![](/media/how-to-change-repo-language-in-github-0.jpg)

</figure>

I recently started working on a [Weather app in Flask](https://github.com/M0nica/flask_weather) to auto-detect a user’s location based off of their IP address. After committing some updates to GitHub my app switched from being labeled as predominately Python to 98.9% CSS even though it was a Flask application in which most of the code I had written was in Python and HTML. Now and again, I do not agree with how GitHub classifies the languages in my repositories so I set out to figure out how to fix this issue.

<figure>

![](/media/how-to-change-repo-language-in-github-1.png)

<figcaption>Before: My Flask App Appeared in GitHub as 98.9% CSS.</figcaption></figure>

[**M0nica/flask_weather**  
_flask_weather - Flask app to auto-detect local weather based off of user's IP address._github.com](https://github.com/M0nica/flask_weather "https://github.com/M0nica/flask_weather")[](https://github.com/M0nica/flask_weather)

#### Pro-tip: Help GitHub properly detect your repositories main language(s).

GitHub has a [linguist library](https://github.com/github/linguist) that auto-detects the language within every repository. Upon researching how to resolve GitHub misclassifying the language of your projects I found out the solution is as simple as telling GitHub which files to ignore.

[**github/linguist**  
_linguist - Language Savant. If your repository's language is being reported incorrectly, send us a pull request!_github.com](https://github.com/github/linguist "https://github.com/github/linguist")[](https://github.com/github/linguist)

While you still want to commit these files to GitHub and therefore can’t use a .gitignore you can tell GitHub’s linguist which files to ignore in a .gitattribute file. (Side note: [Check out my piece on “Hiding API Keys from GitHub”](http://www.blacktechdiva.com/hide-api-keys/) if you are interested in learning about [.gitignore](http://www.blacktechdiva.com/hide-api-keys/)).

[**Hide Your API Keys 🔑 " Black Tech Diva**  
_If you plan on programming any applications and storing your code on GitHub then it is important that you protect your…_www.blacktechdiva.com](http://www.blacktechdiva.com/hide-api-keys/ "http://www.blacktechdiva.com/hide-api-keys/")[](http://www.blacktechdiva.com/hide-api-keys/)

Upon examining the documentation for the linguist library I learned that adding just one line to a .gitattributes file would resolve my language issues for this particular repo.

My .gitattributes:

```
undefined
```

This one-line file told GitHub to ignore all of my files in my static/ folder which is where CSS and other assets are stored for a Flask app. Vendor files can sometimes take up a lot of relative space so I am telling the linguist to just ignore them (since they were accounting for 98.9% of my project)!

<figure>

![](/media/how-to-change-repo-language-in-github-2.png)

<figcaption>After: My Flask App Appears in GitHub now as 56.2% Python and 43.8% HTML.</figcaption></figure>

[**alexkaratarakis/gitattributes**  
_A collection of useful .gitattributes templates_github.com](https://github.com/alexkaratarakis/gitattributes "https://github.com/alexkaratarakis/gitattributes")[](https://github.com/alexkaratarakis/gitattributes)

[Here’s a repository by @with sample .gitattributes files for you try the next time you disagree with the linguist ;).](https://github.com/alexkaratarakis/gitattributes) Note: Updates to the .gitattributes may not apply retroactively and if linguist _truly_ is wrong GitHub encourages you to report it as an issue in their /linguist repo.

I hope this article was helpful! I would love to hear some of your tricks for GitHub and am happy to answer any questions you may have.

_If you enjoyed reading this article consider tapping the clap button 👏. Wanna see more of my work? Check out_ [_my GitHub_](https://github.com/M0nica/) _to view my code and learn more about my development experience at_ [_http://aboutmonica.com_](http://aboutmonica.com)_._