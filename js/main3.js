var message = document.getElementById("message");

function setAddress() {//アドレスを登録する関数
    //データベースのオープン
    var db = openDatabase('addressDB', '1', 'Address DB', 2 * 1024 * 1024);

    //トランザクションの実行
    db.transaction(function (tx) {
        //テーブルの作成
        var sql_create = 'CREATE TABLE IF NOT EXISTS address_tb' + '(id integer primary key, name, email)';

        //SQLの実行
        tx.executeSql(sql_create);

        //入力データの取得
        var uname = document.form1.uname.value;
        var umail = document.form1.umail.value;

        //データ挿入のSQL
        var sql_insert = 'INSERT INTO address_tb(name, email)'
            + ' VALUES("' + uname + '", "' + umail + '")';

        //SQLの実行
        tx.executeSql(sql_insert);

        //完了メッセージの表示
        message.innerHTML = 'アドレスデータを登録しました。'
            + '<br><br>名前：<b>' + uname + '</b>'
            + '<br><br>メールアドレス：<b>' + umail + '</b>';
    });

    // 送信処理を行わない
    return false;
}