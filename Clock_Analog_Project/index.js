setInterval(()=>{
    date =new Date();
    htime = date.getHours();
    mtime = date.getMinutes();
    stime = date.getSeconds();

    hrotate = 30*htime + mtime/2;
    mrotate = mtime*6;
    srotate = stime*6;

    hour.style.transform = `rotate(${hrotate}deg)`;
    minute.style.transform = `rotate(${mrotate}deg)`;
    second.style.transform = `rotate(${srotate}deg)`;
    
},1000);