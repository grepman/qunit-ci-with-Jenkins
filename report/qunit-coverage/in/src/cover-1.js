
  // instrument by jscoverage, do not modifly this file
  (function(file, lines, conds, source) {
      var BASE;
      if (typeof global === "object") {
          BASE = global;
      } else if (typeof window === "object") {
          BASE = window;
      } else {
          throw new Error("[jscoverage] unknow ENV!");
      }
      if (BASE._$jscoverage) {
          BASE._$jscmd(file, "init", lines, conds, source);
          return;
      }
      var cov = {};
      /**
   * jsc(file, 'init', lines, condtions)
   * jsc(file, 'line', lineNum)
   * jsc(file, 'cond', lineNum, expr, start, offset)
   */
      function jscmd(file, type, line, express, start, offset) {
          var storage;
          switch (type) {
            case "init":
              if (cov[file]) {
                  storage = cov[file];
              } else {
                  storage = [];
                  for (var i = 0; i < line.length; i++) {
                      storage[line[i]] = 0;
                  }
                  var condition = express;
                  var source = start;
                  storage.condition = condition;
                  storage.source = source;
              }
              cov[file] = storage;
              break;

            case "line":
              storage = cov[file];
              storage[line]++;
              break;

            case "cond":
              storage = cov[file];
              storage.condition[line]++;
              return express;
          }
      }
      BASE._$jscoverage = cov;
      BASE._$jscmd = jscmd;
      jscmd(file, "init", lines, conds, source);
  })("src/cover-1.js", [1,3], {}, ["var a = {};","","a.test = true;"]);
_$jscmd("src/cover-1.js", "line", 1);

var a = {};

_$jscmd("src/cover-1.js", "line", 3);

a.test = true;