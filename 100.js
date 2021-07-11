var sum_all = 0; //總資產
var sum_all2 = 0; //總共賺多少
// 累績額度
var a1_1 = 0; //總點擊的分數(不含罐罐和自動)
var a1_2 = 0; //罐罐額外帶來的效益
var a1_3 = 0; //自動額外帶來的效益
var a1_4 = 0; //阿嬤額外帶來的效益
// 等級
var lv_1 = 1; //點擊等級
var lv_2 = 1; //罐罐等級
var lv_3 = 1; //自動等級
var lv_4 = 1; //阿嬤等級
// 功能值
var opt_1 = 1; //點擊倍率
var opt_2 = 0; //罐罐率
var opt_3 = 0; //自動秒數
var opt_4 = 0; //一秒阿嬤幾個
// 需消費金額
var cash_1 = 20; //倍率下一等級金費
var cash_2 = 50; //罐罐下一等級金費
var cash_3 = 40; //自動下一等級金費
var cash_4 = 1000; //阿嬤下一等級金費

// 下階段顯示四個技能數值
let opts = [
    [1, 2, 4, 8, 12, 18, 24, 32, 40, 50],
    [0, 2, 4, 6, 8, 10, 12, 14, 16, 20],
    ['xx', 9, 7.5, 6, 4.8, 4, 3, 2, 1, 0.5],
    [0, 25, 50, 75, 100, 125, 150, 175, 200, 225]
];

var xx;

// 點擊增加
function fn1_0() {
    xx = Math.ceil(Math.random() * 100) //亂數值
    document.getElementById("cataud3").play();

    if (xx < opt_2) {
        // a1_1 += (opt_1 * 4); //顯示總點擊分數
        a1_2 += (opt_1 * 4); //顯示罐罐額外為你多帶來多少效益
        sum_all += (opt_1 * 4); //總次數(會因為購買技能扣除)(罐罐的)
        sum_all2 += (opt_1 * 4);
        document.getElementById('test111').innerHTML = "+" + (opt_1 * 4) + " <span id='test1110'>(罐罐!!)</span>";
        fn_top();
    } else {
        a1_1 += opt_1;
        sum_all += opt_1; //總次數(會因為購買技能扣除)(點擊的)
        sum_all2 += opt_1;
        document.getElementById('test111').innerHTML = "+" + opt_1;
        fn_top();
    }
}

// 更改下一級需要消費的值
var cashid_10 = document.getElementById('cashid_1');
cashid_10.innerHTML = cash_1;

// '點擊'的值，由點技能來執行，且是最底層執行，裡面涵蓋罐罐與自動的執行
function fn1_1() {
    switch (lv_1) {
        case 1:
            opt_1 = 1;
            break;
        case 2:
            opt_1 = 2;
            cash_1 = 40;
            document.getElementById('optsid_1').innerHTML = opts[0][lv_1];
            cashid_10.innerHTML = cash_1;
            // console.log('戳一下成就')
            break;
        case 3:
            opt_1 = 4;
            cash_1 = 80;
            document.getElementById('optsid_1').innerHTML = opts[0][lv_1];
            cashid_10.innerHTML = cash_1;
            break;
        case 4:
            opt_1 = 8;
            cash_1 = 150;
            document.getElementById('optsid_1').innerHTML = opts[0][lv_1];
            cashid_10.innerHTML = cash_1;
            break;
        case 5:
            opt_1 = 12;
            cash_1 = 300;
            document.getElementById('optsid_1').innerHTML = opts[0][lv_1];
            cashid_10.innerHTML = cash_1;
            break;
        case 6:
            opt_1 = 18;
            cash_1 = 600;
            document.getElementById('optsid_1').innerHTML = opts[0][lv_1];
            cashid_10.innerHTML = cash_1;
            break;
        case 7:
            opt_1 = 24;
            cash_1 = 1200;
            document.getElementById('optsid_1').innerHTML = opts[0][lv_1];
            cashid_10.innerHTML = cash_1;
            break;
        case 8:
            opt_1 = 32;
            cash_1 = 2400;
            document.getElementById('optsid_1').innerHTML = opts[0][lv_1];
            cashid_10.innerHTML = cash_1;
            break;
        case 9:
            opt_1 = 40;
            cash_1 = 3600;
            document.getElementById('optsid_1').innerHTML = opts[0][lv_1];
            cashid_10.innerHTML = cash_1;
            break;
        case 10:
            opt_1 = 50;
            console.log('點石成金成就')
            document.getElementById('optsid_1_1').innerHTML = "";
            document.getElementById('div2_1').innerHTML = "乾乾已經滿級，<br>不要怕餵完，<br>倉庫還有幾萬包!";
            document.getElementById('lv_max10').innerHTML = "滿級"
            break;
    }
}

