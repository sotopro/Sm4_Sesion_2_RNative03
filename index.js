async function requestHttp () {
    let request = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done"), 1000);
    });

    let result = await request;

    console.log(result);
}

// requestHttp();

async function showAvatar() {
    // read github user
    let githubResponse = await fetch('https://api.github.com/users/sotopro');
    let githubUser = await githubResponse.json();

    // show the avatar

    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = 'promise-avatar-example';
    document.body.append(img);

    // await new Promise((resolve, reject) => setTimeout(resolve, 3000));

    // img.remove();
    console.log(githubUser)
    return githubUser;
}

// showAvatar();

class Thenable {
    constructor(num) {
        this.num = num
    }
    then(resolve, reject) {
        console.log(resolve);
        // resolve with this.num*2 after 1500ms
        setTimeout(() => resolve(this.num * 2) , 1500)
    }
}

async function response() {
    // waits for 1.5 seconds, then result becomes
    let result = await new Thenable(1);
    console.log(result)
}

// response();

class Waiter {
    async wait() {
        return await Promise.resolve(1)
    }
}

new Waiter()
    .wait()
    .then((response) => console.log(response));

// async function errorMessage() {
//     await Promise.reject(new Error("Whooops!"))
// }


async function errorMessage() {
    try {
        let products = await fetch('https://no-such-url');
        // let response = await fetch('https://no-such-url/order', {
        //     method: 'POST',
        //     body: products
        // });

        // let resuts = await Promise.all([
        //     products,
        //     response
        // ])

        return products;
    } catch(err) {
        console.log('error fetch', err)
    }
}

// errorMessage();

const who = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('🐶')
        }, 200)
    })
}

const what = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('walks in')
        }, 300)
    })
}

const where = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('🏞')
        })
    })
}

const message = async () => {
    const a = await who();
    const b = await what();
    const c = await where();

    console.log(`${a} ${b} ${c}`)
}

message();