function changeMap() {
    var selector = document.getElementById('mapSelector');
    var selectedValue = selector.options[selector.selectedIndex].value;
    document.getElementById('mapFrame').src = selectedValue;
}