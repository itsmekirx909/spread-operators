// obj 

let obj = {
    obj1: {
        obj2: {
            obj3: {
                obj4: {
                    name: 'Syed Musab'
                }
            }
        }
    }
}

let layer4Obj ={...obj.obj1.obj2.obj3.obj4}

console.log(layer4Obj)

// array 

let arr = [
     [
        [
           [
              [
                   'Syed Musab'
                ]
            ]
        ]
    ]
]

let layer4Arr =[...arr[0][0][0][0]]

console.log(layer4Arr)

