var gulp      = require("gulp"),
	browserSync = require('browser-sync').create(),
    connect   = require("gulp-connect"),
    opn       = require("opn"),
    svgSprite = require("gulp-svg-sprite");

// svg-sprite	
gulp.task('svg', function() {
	config                  = {
    mode                : {
        css             : {     // Activate the «css» mode
            render      : {
                css     : true  // Activate CSS output (with default options)
            }
        }
    }
};
	gulp.src('app/icons/*.svg')
	.pipe(svgSprite(config))
	.pipe(gulp.dest('app/'));

});

// Локальный сервер, liveReload BrowserSync

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./app/"
        }
    });
});

// // Локальный сервер

// gulp.task('connect', function() {
// 	connect.server ({
// 		root: 'app',
// 		livereload: true,
// 		port: 8888
// 	});
// 	opn('http://localhost:8888');
// });

// Работа с HTML

gulp.task('html', function() {
	gulp.src('app/*.html')
		.pipe(browserSync.reload());
});

// Работа с CSS

gulp.task('css', function() {
	gulp.src('app/css/*.css')
		.pipe(browserSync.reload());
});

// Работа с JavsScript

gulp.task('js', function() {
	gulp.src('app/js/*.js')
		.pipe(browserSync.reload());
});

// Слежка 

gulp.task('watch', function() {
	gulp.watch(['./app/*.html'], ['html']);
	gulp.watch(['./app/css/*.css'], ['css']);
	gulp.watch(['./app/js/*.js'], ['js']);
});

// gulp.task('watch', function() {
// 	gulp.watch(['./app/*.html'], browserSync.reload);
// 	gulp.watch(['./app/css/*.css'], browserSync.reload);
// 	gulp.watch(['./app/js/*.js'], browserSync.reload);
// });

// Задача по умолчанию

gulp.task('default', ['browser-sync', 'watch']);
