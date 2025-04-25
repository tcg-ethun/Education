

const apiKey = 'kWWzeEU8ZVzx-ghbonfqkoPpg3XMXj_SGojrXb6DmmiF5b6l';
const newsContainer = document.getElementById('news-container');
const loader = document.getElementById('loader');
let currentPage = 1;
let currentCategory = 'technology';

async function fetchNews() {
    const url = `https://api.currentsapi.services/v1/latest-news?category=${currentCategory}&page_number=${currentPage}&apiKey=${apiKey}`;
    loader.classList.remove('hidden');
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.news && data.news.length > 0) {
            for (const article of data.news) {
                if (article.image && await isImageValid(article.image)) {
                    const newsItem = document.createElement('div');
                    newsItem.classList.add('news-item');
                    newsItem.innerHTML = `
                        <img src="${article.image}" alt="${article.title}">
                        <h2>${article.title}</h2>
                        <p>${article.description || 'No description available'}</p>
                        <a href="${article.url}" target="_blank">Read More</a>
                    `;
                    newsContainer.appendChild(newsItem);
                }
            }
        } else if (currentPage === 1) {
            newsContainer.innerHTML = '<p>No news found for this category.</p>';
        }
    } catch (error) {
        console.error('Error fetching news:', error);
    } finally {
        loader.classList.add('hidden');
    }
}

async function isImageValid(url) {
    try {
        const response = await fetch(url);
        return response.ok;
    } catch {
        return false;
    }
}

function resetNews() {
    newsContainer.innerHTML = '';
    currentPage = 1;
    fetchNews();
}

window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
        currentPage++;
        fetchNews();
    }
});

// Initial fetch
fetchNews();



// Back Button
function goBack() {
    window.history.back();
}