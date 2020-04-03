var message = document.getElementById("message");

function setData() {
    var key = document.form1.ukey.value;
    var data = document.form1.udata.value;

    localStorage.setItem(key, data);
    sessionStorage.setItem(key, data);

    message.innerHTML = "キー＋値を保存しました";
}

function showData() {
    var key = document.form1.ukey.value;

    var localData = localStorage.getItem(key);
    var sessionData = sessionStorage.getItem(key);

    message.innerHTML = 'key: <b>' + key + '</b>'
        + '<br>localStorage: <b>' + localData + '</b>'
        + '<br>sessionStorage: <b>' + sessionData + '/b';
}