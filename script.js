const itemsContainer = document.querySelector('.objectsItems');
const savedContainer = document.querySelector('.objectsSaved');
const addBtn = document.querySelector('.objectsAdd');
const saveBtn = document.querySelector('.objectsSave');

addBtn.addEventListener('click', () => {
    const newObject = document.createElement('div');

    newObject.classList.add('objectsItem');
    newObject.innerHTML = `
        <input type="text" class="objectsInput">
        <input type="text" class="objectsInput">
        <button type="button" class="objectsBtn objectsUp-btn">&uarr;</button>
        <button type="button" class="objectsBtn objectsDown-btn">&darr;</button>
        <button type="button" class="objectsBtn objectsClose-btn">&times;</button>
    `;
    newObject.querySelector('.objectsUp-btn').addEventListener('click', moveObjectUp);
    newObject.querySelector('.objectsDown-btn').addEventListener('click', moveObjectDown);
    newObject.querySelector('.objectsClose-btn').addEventListener('click', removeObject);

    itemsContainer.append(newObject);
});

saveBtn.addEventListener('click', () => {
    const objectItems = document.querySelectorAll('.objectsItem');
    let savedObjects = '{';

    objectItems.forEach((item) => {
        const firstInputValue = item.querySelector('input:nth-child(1)').value;
        const secondInputValue = item.querySelector('input:nth-child(2)').value;

        savedObjects += `"${firstInputValue}":"${secondInputValue}",`;
    });

    savedObjects = savedObjects.slice(0, savedObjects.length - 1);
    savedObjects += '}';

    savedContainer.textContent = savedObjects;
});

const moveObjectUp = ($event) => {
    const currentObj = $event.target.closest('.objectsItem');
    const prevObj = currentObj.previousElementSibling;
    prevObj?.before(currentObj);
};

const moveObjectDown = ($event) => {
    const currentObj = $event.target.closest('.objectsItem');
    const nextObj = currentObj.nextElementSibling;
    nextObj?.after(currentObj);
};

const removeObject = ($event) => {
    $event.target.closest('.objectsItem').remove();
};

document.querySelector('.objectsUp-btn').addEventListener('click', moveObjectUp);
document.querySelector('.objectsDown-btn').addEventListener('click', moveObjectDown);
document.querySelector('.objectsClose-btn').addEventListener('click', removeObject);