// 點擊的技能lv提升
function fn1_2() {
    if (lv_1 < 10) {
        lv_1++;
        console.log('倍率LV' + lv_1);
        fn1_1();
    } else {
        console.log('倍率10LV已經滿等了')
    }
}

// 倍率，技能購買控制器
function fn_ctrl_01() {
    if (sum_all >= cash_1 && lv_1 < 10) {
        sum_all -= cash_1;
        document.getElementById("cataud6").play();
        fn1_2();
    } else if (lv_1 >= 10) {
        alert('你已經滿等')
    } else if (sum_all < cash_1) {
        alert('飽足不夠!')
    }
}

// 更改需要消費的值
var cashid_20 = document.getElementById('cashid_2');
cashid_20.innerHTML = cash_2;

// '罐罐'的值
function fn2_1() {
    switch (lv_2) {
        case 1:
            opt_2 = 0;
            document.getElementById('optsid_2').innerHTML = opts[1][lv_2];
            break;
        case 2:
            opt_2 = 2;
            cash_2 = 100;
            document.getElementById('optsid_2').innerHTML = opts[1][lv_2];
            cashid_20.innerHTML = cash_2;
            break;
        case 3:
            opt_2 = 4;
            cash_2 = 175;
            document.getElementById('optsid_2').innerHTML = opts[1][lv_2];
            cashid_20.innerHTML = cash_2;
            break;
        case 4:
            opt_2 = 6;
            cash_2 = 350;
            document.getElementById('optsid_2').innerHTML = opts[1][lv_2];
            cashid_20.innerHTML = cash_2;
            break;
        case 5:
            opt_2 = 8;
            cash_2 = 700;
            document.getElementById('optsid_2').innerHTML = opts[1][lv_2];
            cashid_20.innerHTML = cash_2;
            break;
        case 6:
            opt_2 = 10;
            cash_2 = 1400;
            document.getElementById('optsid_2').innerHTML = opts[1][lv_2];
            cashid_20.innerHTML = cash_2;
            break;
        case 7:
            opt_2 = 12;
            cash_2 = 2800;
            document.getElementById('optsid_2').innerHTML = opts[1][lv_2];
            cashid_20.innerHTML = cash_2;
            break;
        case 8:
            opt_2 = 14;
            cash_2 = 4500;
            document.getElementById('optsid_2').innerHTML = opts[1][lv_2];
            cashid_20.innerHTML = cash_2;
            break;
        case 9:
            opt_2 = 16;
            cash_2 = 7500;
            document.getElementById('optsid_2').innerHTML = opts[1][lv_2];
            cashid_20.innerHTML = cash_2;
            break;
        case 10:
            opt_2 = 20;
            document.getElementById('optsid_2_1').innerHTML = "";
            document.getElementById('lv_max20').innerHTML = "滿級"
            document.getElementById('div2_2').innerHTML = "罐罐已經滿級，<br>有時候好吃到哭出來，<br>馬爾地夫都要淹沒了。";
            break;
    }
}

// '罐罐'的技能lv提升
function fn2_2() {
    if (lv_2 < 10) {
        lv_2++;
        console.log('罐罐LV' + lv_2);
        fn2_1();
    } else {
        console.log('罐罐10LV已經滿等了')
    }
}

// 罐罐，技能購買控制器
function fn_ctrl_02() {
    if (sum_all >= cash_2 && lv_2 < 10) {
        sum_all -= cash_2;
        document.getElementById("cataud6").play();
        fn2_2();
    } else if (lv_2 >= 10) {
        alert('你已經滿等')
    } else if (sum_all < cash_2) {
        alert('飽足不夠!')
    }
}

// 更改需要消費的值
var cashid_30 = document.getElementById('cashid_3');
cashid_30.innerHTML = cash_3;

