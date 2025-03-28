export default defineNuxtRouteMiddleware((to, from) => {
  const userRole = useCookie('userRole'); // 例: クッキーに保存されている権限情報を取得

  if (to.path.startsWith('/admin') && userRole.value !== 'admin') {
    return navigateTo('/err'); // 権限がない場合はエラーページへリダイレクト
  }
});