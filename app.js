const fs=require('fs'),
    uglifyJS=require('uglify-js'),
    uglifyCSS=require('uglifycss'),
    cssSrc="./cssSrc/",
    jsSrc="./jsSrc/",
    cssRes="./cssRes/",
    jsRes="./jsRes/";

fs.readdirSync(cssSrc).forEach(file => {
    let fileRes=getResFileName(file);
    if(-1===file.indexOf('.css')){
        console.log(`${file} not CSS file`);
    }else{
        let srcFileContent = fs.readFileSync(`${cssSrc}${file}`,'UTF-8');
        let uglifiedCSS=uglifyCSS.processString(srcFileContent);
        fs.writeFileSync(`${cssRes}${fileRes}`,uglifiedCSS);
    }
});

fs.readdirSync(jsSrc).forEach(file => {
    let fileRes=getResFileName(file),
        fileSrc=`${jsSrc}${file}`;

    if(-1===file.indexOf('.js')){
        console.log(`${file} not JS file`);
    }else{
        let srcFileContent = fs.readFileSync(`${jsSrc}${file}`,'UTF-8');
        let uglifiedJS=uglifyJS.minify(srcFileContent,{ie8:true});
        fs.writeFileSync(`${jsRes}${fileRes}`,uglifiedJS.code);
        let r;
    }
});

function getResFileName(file) {
    let fileName=file.split('.');

    return`${fileName[0]}.min.${fileName[1]}`;
}