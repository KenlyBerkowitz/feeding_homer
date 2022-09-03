const newDateSetTime = (time) => {
    try {
        const newDate = new Date();
        const timeArr = time.split(':');

        newDate.setHours(parseInt(timeArr[0]));
        newDate.setMinutes(parseInt(timeArr[1]));
        newDate.setSeconds(0);

        return newDate;
    } catch(error) {
        console.log(error);
    }
}


const isTimeBeforeTime = (timeA, timeB) => {
    try {
        const timeDifference = timeA.getTime() - timeB.getTime();
    
        if(timeDifference < 0)
            return true;    
        return false;
    } catch(error) {
        console.log(error);
    }
}


const analyzeData = (status) => {
    try {
        const now = new Date();
        const breakfastTime = newDateSetTime("7:30");
        const dinnerTime = newDateSetTime("20:00");
    
        if(isTimeBeforeTime(now, breakfastTime)) 
            return "Happy Boy!";
    
        else if(isTimeBeforeTime(now, dinnerTime)) {
    
            if(status.breakfast)
                return "Happy Boy!";
            else 
                return "Feed Me!!";
        }
        else if(!isTimeBeforeTime(now, dinnerTime)) {
    
            if(status.dinner)
                return "Happy Boy!";
            else 
                return "Feed Me!!";
        }
        return "Happy Boy!";
    } catch(error) {
        console.log(error);
    }
   
}


export async function onRequest(context) {
    try{
        const {request, env} = context;

        let feedingStatus = await env.feeding_homer.get("hadMeal", {type: "json"});
        console.log(feedingStatus);
        feedingStatus.statusText = analyzeData(feedingStatus);

        if(feedingStatus.statusText === "Happy Boy!")
            feedingStatus.img = await env.feeding_homer.get("homer-happy-pic");
        else
            feedingStatus.img = await env.feeding_homer.get("homer-mad-pic");

        const options = {
            headers: {
                'content-type': 'application/json;charset=UTF-8'
              },
        };

        const data = {
            mine: "hi",
            yours: "no"
        }
        const json = JSON.stringify(data);

        return new Response(json, options);
    } catch(err) {
        console.log(err);
    }
  }
  