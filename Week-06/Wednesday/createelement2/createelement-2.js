const planetData = [
  {
    category: 'inhabited',
    content: 'Foxes',
    asteroid: true
  },
  {
    category: 'inhabited',
    content: 'Whales and Rabbits',
    asteroid: true
  },
  {
    category: 'uninhabited',
    content: 'Baobabs and Roses',
    asteroid: true
  },
  {
    category: 'inhabited',
    content: 'Giant monsters',
    asteroid: false
  },
  {
    category: 'inhabited',
    content: 'Sheep',
    asteroid: true
  }
]

document.querySelector('li').remove();
planetData.forEach(element => {
  const li = document.createElement('li') //tag legyartasa --- fontos!
  if (element.asteroid) {
    li.classList.add(element.category);
    li.innerText = element.content;
    document.querySelector('ul').appendChild(li);
  }
});

/*
    <!-- You can work in the html or in a separate js file. Like:
    <script>
      Remove the king from the list.
      Fill the list based on the following list of objects.
      Only add the asteroids to the list.
      Each list item should have its category as a class and its content as text content. -->
*/
