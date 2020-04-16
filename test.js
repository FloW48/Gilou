const YouTube = require('simple-youtube-api');
const youtube = new YouTube('AIzaSyCOd5EAiPgTdRY8xqmJzBNahI9WdhiEwoA');

youtube.searchVideos('Centuries', 4)
    .then(results => {
        console.log(`The video's title is ${results[0].title}`);
    })
    .catch(console.log);