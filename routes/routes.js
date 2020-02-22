var https = require('https')

function filterContent(body) {
  console.log(body)
  var data = JSON.parse(body)
  var pruned = {}
  pruned['after'] = data['data']['after']
  pruned['before'] = data['data']['before']
  pruned['items'] = []
  originalItems = data['data']['children']
  originalItems.forEach(function(originalItem){
    var item = originalItem['data']
    var prunedItem = {
      'title':item['title'],
      'downs':item['downs'],
      'ups':item['ups'],
      'url':item['url'],
      'author':item['author'],
      'selftext':item['selftext'],
      'permalink':item['permalink'],
      'name':item['name'],
      'created':item['created']
    }
    pruned['items'].push(prunedItem)
  })
  return JSON.stringify(pruned)
}

function subRedditProcessor(client_req, client_res) {
  console.log('serve: ' + client_req.url);
  console.log('subredditName: '+client_req.query['srname'])
  var client_headers = client_req.headers
  console.log(client_headers)
  client_headers.host = 'www.reddit.com'
  var options = {
    hostname: 'www.reddit.com',
    port: 443,
    path:'/r/'+client_req.query['srname']+'/.json?limit=20',
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
      console.log(body)
    })
    res.on('end',() => {
      console.log(body)
      if (res.statusCode==200) {
        client_res.write(filterContent(body))
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
