(function() {
    Vue.component('todo-item', {
        template: '<li>Это todo</li>'
    })

    var app = new Vue({
        el: '#app',
        data: {
        isActive: true,
        cars: [
            {id: 1,name: "Chevy", isActive: true,
            data: {
                name: "First 1"
            }},
            {id: 2,name: "Ford", isActive: false},
            {id: 3,name: "Ford Siera", isActive: false},
            {id: 4,name: "Toyota", isActive: false},
            {id: 5,name: "Subaru", isActive: false},
            {id: 6,name: "Chev", isActive: false},
            {id: 7,name: "Nissan", isActive: false},
            {id: 8,name: "Mazda", isActive: false},
        ],
        controlPanel: [
            { name: "edit products"},
            { name: "upload budge file"},
            { name: "Edit rooftop settings"},
            { name: "add access list"},
            { name: "events"},
        ],
        isActivePane: 'edit products',
        isSelectedCar: 1,
        nextCarId: 9,
        message: 'Вот когда вы загрузили эту страницу: '
         + new Date().toLocaleString()
        },
        computed: {
            reverseMessage: function() {
                return this.message
            }
        },
        methods: {
            filterCar: function() {
                let filteredName = this.cars.filter(
                    item => item.id === this.isSelectedCar)[0].name;

                return filteredName
            },
            reverseMessageTru: function() {
                return Date.now()
            },
            addNewCar: function() {
                this.cars.push({
                    id: this.nextCarId++,
                    name: `Noname ${this.nextCarId}`,
                    isActive: false
                })
            },
            selectControlPane: function(name) {
              var filter = this.controlPanel.filter(item => item.name == name.trim())[0];


            }

        },
    })
})();