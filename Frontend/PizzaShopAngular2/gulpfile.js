/// <binding AfterBuild='build' />
var ts = require("gulp-typescript");
var gulp = require("gulp");
var clean = require("gulp-clean");
var sourcemaps = require("gulp-sourcemaps");

var dest = {
    root: "./wwwroot/",
    scripts: "./wwwroot/libs/scripts",
    styles: "./wwwroot/libs/styles",
    app: "./wwwroot/app"
};
var src = {
    app: ["index.html", "systemjs.config.js", "app/**/*", "!app/**/*.ts"],
    ts: "app/**/*.ts",
    assets: "assets/**/*"
};

gulp.task("clean",
    () => {
        return gulp.src(dest.root + "*")
            .pipe(clean());
    });

gulp.task("copy", ["copy.libs", "copy.app", "copy.assets"]);

gulp.task("copy.libs",
    () => {
        gulp.src([
                    "core-js/client/**",
                    "systemjs/dist/system.src.js",
                    "reflect-metadata/**",
                    "rxjs/**",
                    "zone.js/dist/**",
                    "@angular/**",
                    "jquery/dist/jquery.*js",
                    "bootstrap/dist/js/bootstrap.*js",
                    "jquery/dist.*js",
        ],
                {
                    cwd: "node_modules/**"
                })
            .pipe(gulp.dest(dest.scripts));

        gulp.src(["bootstrap/dist/fonts/**/*", "bootstrap/dist/css/**/*"],
            {
                cwd: "node_modules/**"
            })
            .pipe(gulp.dest(dest.styles));

    });

gulp.task("copy.app",
    () => {
        gulp.src(src.app, { base: "." })
            .pipe(gulp.dest(dest.root));
    });

gulp.task("copy.assets",
    () => {
        gulp.src(src.assets, { base: "." })
            .pipe(gulp.dest(dest.root));
    });

gulp.task("ts",
    () => {
        var tsProject = ts.createProject("tsconfig.json");
        var tsResult = gulp.src(src.ts)
            .pipe(sourcemaps.init())
            .pipe(ts(tsProject), undefined, ts.reporter.fullReporter());
        return tsResult.js
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(dest.app));
    });

gulp.task("watch", ["watch.ts", "watch.app", "watch.assets"]);

gulp.task("watch.ts",
    ["ts"],
    () => {
        return gulp.watch(src.ts, ["ts"]);
    });

gulp.task("watch.app",
    ["copy.app"],
    () => {
        return gulp.watch(src.app, ["copy.app"], { base: "." });
    });

gulp.task("watch.assets",
    ["copy.assets"],
    () => {
        return gulp.watch(src.assets, ["copy.assets"], { base: "." });
    });

gulp.task("build", ["ts", "copy"]);

gulp.task("default", ["copy", "watch"]);