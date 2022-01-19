const gulp = require('gulp');
const rename = require("gulp-rename");
const clean = require('gulp-clean');
const surge = require('gulp-surge');
const fs = require('fs');

const paths = {
	static: './static'
}

gulp.task('remove:404', (done) => {
	const filePath = `${paths.static}/404.html`;

	if (fs.existsSync(filePath)) {
		return gulp.src(filePath)
		.pipe(clean());
	}

	done();
});

gulp.task('render:404', () => {
	return gulp.src(`${paths.static}/200.html`)
		.pipe(rename('404.html'))
		.pipe(gulp.dest(paths.static));
});

gulp.task('deploy:surge', (done) => {
	const surgePath = paths.static;

	Promise.all([
		surge({
			project: surgePath, // Path to your static build directory
			domain: 'buttplug-wasm-demo.surge.sh' // Your domain or Surge subdomain
		}),
	]).then(() => {
		done();
	});
});

gulp.task('render', gulp.series(
	'remove:404',
	'render:404',
));

gulp.task('deploy', gulp.series(
	'render',
	'deploy:surge',
	'remove:404'
));

