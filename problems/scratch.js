function asyncy(cb) { 
    setTimeout(cb, 1000); 
    console.log("async") 
};

function callback() { 
    console.log("callback"); 
};