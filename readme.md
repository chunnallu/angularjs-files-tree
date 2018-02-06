# ace 编辑器组件

对ui-ace编辑器做了一层封装，使之可以在angularjs项目里使用

## 注意问题


下面几个依赖文件需要按顺序导入，否则会出现奇怪问题，比如输入中文乱码：

```
<script type="text/javascript" src="bower_components/ace-builds/src-min-noconflict/ace.js"></script>
<script type="text/javascript" src="bower_components/angular/angular.js"></script>
<script type="text/javascript" src="bower_components/angular-ui-ace/ui-ace.js"></script>
```



