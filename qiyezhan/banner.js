window.onload = function () {
    let banner = document.getElementsByClassName('banner');
    let ul = banner[0].getElementsByClassName('dotBox');
    let aban = banner[0].getElementsByClassName('ban');
    //获取ul里面的li
    let lis = ul[0].getElementsByClassName('dot');
    aban[0].style.opacity = '1';
    lis[0].style.background = '#ff6700';
    for (let i = 0; i < lis.length; i++) {
        lis[i].onclick = function () {
            for (let j = 0; j < lis.length; j++) {
                lis[j].style.background = 'white';
                aban[j].style.opacity = '0';
            }
            lis[i].style.background = '#ff6700';
            aban[i].style.opacity = '1';
        };
        let num = 0;
        let time = function () {
            num++;
            if (num < 5) {
                for (let j = 0; j < lis.length; j++) {
                    lis[j].style.background = 'white';
                    aban[j].style.opacity = '0';
                }
                lis[num].style.background = '#ff6700';
                aban[num].style.opacity = '1';
                return num;
            } else {
                num = -1;
            }

        };
        let timer = setInterval(time, 5000);
    }


}