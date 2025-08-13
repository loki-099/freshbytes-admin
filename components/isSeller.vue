<script setup>
const {
  data: currentUserNow,
  pending: pendingUserNow,
  refresh: refreshCurrentUser
} = await useFetch(`${api}/api/users/`, {
  server: false,
  headers: computed(() => getAuthHeaders()),
  onResponseError({ response }) {
    console.error('User API Error:', response.status, response._data)
    if (response.status === 401) {
      navigateTo('/login')
    }
  }
})
const currentUserData = computed(() =>
  Array.isArray(currentUserNow.value) ? currentUserNow.value[0] : null
)

const isSeller = computed(() =>
  currentUserData.value?.role === 'seller'
)
</script>