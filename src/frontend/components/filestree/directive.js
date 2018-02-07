/**
 * Created by lcl on 2018/2/6.
 */
export default function directive(nodeTypeFilter,expandAllFilter) {
    function createTree(scope,element,attr){
        let data = nodeTypeFilter(scope.data);
        if(scope.expandAll){
           data =  expandAllFilter(data);
        }
        let onSelectCallback = scope.onSelect;
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
        bindingEvents(treeDom,onSelectCallback,tree);
    }



    function bindingEvents(treeDom,selectCallback,tree,){
        treeDom.on('select_node.jstree',(event,selected)=>{
            selectCallback && selectCallback(selected.node.original);
        })
    }



    return {
        restrict:"A",
        scope:{
            'data':"=",
            'onSelect':'<',
            'expandAll':'='
        },
        link:(scope,element,attr)=>{
            createTree(scope,element,attr);
        }
    }
}