var
  config = require('../../features/support/config')(),
  exec = require('child_process').exec;
  coverageDestination = 'coverage/features';

var cmd = 'wget -m -k -nH -E -P ' + coverageDestination + ' --cut-dirs=1 ' + config.url + '/coverage';

exec(cmd, function(error, stdout, stderr) {});
