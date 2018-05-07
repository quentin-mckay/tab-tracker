<template>
    <!-- "dark" prop makes text white -->
    <v-toolbar app fixed dark color="primary">
        <v-toolbar-title class="mr-4">
            <span @click="navigateTo({name: 'root'})" class="home">TabTracker</span>
        </v-toolbar-title>

        <!-- TODO: Implement Me -->
        <!-- <v-toolbar-items>
            <v-btn flat>Browse</v-btn>
        </v-toolbar-items> -->

        <v-spacer></v-spacer>

        <v-toolbar-items>
                <v-btn dark flat to="login">Login</v-btn>
                <v-btn dark flat to="register">Sign Up</v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
export default {
    methods: {
        navigateTo (route) {
            this.$router.push(route)
        }
    }
}
</script>

<style scoped>
.home {
    cursor: pointer;
}

</style>
