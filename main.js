    const app = {
        data() {
            return {
                images: [{src:'images/image1.jpg',title:'Shiba, Hungry',done: false,show: true},
                         {src:'images/image2.jpg',title:'Shiba, Smile',done: false,show: true},
                         {src:'images/image3.jpg',title:'Shiba, Serious',done: false,show: true}],
                search: true,
                cancel: false,
                input: false,
                nopic: false
            }
        },
        methods: {
            toggleSearch(){
                if(this.cancel) {
                    for (let i = 0; i < this.images.length; i++){this.images[i].show = true;
                    }
                };
                this.search = !this.search; 
                this.cancel = !this.cancel;
                this.input = !this.input;
                this.nopic = false;
            },
            searching() {
                let pic=0;
                if (this.inputTask) {
                    for (let i = 0; i < this.images.length; i++) {
                        if (this.images[i].title.toLowerCase().includes(this.inputTask.toLowerCase())) {
                            this.images[i].show = true;
                            pic++;
                        }
                        else {
                            this.images[i].show = false;
                        }
                    }
                    console.log(this.nopic);
                    console.log(pic);
                    if(pic <= 0){
                        this.nopic = true;
                    }
                    else{
                        this.nopic = false;
                    }
                }
            }
        },
        computed: {
            countPhoto(){
                return this.images.filter( t => t.show ).length
            }
        },
    }
    Vue.createApp(app).mount('#app')