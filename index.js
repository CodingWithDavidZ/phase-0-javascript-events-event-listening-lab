function addingEventListener() {
    const input = document.getElementById('input');
    function clickAlert() { alert("I Was Clicked!")}
    input.addEventListener('click', clickAlert)
}
