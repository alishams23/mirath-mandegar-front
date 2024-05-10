<template>
    <div class="max-w-md w-full bg-white rounded-lg shadow-md p-6">
        <form class="space-y-4" @submit.prevent="send">
            <div>
                <label for="email" class="block text-sm font-medium text-gray-700">username</label>
                <input type="text" id="email" v-model="username"
                    class="mt-1 block w-full border-none rounded-md shadow-sm focus:ring-indigo-500 focus:border-none"
                    placeholder="username">
            </div>
            <div>
                <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                <input type="password" id="password" v-model="password"
                    class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Your Password">
            </div>
            <div class="flex items-center justify-between">
                <div class="flex items-center">
                    <input id="remember_me" type="checkbox"
                        class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded">
                    <label for="remember_me" class="ml-2 block text-sm text-gray-900"> Remember me </label>
                </div>
                <div class="text-sm">
                    <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500"> Forgot your password?
                    </a>
                </div>
            </div>
            <div>
                <button type="submit"
                    class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Sign in
                </button>
            </div>
        </form>
    </div>
</template>
<script>
import { useUserStore } from '~/store/user';
export default {
    data() {
        return {
            username: null, password: null
        }
    }, methods: {
        send() {
            console.log(this.username)
            useUserStore().setToken(this.password, this.username)
        }
    }
}
</script>