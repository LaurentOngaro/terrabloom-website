/* ============================================
   TERRABLOOM WEBSITE - BLOG-LOADER.JS
   Loads DevLog posts from JSON dynamically
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {
  loadBlogPosts();
});

async function loadBlogPosts() {
  const blogPostsContainer = document.getElementById('blog-posts');

  if (!blogPostsContainer) {
    return; // Not on a blog page
  }

  try {
    const response = await fetch('./data/devlog.json');

    if (!response.ok) {
      throw new Error('Failed to load devlog');
    }

    const data = await response.json();
    const posts = data.posts || [];

    // Get current language
    const currentLang = localStorage.getItem('lang') || 'fr';

    if (posts.length === 0) {
      blogPostsContainer.innerHTML = '<div class="no-posts">No posts yet. Check back soon!</div>';
      return;
    }

    // Sort posts by date (newest first)
    posts.sort((a, b) => new Date(b.date) - new Date(a.date));

    // Render posts
    let html = '';
    posts.forEach((post) => {
      const title = currentLang === 'en' ? post.title_en : post.title_fr;
      const excerpt = currentLang === 'en' ? post.excerpt_en : post.excerpt_fr;
      const content = currentLang === 'en' ? post.content_en : post.content_fr;
      const date = formatDate(post.date, currentLang);
      const category = post.category || 'update';

      html += `
        <article class="blog-post" data-post-id="${post.id}">
          <div class="blog-post-date">${date}</div>
          <h2 class="blog-post-title">${title}</h2>
          <span class="blog-post-category">${category}</span>
          <p class="blog-post-excerpt">${excerpt}</p>
          <div class="blog-post-content" style="display: none;">
            ${content}
          </div>
          <a href="#" class="read-more" onclick="togglePostContent(event, '${post.id}')">
            ${currentLang === 'en' ? 'Read more' : 'Lire plus'}
          </a>
        </article>
      `;
    });

    blogPostsContainer.innerHTML = html;
  } catch (error) {
    console.error('Error loading blog posts:', error);
    blogPostsContainer.innerHTML = '<div class="no-posts">Error loading blog posts.</div>';
  }
}

function formatDate(dateString, lang = 'fr') {
  const date = new Date(dateString);

  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  if (lang === 'en') {
    return date.toLocaleDateString('en-US', options);
  } else {
    return date.toLocaleDateString('fr-FR', options);
  }
}

function togglePostContent(event, postId) {
  event.preventDefault();

  const post = document.querySelector(`[data-post-id="${postId}"]`);
  const content = post.querySelector('.blog-post-content');
  const link = post.querySelector('.read-more');

  if (content.style.display === 'none') {
    content.style.display = 'block';
    link.textContent = localStorage.getItem('lang') === 'en' ? 'Show less' : 'Afficher moins';
  } else {
    content.style.display = 'none';
    link.textContent = localStorage.getItem('lang') === 'en' ? 'Read more' : 'Lire plus';
  }
}
