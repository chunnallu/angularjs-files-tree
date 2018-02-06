/**
 * Created by lcl on 2017/12/5.
 */
export default class AppController {
    constructor($scope,$interval) {
        this.$scope = $scope;
        this.data = [
            { 'text' : 'root 1',children:[] },
            {
                'text' : 'Root 2',
                'children' : [
                    { 'text' : 'Child 1'},
                    { 'text' : 'Child 2' },
                ]
            }
        ];

    }
}