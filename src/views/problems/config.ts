// @ts-nocheck
export function dragControllerDiv() {
    let resize = document.getElementsByClassName('resize');
    let left = document.getElementsByClassName('left');
    let mid = document.getElementsByClassName('mid');
    let box = document.getElementsByClassName('main-content');
    for (let i = 0; i < resize.length; i++) {
        // 鼠标按下事件
        resize[i].onmousedown = function (e) {
            //颜色改变提醒
            resize[i].style.background = '#818181';
            let startX = e.clientX;
            resize[i].left = resize[i].offsetLeft;
            // 鼠标拖动事件
            document.onmousemove = function (e) {
                let endX = e.clientX;
                let moveLen = resize[i].left + (endX - startX); // （endx-startx）=移动的距离。resize[i].left+移动的距离=左边区域最后的宽度
                let maxT = box[i].clientWidth - resize[i].offsetWidth; // 容器宽度 - 左边区域的宽度 = 右边区域的宽度

                if (moveLen < 32) moveLen = 32; // 左边区域的最小宽度为32px
                if (moveLen > maxT - 150) moveLen = maxT - 150; //右边区域最小宽度为150px

                resize[i].style.left = moveLen; // 设置左侧区域的宽度

                for (let j = 0; j < left.length; j++) {
                    left[j].style.width = moveLen + 'px';
                    mid[j].style.width = (box[i].clientWidth - moveLen - 10) + 'px';
                }
            };
            // 鼠标松开事件
            document.onmouseup = function (evt) {
                //颜色恢复
                resize[i].style.background = '#d6d6d6';
                document.onmousemove = null;
                document.onmouseup = null;
                resize[i].releaseCapture && resize[i].releaseCapture(); //当你不在需要继续获得鼠标消息就要应该调用ReleaseCapture()释放掉
            };
            resize[i].setCapture && resize[i].setCapture(); //该函数在属于当前线程的指定窗口里设置鼠标捕获
            return false;
        };
    }
}

