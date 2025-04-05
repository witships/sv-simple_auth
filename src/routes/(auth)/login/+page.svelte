<script lang="ts">
	import type { ActionData } from './$types';
	import { enhance } from '$app/forms';
	let { form }: { form: ActionData } = $props();
</script>

<h1>ログイン</h1>
<form method="POST" action="?/login" use:enhance>
	<div>
		<label for="password">パスコード:</label>
		<input type="password" id="password" name="passcode" required />
	</div>
	<button type="submit">ログイン</button>
	<p class="error">{form?.errorMessage}</p>
</form>

<style>
	.error {
		color: red;
	}
</style>
