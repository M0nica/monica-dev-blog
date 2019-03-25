---
title: "git is hard, but time travel in git is easy."
date:  2019-03-24T02:43:13.595Z
template: "post"
category: ""
draft: false
slug: git-time-travel
tags: [Git, GitHub] 
description: "This article explains how it's possible to commit code that is dated in the future."
---

![monica dancing - in space?](/media/monicadancing.png)

This article will explain how it's possible to commit code that is dated in the future. 


![Committing changes in the future](/media/futuregitcommit.png)



I always (wrongly) assumed that GitHub determined the time a commit was made based on their website's server time. I made this assumption because for certain user actions GitHub uses their server time, for example when a pull request is opened. However, one day I was debugging a calendar issue that only appeared for certain dates. I was able to reproduce and resolve the bug locally by changing my computer time. I then pushed the git branch with my solution up to the remote git repository on GitHub for code review and realized that GitHub commits reflect the date set in the local version of the git repository which is determined by your computer's system time and not their servers.

GitHub, GitLab and BitBucket are git repository hosting services, that provide a centralized place to host remote versions of git repositories. These websites have additional functionality build on top of git to make the software development process more collaborative through things such as code review interfaces and other features that make it more of a social network than just a command line interface. 

If you want to intentionally for whatever reason commit something in the future, do you have to manually adjust your computer's time? No, you can simply pass git environment variables to set the date and time.

The following line: 
```
GIT_AUTHOR_DATE="Wed Mar 27 15:12:30 2019 -0700 GIT_COMMITTER_DATE="Wed Mar 27 15:12:30 2019 -0700” 
git commit -m “future commit”
```
 will date a commit as March 27, 2019 whether the current date is before or after March 27th. If you send in a patch to a project and one of the core members applies the patch, both of you get credit — you as the GIT_AUTHOR, and the core maintainer as the GIT_COMMITTER. 

You can [rewrite your git history](https://git-scm.com/book/en/v2/Git-Tools-Rewriting-History) and apply changes to any past commit as well.

This post is based off of a lightning talk that I gave with Women Who Code NYC in March 2019. The slides can be viewed [here](http://aboutmonica.com/gitlightningtalk.pdf).



 
