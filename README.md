# take-out-Demo

## Tech stack
Vue2.4.x + Vue.router2.7.x + Vue.resource1.3.x + webpack2.6.x (You can check the dependencies in package.json)

## Difference(Vue1.x - Vue2.x)

## Problems in dev
0x01: sticky-footer
parent element use *position:fixed; padding-bottom*, the footer use *margin-top*.

0x02: Adaptive layout
parent element use *display:fixed*, the left use *flex:0 0 80px* and the right use *flex:1* for the left is fixed and the right is adaptive.

0x03: transition by vue2.x
the popup's apear process is v-enter -> v-enter-to what is called v-enter-active. the disapear process is v-leave -> v-leave-to what called v-leave-actve. Transition prosperity should be in v-\*-active.

0x04: Left and right interrelated


## The End
I'll constantly update this small Demo to imporve my skills. Hey, I'm just a newbie, but I have a geek heart.
