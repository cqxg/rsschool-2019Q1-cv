const App = () => {
    const print = document.querySelector('.print');

    const goPrint = () => {
        window.print();
    };

    print.addEventListener('click', goPrint);
};

document.addEventListener("DOMContentLoaded", App);