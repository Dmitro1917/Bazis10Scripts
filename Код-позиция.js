selObj = Model.Selections
countSel = Model.SelectionCount
if (selObj != null) {
    for (i = 0; i < countSel; ++i) {
        var n = selObj[i]
        var pan = n.AsPanel
        if (n.Owner.Name != "Model") {
            if (pan) {
                // n.ArtPos += "." + n.Owner.Name
                n.Name = n.Owner.Name + " " + n.Name
            }
        } else {
            var count = n.Count
            for (j = 0; j < count; ++j) {
                var pan2 = n.Objects[j].AsPanel
                if (pan2) {
                    // n.Objects[j].ArtPos += "." + n.Name
                    n.Objects[j].Name = n.Name + " " + n.Objects[j].Name
                }
            }
        }
    }
}