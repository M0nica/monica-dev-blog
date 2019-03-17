---
title:  "Visualizing Data from the Spotify API"
date:  2017-01-27T03:20:46.967Z
template: "post"
draft: false
slug:  visualizing-data-from-the-spotify-api
category: ""
tags: [API,Spotify,Music,Python,Web Development]
description: "This post will go over how to connect with the Spotify API to collect information about artists using Python 3 and then create an infographic from the data Spotify returned. Below is a preview of…"
---

<figure>

![](/media/visualizing-data-from-the-spotify-api-0.jpeg)

</figure>

### Visualizing Data from the Spotify API

#### How to quickly visualize stats about Spotify artists with Infogr.am

This post will go over how to connect with the [Spotify](https://medium.com/u/60a317bb70e4) API to collect information about artists using Python 3 and then create an infographic from the data Spotify returned. Below is a preview of what we will be creating before we dive into the details.

### Installing Requests

In order to play around with Spotify’s API in Python to gather data about artists, I installed [Requests: HTTP for Humans](https://github.com/kennethreitz/requests) via the terminal using: `$ pip install requests `. Note: Requests is a library that can be used to make API calls and is not limited to use only with the Spotify API.

### spotify.py

Note: You can explore documentation for the Spotify web API [here](https://developer.spotify.com/web-api/endpoint-reference/)

```
# importing Requests: HTTP for Humans - installed in previous step.  
import requests
```
```
# making a search request to the Spotify API to return  
# any artist with 'lil' in their name. This request is   
# limited to 50 artists in the US market.  
response = requests.get('https://api.spotify.com/v1/search?query=lil&type=artist&limit=50&market=US')
```
```
# converts the response from a string to a json object that can be parsed in Python.  
data = response.json()  
  

```
```
#visit this url: in order to see what the json object that is returned looks like:  
# [https://api.spotify.com/v1/search?query=lil&type=artist&limit=50&market=US](https://api.spotify.com/v1/search?query=lil&type=artist&limit=50&market=US)
```
```
#looking at the 'items' returned for 'artists' in this request.
```

The [Spotify API](https://developer.spotify.com/web-api/search-item/) describes items returned from search as:

<figure>

![](/media/visualizing-data-from-the-spotify-api-1.png)

</figure>
```
lil_artists = data['artists']['items'] 
```
```
# iterating through each artist and their items  
# items contains the information we would like to recieve for each artist.
```

#### artist object (full) ([from Spotify API](https://developer.spotify.com/web-api/search-item/))

<figure>

![](/media/visualizing-data-from-the-spotify-api-2.png)

</figure>
```
# I use two separate for loops because I want to return ALL of the artist names before returning popularity rankings.   
for artist in lil_artists:  
 # return the name of each artist found with 'search?query=lil&type=artist&limit=50&market=US'
```
```
print(artist['name'])
```

Note: Spotify’s API will also return artists that had names that formerly matched query. For example: Boosie Badazz, G Herbo and Bow Wow no longer user ‘lil’ in their stage name however, they are included in this dataset.

returns:

```
Lil Wayne  
Lil Yachty  
Lil Uzi Vert  
Lil Dicky  
Boosie Badazz  
Lil Jon  
King Lil G  
Lil Durk  
Lil Jon & The East Side Boyz  
Lil Bibby  
G Herbo  
Lil Rob  
Lil Reese  
Lil Keke  
Bow Wow  
Lil Scrappy  
Lil Wyte  
Lil Blood  
Lil Snupe  
Lil Mama  
Lil B  
Lil' Kim  
Lil Cuete  
Lil Phat  
Lil Debbie  
Lil Twist  
Lil Trill  
Lil Twon  
Lil AJ  
Lil Lonnie  
Lil Goofy  
Mr. Lil One  
Lil Flash  
Lil Kesh  
Lil Haiti  
Lil Silva  
Lil Rue  
Lil Cray  
Lil Eddie  
Lil Wayne, DJ Drama  
Lil Yase  
Lil Suzy  
Lil Mouse  
Lil C  
Lil Rick  
Lil Boom  
Lil June  
Lil E  
Lil Fate  
Lil' Flip
```
```
# returns the popularity ranking associated with each of these artists  
 # view popularity definition above
```
```
for artist in lil_artists:  
 print(artist['popularity'])
```

returns:

```
86  
72  
72  
68  
67  
72  
61  
60  
60  
54  
53  
50  
50  
48  
57  
49  
50  
45  
45  
45  
44  
62  
40  
39  
43  
39  
37  
38  
37  
36  
35  
36  
38  
39  
35  
43  
34  
35  
41  
35  
33  
34  
34  
33  
38  
33  
32  
34  
34  
49
```

### Visualize Data

1.  Create a free [Infogr.am](https://infogr.am/) account.
2.  Select ‘Chart or Graph’

<figure>

![](/media/visualizing-data-from-the-spotify-api-3.png)

</figure>

3\. Select the type of chart or graph you would like to create

4\. The chart will be created with dummy data. Double click on the chart to pull up an black bar with an ‘edit’ button. Clicking edit will allow you to manipulate the data.

<figure>

![](/media/visualizing-data-from-the-spotify-api-4.png)

</figure><figure>

![](/media/visualizing-data-from-the-spotify-api-5.png)

</figure><figure>

![](/media/visualizing-data-from-the-spotify-api-6.png)

</figure>

5\. Here’s the dummy data that infogr.am automatically includes:

<figure>

![](/media/visualizing-data-from-the-spotify-api-7.png)

</figure>

6\. Copy and paste the output of:`print(artist['name'])` and`  
print(artist['popularity'])`

<figure>

![](/media/visualizing-data-from-the-spotify-api-8.png)

</figure>

7\. The result is a beautiful graphic will all of the data that you pasted into infogr.am. Now you can play around with the visual aesthetic of the graphic.

### Example of Infogr.ams I created from this data

(fyi: set limit to 10 for this one — the other two examples have 50 datapoints)