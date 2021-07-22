function clickableQuestLinks(quest) {
    const links = document.createElement('a');
    links.classList.add('quest');

    links.href = '../quest/?id=' + quest.id;

    links.style.top = quest.map.top;
    links.style.left = quest.map.left;
    links.textContent = quest.title;

    return links;
}

export default clickableQuestLinks;