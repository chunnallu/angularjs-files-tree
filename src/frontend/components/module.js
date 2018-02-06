/**
 * Created by lcl on 2018/2/6.
 */
import nodeTypeFilter from './filestree/nodetypefilter'
import directive from './filestree/directive'
export default angular.module("app.components",[])
    .filter("nodeType",nodeTypeFilter)
    .directive("fileTree",directive)