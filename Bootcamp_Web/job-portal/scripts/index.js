// // function fetcherGET(url){
// //     return new Promise((res,rej)=>{
// //         fetch(url)
// //         .then((res)=>res.json())
// //         .then(json=>{res(json)});
// //     })
// // }

// const fetcherGET2 = async (url) =>{
//     const res = await fetch(url, {keepalive: true});
//     return res.json();
// }
// let res = {};
// //sequencial call
// // fetcherGET2("https://hacker-news.firebaseio.com/v0/jobstories.json")
// // .then((jobIdList)=>{
// //     jobIdList.map(async(jobId)=>{
// //         res[jobId] = await fetcherGET2(`https://hacker-news.firebaseio.com/v0/item/${jobId}.json`);
// //     });
// // });

// // let interval = setInterval(()=>{console.log(res)},50);

// // setTimeout(()=>{
// //     //clearInterval(interval);
// //     console.log(res)
// // },3000);



// async function *resolveAllIds(ids) {
//     for(const id of ids) {
//         yield await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
//     }
// }

// async function *resolveAllResponseJson(promiseItr) {
//     for await(const pr of promiseItr) {
//         yield (await pr).json();
//     }
// }
// //sequencial call
// const fetchAll = async () =>{
//     const jobIdList = await fetcherGET2("https://hacker-news.firebaseio.com/v0/jobstories.json");
//     // const itrList = resolveAllIds(jobIdList);
//     // const jsonList = resolveAllResponseJson(itrList);
//     // for await(let json of jsonList) {
//     //     console.log(json);
//     // }
//     const fetchPromises = jobIdList.map((jobId)=> fetch(`https://hacker-news.firebaseio.com/v0/item/${jobId}.json`));
//     const responseList = await Promise.all(fetchPromises);
//     const jsonPromiseList = responseList.map(res => res.json());
//     const jsonList = await Promise.all(jsonPromiseList);
//     console.log(jsonList)
// }

// fetchAll();


/*---------------------------------------------------------------------------------------------------------------------*/
const URL_JOBID="https://hacker-news.firebaseio.com/v0/jobstories.json";

const fetcherGet = async (url) => {
  const res = await fetch(url);
  return await res.json();
};

/**
 *
 */
// const createJobObject = async ()=>{
//     const json=await fetcherGet(URL_JOBID);
//     return json;
// } 


const fetcherJOBList=async ()=>{
  let resultObj={};
  await fetcherGet(URL_JOBID).then((jobids)=>jobids.map(async (jobid)=>{
    const res=await fetch(`https://hacker-news.firebaseio.com/v0/item/${jobid}.json`)
    const jsonJD= await res.json();
    resultObj[jobid]=jsonJD;
  }));
  return resultObj;
}

fetcherJOBList().then(
  (result)=>{
    console.log(result);
  });