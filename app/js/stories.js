var storiesElts = Array.from(document.getElementsByClassName('story'));
var storiesErrorModal = document.getElementById("stories-error-modal");
var storiesErrorModalBtn = document.getElementById('stories-error-modal-btn');

storiesElts.map(story => {
    story.addEventListener('click', e => {
        storiesErrorModal.classList.add('stories__error-modal--active');
        document.body.style.overflow = "hidden";
    });
});

storiesErrorModalBtn.addEventListener('click', e => {
    storiesErrorModal.classList.remove('stories__error-modal--active');
    document.body.style.overflow = "visible";
})