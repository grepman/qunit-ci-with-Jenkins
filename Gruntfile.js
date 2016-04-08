module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'tests/*.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
    qunit: {        
        options: {
          timeout: 30000,
          "--web-security": "no",
           coverage:{
            src: ['src/*.js'],
            instrumentedFiles: 'temp/',
            htmlReport: 'report/coverage',
            coberturaReport: 'report/',
            linesThresholdPct: 0
          }
        },
        files: ['tests.html']
    },
    qunit_junit : {
        options: {
            dest: 'report/'
        }
    },
    'qunit-cov':{
        test:{
            minimum: 0.7,
            baseDir: 'src',
            srcDir: 'src',
            depDirs: ['lib'],
            outDir: 'report/qunit-coverage',
            testFiles: ['tests.html']
        }
    }
  });

  

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.loadNpmTasks('grunt-qunit-istanbul');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  

  // Load the Test to XML Converter
  grunt.loadNpmTasks('grunt-qunit-junit');
  grunt.loadNpmTasks('grunt-qunit-cov');

  // task(s).
  grunt.registerTask('default', ['uglify','qunit_junit','qunit']);
  grunt.registerTask('coverage', ['qunit-cov']);
  
  

};

