let helper={
    extend:extend
};
export default helper;
function extend(target:any,source:any){
    if(!source){return target}
    for(let pro in source){
            if(typeof(source[pro])=="object"){
                target[pro]=extend(target[pro],source[pro]);
                continue;
            }
            target[pro]=source[pro];
    }
    return target;
};