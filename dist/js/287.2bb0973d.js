"use strict";(self["webpackChunkcqxt_manage"]=self["webpackChunkcqxt_manage"]||[]).push([[287],{4697:function(e,r,a){var n;a.d(r,{w:function(){return n}}),function(e){e["Error"]="/404",e["Signin"]="/sign-in",e["SignUp"]="/sign-up",e["Cqxtcontainer"]="/",e["MySpace"]="/my-space"}(n||(n={}))},7313:function(e,r,a){a.d(r,{Kl:function(){return s},wE:function(){return o}});var n=a(3861);const u=(e,r,a)=>{if(!r)return a(new Error("账号不能为空"));a()},l=(e,r,a)=>{if(!r)return a(new Error("密码不能为空"));a()},s={username:[{validator:u,trigger:"blur"}],password:[{validator:l,trigger:"change"}]},i=async(e,r,a)=>{if(!r)return a(new Error("账号不能为空"));const u=r,l=await n.x.checkUsername(u);if(!l.success)return a(new Error("该账号已被他人使用"));a()},t=async(e,r,a)=>{if(!r)return a(new Error("账号不能为空"));const u=r,l=await n.x.checkEmail(u);if(!l.success)return a(new Error("该邮箱已被使用"));a()},o={email:[{validator:t,required:!0,trigger:"blur"},{type:"email",message:"请输入正确的emali",trigger:["blur","change"]}],name:[{required:!0,trigger:"blur",message:"请输入名字"},{min:3,max:16,message:"名字格式不对",trigger:"blur"}],username:[{validator:i,required:!0,trigger:"blur"},{min:8,max:16,message:"账号应该在8-16位数之间",trigger:"blur"}],password:[{message:"密码不能为空",required:!0,trigger:"blur"},{min:8,max:16,message:"密码应该在8-16位数之间",trigger:"blur"}]}},9359:function(e,r,a){a.d(r,{Z:function(){return s}});a(560);var n=a(4697),u=a(65),l=a(3396);function s(){const{proxy:e}=(0,l.FN)(),r=(0,u.oR)();(0,l.Fl)((()=>r.getters.token));function a(r,a){switch(r){case n.w.SignUp:case n.w.Error:default:e.$router.push({path:a.path});break}}return{routerManager:a}}},2287:function(e,r,a){a.r(r),a.d(r,{default:function(){return d}});var n=a(3396);function u(e,r,a,u,l,s){const i=(0,n.up)("el-input"),t=(0,n.up)("el-form-item"),o=(0,n.up)("el-button"),m=(0,n.up)("el-form");return(0,n.wg)(),(0,n.j4)(m,{"status-icon":"",rules:e.SignupRules,ref:"SignupRef",model:e.signup,"label-width":"auto",class:"signup-ruleform"},{default:(0,n.w5)((()=>[(0,n.Wm)(t,{label:"邮箱",prop:"email"},{default:(0,n.w5)((()=>[(0,n.Wm)(i,{"aria-placeholder":"请输入邮箱",modelValue:e.signup.email,"onUpdate:modelValue":r[0]||(r[0]=r=>e.signup.email=r)},null,8,["modelValue"])])),_:1}),(0,n.Wm)(t,{label:"用户名",prop:"name"},{default:(0,n.w5)((()=>[(0,n.Wm)(i,{"aria-placeholder":"用户名",modelValue:e.signup.name,"onUpdate:modelValue":r[1]||(r[1]=r=>e.signup.name=r)},null,8,["modelValue"])])),_:1}),(0,n.Wm)(t,{label:"账号",prop:"username"},{default:(0,n.w5)((()=>[(0,n.Wm)(i,{"aria-placeholder":"账号",modelValue:e.signup.username,"onUpdate:modelValue":r[2]||(r[2]=r=>e.signup.username=r)},null,8,["modelValue"])])),_:1}),(0,n.Wm)(t,{label:"密码",prop:"password"},{default:(0,n.w5)((()=>[(0,n.Wm)(i,{"aria-placeholder":"密码",modelValue:e.signup.password,"onUpdate:modelValue":r[3]||(r[3]=r=>e.signup.password=r)},null,8,["modelValue"])])),_:1}),(0,n.Wm)(t,null,{default:(0,n.w5)((()=>[(0,n.Wm)(o,{onClick:r[4]||(r[4]=r=>e.signUp()),color:"#626aef",dark:e.isDark},{default:(0,n.w5)((()=>[(0,n.Uk)("注册")])),_:1},8,["dark"])])),_:1})])),_:1},8,["rules","model"])}var l=a(4870),s=a(7313),i=a(9359),t=a(7178),o=a(3861),m=a(4697),p=(0,n.aZ)({name:"signup",setup(){const{proxy:e}=(0,n.FN)(),r=(0,l.qj)({email:"",name:"",username:"",password:""}),{routerManager:a}=(0,i.Z)();async function u(){try{await e.$refs["SignupRef"].validate();const n=r.email,u=r.name,l=r.username,s=r.password,i=await o.x.Signup(n,u,l,s);i.success?(t.z8.success(i.message),a(m.w.Signin,{path:m.w.Signin})):t.z8.error(i.message)}catch(n){console.error(n)}}return{signup:r,SignupRules:s.wE,signUp:u}}}),g=a(89);const c=(0,g.Z)(p,[["render",u]]);var d=c}}]);
//# sourceMappingURL=287.2bb0973d.js.map