module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			build: {
				options: {
					style: 'compressed',
					precision: 8
				},
				files: {
					'src/css/site.css': 'src/scss/site.scss'
				}
			}
		},
		uglify: {
			options: {
				report: 'min',
				mangle: false
			},
			my_build: {
				files: {
					'build/js/site.js': ['']
				}
			}
		},
		cssmin: {
			compress: {
				files: {
					'build/css/site.min.css': ['src/css/site.css']
				}
			}
		},
		htmlmin: {
			build: {
				options: {
					collapseWhitespace: true,
					removeComments: false
				},
				files: {
					'build/index.html': 'src/index.html'
				}
			}
		},
		/*copy: {
			main:{
				files: [
					{src: ['src/img/*.png'], dest: ['build/img/']}
				]
			}
		},*/
		watch: {
			css: {
				files: ['src/scss/*'],
				tasks: ['sass', 'cssmin']
			},
			js: {
				files: ['src/js/*', 'src/lib/*'],
				tasks: ['uglify']
			},
			/*img: {
				files: ['src/img/*'],
				tasks: ['copy']
			},*/
			html: {
				files: ['src/*.html'],
				tasks: ['htmlmin']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	// grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');

	grunt.registerTask('default', ['sass', 'cssmin', 'htmlmin', 'uglify']);
	// grunt.registerTask('default', ['sass', 'cssmin', 'htmlmin']);
};