import $ from "jquery"
import './app2.css'

const html = `
<section id="app2">
            <ol class="tab-bar">
                <li><span>111</span></li>
                <li><span>2222</span></li>
            </ol>
            <ol class="tab-content">
                <li>内容1</li>
                <li>内容2</li>
            </ol>
        </section>
`
const $html = $(html).appendTo('body>.page')

const $tabBar = $("#app2 .tab-bar")
const $tabContent = $("#app2 .tab-content")

const localKey = 'app2.index'
const index = localStorage.getItem(localKey) || 0

$tabBar.on('click', 'li', (e) => {
    const $li = $(e.currentTarget)
    const index = $li.index()

    localStorage.setItem(localKey, index)

    $li.addClass('selected')
        .siblings()
        .removeClass('selected')

    $tabContent.children()
        .eq(index).addClass('active')
        .siblings().removeClass('active')
})

$tabBar.children().eq(index).trigger('click') //触发自动触发click事件