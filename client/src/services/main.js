let BASE_URL = 'http://localhost:8000/'


export async function sendClicks(info){
  try{
     const res = await fetch(BASE_URL+'track/clicks', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ "event" : "click",...info})
});

  } catch(err){
    console.log(err)
  }
}


export async function monitorStatus(info){
    console.log(info)
      try{
 const res = await fetch(BASE_URL+'track/monitor', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ event: "monitor", info})
});
console.log(res);
  } catch(err){
    console.log(err)
  }
}

export async function hover(info){
 try{
     const res = await fetch.post(Base)
  } catch(err){
    console.log(err)
  }
}