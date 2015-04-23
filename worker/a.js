/**
 * Created by liyatang on 2015/4/23.
 */
var i=0;

function timedCount()
{
    i=i+1;
    postMessage(i);
    setTimeout("timedCount()",2000);
}

timedCount();