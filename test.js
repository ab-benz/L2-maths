window.onload = function() {

    var b = document.getElementById('bouton');
    b.onclick = function() {
        var e = document.getElementById('section');
        if (e.style.display == 'block') {
            e.style.display = 'none';
        } else {
            e.style.display = 'block';
        }
    }

}