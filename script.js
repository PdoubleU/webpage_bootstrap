/*function below fetches random pictures from the outer website and put them inside elements choosen and stored in a variable named placeholder*/
function renderItem(){
    let placeholder = document.querySelectorAll('.placeholder');
    for (let i=0; i < placeholder.length; i++) {
        fetch(`https://source.unsplash.com/300x300/?chessboard`)
        .then((response) => {
            placeholder[i].src = response.url
            })
         .catch((error) => {
            console.error('Error:', error);
            })
    }
}
/* when document is fully loaded, renderItem is executed*/
window.addEventListener('load', () => renderItem());