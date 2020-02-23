function filterContent(body) {
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

module.exports = {
  filterContent: filterContent
};
