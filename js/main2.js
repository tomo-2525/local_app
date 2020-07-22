var taskList = document.getElementById("taskList");

function showTask(selectedKey) {
    taskList.innerHTML = "";
    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        var data = localStorage.getItem(key);

        var taskData = data.split(':');

        if (selectedKey == key) {
            taskList.innerHTML
                += '<input type="range" name="modProgress" '
                + ' min="0" max="100" step="5" '
                + 'value="' + taskData[1] + '">'
                + '<input type="text" name="modTask" '
                + ' size="30" value="' + taskData[0] + ' " >'
                + '<input type="button" value="タスクの修正"　'
                + ' onclick="setTask(' + key + ')">'
                + '<input type="button" value="タスクの削除"　'
                + ' onclick="removeTask(' + key + ')">'
                + '<br><br>';
        } else {
            taskList.innerHTML
                += '<a href="#" onclick="showTask(' + key + ')">'
                + '[' + taskData[0] + '(' + taskData[1] + '%)]</a>'
                + '<meter min="0" max="100" '
                + ' value="' + taskData[1] + '"></meter>'
                + '<br><br>';
        }
    }
}

function setTask(selectedKey) {
    if (selectedKey == 'new') {
        var key = new Date().getTime();
        var data = document.form.newTask.value;
        var progress = document.form.newProgress.value;
    } else {
        var key = selectedKey;
        var data = document.form.modTask.value;
        var progress = document.form.modProgress.value;
    }

    var data = data + ':' + progress;

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