var push = require('git-push');

push('./public', 'git@github.com:rickyjanuari/rickyjanuari.github.io.git', function() {
  console.log('Done!');
});