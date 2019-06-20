//查找当前数组中是否存在
//普通数组arr=['0','1'...],true 存在 false 不存在
export const juedArr = (arr , jdStr) =>{
  return arr.indexOf(jdStr) !== -1
};

//对象数组arr=[{imgName:'123.jpg'},{}...],true 存在 false 不存在
export const juedObjArr = (arr ,key ,jdStr) =>{
  return arr.filter(item => {
    return item[key] === jdStr
  }).length > 0
};

