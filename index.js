// function logName(name){
//     console.log(`My name is ${name}`);
// }

// function insertCustomName(callback){
//     var name = "Billy";
//     callback(name);
// }

// insertCustomName(logName);


const isMomHappy = true;

const willGetIphone = new Promise((resolve, reject) => {
    if (isMomHappy){
        const phone = {
            series: "IphoneX",
            color: "Black"
        };
        resolve(phone);
    }else{
        const reason = new Error("mom is not happy");
        reject(reason);
    }
});

const showOff = function(phone){
    const message = "Hey fella, I have a new" + phone.color + " " + phone.series + " " + "phone";
    return Promise.resolve(message);
};

const askMom = function() {
    willGetIphone
    .then(showOff)
    .then(fulfilled => console.log(fulfilled))
    .catch(error => console.log(error.message));
};

askMom();
