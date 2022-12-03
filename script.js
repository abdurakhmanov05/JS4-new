// 1 //

let students = [
    {
        name: 'Timur', 
        age: 17,
        gender: 'male'
    },
    {
        name: 'Zafar', 
        age: 17,
        gender: 'male'
    },
    {
        name: 'Nigina', 
        age: 17,
        gender: 'female'
    },
    {
        name: 'Madina', 
        age: 16,
        gender: 'female'
    },
    {
        name: 'Samir', 
        age: 14,
        gender: 'male'
    },
    {
        name: 'Aziz', 
        age: 15,
        gender: 'male'
    },
    {
        name: 'Mirjalol', 
        age: 18,
        gender: 'male'
    },
    {
        name: 'Umar', 
        age: 16,
        gender: 'male'
    },
    {
        name: 'Maxdi', 
        age: 15,
        gender: 'male'
    },
    {
        name: 'Munis', 
        age: 18,
        gender: 'male'
    },
    {
        name: 'Laziz', 
        age: 15,
        gender: 'male'
    }
]

let male = []
let female = []

students.filter(student => {
    if(student.gender === 'male') {
        male.push(students.name)
    } else {
        female.push(students.name)
    }
})

console.log(male, female);

// 2 //

// Отфильтровать задачи в переменные а и b
    // Сохранить количество в ключе count
    // Сохранить сами задачи в массиве-ключе arr
    let arr = [
        {
            "userId": 1,
            "id": 1,
            "title": "delectus aut au`tem",
            "completed": false
        },
        {
            "userId": 1,
            "id": 2,
            "title": "quis ut nam facilis et officia qui",
            "completed": false
        },
        {
            "userId": 1,
            "id": 3,
            "title": "fugiat veniam minus",
            "completed": false
        },
        {
            "userId": 1,
            "id": 4,
            "title": "et porro tempora",
  
            "completed": true
        },
        {
            "userId": 1,
            "id": 5,
            "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
            "completed": false
        },
        {
            "userId": 1,
            "id": 6,
            "title": "qui ullam ratione quibusdam voluptatem quia omnis",
            "completed": false
        },
        {
            "userId": 1,
            "id": 7,
            "title": "illo expedita consequatur quia in",
            "completed": false
        },
        {
            "userId": 1,
            "id": 8,
            "title": "quo adipisci enim quam ut ab",
            "completed": true
        },
        {
            "userId": 1,
   
            "id": 9,
            "title": "molestiae perspiciatis ipsa",
            "completed": false
        },
        {
            "userId": 1,
            "id": 10,
            "title": "illo est ratione doloremque quia maiores aut",
            "completed": true
        },
    ]
    let a = {
        count: 0,
        arr: []
    }
   
    let b = {
        count: 0,
        arr: []
    }

    arr.filter(arr => {
        if(arr.completed === true) {
            a.arr.push(arr.completed)
            a.count++
        } else {
            b.arr.push(arr.completed)
            b.count++
        }
    })

    console.log(a, b);