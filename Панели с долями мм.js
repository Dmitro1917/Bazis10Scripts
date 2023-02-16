Objs = Model.Objects
countObjs = Model.Count
if (Objs != null) {
    for (i = 0; i < countObjs; ++i) {
        var n = Objs[i]
        if (n.AsPanel) {
            h = Math.floor(n.ContourHeight * Math.pow(10, 2)) / Math.pow(10, 2)
            w = Math.floor(n.ContourWidth * Math.pow(10, 2)) / Math.pow(10, 2)
            if (h % 1 != 0 || w % 1 != 0){
                n.Selected = True
                // console.log(h+" "+w)
            } else {
                n.Selected = False
            }
        } else {
            n.Selected = False
        }
    }
}