// '自動'點擊的值
function fn3_1() {
    switch (lv_3) {
        case 1:
            opt_3 = 0;
            break;
        case 2:
            opt_3 = 9000;
            cash_3 = 80;
            document.getElementById('optsid_3').innerHTML = opts[2][lv_3];
            cashid_30.innerHTML = cash_3;
            fn3_0();
            break;
        case 3:
            opt_3 = 7500;
            cash_3 = 160;
            document.getElementById('optsid_3').innerHTML = opts[2][lv_3];
            cashid_30.innerHTML = cash_3;
            clearInterval(timeclr3_2);
            fn3_0();
            break;
        case 4:
            opt_3 = 6000;
            cash_3 = 320;
            document.getElementById('optsid_3').innerHTML = opts[2][lv_3];
            cashid_30.innerHTML = cash_3;
            clearInterval(timeclr3_2);
            fn3_0();
            break;
        case 5:
            opt_3 = 4800;
            cash_3 = 640;
            document.getElementById('optsid_3').innerHTML = opts[2][lv_3];
            cashid_30.innerHTML = cash_3;
            clearInterval(timeclr3_2);
            fn3_0();
            break;
        case 6:
            opt_3 = 4000;
            cash_3 = 1280;
            document.getElementById('optsid_3').innerHTML = opts[2][lv_3];
            cashid_30.innerHTML = cash_3;
            clearInterval(timeclr3_2);
            fn3_0();
            break;
        case 7:
            opt_3 = 3000;
            cash_3 = 2560;
            document.getElementById('optsid_3').innerHTML = opts[2][lv_3];
            cashid_30.innerHTML = cash_3;
            clearInterval(timeclr3_2);
            fn3_0();
            break;
        case 8:
            opt_3 = 2000;
            cash_3 = 5120;
            document.getElementById('optsid_3').innerHTML = opts[2][lv_3];
            cashid_30.innerHTML = cash_3;
            clearInterval(timeclr3_2);
            fn3_0();
            break;
        case 9:
            opt_3 = 1000;
            cash_3 = 10240;
            document.getElementById('optsid_3').innerHTML = opts[2][lv_3];
            cashid_30.innerHTML = cash_3;
            clearInterval(timeclr3_2);
            fn3_0();
            break;
        case 10:
            opt_3 = 500;
            document.getElementById('lv_max30').innerHTML = "滿級"
            document.getElementById('optsid_3_1').innerHTML = "";
            document.getElementById('div2_3').innerHTML = "自動餵食器已經滿級，<br>環遊世界都沒問題，<br>但現在疫情期間，<br>還是待在家吧。";
            clearInterval(timeclr3_2);
            fn3_0();
            break;
    }
}

// '自動'的技能lv提升
function fn3_2() {
    if (lv_3 < 10) {
        lv_3++;
        console.log('自動LV' + lv_3);
        fn3_1();
    }
}

// 計算'自動'為你多帶來的效益
function fn3_3() {
    xx = Math.ceil(Math.random() * 100)
    if (xx < opt_2) {
        sum_all += (opt_1 * 4);
        sum_all2 += (opt_1 * 4);
        a1_2 += (opt_1 * 4);
        a1_3 += (opt_1 * 4); //顯示總點擊分數
        console.log(a1_3 + '(罐罐自動)');
        document.getElementById('test111').innerHTML = "+" + (opt_1 * 4) + " <span id='test1110'>(罐罐!!)</span>";
        fn_top();
    } else {
        sum_all2 += opt_1;
        sum_all += opt_1;
        a1_3 += opt_1;
        console.log(a1_3 + '(自動)');
        document.getElementById('test111').innerHTML = "+" + opt_1;
        fn_top();
    }
}

// 時間停止變數
var timeclr3_1;
var timeclr3_2;

// '自動'的技能執行
function fn3_0() {
    if (lv_3 == 1) {
        console.log('你尚未點自動技能');
    } else {
        timeclr3_2 = setInterval(fn3_3, opt_3);
    }
}

// 自動，技能購買控制器
function fn_ctrl_03() {
    if (sum_all >= cash_3 && lv_3 < 10) {
        sum_all -= cash_3;
        document.getElementById("cataud6").play();
        fn3_2();
    } else if (lv_3 >= 10) {
        alert('你已經滿等')
    } else if (sum_all < cash_3) {
        alert('飽足不夠!')
    }
}

// 更改需要消費的值
var cashid_40 = document.getElementById('cashid_4');
cashid_40.innerHTML = cash_4;

