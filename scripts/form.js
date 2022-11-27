function CreateNote() {
    var storedNotes = JSON.parse(localStorage.getItem("notes"));
    if (storedNotes == null)
    {
        storedNotes = [];
    }

    var text = document.getElementById("text_id").value;
    
    LoadNote(text);

    document.getElementById("text_id").value = "";
    storedNotes.push(text);
    localStorage.setItem("notes", JSON.stringify(storedNotes));
}

function LoadNotes() {
    var storedNotes = JSON.parse(localStorage.getItem("notes"));
    if (storedNotes != null) 
    {
        storedNotes.forEach(LoadNote);
    }
}

function LoadNote(note) {
    var el = document.createElement("div");
    el.className = "main bg-additional";
    el.innerHTML = note;

    var div = document.getElementById('parent_notes');
    var div_link = document.getElementById('start_notes');
    var next_sib = div_link.nextSibling;

    if (next_sib) 
    {
    div.insertBefore(el, next_sib);
    }
    else
    {
    div.appendChild(el);
    }
}