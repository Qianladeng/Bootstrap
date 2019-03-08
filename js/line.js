var lineChartData={
    //X坐标数据
    labels:["周一","周二","周三","周四","周五","周六","周日","16","18","20","22","24"],
    datasets:[
        {
            //统计标的背景颜色
                fillColor: "#ddd",
            //统计表画笔颜色
                strokeColor:"rgba(0,0,0,1)",
            //点的颜色
                pointColor: "rgba(155,39,39,1)",
            //点边框颜色
                pointStrokeColor :"#fff",
            //鼠标出发时 点的颜色
                pointHighlightFill :"#fff",
            //鼠标出发时 点边框的颜色
                pointHighlightStroke: "rgba(220,220,220,1)",
            //Y坐标数据
                data: [1,102,80,150,82,90,180,190,170,200]
        },
        {
            fillColor:"rgba(255,255,255,0)",
            strokeColor:"rgba(92,184,92,1)",
            pointColor:"rgba(23,126,23,1)",
            pointStrokeColor:"#fff",
            pointHighlightFill:"#fff",
            pointHighlightStroke:"rgba(151,187,205,1)",
            data:[2,8,1,10,2,4,25,15,8,20,4,3]
        }
    ]
}

window.onload=function(){
    var ctx=document.getElementById("canvas").getContext("2d");
    window.myLine=new Chart(ctx).Line(lineChartData,{responsive:true});
};

