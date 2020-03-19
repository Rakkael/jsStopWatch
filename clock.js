window.onload = function(){
    var count = 0;
    var timer = null;

    document.getElementById("start").onclick = function(){
        if (timer == null){     // 只有当 timer == null 才执行以下语句， 防止多次点击start计时加快。
            timer = setInterval(function(){
                count++;
                document.getElementById("second").innerHTML = showNum(count % 60);
                document.getElementById("minute").innerHTML = showNum(parseInt(count / 60) % 60);
                document.getElementById("hour").innerHTML = showNum(parseInt(count / 3600) % 60);
            }, 100);
        }
    };

    // 暂停和停止要放在 window.onload 里， 否则作用域不同无法执行。
    document.getElementById("pause").onclick = function(){
        clearInterval(timer);
        timer = null;
    }
    document.getElementById("stop").onclick = function(){   
        clearInterval(timer);
        count = 0;
        timer = null;
        document.getElementById("second").innerHTML = "00";
        document.getElementById("minute").innerHTML = "00";
        document.getElementById("hour").innerHTML = "00";
    }
}

function showNum(num){
    if (num < 10){
        return "0" + num;
    }
    return num;
}

