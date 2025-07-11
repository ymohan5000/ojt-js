function fetchDataFromServer1()
.then((responce)=>{
    console.log(responce);
    console.loog("data fetch successfully")
    return responce;
})
.then((returnData)=>{
    console.log("return data",returndata)
})
.catch((error)=>{
    console.log("error",error);
    
});
async function asynchronousFunctions()
{
    try{
        const respoce =await fetchTheDataFromServer1();
        const sentData=await sendDataToServer2(respoce)

    }
    
    catch(error)
    {
console.log("erroer")
    }
}