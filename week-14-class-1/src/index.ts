
type user = {
    name: string,
    age: number,
    address: string
}

type admin = {
    name: string,
    permision: string,
}

const printHello = (user: user & admin): string => {
    return "hello" + user.name;
}

console.log(printHello({
    name: "Vishal",
    age: 21,
    address: "naya address",
    permision: "hai"
}))