// '阿嬤'的值
function fn4_1() {
    switch (lv_4) {
        case 1:
            opt_4 = 0;
            break;
        case 2:
            opt_4 = 25;
            cash_4 = 1500;
            document.getElementById('optsid_4').innerHTML = opts[3][lv_4];
            cashid_40.innerHTML = cash_4;
            fn4_3()
            break;
        case 3:
            opt_4 = 50;
            cash_4 = 2500;
            document.getElementById('optsid_4').innerHTML = opts[3][lv_4];
            cashid_40.innerHTML = cash_4;
            break;
        case 4:
            opt_4 = 75;
            cash_4 = 3500;
            document.getElementById('optsid_4').innerHTML = opts[3][lv_4];
            cashid_40.innerHTML = cash_4;
            break;
        case 5:
            opt_4 = 100;
            cash_4 = 5000;
            document.getElementById('optsid_4').innerHTML = opts[3][lv_4];
            cashid_40.innerHTML = cash_4;
            break;
        case 6:
            opt_4 = 125;
            cash_4 = 6500;
            document.getElementById('optsid_4').innerHTML = opts[3][lv_4];
            cashid_40.innerHTML = cash_4;
            break;
        case 7:
            opt_4 = 150;
            cash_4 = 8000;
            document.getElementById('optsid_4').innerHTML = opts[3][lv_4];
            cashid_40.innerHTML = cash_4;
            break;
        case 8:
            opt_4 = 175;
            cash_4 = 10000;
            document.getElementById('optsid_4').innerHTML = opts[3][lv_4];
            cashid_40.innerHTML = cash_4;
            break;
        case 9:
            opt_4 = 200;
            cash_4 = 13000;
            document.getElementById('optsid_4').innerHTML = opts[3][lv_4];
            cashid_40.innerHTML = cash_4;
            break;
        case 10:
            opt_4 = 225;
            document.getElementById('optsid_4_1').innerHTML = "";
            document.getElementById('lv_max40').innerHTML = "滿級"
            document.getElementById('div2_4').innerHTML = "因為阿嬤的關係，<br>貓現在。超。級。胖。";
            break;
    }
}

// '阿嬤'的技能lv提升
function fn4_2() {
    if (lv_4 < 10) {
        lv_4++;
        // console.log('阿嬤LV' + lv_4);
        fn4_1();
    } else {
        // console.log('阿嬤10LV已經滿等了');
    }
}

// '阿嬤'的執行
function fn4_3() {
    if (lv_4 == 1) {
        console.log('你尚未點自動技能');
    } else {
        setInterval(fn4_0, 1000);
    }
}

//計算'阿嬤'為你多帶來的效益
function fn4_0() {
    a1_4 += opt_4;
    sum_all += opt_4;
    sum_all2 += opt_4;
    // console.log('已阿嬤出 ' + a1_4 + '個');
    // fn_pm();
}

// 阿嬤，技能購買控制器
function fn_ctrl_04() {
    if (sum_all >= cash_4 && lv_4 < 10) {
        sum_all -= cash_4;
        document.getElementById("cataud6").play();
        fn4_2();
    } else if (lv_4 >= 10) {
        alert('你已經滿等')
    } else if (sum_all < cash_4) {
        alert('飽足不夠!')
    }
}



// 成就判定，視情況修改為每豪秒判斷
function fn_pm() {
    if (sum_all >= 5) {
        console.log('成就達到五');
    }
}

// 網站數值刷新器的變數命名
var lvid_1 = document.getElementById('lvid_1');
var lvid_2 = document.getElementById('lvid_2');
var lvid_3 = document.getElementById('lvid_3');
var lvid_4 = document.getElementById('lvid_4');
var optid_1 = document.getElementById('optid_1');
var optid_2 = document.getElementById('optid_2');
var optid_3 = document.getElementById('optid_3');
var optid_4 = document.getElementById('optid_4');
var aid_1 = document.getElementById('aid_1');
var aid_2 = document.getElementById('aid_2');
var aid_3 = document.getElementById('aid_3');
var aid_4 = document.getElementById('aid_4');
var sum_allid = document.getElementById('sum_allid');
var sum_allid2 = document.getElementById('sum_allid2');

var lv_max1 = document.getElementById("lv_max1");
var lv_max2 = document.getElementById("lv_max2");
var lv_max3 = document.getElementById("lv_max3");
var lv_max4 = document.getElementById("lv_max4");

