import type { PageServerLoad } from './$types';
import { getCart } from '$lib/server/cartStore';
import { redirect } from '@sveltejs/kit';

export const load: PageServerLoad = ({ locals }) => {
    const user = locals.user;
    if (!user) {
        throw redirect(303, '/login');
    }
    const cart = getCart(user.id);
    return { cart };
};
