/**
 * Created by lcl on 2018/2/6.
 */
import nodeTypeFilter from './filestree/nodetypefilter'
import expandAllFilter from './filestree/expandallfilter'
import directive from './filestree/directive'
export default angular.module("app.components",[])
    .filter("nodeType",nodeTypeFilter)
    .filter("expandAll",expandAllFilter)
    .directive("fileTree",directive)