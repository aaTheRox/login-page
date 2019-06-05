let calc = Vue.component('app-login', {
    template: `
    <div>
    <div class="main-content">
        <div class="columns">
            <div class="column is-4 bg-info">
                <div class="left-info">
                    <p>Créer ton profile, discute et surtout pense & poste !</p>
                    <p>Rejoins vite la communauté en plus, <strong>c'est gratuit</strong> !</p>


                    

                    <p v-if="!register"><button @click="setRegister" class="btn">Créer un compte</button></p>
                    <p v-else><button @click="setLogin" class="btn">Se connecter</button></p>
                </div>
            </div>

            <div class="column p-60">

            <p v-if="errors==false">Connecté avec succès!</p>

                <h3 v-if="register" class="title">S'Enregistrer</h3>
                <h4 v-else class="title is-text-small">Se connecter dès maintenant!</h4>
                <div class="field">
                    <label for="" class="login"><strong>Nom d'utilisateur</strong></label>
                    <input autofocus type="text" placeholder="Entre ton nom d'utilisateur..." v-model="username"  class="login">
                </div>

                <div class="field">
                    <label for="" class="login"><strong>Mot de passe</strong></label>
                    <input type="text" placeholder="Entre ton mot de passe..." v-model="password" class="login">
                </div>

                <div v-if="register" class="field">
                    <label for=""  class="login"><strong>Confirmer mot de passe</strong></label>
                    <input type="text" placeholder="Re-entre ton mot de passe..."  class="login">
                </div>

                <div class="columns">
                    <div class="column">
                        <div v-if="!register" class="field">
                            <input id="rememberme" type="checkbox"></input>
                            <label for="rememberme" class="login">Se souvenir de moi</label>
                        </div>
                    </div>
                    <div class="column">
                        <div class="field">
                            <p v-if="!register"><a class="link-pass is-pulled-right" href="">Mot de passe oublié?</a></p>
                            <button :disabled="username.length==0 || password.length==0" v-if="!register" @click="login" class="btn is-pulled-right">Se connecter</button>
                            <button :disabled="username.length==0 || password.length==0" v-else class="btn is-pulled-right">Creer mon compte</button>
                        </div>
                    </div>

                    

                </div>
            </div>
        </div>

    </div>

</div>
    `,
    data() {
        return {
            register: false,
            username: '',
            password: '',
            errors: null,
            loading: null,
        }
    },
    methods: {
        setRegister() {
            this.register = true;
        },
        setLogin() {
            this.register = false;
        },

        login() {
            this.loading = true
            console.log('login');

            setTimeout(function () {
                
                if (this.username == 'user' && this.password == '123') {
                    this.errors = false;
                } else {
                    this.errors = true;
                }

                this.loading = false
                console.log(this.loading)
            }, 2000);


        }
    }
})

var app = new Vue({
    el: '#app',
})
