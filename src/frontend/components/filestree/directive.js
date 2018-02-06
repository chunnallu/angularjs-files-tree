/**
 * Created by lcl on 2018/2/6.
 */
export default function directive(nodeTypeFilter) {
    function createTree(scope,element,attr){
        let data = nodeTypeFilter(scope.data);
        let onUpdateCallback = scope.onUpdate;
        let treeId = new Date().getTime();
        let container = element.html(`<div id="${treeId}" ></div>`);
        let treeDom = $(`#${treeId}`).jstree({
            'core' : {
                'data' : data
            },
            'types':{
                "#" : {
                    "max_children" : 1,
                    "valid_children" : ["default"]
                },
                "default" : {
                    "icon" : "images/folder.png",
                    "valid_children" : ["default","file"]
                },
                "file" : {
                    "icon" : "images/file.png",
                    "valid_children" : []
                }
            },
            "plugins" : [ "types" ]
        });
        let tree = $.jstree.reference("#"+treeId);
        // 绑定事件
        bindingEvents(tree,treeDom);
    }



    function bindingEvents(tree,treeDom){

    }



    return {
        restrict:"A",
        scope:{
            'data':"=",
            'onUpdate':'<',
        },
        link:(scope,element,attr)=>{
            createTree(scope,element,attr);
        },
        templateUrl:"components/filestree/filestree.html",
    }
}