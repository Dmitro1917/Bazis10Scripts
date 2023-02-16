Konfirmat();
//Prop.NewButton('666').OnClick = function(){
//console.log('Aaaaaaa')
//}
function Konfirmat () {
V1 = GetPanel('| Левая');
V2 = GetPanel('| Правая');
H = GetPanel('_');

Screw = OpenFurniture('D:/Documents/Bazis10/Фурнитура/Евровинты/Евровинт 7х50.f3d');
Screw.Mount(H, V1, 0, 0, -H.Contour.Max.y + 50);
Screw.Mount(H, V1, 0, 0, -H.Contour.Max.y - 50 + H.ContourHeight);
Screw.Mount(H, V2, 0, 0, -H.Contour.Max.y + 50);
Screw.Mount(H, V2, 0, 0, -H.Contour.Max.y - 50 + H.ContourHeight);
Action.Commit();
Konfirmat();
}