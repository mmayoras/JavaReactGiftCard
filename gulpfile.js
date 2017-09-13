var gulp = require('gulp'),
  gutil = require('gulp-util'),
  fs = require('fs'),
  rename = require('gulp-rename'),
  replace = require('gulp-replace'),

  configLoc = './src/envconfig/config.json'

function generateConfig(env) {
  var configJson = fs.readFileSync(configLoc, 'utf8');
  configJson = JSON.parse(JSON.stringify(configJson));
  var appConfig = JSON.parse(configJson)[env];

  return appConfig;
}

gulp.task('ping', function(){
  return gutil.log('Gulp is running ping task!')
});

gulp.task('local', function(){
  return gulp.src('src/envconfig/globals.temp')
  .pipe(replace('$version', '"1.0.0"'))
  .pipe(replace('$config', JSON.stringify(generateConfig('local'))))
  .pipe(rename('globals.js'))
  .pipe(gulp.dest('src/envconfig/'));
});

gulp.task('dev', function(){
  return gulp.src('src/envconfig/globals.temp')
  .pipe(replace('$version', '"1.0.0"'))
  .pipe(replace('$config', JSON.stringify(generateConfig('dev'))))
  .pipe(rename('globals.js'))
  .pipe(gulp.dest('src/envconfig/'));
});

gulp.task('qa', function(){
  return gulp.src('src/envconfig/globals.temp')
  .pipe(replace('$version', '"1.0.0"'))
  .pipe(replace('$config', JSON.stringify(generateConfig('qa'))))
  .pipe(rename('globals.js'))
  .pipe(gulp.dest('src/envconfig/'));
});

gulp.task('pr', function(){
  return gulp.src('src/envconfig/globals.temp')
  .pipe(replace('$version', '"1.0.0"'))
  .pipe(replace('$config', JSON.stringify(generateConfig('pr'))))
  .pipe(rename('globals.js'))
  .pipe(gulp.dest('src/envconfig/'));
});
