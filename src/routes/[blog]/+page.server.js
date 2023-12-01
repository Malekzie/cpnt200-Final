const greetings = {
	pageone: 'hello!',
	pagetwo: 'hallo!',
	pagethree: 'bonjour!'
};

export async function load({ params }) {
    return {
        greeting: greetings[params.lang ?? 'pageone']
    };
};