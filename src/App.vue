<template>
    <div id="app" class="container mx-auto mt-10 px-10">
        <div class="mx-auto mt-20">
            <h3 class="text-lg font-bold mb-4">Password Revealing</h3>

            <label class="text-sm font-medium mb-2">Password</label>
            <PasswordRevealing
                :value="password"
                placeholder="Digite sua senha"
            />
            <br />
            {{ password }}
        </div>
    </div>
</template>

<script>
import PasswordRevealing from "./components/PasswordRevealing.vue";

export default {
    name: "App",
    components: { PasswordRevealing },

    data() {
        return {
            password: "",
        };
    },
};
</script>
