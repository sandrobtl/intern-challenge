module.exports = function(grunt) {

  pathAssets = 'assets/';
  pathLess = pathAssets + 'less/';
  
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

  less : {
    development: {
      files: {
        'assets/css/index.min.css': pathLess + '**/*.less'
      }
    }
  },
	
  'http-server': {
    'dev': {
      port: 2000,
      host: '127.0.0.1',
      showDir : true,
      autoIndex: true,
      ext: 'html',
      runInBackground: true
    } 
  },
	
  watch: {
    styles: {
      files: pathLess + '**/*.less',
      tasks: ['less']
    }
  }
 });
  
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-http-server');
  grunt.loadNpmTasks('grunt-contrib-watch');
	
  grunt.registerTask('build', ['less']);
  grunt.registerTask('start', ['http-server','watch']);
};
