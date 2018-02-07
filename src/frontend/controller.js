/**
 * Created by lcl on 2017/12/5.
 */
export default class AppController {
    constructor($scope,$interval) {
        this.$scope = $scope;
        this.data = [
            { 'text' : 'build',children:[] },
            {
                'text' : 'src',
                'children' : [
                    { 'text' : 'js','children':[
                        { 'text' : 'sw.js','content':'()=>{console.log("你好")}' },
                    ]},
                    { 'text' : 'style','children':[
                        { 'text' : 'common.scss','content':'body:{width:100%;height:100%;}' },
                    ]},
                    { 'text' : 'index.html','content':`<div>你好啊</div>`},
                    { 'text' : 'app.js','content':'()=>{console.log("你好")}' },
                ]
            },
            { 'text' : 'gulpfile.babel.js','content':`gulp.task("hello",()=>{console.log("hello")})`},
            { 'text' : 'package.json','content':`{name:"hello"}`},
            { 'text' : 'Dockerfile','content':`FROM node:carbon`},
        ];
        this.selectedNode;
        this.showFileContent = this.showFileContent.bind(this);
    }

    // 显示文件内容
    showFileContent(node){
        this.$scope.$apply(()=>{
            this.selectedNode = node;
        });
    }
}