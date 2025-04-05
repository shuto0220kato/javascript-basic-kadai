const changeBtn2 = document.getElementById('btn');
const changeText2 = document.getElementById('text');

changeBtn2.addEventListener('click', () => {
    setTimeout(() => {
        changeText2.textContent = 'ボタンをクリックしました';
    },2000);

});