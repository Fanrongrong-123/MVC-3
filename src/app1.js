import $, { contains } from 'jquery' //引入jquery


console.log($)

const m = {
    data: {
        n: localStorage.getItem("n")
    }
}

const v = {
    html: `
    <section class="app1">
                <div id="number">
                    <span>{{n}}</span>
                </div>
                <div class="actions">
                    <button id="add1">+1</button>
                    <button id="minus1">-1</button>
                    <button id="mul2">*2</button>
                    <button id="divide2">÷2</button>
                </div>
            </section>
    `,
    update() {
        c.ui.number.text(m.data.n || 100)
    },
    render() {//函数
        const $element = $(v.html.replace('{{n}}', m.data.n))
            .appendTo('body>.page')
    }

}
//第一次渲染HTML
v.render()

const c = {
    ui: {
        button1: $('#add1'),
        button2: $('#minus1'),
        button3: $('#mul2'),
        button4: $('#divide2'),
        number: $('#number'),
    },


    bindEvents() {
        c.ui.button1.on('click', () => {
            let n = parseFloat(c.ui.number.text()) //函数解析一个参数（必要时先转换为字符串）并返回一个浮点数
            n += 1
            localStorage.setItem("n", n)
            c.ui.number.text(n)
        })

        c.ui.button2.on('click', () => {
            let n = parseFloat(c.ui.number.text())
            n -= 1
            localStorage.setItem("n", n)
            c.ui.number.text(n)
        })

        c.ui.button3.on('click', () => {
            let n = parseFloat(c.ui.number.text())
            n *= 2
            localStorage.setItem("n", n)
            c.ui.number.text(n)
        })

        c.ui.button4.on('click', () => {
            let n = parseFloat(c.ui.number.text())
            n = n / 2
            localStorage.setItem("n", n)
            c.ui.number.text(n)
        })
    }
}
c.bindEvents()



