const apiUrl = "https://jsonplaceholder.typicode.com";
let posts = [];
let currentPage = 1;
const postsPerPage = 5;
let isLoading = false;

document.addEventListener("DOMContentLoaded", () => {
  loadPosts();

  document.getElementById("load-more-btn").addEventListener("click", () => {
    if (!isLoading) {
      currentPage++;
      loadPosts();
    }
  });

  document.getElementById("search-btn").addEventListener("click", () => {
    busca();
  });
});

async function busca() {
  const searchTerm = document.getElementById("search-input").value;
  if (!searchTerm) {
    alert("Por favor, indica el número del post a buscar");
    return;
  }
  try {
    const response = await fetch(`${apiUrl}/posts/${searchTerm}`);
    const datos = await response.json();

    const postDetailsElement = document.getElementById("post-details");
    postDetailsElement.innerHTML = `<h2>Post con id ${searchTerm}</h2>`;

    postDetailsElement.innerHTML += `<h3>Título: ${datos.title}</h3><p>Cuerpo: ${datos.body}</p>`;

  } catch (error) {
    console.error("Error fetching comments:", error);
  }
  displayPosts(filteredPosts);
}

async function loadPosts() {
  isLoading = true;
  document.getElementById("loading-spinner").style.display = "block";

  try {
    const response = await fetch(
      `${apiUrl}/posts?_page=${currentPage}&_limit=${postsPerPage}`
    );
    const data = await response.json();

    displayPosts(data);
  } catch (error) {
    console.error("Error fetching posts:", error);
  } finally {
    isLoading = false;
    document.getElementById("loading-spinner").style.display = "none";
  }
}

function displayPosts(postsToDisplay) {
  const postsList = document.getElementById("posts-list");
  postsList.innerHTML = "";

  postsToDisplay.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.className = "post";
    postElement.id = post.id;

    postElement.innerHTML = `<h3>${post.title}</h3><p>Author: ${post.body}</p><p>Id: ${post.id}</p>`;
    postsList.appendChild(postElement);

    postElement.addEventListener("click", showPostDetails);
  });
}

async function showPostDetails(e) {
  try {
    let selectedPost = e.target.parentNode;

    const response = await fetch(`${apiUrl}/posts/${selectedPost.id}/comments`);
    const comments = await response.json();

    const postDetailsElement = document.getElementById("post-details");
    postDetailsElement.innerHTML = `<h2>Comments</h2>`;

    comments.forEach((comment) => {
      const commentElement = document.createElement("div");
      commentElement.innerHTML = `<p><strong>${comment.name}</strong>: ${comment.body}</p>`;
      postDetailsElement.appendChild(commentElement);
    });
  } catch (error) {
    console.error("Error fetching comments:", error);
  }
}
