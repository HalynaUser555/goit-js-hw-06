const itemCategories = document.querySelectorAll('.item');

console.log('Number of categories: ', itemCategories.length);
console.log('');

Array.from(itemCategories).forEach(item => {
    console.log('Category: ', item.children[0].innerText);
    console.log('Elements: ', item.children[1].children.length);
    console.log('');
});