var bk_button5 = document.getElementById("bk_button5");
var bk_button1 = document.getElementById("bk_button1");
var bk_button2 = document.getElementById("bk_button2");
var bk_button3 = document.getElementById("bk_button3");
var bk_button4 = document.getElementById("bk_button4");

var bk_button6 = document.getElementById("bk_button6");
var bk_button7 = document.getElementById("bk_button7");

// 網站數值刷新器
function wed_new_title() {
    lvid_1.innerHTML = lv_1;
    lvid_2.innerHTML = lv_2;
    lvid_3.innerHTML = lv_3;
    lvid_4.innerHTML = lv_4;
    optid_1.innerHTML = opt_1;
    optid_2.innerHTML = opt_2;
    if (lv_3 == 1) {
        optid_3.innerHTML = 'xx';
    } else {
        optid_3.innerHTML = opt_3 / 1000;
    }
    optid_4.innerHTML = opt_4;
    aid_1.innerHTML = a1_1;
    aid_2.innerHTML = a1_2;
    aid_3.innerHTML = a1_3;
    aid_4.innerHTML = a1_4;

    // 消費的更新
    sum_allid.innerHTML = sum_all.toLocaleString() + "　";
    sum_allid2.innerHTML = sum_all2.toLocaleString() + "　";

    // 技能灰色按鈕更新
    if (sum_all < cash_1) {
        lv_max1.style.backgroundColor = "gray"
        lv_max1.style.cursor = "default"
    } else if (lv_1 == 10) {
        lv_max1.style.backgroundColor = "gray"
        lv_max1.style.cursor = "default"
    } else {
        lv_max1.style.backgroundColor = ""
        lv_max1.style.cursor = ""
    }

    if (sum_all < cash_2) {
        lv_max2.style.backgroundColor = "gray"
        lv_max2.style.cursor = "default"
    } else if (lv_2 == 10) {
        lv_max2.style.backgroundColor = "gray"
        lv_max2.style.cursor = "default"
    } else {
        lv_max2.style.backgroundColor = ""
        lv_max2.style.cursor = ""
    }

    if (sum_all < cash_3) {
        lv_max3.style.backgroundColor = "gray"
        lv_max3.style.cursor = "default"
    } else if (lv_3 == 10) {
        lv_max3.style.backgroundColor = "gray"
        lv_max3.style.cursor = "default"
    } else {
        lv_max3.style.backgroundColor = ""
        lv_max3.style.cursor = ""
    }

    if (sum_all < cash_4) {
        lv_max4.style.backgroundColor = "gray"
        lv_max4.style.cursor = "default"
    } else if (lv_4 == 10) {
        lv_max4.style.backgroundColor = "gray"
        lv_max4.style.cursor = "default"
    } else {
        lv_max4.style.backgroundColor = ""
        lv_max4.style.cursor = ""
    }


    // 閃亮亮灰色
    if (sum_all < 12000 && ef_ctrl_1 == 1) {
        bk_button5.style.backgroundColor = "gray"
        bk_button5.style.cursor = "default"
    } else if (sum_all >= 1500 && ef_ctrl_1 == 1) {
        bk_button5.style.backgroundColor = ""
        bk_button5.style.cursor = ""
    } else {
        bk_button5.style.backgroundColor = "lightseagreen"
    }

    // 聖誕帽
    if (sum_all < 1500 && ef_ctrl_2 == 1) {
        bk_button1.style.backgroundColor = "gray"
        bk_button1.style.cursor = "default"
    } else if (sum_all >= 1500 && ef_ctrl_2 == 1) {
        bk_button1.style.backgroundColor = ""
        bk_button1.style.cursor = ""
    } else {
        bk_button1.style.backgroundColor = "lightseagreen"
    }

    if (sum_all < 3000 && ef_ctrl_3 == 1) {
        bk_button2.style.backgroundColor = "gray"
        bk_button2.style.cursor = "default"
    } else if (sum_all >= 1500 && ef_ctrl_3 == 1) {
        bk_button2.style.backgroundColor = ""
        bk_button2.style.cursor = ""
    } else {
        bk_button2.style.backgroundColor = "lightseagreen"
    }

    if (sum_all < 5000 && ef_ctrl_4 == 1) {
        bk_button3.style.backgroundColor = "gray"
        bk_button3.style.cursor = "default"
    } else if (sum_all >= 1500 && ef_ctrl_4 == 1) {
        bk_button3.style.backgroundColor = ""
        bk_button3.style.cursor = ""
    } else {
        bk_button3.style.backgroundColor = "lightseagreen"
    }

    if (sum_all < 8000 && ef_ctrl_5 == 1) {
        bk_button4.style.backgroundColor = "gray"
        bk_button4.style.cursor = "default"
    } else if (sum_all >= 1500 && ef_ctrl_5 == 1) {
        bk_button4.style.backgroundColor = ""
        bk_button4.style.cursor = ""
    } else {
        bk_button4.style.backgroundColor = "lightseagreen"
    }


    // 背景灰色
    if (sum_all < 20000 && fn_bk_ctrl == 1) {
        bk_button6.style.backgroundColor = "gray"
        bk_button6.style.cursor = "default"
    } else if (sum_all >= 1500 && fn_bk_ctrl == 1) {
        bk_button6.style.backgroundColor = ""
        bk_button6.style.cursor = ""
    } else {
        bk_button6.style.backgroundColor = "lightseagreen"
    }

    if (sum_all < 30000 && fn_bk_ctrl2 == 1) {
        bk_button7.style.backgroundColor = "gray"
        bk_button7.style.cursor = "default"
    } else if (sum_all >= 1500 && fn_bk_ctrl2 == 1) {
        bk_button7.style.backgroundColor = ""
        bk_button7.style.cursor = ""
    } else {
        bk_button7.style.backgroundColor = "lightseagreen"
    }
}

