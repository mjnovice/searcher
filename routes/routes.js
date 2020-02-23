var https = require('https')

var filters = require('../filters/filter.js')

function subRedditProcessor(client_req, client_res) {
  console.log('serve: ' + client_req.url);
  console.log('subredditName: '+client_req.query['srname'])
  var client_headers = client_req.headers
  client_headers.host = 'www.reddit.com'
  var before = client_req.query['prev']
  var after = client_req.query['next']
  var  path = '/r/'+client_req.query['srname']+'/.json?limit=20'
  if (before!='undefined') {
    path += '&before='+before
  }
  if (after!='undefined') {
    path += '&after='+after
  }

  var options = {
    hostname: 'www.reddit.com',
    port: 443,
    path:path,
    method: client_req.method,
    headers: {
      accept:'application/json',
     'user-agent':client_headers['user-agent']
    }
  };
  var proxy = https.request(options, function (res) {
    client_res.writeHead(res.statusCode)
    let body = '';
    res.on('data',(chunk) => {
      body += chunk.toString();
    })
    res.on('end',() => {
      if (res.statusCode==200) {
        client_res.write(filters.filterContent(body))
      } else {
        client_res.write(body)
      }
      client_res.end()
    })
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
