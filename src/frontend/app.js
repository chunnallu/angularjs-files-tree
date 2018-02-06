import AppController from "./controller";
import ComponentModule from "./components/module"

export default angular.module("myapp",[ComponentModule.name])
.controller("appcontroller",AppController);