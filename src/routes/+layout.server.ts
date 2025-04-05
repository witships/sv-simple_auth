import { redirect } from '@sveltejs/kit';

// 認証NGの場合、/loginにリダイレクトする
// ただし、/loginにアクセスする場合はリダイレクトしない
export const load = async ({ url, cookies }) => {
	const permission = cookies.get('session');

	if (!permission && url.pathname !== '/login') {
		throw redirect(302, '/login');
	}
};
