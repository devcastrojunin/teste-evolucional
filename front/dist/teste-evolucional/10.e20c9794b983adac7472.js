(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{tBpu:function(e,t,r){"use strict";r.r(t),r.d(t,"TeacherRegisterModule",function(){return h});var i=r("ofXK"),o=r("mrSG"),s=r("3Pt+"),n=r("fXoL"),c=r("OaWH"),a=r("tyNb");function b(e,t){if(1&e&&(n.Wb(0,"option",19),n.wc(1),n.Vb()),2&e){const e=t.$implicit;n.mc("value",e.id),n.Gb(1),n.xc(e.name)}}function l(e,t){if(1&e&&(n.Wb(0,"option",19),n.wc(1),n.Vb()),2&e){const e=t.$implicit;n.mc("value",e.id),n.Gb(1),n.xc(e.name)}}function d(e,t){if(1&e&&(n.Wb(0,"span",25),n.Wb(1,"label",21),n.Rb(2,"input",26),n.Wb(3,"span",23),n.wc(4),n.Vb(),n.Vb(),n.Vb()),2&e){const e=t.$implicit;n.Gb(2),n.mc("value",e.id),n.Gb(2),n.xc(e.name)}}function u(e,t){if(1&e){const e=n.Xb();n.Wb(0,"div",20),n.Wb(1,"div"),n.Wb(2,"label",21),n.Wb(3,"input",22),n.dc("change",function(t){return n.sc(e),n.hc().selectDegree(t)}),n.Vb(),n.Wb(4,"span",23),n.wc(5),n.Vb(),n.Vb(),n.Vb(),n.vc(6,d,5,2,"span",24),n.Vb()}if(2&e){const e=t.$implicit,r=n.hc();n.Gb(3),n.mc("value",e.id),n.Gb(2),n.xc(e.name),n.Gb(1),n.mc("ngForOf",r.classes)}}const m=function(){return["/aluno/todos"]},g=[{path:"",component:(()=>{class e{constructor(e,t){this.appService=e,this.fb=t,this.relationShipForm=t.group({id:[""],teacherId:["",s.l.required],matterId:["",s.l.required],degrees:this.fb.array([this.createDegreeArray()])})}createDegreeArray(){return this.fb.group({degreeId:null,classes:new s.b([])})}addDegree(){this.degreeItems=this.relationShipForm.get("degrees"),this.degreeItems.push(this.createDegreeArray())}ngOnInit(){this.getClasses(),this.getDegrees(),this.getTeachers(),this.getMatters()}getClasses(){return Object(o.a)(this,void 0,void 0,function*(){this.appService.getAllClasses().subscribe(e=>{this.classes=e})})}getDegrees(){return Object(o.a)(this,void 0,void 0,function*(){this.appService.getAllDegrees().subscribe(e=>{this.degrees=e})})}getTeachers(){return Object(o.a)(this,void 0,void 0,function*(){this.appService.getAllTeachers().subscribe(e=>{this.teachers=e})})}getMatters(){return Object(o.a)(this,void 0,void 0,function*(){this.appService.getAllMatters().subscribe(e=>{this.matters=e})})}selectDegreeChange(e){const t=this.relationShipForm.get("degrees");if(e.target.checked)t.push(new s.d({degreeId:e.target.value}));else{let r=0;t.controls.forEach(i=>{i.value!=e.target.value?r++:t.removeAt(r)})}}selectClassChange(e){const t=this.relationShipForm.get("classes");if(e.target.checked)t.push(new s.d({degreeId:e.target.value}));else{let r=0;t.controls.forEach(i=>{i.value!=e.target.value?r++:t.removeAt(r)})}}saveData(){console.log(this.relationShipForm.value)}}return e.\u0275fac=function(t){return new(t||e)(n.Qb(c.a),n.Qb(s.c))},e.\u0275cmp=n.Kb({type:e,selectors:[["app-teacher-register"]],decls:32,vars:6,consts:[[1,"mt-10","sm:mt-0"],[3,"formGroup","submit"],[1,"px-4","mb-10"],[3,"routerLink"],["aria-hidden","true",1,"fa","fa-chevron-left"],[1,"overflow-hidden","sm:rounded-md"],[1,"px-4","py-5","bg-white","sm:p-6"],[1,"grid","grid-cols-2","gap-6"],[1,"col-span-1","sm:col-span-1"],["for","country",1,"block","text-sm","font-medium","text-gray-700"],["name","teacherId","formControlName","teacherId",1,"mt-1","block","w-full","py-2","px-3","border","border-gray-300","bg-white","rounded-md","shadow-sm","focus:outline-none","focus:ring-indigo-500","focus:border-indigo-500","sm:text-sm"],["value",""],[3,"value",4,"ngFor","ngForOf"],[1,"grid","grid-cols-2","gap-6","mt-5"],["for","matterId",1,"block","text-sm","font-medium","text-gray-700"],["name","matterId","formControlName","matterId",1,"mt-1","block","w-full","py-2","px-3","border","border-gray-300","bg-white","rounded-md","shadow-sm","focus:outline-none","focus:ring-indigo-500","focus:border-indigo-500","sm:text-sm"],["class","mt-2",4,"ngFor","ngForOf"],[1,"bg-gray-50","col-span-2","mt-10"],["type","submit",1,"inline-flex","justify-center","py-2","px-4","border","border-transparent","shadow-sm","text-sm","font-medium","rounded-md","text-white","bg-indigo-600","hover:bg-indigo-700","focus:outline-none","focus:ring-2","focus:ring-offset-2","focus:ring-indigo-500"],[3,"value"],[1,"mt-2"],[1,"inline-flex","items-center"],["type","checkbox",1,"form-checkbox",3,"value","change"],[1,"ml-2"],["class","ml-6",4,"ngFor","ngForOf"],[1,"ml-6"],["type","checkbox",1,"form-checkbox",3,"value"]],template:function(e,t){1&e&&(n.Wb(0,"div",0),n.Wb(1,"form",1),n.dc("submit",function(){return t.saveData()}),n.Wb(2,"div",2),n.Wb(3,"a",3),n.Rb(4,"i",4),n.wc(5," Voltar "),n.Vb(),n.Vb(),n.Wb(6,"div",5),n.Wb(7,"div",6),n.Wb(8,"div",7),n.Wb(9,"div",8),n.Wb(10,"label",9),n.wc(11,"Professor"),n.Vb(),n.Wb(12,"select",10),n.Wb(13,"option",11),n.wc(14,"Selecione"),n.Vb(),n.vc(15,b,2,2,"option",12),n.Vb(),n.Vb(),n.Vb(),n.Wb(16,"div",13),n.Wb(17,"div",8),n.Wb(18,"label",14),n.wc(19,"Mat\xe9ria"),n.Vb(),n.Wb(20,"select",15),n.Wb(21,"option",11),n.wc(22,"Selecione"),n.Vb(),n.vc(23,l,2,2,"option",12),n.Vb(),n.Vb(),n.Vb(),n.Wb(24,"div",13),n.Wb(25,"div",8),n.Wb(26,"label",9),n.wc(27,"S\xe9ries"),n.Vb(),n.vc(28,u,7,3,"div",16),n.Vb(),n.Vb(),n.Wb(29,"div",17),n.Wb(30,"button",18),n.wc(31," Salvar "),n.Vb(),n.Vb(),n.Vb(),n.Vb(),n.Vb(),n.Vb()),2&e&&(n.Gb(1),n.mc("formGroup",t.relationShipForm),n.Gb(2),n.mc("routerLink",n.nc(5,m)),n.Gb(12),n.mc("ngForOf",t.teachers),n.Gb(8),n.mc("ngForOf",t.matters),n.Gb(5),n.mc("ngForOf",t.degrees))},directives:[s.m,s.h,s.f,a.d,s.k,s.g,s.e,s.i,s.n,i.i],styles:[""]}),e})()}];let h=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.Ob({type:e}),e.\u0275inj=n.Nb({imports:[[i.b,a.e.forChild(g),s.j]]}),e})()}}]);