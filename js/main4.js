var addressList = document.getElementById("addressList");

function showAddress() {
    var db = openDatabase('addressDB', '1', 'AddressDB', '2*1024*1024');

    db.transaction(function (tx) {
        var qword = document.form1.qword.value;

        sql = 'SELECT id, name, email FROM address_tb'
            + 'WHERE name LIKE "%' + qword + '%"'
            + 'OR email LIKE "%' + qword + '%"';

        tx.executeSql(sql, [], function (tx, rs) {
            addressList.innerHTML = "";

            for (var i = 0; i < rs.rows.length; i++) {
                var rowText = '<tr>'
                    + '<td>' + rs.rows.item(i).name + '</td>'
                    + '<td>' + rs.rows.item(i).email + '</td>'
                    + '</tr>';

                addressList.innerHTML += rowText;
            }
        }, null);
    });

    return false;
}