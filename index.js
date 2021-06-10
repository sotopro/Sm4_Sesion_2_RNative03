async function requestHttp () {
    let request = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done"), 1000);
    });

    let result = await request;

    console.log(result);
}

requestHttp();

async function showAvatar() {
    // read github user
    let githubResponse = await fetch('https://api.github.com/users/sotopro');
    let githubUser = await githubResponse.json();

    // show the avatar

    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = 'promise-avatar-example';
    document.body.append(img);

    await new Promise((resolve, reject) => setTimeout(resolve, 3000));

    img.remove();
    console.log(githubUser)
    return githubUser;
}

showAvatar();