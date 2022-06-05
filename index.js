
function addingEventListener() {
    const input =document.getElementById('input');
    function event() {
        alert('I was clicked!');
    }
    input.addEventListener('click',event);
}

