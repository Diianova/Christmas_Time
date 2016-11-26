var gulp = require('gulp');//podbierz nam modul o nazwie gulp
var sass = require('gulp-sass');//zaistalujmy u nas lokalnie ten moduł, nowy gulp-sass; dalej w konsoli npm wpisywajem: npm install gulp-sass 
var sourcemaps = require('gulp-sourcemaps');// dalej w konsoli npm wpisujemy: npm install gulp-sourcemaps - pokolei instalujemy moduły

gulp.task('scss', function(){
    return gulp.src("sass/main.scss")//złap nam plik main.scss
        .pipe(sourcemaps.init())//wyłołujemu funkcjonalność pipe
        .pipe(sass({
         errLogToConsole: true,// jeżeli popełniamy błąd, to on wyświetli nam ten bląd na konsoli
         outputStyle: 'expanded', 
         // sourceComments: true, 
        }).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("css"))
})

gulp.task('default', ['scss'], function() { 
    gulp.watch('sass/**/*.scss', ['scss'])//следим за всеми файлами  sass в дериктории
});

//npm install gulp --save-dev