import { fail, redirect } from '@sveltejs/kit';
import { PATH_CODE } from '$env/static/private';

// ログイン処理
export const actions = {
	login: async ({ request, cookies }) => {
		const data = await request.formData();

		// パスコードが正しい場合、クッキーを作成して、/にリダイレクトする
		if (data.get('passcode') === PATH_CODE) {
			console.log('認証OK');
			// クッキーを作成:session=true
			// 有効期限は1日
			cookies.set('session', 'true', {
				path: '/',
				maxAge: 60 * 60 * 24 * 7 // 7日間
			});
			redirect(303, '/');
		}

		// 認証NGの場合
		console.log('認証NG');
		return fail(403, {
			errorMessage: 'パスコードが違います。'
		});
	}
};