// 千位數加逗號
// sum_all.toLocaleString()

var catimg = document.getElementById('catimg1');
function catimgdown() {
    catimg.src = "./img/cat2.png";
}
function catimgup() {
    catimg.src = "./img/cat1.png";
}

// 數值刷新器 
setInterval(wed_new_title, 50);

// 顯示 + 多少數字
var top_carl;
var top_carl2 = 0;
function fn_top() {

    if (0 < top_carl2 && top_carl2 < 20) {
        var top1 = document.getElementById('test111');
        clearInterval(top_carl);
        top1.style.top = "15%";
        top1.style.opacity = 1;
        top_carl2 = 0;
    }
    top_carl = setInterval(top_carl_in, 50);
}
// fn_top()
function top_carl_in() {
    var top1 = document.getElementById('test111');
    var topstyle = window.getComputedStyle(top1);
    var elmTop = parseInt(topstyle.getPropertyValue("top"));

    if (top_carl2 == 20) {
        top1.style.top = "15%";
        top1.style.opacity = 1;
        clearInterval(top_carl);
        top_carl2 = 0;
        top1.innerHTML = ""
    } else {
        top1.style.top = (elmTop - 3) + "px";
        top1.style.opacity -= 0.05
        top_carl2++;
    }
}

// 靜音按鈕
function nomusic1() {
    var nom1 = document.getElementById('nomusic')
    if (nom1.checked) {
        document.getElementById("nomusicname").innerHTML = "背景樂靜音"
        document.getElementById("cataud2").muted = "true";
    } else {
        document.getElementById("nomusicname").innerHTML = "背景樂播放"
        document.getElementById("cataud2").play();
        document.getElementById("cataud2").muted = "";

    }
}
// 音效
function nomusic2() {
    var nom1 = document.getElementById('nomusic0')
    if (nom1.checked) {
        document.getElementById("nomusicname0").innerHTML = "音效靜音"
        document.getElementById("cataud6").muted = "true";
        document.getElementById("cataud5").muted = "true";
        document.getElementById("cataud3").muted = "true";
        document.getElementById("cataud1").muted = "true";
    } else {
        document.getElementById("nomusicname0").innerHTML = "音效開啟"
        document.getElementById("cataud1").play();
        document.getElementById("cataud6").muted = "";
        document.getElementById("cataud5").muted = "";
        document.getElementById("cataud3").muted = "";
        document.getElementById("cataud1").muted = "";
    }
}

//預設音效開啟 
document.getElementById('nomusic0').checked = "true";

// 道具的執行

var ef_ctrl_1 = 1; //閃亮
var ef_ctrl_2 = 1; //聖誕帽
var ef_ctrl_3 = 1; //愛心
var ef_ctrl_4 = 1; //老鼠
var ef_ctrl_5 = 1; //圍巾

