var lodash = require('lodash');

module.exports = function (grunt) {
  // ��Ŀ����
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
	
	concurrent: {
      devel: {
        tasks: ['connect:demo', 'watch'],
        options: {
          limit: 2,
          logConcurrentOutput: true
        }
      }
    },
	
	concat:{
		combinea: {
			options: {
				mangle: false, 
			},
			files: {
				'dest/js/lib.js': 
							[
								'src/js/lib/zepto.min.js',
								'src/js/lib/touch.js'
							]
			}
		},
		combineb:{
			files: {
			    'dest/js/index.js': 
							[
								'src/js/main.js'
							]
			}
		},
		css: {
			files: {
			  "src/temp/layout.css": 
							[
								"src/css/layout.css"
							]
			}
		}
	},
	uglify: {		
		builda: {
			options: {
				mangle: false, 
			},
			files: {				
				'dest/js/index.min.js': 
					[
						'dest/js/index.js',
					]
			}
		},
		//���
		buildb:{
			files: {
				'dest/js/lib.min.js': 
					[
						'dest/js/lib.js'
					]
			}
		}
	},
	copy: {
	  main: {
		files:[
			{expand: true,flatten: false, cwd:'src/images',  src: '**', dest: 'dest/images/'},
			{expand: true,flatten: false, cwd:'src/',  src: '*html', dest: 'dest/'}
		],
	  },
	},
	//ѹ��css
	cssmin: {
		//�ļ�ͷ�������Ϣ
		options: {
			banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
			//��������
			beautify: {
				//����ascii�����ǳ����ã���ֹ���������������
				ascii_only: true
			},
			report: 'min'
		},
		my_target: {
			files: [
				{
					expand: true,
					//���·��
					cwd: 'src/temp/',
					src: ['*.css', '!*.min.css'],
					dest: 'dest/css',
					ext: '.min.css'
				}
			]
		}
	},
	
	watch: {
      all: {
        files: ['src/**/*','gruntfile.js'],
        tasks: ['build']
      }
    },
	
	connect: {
      demo: {
        options: {
          hostname: '0.0.0.0',
          port: 3003,
          //base: ['.', 'src'],
		  open:true,
		  /* middleware: [
			  function myMiddleware(req, res, next) {
				grunt.log.writeln('Starting static web server in "www-root" on port 9001.');
				//res.end('Hello, world!');
				//return next();
			  }
		  ], */
		  middleware: function(connect, options, middlewares) {
			 middlewares.unshift(function(req, res, next) {
				var redirectUrl=[];
				redirectUrl['/recipe']=1;
				if(redirectUrl[req.url]) {
					res.statusCode = 302;
					res.setHeader("Location", "/#"+req.url);
					res.end();
				}
				grunt.log.writeln(req.url);
				
				return next();
				
			});
			 return middlewares;
		 },
		  base: {
			  path: 'src',
			  options: {
				index: 'index.html',
				maxAge: 0
			  }
			},
          keepalive: true
        }
      }
    }
  }); 
  
  
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks("grunt-contrib-concat");  
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-concurrent');
  
  grunt.registerTask('build', [ 'concat:combinea','concat:combineb','concat:css','uglify:builda', 'uglify:buildb', 'cssmin','copy']);
  grunt.registerTask('demo', ['concurrent:devel']);

  // Ĭ������///
  grunt.registerTask('default', ['concat:combinea','concat:combineb','concat:css','uglify:builda', 'uglify:buildb', 'cssmin','copy','concurrent:devel']);
  
 }
//http://www.cnblogs.com/artwl/p/3449303.html