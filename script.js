fetch('posts.json')
  .then(res => res.json())
  .then(data => {
    const feed = document.getElementById('blog-feed');
    if (!feed) return;
    feed.innerHTML = '';
    data.forEach(post => {
      const div = document.createElement('div');
      div.className = 'post';
      div.innerHTML = `<h3>${post.title}</h3><p><small>${new Date(post.date).toLocaleDateString('en-US', {timeZone: 'UTC'})}</small></p><p>${post.content}</p>`;
      feed.appendChild(div);
    });
  });