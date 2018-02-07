/**
 * Created by lcl on 2018/2/7.
 */
export default function expandAllFilter(){
    return function filter(nodeList){
        if(!Array.isArray(nodeList)){
            return nodeList;
        }
        return nodeList.map((item)=>{
            if(item.children){
                item.state = item.state ? item.state : {};
                item.state.opened = true;
                item.children =  filter(item.children);
            }
            return item;
        })
    }
}