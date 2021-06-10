const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const itemHeaders = $$('.item-header');
const itemBody = $$('.item-body');

function removeActiveItem() {
    $('.item-header.active').classList.remove('active');
    $('.item-body.active').style.maxHeight = 0;
    $('.item-body.active').classList.remove('active');
}

itemHeaders.forEach((item, index) => {
    const pane = itemBody[index];

    item.onclick = e => {
        const height = pane.scrollHeight;

        if (!!$('.item-header.active')) {
            if ($('.item-header.active') === e.target) {
                removeActiveItem();
                return;
            }
            removeActiveItem();
        }

        item.classList.add('active');
        pane.style.maxHeight = `${height + 30}px`;
        pane.classList.add('active');
    }
});

document.onclick = e => {
    if (!!$('.item-header.active') && !e.target.matches('.item-header')) {
        removeActiveItem();
    }
}