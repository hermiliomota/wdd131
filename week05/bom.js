const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Initialize the array from localStorage or empty array
let chaptersArray = getChapterList() || [];

// Populate the list on page load
chaptersArray.forEach(chapter => {
  displayList(chapter);
});

// Button click event
button.addEventListener('click', () => {
  if (input.value !== '') {           // check input is not empty
    displayList(input.value);         // display chapter
    chaptersArray.push(input.value);  // add to array
    setChapterList();                 // update localStorage
    input.value = '';                 // clear input
    input.focus();                    // focus input
  }
});

// Display list item
function displayList(item) {
  let li = document.createElement('li');
  let deletebutton = document.createElement('button');

  li.textContent = item;
  deletebutton.textContent = '❌';
  deletebutton.classList.add('delete');

  li.append(deletebutton);
  list.append(li);

  deletebutton.addEventListener('click', () => {
    list.removeChild(li);
    deleteChapter(li.textContent);
    input.focus();
  });
}

// Save array to localStorage
function setChapterList() {
  localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

// Retrieve array from localStorage
function getChapterList() {
  return JSON.parse(localStorage.getItem('myFavBOMList'));
}

// Delete chapter from array and localStorage
function deleteChapter(chapter) {
  chapter = chapter.slice(0, chapter.length - 1);
  chaptersArray = chaptersArray.filter(item => item !== chapter);
  setChapterList();
}
