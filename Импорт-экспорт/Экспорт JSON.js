Doc = {}
Doc.Elements = [];

function Recurse(List) {
    for (var i = 0; i < List.Count; i++) {
        Obj = List[i];
        if (Obj.List)
            Recurse(Obj)
        else {
            var Line = {};
            Line.Name = Obj.Name;
            Line.Width = Obj.GSize.x;
            Line.Height = Obj.GSize.x;
            Doc.Elements.push(Line);
        }
    }
}

Recurse(Model);

text = JSON.stringify(Doc);
system.askWriteTextFile('json', text);