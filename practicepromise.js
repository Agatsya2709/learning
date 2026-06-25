const promise =new Promise((resolve,reject)=>{
const success= Math.random() > 0.5
if (success){
    resolve('operation success')
}else{
    reject('opp failed')
}
})
promise
//.then(response=> console.log(response))
try{
    const response = await promise
    console.log(response)
}catch(err){
    console.log(err)
}
