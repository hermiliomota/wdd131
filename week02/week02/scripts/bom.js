const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', () => {
  const chapterName = input.value.trim();

  if (chapterName === '') {
    alert('Please enter a chapter name!');
    input.focus();
    return;
  }

  const li = document.createElement('li');
  li.textContent = chapterName;

  const deleteButton = document.createElement('button');
  deleteButton.textContent = '❌';
  deleteButton.setAttribute('aria-label', `Remove ${chapterName}`);

  li.append(deleteButton);
  list.append(li);

  input.value = '';
  input.focus();
});

// Event delegation for deleting chapters
list.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    e.target.parentElement.remove();
  }
});