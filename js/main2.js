var taskList = document.getElementById("taskList");

function showTask(selectedKey) {
    taskList.innerHTML = "";
    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        var data = localStorage.getItem(key);
        if (selectedKey == key) {
            taskList.innerHTML
                += '<input type="text" name="modTask" '
                + ' size="30" value="' + data + ' " >'
                + '<input type="button" value="タスクの修正"　'
                + ' onclick="setTask(' + key + ')">'
                + '<input type="button" value="タスクの削除"　'
                + ' onclick="removeTask(' + key + ')">'
                + '<br><br>';
        } else {
            taskList.innerHTML
                += '<a href="#" onclick="showTask(' + key + ')">'
                + '[' + data + ']</a>'
                + '<br><br>';
        }
    }
}

function setTask(selectedKey) {
    if (selectedKey == 'new') {
        var key = new Date().getTime();
        var data = document.form1.newTask.value;
    } else {
        var key = selectedKey;
        var data = document.form1.modTask.value;
    }

    localStorage.setItem(key, data);
    showTask();
}

function removeTask(selectedKey) {
    if (selectedKey == 'all') {
        localStorage.clear();
    } else {
        localStorage.removeItem(selectedKey);
    }

    showTask();
}