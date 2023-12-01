/** @type {import('./$types').PageLoad} */
export async function load() {
    if (error) {
        throw new Error('Error loading page');
    }
};