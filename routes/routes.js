var https = require('https')

function subRedditProcessor(client_req, client_res) {
  console.log('serve: ' + client_req.url);
  console.log('param: '+client_req.query['srname'])
  var client_headers = client_req.headers
  client_headers.host = 'www.googleapis.com'
  var options = {
    hostname: 'www.googleapis.com',
    port: 443,
    path:'/youtube/v3/search?part=snippet&type=video&order=viewCount&maxResults=12&key=AIzaSyARzgy4VD5utPpe9f-hsxQYjFhEIPzNmeA&q='+client_req.query['srname'],
    method: client_req.method,
    headers: client_headers
  };

  var proxy = https.request(options, function (res) {
    console.log(client_req.headers)
    client_res.writeHead(res.statusCode, res.headers)
    res.pipe(client_res, {
      end: true
    });
  });

  client_req.pipe(proxy, {
    end: true
  });
}
const appRouter = (app, fs) => {

    // default route
    app.get('/subreddit',subRedditProcessor)
};

module.exports = appRouter;
