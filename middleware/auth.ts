export default defineNuxtRouteMiddleware((to, from) => {
  const accountType = useCookie('accountType'); // 例: クッキーに保存されている権限情報を取得

  if (to.path.startsWith('/admin') && accountType.value !== 'admin') {
    return navigateTo('/err'); // 権限がない場合はエラーページへリダイレクト
  }
  if (to.path.startsWith('/member') && accountType.value !== 'member') {
    return navigateTo('/err'); // 権限がない場合はエラーページへリダイレクト
  }
});