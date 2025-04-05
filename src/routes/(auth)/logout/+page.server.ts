import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

// ログアウト処理
// クッキーを削除して、/loginにリダイレクトする
export const actions: Actions = {
	logout: async ({ cookies }) => {
		await cookies.delete('session', { path: '/' });

		throw redirect(303, '/login');
	}
};
