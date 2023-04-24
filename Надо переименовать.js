Objs = Model.Objects
countObjs = Model.Count
if (Objs != null) {
    for (i = 0; i < countObjs; ++i) {
        var n = Objs[i]
        if (n.AsPanel) {
            if (n.Name == "Горизонтальная" || n.Name == "Вертикальная" || n.Name == "Фронтальная"){
                n.Selected = True
            } else {
                n.Selected = False
            }
        } else {
            n.Selected = False
        }
    }
}