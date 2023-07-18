const print = (...args)=>{
    return console.log(...args)
}

const Fibonachi = (n)=>({
    [Symbol.iterator](){
    return {
        counter: 0,
        from: 0,
        to: 1,
        next(b){
            let value = this.to + this.from
            this.from = this.to
            this.to = value
            return {
                done: this.counter++ == n,
                value: value
            }
        }
    }
} 
})

for (const i of Fibonachi(25)) {
    print(i)
}