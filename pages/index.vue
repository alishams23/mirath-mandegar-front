<template>

    <div>
        <div>
            {{ username }}
        </div>

    </div>
</template>
<script>
import { useUserStore } from '~/store/user';

export default {
    computed: {
        username() {
            return useUserStore().username
        }
    }
}
</script>