// 閃亮亮背景
function fn_ef_1() {
    if (ef_ctrl_1 == 3) {
        document.getElementById('ef_1').style.display = "none";
        document.getElementById('bk_button5').innerHTML = "使用"
        document.getElementById("cataud1").play();
        ef_ctrl_1 = 2;
    } else if (ef_ctrl_1 == 2) {
        document.getElementById('ef_1').style.display = "block";
        document.getElementById('bk_button5').innerHTML = "卸下"
        document.getElementById("cataud1").play();
        ef_ctrl_1 = 3;
    } else if (ef_ctrl_1 == 1 && sum_all >= 12000) {
        document.getElementById('bk_button5').innerHTML = "使用"
        document.getElementById('bk_button5').style.backgroundColor = "lightseagreen"
        document.getElementById("cataud5").play();
        sum_all -= 12000;
        sum_all2 += 24000;
        ef_ctrl_1 = 2;
    } else {
        alert('飽足不夠!')
    }
}
// 聖誕帽
function fn_ef_2() {
    if (ef_ctrl_2 == 3) {
        document.getElementById('ef_2').style.display = "none";
        document.getElementById('bk_button1').innerHTML = "使用";
        document.getElementById("cataud1").play();
        ef_ctrl_2 = 2;
    } else if (ef_ctrl_2 == 2) {
        document.getElementById('ef_2').style.display = "block";
        document.getElementById('bk_button1').innerHTML = "卸下";
        document.getElementById("cataud1").play();
        ef_ctrl_2 = 3;
    } else if (ef_ctrl_2 == 1 && sum_all >= 1500) {

        document.getElementById('bk_button1').innerHTML = "使用";
        document.getElementById('bk_button1').style.backgroundColor = "lightseagreen";
        document.getElementById("cataud5").play();
        sum_all -= 1500;
        sum_all2 += 3000;
        ef_ctrl_2 = 2;
    } else {
        alert('飽足不夠!')
    }
}
// 冒愛心
function fn_ef_3() {
    if (ef_ctrl_3 == 3) {
        document.getElementById('ef_3').style.display = "none";
        document.getElementById('bk_button2').innerHTML = "使用";
        document.getElementById("cataud1").play();
        ef_ctrl_3 = 2;
    } else if (ef_ctrl_3 == 2) {
        document.getElementById('ef_3').style.display = "block";
        document.getElementById('bk_button2').innerHTML = "卸下";
        document.getElementById("cataud1").play();
        ef_ctrl_3 = 3;
    } else if (ef_ctrl_3 == 1 && sum_all >= 3000) {
        document.getElementById('bk_button2').innerHTML = "使用";
        document.getElementById('bk_button2').style.backgroundColor = "lightseagreen";
        document.getElementById("cataud5").play();
        sum_all -= 3000;
        sum_allid2 += 6000;
        ef_ctrl_3 = 2;
    } else {
        alert('飽足不夠!')
    }
}
// 老鼠夥伴
function fn_ef_4() {
    if (ef_ctrl_4 == 3) {
        document.getElementById('ef_4').style.display = "none";
        document.getElementById('bk_button3').innerHTML = "使用"
        document.getElementById("cataud1").play();
        ef_ctrl_4 = 2;
    } else if (ef_ctrl_4 == 2) {
        document.getElementById('ef_4').style.display = "block";
        document.getElementById('bk_button3').innerHTML = "卸下"
        document.getElementById("cataud1").play();
        ef_ctrl_4 = 3;
    } else if (ef_ctrl_4 == 1 && sum_all >= 5000) {
        document.getElementById('bk_button3').innerHTML = "使用"
        document.getElementById('bk_button3').style.backgroundColor = "lightseagreen"
        document.getElementById("cataud5").play();
        sum_all -= 5000;
        sum_all2 += 10000;
        ef_ctrl_4 = 2;
    } else {
        alert('飽足不夠!')
    }
}
// 圍巾
function fn_ef_5() {
    if (ef_ctrl_5 == 3) {
        document.getElementById('ef_5').style.display = "none";
        document.getElementById('bk_button4').innerHTML = "使用"
        document.getElementById("cataud1").play();
        ef_ctrl_5 = 2;
    } else if (ef_ctrl_5 == 2) {
        document.getElementById('ef_5').style.display = "block";
        document.getElementById('bk_button4').innerHTML = "卸下"
        document.getElementById("cataud1").play();
        ef_ctrl_5 = 3;
    } else if (ef_ctrl_5 == 1 && sum_all >= 8000) {
        document.getElementById('bk_button4').innerHTML = "使用"
        document.getElementById('bk_button4').style.backgroundColor = "lightseagreen"
        document.getElementById("cataud5").play();
        sum_all -= 8000;
        sum_all2 += 16000;
        ef_ctrl_5 = 2;
    } else {
        alert('飽足不夠!')
    }
}


