document.querySelector('.html-ajax').addEventListener('click', getHtmlAjax);

function getHtmlAjax() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
           document.querySelector('.html-placeholder').innerHTML = xhr.responseText;
        }
    }
    xhr.open('GET', '../pages/order_ajax.html', true);
    xhr.send();
}