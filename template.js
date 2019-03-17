module.exports = {
  render: function(data) {
    var template = `\
---
title:  "${data.title}"
date:  ${data.published}
template: "post"
draft: true
slug:  ${data.titleForSlug}
category: "community"
tags: [${data.tags.join(',')}]
description: "${data.description}"
---

${data.body}`;
return template;
  },
  getOptions: function() {
    return {
      folderForEachSlug: false, // same folder for all posts
      imagePath: '/media', // <img src="/media/[filename]" >. Used in the markdown files.
      // This field is ignored when folderForEachSlug:true. Should be absolute. Location where medium images will be saved.
      imageFolder:
        '/Users/monica/Dev/monica-dev-blog/static/media', 
      defaultCodeBlockLanguage: '', // code fenced by default will be ``` with no lang. If most of your code blocks are in a specific lang, set this here.
    };
  }
  ,
};