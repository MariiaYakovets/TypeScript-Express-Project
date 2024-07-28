const number: number = 5;

let string: string = "5";

interface AppleObject {
    name: string
    price: 5 | 10
    colors?: {
        red?: boolean
        green?: boolean
        yellow?: boolean
    }
}

let apple: AppleObject = {
    name: 'hgfhfg',
    price: 5,
    colors: {
        red: true
    }
}




function createApple(name: string, price: 5| 10 ): AppleObject {
    return {
        name: name,
        price: price
    }
}

// null - None, undefined - не опредеleно, void - пустота
let orange: undefined



interface CallbackObject {
    name: string,
    initiator: string
    callback: () => number
}

const superCallback: CallbackObject = {
    name: '',
    initiator: 'f',
    callback(){
        return 5
    }
}




