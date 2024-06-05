document.querySelectorAll(() => {
    let button = document.querySelector('.btn');
    let images = document.querySelector('.img_background');
    button.style.backgroundColor = '$background-color';
    images.style.backgroundColor = '$border-color';
    button.querySelector('mouseenter', () => {
        button.style.backgroundColor = '$hover-color';
        button.style.transition = '0.3s'
    });
    button.querySelector('mouseleave', () => {
        button.style.backgroundColor = '$hover-color';
        button.style.transition = '0.3s'

    });

    images.querySelector('mouseenter', () => {
        button.style.backgroundColor = '$hover-color';
        button.style.transition = '0.3s'
    });
    images.querySelector('mouseleave', () => {
        button.style.backgroundColor = '$hover-color';
        button.style.transition = '0.3s'
    })


})