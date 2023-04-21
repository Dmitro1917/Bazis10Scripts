selObj = Model.Selections
countSel = Model.SelectionCount
var newName = prompt('Имя?')

if (selObj != null) {
    for (i = 0; i < countSel; ++i) {
        var n = selObj[i]
        if (newName != '' && n.AsPanel){
            n.Name = newName
            n.Visible = False
        }
    }
}
UnSelectAll();