// 聖誕帽
function fn_ef_10() {
    alert('聖誕喵喵')
}

function fn_ef_20() {
    alert('最愛你<3')
}
function fn_ef_30() {
    alert('啾。咪。')
}

// 防圍巾點按提示
function fn_ef_50() {
    alert('沾到圍巾了拉!')
}

// 背景
var fn_bks = document.getElementById('img_back');
var fn_bks0 = document.getElementById('orback1');
var fn_bk_ctrl = 1;
var fn_bk_ctrl2 = 1;

// 星空
function fn_bk_1() {
    if (fn_bk_ctrl == 3) {
        fn_bks.style.backgroundImage = "url(./img/space-3197611_1920.jpg)";
        fn_bks.style.backgroundSize = "150%";
        fn_bks.style.backgroundPosition = "33% 60%";
        fn_bks0.style.backgroundColor = "brown";
        document.getElementById("cataud1").play();
        fn_bk_ctrl = 2;
    } else if (fn_bk_ctrl == 2) {
        fn_bks.style.backgroundImage = "url(./img/imgb/starback.gif)";
        fn_bks.style.backgroundSize = "120%";
        fn_bks.style.backgroundPosition = "50% 30%";
        fn_bks0.style.backgroundColor = "lightsalmon";
        document.getElementById("cataud1").play();
        fn_bk_ctrl = 3;
    } else if (fn_bk_ctrl == 1 && sum_all >= 20000) {
        document.getElementById('bk_button6').innerHTML = "替換"
        document.getElementById('bk_button6').style.backgroundColor = "lightseagreen"
        document.getElementById("cataud5").play();
        sum_all -= 20000;
        sum_all2 += 40000;
        fn_bk_ctrl = 2;
    } else {
        alert('飽足不夠!')
    }
}

// 煙火
function fn_bk_2() {
    if (fn_bk_ctrl2 == 3) {
        fn_bks.style.backgroundImage = "url(./img/space-3197611_1920.jpg)";
        fn_bks.style.backgroundSize = "150%";
        fn_bks.style.backgroundPosition = "33% 60%";
        fn_bks0.style.backgroundColor = "brown";
        document.getElementById("cataud1").play();
        fn_bk_ctrl2 = 2;
    } else if (fn_bk_ctrl2 == 2) {
        fn_bks.style.backgroundImage = "url(./img/imgb/hanabi.gif)"
        fn_bks.style.backgroundSize = "180%"
        fn_bks.style.backgroundPosition = "50% 0%"
        fn_bks0.style.backgroundColor = "lightsalmon"
        document.getElementById("cataud1").play();
        fn_bk_ctrl2 = 3;
    } else if (fn_bk_ctrl2 == 1 && sum_all >= 30000) {
        document.getElementById('bk_button7').innerHTML = "替換"
        document.getElementById('bk_button7').style.backgroundColor = "lightseagreen"
        document.getElementById("cataud5").play();
        sum_all -= 30000;
        sum_all2 += 60000;
        fn_bk_ctrl2 = 2;
    } else {
        alert('飽足不夠!')
    }

}

// 預設房間
function fn_bk_0() {
    fn_bks.style.backgroundImage = "url(./img/space-3197611_1920.jpg)"
    fn_bks.style.backgroundSize = "150%"
    fn_bks.style.backgroundPosition = "33% 60%"
    fn_bks0.style.backgroundColor = "brown"
    document.getElementById("cataud1").play();
    if (fn_bk_ctrl == 2 || fn_bk_ctrl == 3) {
        fn_bk_ctrl = 2;
    }
    if (fn_bk_ctrl2 == 2 || fn_bk_ctrl2 == 3) {
        fn_bk_ctrl2 = 2;
    }
}


function ant00() {
    var ant1 = prompt("你好，歡迎餵貓貓遊戲！\n\n遊戲基本玩法為: 點貓貓來餵食，並取得飽足感來提升等級。\n提醒您，音效預設是開啟的，而背景樂則是關閉！\n\n開啟作弊模式請輸入：\nnyan");
    if (ant1 == "nyan") {
        sum_all = 1000000;
        alert('已開啟作弊模式\n飽足度增加二十萬。')
    }
}

ant00()