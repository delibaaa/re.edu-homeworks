async function fetchRetry(url, retries = 5) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(res.status);
      const data = await res.json();
      console.log(data);
      return data;
    } catch (err) {
      console.log(`failed (${attempt}/${retries}):`, err.message);
      if (attempt === retries) throw err;
    }
  }
}

fetchRetry("https://jsonplaceholde.typicode.com/posts").catch(() => {});
fetchRetry("https://jsonplaceholder.typicode.com/posts");
