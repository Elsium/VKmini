document.getElementById("mainprofile").click();
document.getElementById("welcome").click();
function ChangeTab(evt, tabsName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("active", "");
    }
    document.getElementById(tabsName).style.display = "block";
    evt.currentTarget.className += "active";
}

function profile(evt, profileName) {
    var i, profilecontent, profilelinks;
    profilecontent = document.getElementsByClassName("profilecontent");
    for (i = 0; i < profilecontent.length; i++) {
        profilecontent[i].style.display = "none";
    }
    profilelinks = document.getElementsByClassName("profilelinks");
    for (i = 0; i < profilelinks.length; i++) {
        profilelinks[i].className = profilelinks[i].className.replace("active", "");
    }
    document.getElementById(profileName).style.display = "block";
    evt.currentTarget.className += "active";
}

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChartdima);
function drawChartdima() {
    var data = google.visualization.arrayToDataTable([
        ['Язык', 'Соотношение с другими ЯП'],
        ['C++', 8],
        ['Python', 3],
        ['HTML', 6],
        ['CSS', 6],
        ['JavaScript', 2]
    ]);
    var options = {'title':'Соотношение знаний', 'width':550, 'height':260};
    var chart = new google.visualization.PieChart(document.getElementById('diagramdima'));
    chart.draw(data, options);
}
google.charts.setOnLoadCallback(drawChartdenis);
function drawChartdenis() {
    var data = google.visualization.arrayToDataTable([
        ['Язык', 'Соотношение с другими ЯП'],
        ['C++', 7],
        ['Python', 4],
        ['HTML', 3],
        ['CSS', 3],
        ['JavaScript', 1],
        ['Solidity', 3]
    ]);
    var options = {'title':'Соотношение знаний', 'width':550, 'height':260};
    var chart = new google.visualization.PieChart(document.getElementById('diagramdenis'));
    chart.draw(data, options);
}
google.charts.setOnLoadCallback(drawChartstepa);
function drawChartstepa() {
    var data = google.visualization.arrayToDataTable([
        ['Язык', 'Соотношение с другими ЯП'],
        ['C++', 9],
        ['Python', 3],
        ['HTML', 2],
        ['CSS', 2],
        ['JavaScript', 1]
    ]);
    var options = {'title':'Соотношение знаний', 'width':550, 'height':260};
    var chart = new google.visualization.PieChart(document.getElementById('diagramstepa'));
    chart.draw(data, options);
}
google.charts.setOnLoadCallback(drawChartkolia);
function drawChartkolia() {
    var data = google.visualization.arrayToDataTable([
        ['Язык', 'Соотношение с другими ЯП'],
        ['3D-моделирование', 5],
        ['Python', 2]
    ]);
    var options = {'title':'Соотношение знаний', 'width':550, 'height':260};
    var chart = new google.visualization.PieChart(document.getElementById('diagramkolia'));
    chart.draw(data, options);
}