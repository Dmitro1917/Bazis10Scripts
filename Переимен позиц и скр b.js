selObj = Model.Selections
countSel = Model.SelectionCount
var newName = prompt('Имя?')

if (selObj != null) {
    for (i = 0; i < countSel; ++i) {
        var n = selObj[i]
        //        var num = i + parseInt(number)
        //        var pan = n.AsPanel
        //        if (n.Owner.Name != "Model") {
        //            if (pan) {
        //            var nom = num - fur
        if (newName != '') {
            n.Name = newName
            n.Visible = False
            //            } else {
            //            ++fur
            //            }
        }
    }
}
UnSelectAll();