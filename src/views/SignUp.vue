<template>
    <div class="sign-up">
        <p>Let's create a new account !</p>
        <input v-model.trim="email" type="text" placeholder="you@email.com" id="email1" /><br>
        <input v-model.trim="password" type="password" placeholder="Password"><br>
        <button @click="signUp">Sign Up</button>
        <span>or go back to <router-link to="/login">login.</router-link></span>
    </div>
</template>

<script>
import firebase from 'firebase';

    export default {
        name: 'signUp',
        data(){
            return{
                email: '',
                password: ''
            }
        },
        methods: {
            signUp: function() {
                firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
                    function(user){
                        alert('Account created')
                        this.$router.push('/dashboard')
                    },
                    function(err){
                        alert('Oops. ' + err.message)
                    }
                )

                
            }
        }
    }
</script>

<style scoped>
.signUp {
    margin-top: 40px;
}

input {
    margin: 10px 0;
    width: 20%;
    padding: 15px;
}

button {
    margin-top: 10px;
    width: 10%;
    cursor: pointer;
}

span {
    display: block;
    margin-top: 20px;
    font-size: 11px;
}

</style>