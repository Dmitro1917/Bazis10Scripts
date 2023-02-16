selObj = Model.Selections
countSel = Model.SelectionCount
var number = prompt('С какой позиции?')
var fur = 0
if (selObj != null) {
    for (i = 0; i < countSel; ++i) {
        var n = selObj[i]
        var num = i + parseInt(number)
        var pan = n.AsPanel
        if (n.Owner.Name != "Model") {
            if (pan) {
            var nom = num - fur
                n.Name = n.Owner.Name + "." + nom + " " + n.Name
            } else {
            ++fur
            }
        }
    }
    }