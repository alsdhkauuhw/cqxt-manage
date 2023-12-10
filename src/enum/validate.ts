import { HttpManager } from "@/API";
import { proxyRefs } from "vue";

export const valiusername=(rule, value, callback)=>{
    if (!value) {
        return callback(new Error("账号不能为空"));
    } else {
         callback();
    }
}

export const valipassword=(rule, value, callback)=>{
    if (!value) {
        return callback(new Error("密码不能为空"));
    } else {
        callback();
    }
}
//登入规则
export const SigninRules = {
        username: [{ validator: valiusername, trigger: 'blur' }],
        password: [{ validator: valipassword, trigger: 'change' }]
}

//注册规则
/* export const valiemail = (rule, value, callback)=>{
    if (!value) {
        return callback(new Error("邮箱不能为空"));
    }
    if(value == "/[]"){

    }
} */
export const valiusernames = async (rule, value, callback)=>{
    if (!value) {
        return callback(new Error("账号不能为空"));
    } 
    const username = value
    const result = (await HttpManager.checkUsername(username)) as ResponseBody;
    if (!result.success) {
        return callback(new Error("该账号已被他人使用"));
    }else {
        callback();
    }

}

export const valiemail = async (rule, value, callback)=>{
    if (!value) {
        return callback(new Error("账号不能为空"));
    } 
    const email = value
    const result = (await HttpManager.checkEmail(email)) as ResponseBody;
    if (!result.success) {
        return callback(new Error("该邮箱已被使用"));
    }else {
        callback();
    }

}

export const SignupRules = {
    email: [
        {
        validator: valiemail,
        required: true,
        trigger: 'blur',
        },
        {
        type: 'email',
        message: '请输入正确的emali',
        trigger: ['blur', 'change'],
        },
    ],
    name: [
        { required: true, trigger: 'blur', message: '请输入名字' },
        {min: 3, max: 16, message: '名字格式不对', trigger: 'blur'}
    ],
    username: [
        { validator: valiusernames, required: true, trigger: 'blur' },
        {min: 8, max: 16, message: '账号应该在8-16位数之间', trigger: 'blur'}
    ],
    password: [
        { message: '密码不能为空', required: true, trigger: 'blur' },
        {min: 8, max: 16, message: '密码应该在8-16位数之间', trigger: 'blur'}
    ]
}


