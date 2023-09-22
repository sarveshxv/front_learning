const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure()
        }
        else{
            success()
        }
    }, delay)

}


fakeRequestCallback(1, function(){
    console.log("It worked: Success")
},
function(){
    console.log("It Failed: Failure")
})