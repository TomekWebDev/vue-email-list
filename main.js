var app = new Vue({
    el: '#root',
    data: {

        isProducing: false,
        emails: [],

    },
    mounted() {

    },
    beforeUpdate() {

    },
    methods: {

        produceEmails() {

            for (i = 0; i < 10; i++) {

                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((response) => {
                        //console.log(response.data.response, this)
                        let email = response.data.response;
                        this.emails.push(email);

                    });


            }
        }
    }
}
)




