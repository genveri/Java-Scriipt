module.exports = function(grunt) {
    //������������ ����� Grunt
    var config = {
        //���������� ��� ������ � ����� package.json
        pkg: grunt.file.readJSON('package.json'),

        browserify:     {
            options:      {
                transform:  [ require('brfs') ],
                browserifyOptions: {
                    basedir: "Frontend/src/js/"
                }
            },

            //����� � ������ ���
            pizza: {
                src:        'Frontend/src/main.js',
                dest:       'Frontend/www/assets/js/main.js'
            }
        }
    };

    //������������ ������������ ��� � ������
    var watchDebug = {
        options: {
            'no-beep': true
        },
        scripts: {
            files: ['Frontend/src/**/*.js', 'Frontend/**/*.ejs'],
            tasks: ['browserify:pizza']
        }
    };


    config.watch = watchDebug;
    grunt.initConfig(config);

    //������� �� ����� ��������� ���������������
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-watch');


    //������ �������� �� ������������
    grunt.registerTask('default',
        [
            'browserify:pizza',
        ]
    );

};