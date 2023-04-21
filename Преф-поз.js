selObj = Model.Selections
countSel = Model.SelectionCount
var newName = prompt('Префикс')
if (selObj != null) {
    for (i = 0; i < countSel; ++i) {
        var n = selObj[i]
        var pan = n.AsPanel
        if (n.Owner.Name != "Model") {
            if (pan) {
                n.ArtPos = newName + "-" + n.ArtPos
            }
        } else {
            var count = n.Count
            for (j = 0; j < count; ++j) {
                var pan2 = n.Objects[j].AsPanel
                if (pan2) {
                    n.Objects[j].ArtPos += newName + "-" + n.Objects[j].ArtPos
                }
            }
        }
    }
}