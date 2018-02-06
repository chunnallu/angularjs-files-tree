/**
 * Created by lcl on 2018/2/7.
 */
export default function nodeTypeFilter(){
    return function filter(nodeList){
        if(!Array.isArray(nodeList)){
            return nodeList;
        }
        return nodeList.map((item)=>{
            if(item.children){
                item.children =  filter(item.children);
            }else if(typeof item === "object"){
                item.type = "file";
            }
            return item;
        })
    }
}