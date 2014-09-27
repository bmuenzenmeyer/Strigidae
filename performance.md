### An abbreviated performance checklist with helpful resources


#### Foundation and Design

- [ ] Set clear expectations for performance
- [ ] Measure performance throughout design and development
- [ ] Test under sub-optimal conditions
- [ ] Test with actual devices
- [ ] Only include content that is necessary for the audience/message
- [ ] Allow opt-in experiences
- [ ] Utilize lazy loading and progressive enhancement
- [ ] Remove unnecessary dependencies or files, like libraries that are overkill
- [ ] Perceived performance can be just as important as actual performance

#### Let's Get Technical!
The following tools are pretty grunt heavy, but [similar](http://gulpjs.com/) [analogs](http://webgrease.codeplex.com/documentation) exist

- [ ] Minify HTML ([Grunt HTMLmin](http://perfectionkills.com/html-minifier-revisited/))
- [ ] Minify CSS ([Grunt CSSMin](https://github.com/gruntjs/grunt-contrib-cssmin))  ([Grunt Sass `style`](https://github.com/gruntjs/grunt-contrib-sass))
- [ ] Minify Javascript ([Grunt Uglify](https://github.com/gruntjs/grunt-contrib-uglify))
- [ ] Concatenate javascript ([Grunt Concat](https://github.com/gruntjs/grunt-contrib-concat))
- [ ] Optimize the delivery of traditional images ([Smush It App](http://www.smushit.com/ysmush.it/)) ([Grunt Imagemin](https://github.com/gruntjs/grunt-contrib-imagemin))
- [ ] Sprite images, consider icon fonts and/or inline as SVG ([Article and Grunt](http://benfrain.com/image-sprites-data-uris-icon-fonts-v-svgs/))
- [ ] Prioritize above the fold, critical content and CSS ([Grunt Penthouse](https://github.com/pocketjoso/penthouse))
- [ ] GZIP traffic ([Google Guidelines](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer)) ([H5BP Server Configs](https://github.com/h5bp/server-configs))
- [ ] Utilize proper caching ([Google Guidelines](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching))
- [ ] Load webfonts asynchronously ([Webfont Loader](https://github.com/typekit/webfontloader))

#### Performance Measuring Tools

* [Web Page Test](http://www.webpagetest.org/)
* [Google Page Speed Insights](https://developers.google.com/speed/pagespeed/insights/)

#### Go forth, be performant!
There are many more resources out there; the web is a beatuful mosiac. Find more performance inspiration here:

* [Set a Performance Budget](http://timkadlec.com/2013/01/setting-a-performance-budget/)
* [Performance Tooling Today](http://perf-tooling.today/)
