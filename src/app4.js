import $ from 'jquery'
import './app4.css'

const html = `
<section id="app4">
            <div class="circle"></div>
        </section>
`
const $html = $(html).appendTo('body>.page')

const $circle = $('#app4 .circle')
$circle.on('click', () => {
    $circle.addClass('active')
}).on('mouseleave', () => {
    $circle.removeClass('active')
})