class Timer {
    countdown(end, update, handle) {
        const now = new Date().getTime();
        const self = this;
        if(now-end){
            handle.call(self);
        }else {
            let last_time = end-now;
            let px_d = 1000*60*60*24;
        }
    }
}