'use strict';
export {};

let url: string = 'https//www.reddit.com/r/nevertellmethebots';
let newUrl: string = url.replace('bot', 'odd');
let colon : string = ':';
url = newUrl.substring(0,5) + colon + newUrl.substring(5);
console.log(url);

// Accidentally I got the wrong URL for a funny subreddit. It's probably "odds" and not "bots"
// Also, the URL is missing a crutial component, find out what it is and insert it too!