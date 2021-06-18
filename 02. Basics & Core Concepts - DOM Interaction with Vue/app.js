const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name:'',
      confirmedName:'',
      // fullname:'',
      lastname:''
    };
  },
  watch:{
    counter(value) {
      setTimeout(function () {
        const that = this;
        if (value > 50){
          that.counter = 0 ;
        }
      },2000)
    }
    // name(value) {
    //   if (value === '') {
    //     this.fullname = '';
    //   } else {
    //     this.fullname = value + ' ' + this.lastname;
    //   }
    // },
    // lastname(value){
    //   if (value === '') {
    //     this.fullname = '';
    //   } else {
    //     this.fullname = this.name + ' ' + value ;
    //   }
    // }
  },
  computed:{
    fullname() {
      if (this.name === ''|| this.lastname === ''){
        return '';
      }else {
        return this.name + ' ' + this.lastname;
      }
    }
  },
  methods:{
    add(num) {
        this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    setName(event){
      this.name = event.target.value;
    },
    submitForm() {
      alert('submitted!');
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
    resetInput() {
      this.name = '';
    },
    outputfullname() {
      if (this.name === ''){
        return '';
      }
        return this.name + ' ' + 'rostami';
    }
  }
});

app.mount('#events');
