class StepsManager{
    static module:string;
    static step:number;
    static data:Map<Object,Object>;
    static setModule=(module:string)=>{
        StepsManager.module=module;
    }
    static setStep=(step:number)=>{
        StepsManager.step=step;
    }
    static setData=(data:Map<Object,Object>)=>{
        StepsManager.data=data
    }
}