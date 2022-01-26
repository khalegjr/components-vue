<template>
    <div id="app" class="container mx-auto mt-10 px-10">
        <div class="mx-auto mt-20">
            <h3 class="text-lg font-bold mb-4">Password Revealing</h3>

            <label class="text-sm font-medium mb-2">Password</label>
            <PasswordRevealing
                :value="password"
                placeholder="Digite sua senha"
                name="password"
            />
            <br />
        </div>

        <div class="mx-auto mt-20">
            <h3 class="text-lg text-center font-bold mb-4">
                Componente Dropdown
            </h3>

            <div class="flex justify-center">
                <Dropdown text="Menu">
                    <DropdownItem
                        href="http://www.adunicamp.org.br"
                        target="_blank"
                    >
                        Item 1
                    </DropdownItem>
                    <DropdownItem :to="{ name: 'foo' }"> Item 2 </DropdownItem>
                    <DropdownDivider />
                    <DropdownItem
                        :to="{ name: 'bar' }"
                        href="http://www.adunicamp.org.br"
                    >
                        Item 3
                    </DropdownItem>
                    <DropdownItem @click="onItem4Click"> Item 4 </DropdownItem>
                    <DropdownDivider />
                    <DropdownItem> Item 5 </DropdownItem>
                </Dropdown>
            </div>
        </div>
    </div>
</template>

<script>
import PasswordRevealing from "./components/PasswordRevealing.vue";
import Dropdown from "./components/Dropdown/Dropdown.vue";
import DropdownItem from "./components/Dropdown/DropdownItem.vue";
import DropdownDivider from "./components/Dropdown/DropdownDivider.vue";

export default {
    name: "App",
    components: { PasswordRevealing, Dropdown, DropdownItem, DropdownDivider },

    data() {
        return {
            password: "",
        };
    },

    methods: {
        onItem4Click(evt) {
            console.log("click item 4", evt);
        },
    },
};
</script>
