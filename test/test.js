var filters = require('../filters/filter.js')
var assert  = require('assert')

describe("filter tests", function(){
    var emptyJSON = '{}';
    it("Should handle Invalid JSON", function(){
      var invalid="NoJson";
      var ret = filters.filterContent(invalid);
      assert.equal(ret,emptyJSON);
    });
    it("Should handle Missing data field", function(){
      var missing='{"test":"value"}';
      var ret = filters.filterContent(missing);
      assert.equal(ret,emptyJSON);
    });
    it("Should handle incorrect children type", function(){
      var badchild='{"data":{"children":"incorrect value"}}';
      var ret = filters.filterContent(badchild);
      assert.equal(ret,emptyJSON);
    });
    it("Should handle incorrect children data", function(){
      var badchild='{"data":{"children":["badchild"]}}';
      var ret = filters.filterContent(badchild);
      assert.equal(ret,emptyJSON);
    });

});
