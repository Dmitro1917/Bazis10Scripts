selObj = Model.Selections
countSel = Model.SelectionCount
var newName = prompt('Имя?')

if (selObj != null) {
    for (i = 0; i < countSel; ++i) {
        var n = selObj[i]
        if (newName != '' && n.AsPanel) {
            n.Name = newName[0].toUpperCase() + newName.slice(-newName.length+1);
            n.Visible = False
        }
    }
}
UnSelectAll();