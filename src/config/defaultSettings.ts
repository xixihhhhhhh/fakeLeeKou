
export default {
  storageOptions: {
    namespace: 'pro__', // key prefix
    name: 'ls', // name variable Vue.[ls] or this.[$ls],
    storage: 'local' as  "local" | "session" | "memory" // storage name session, local, memory
  },
  systemName: '广汽集团安全智慧大脑',
  context: import.meta.env.VITE_APP_CONTEXT as string || '',
  loginUrl: import.meta.env.VITE_APP_MBP_LOGIN_URL || '/login#/',
}