selObj = Model.Selections
countSel = Model.SelectionCount

if (selObj != null) {
    for (i = 0; i < countSel; ++i) {
        var n = selObj[i]
        n.Name = n.Name.slice(parseInt(n.Name.indexOf(" ")))
    }
}
UnSelectAll();