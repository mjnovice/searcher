function filterContent(body) {
  try {
    var data = JSON.parse(body)
  } catch (e) {
    return '{}'
  }
  var pruned = {}
  if (typeof data['data'] === 'undefined') {
      return '{}'
  }

  pruned['after'] = data['data']['after']
  pruned['before'] = data['data']['before']
  pruned['items'] = []
  originalItems = data['data']['children']
  if (!Array.isArray(originalItems)) {
    return '{}'
  }
  for(var i=0; i<originalItems.length; i++){
    var originalItem = originalItems[i]
    var item = originalItem['data']
    if (typeof(item) === 'undefined') {
      return '{}'
    }
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
  }
  return JSON.stringify(pruned)
}

module.exports = {
  filterContent: filterContent
};
