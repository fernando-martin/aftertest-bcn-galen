var spawn = require('child_process').spawn,
    del = require('del'),
    gulp = require('gulp'),
    connect = require('gulp-connect');

const reportsDir = 'reports';

gulp.task('clean', function() {
    return del([reportsDir]).then(paths => {
        if (paths.length > 0) {
            console.log('Deleting reports dir...\n', paths.join('\n'));
        }
    });
});

gulp.task('test', ['clean'], function() {
    var testPath = 'tests/example.test.js';
        var child = spawn('galen', [
            'test', testPath,
            '--htmlreport', reportsDir
        ], { 'stdio': 'inherit' });

        child.on('error', function(err){
            if(err.code === 'ENOENT'){
                console.log('Maybe Galen is not installed');
            }
        });

});

gulp.task('reports', function() {
    connect.server({
        root: reportsDir,
        fallback: reportsDir + '/report.html'
    });
});