# take-out-Demo

## Tech stack
Vue2.4.x + Vue.router2.7.x + Vue.resource1.3.x + webpack2.6.x (You can check the dependencies in package.json)

## Components
- header: the interface's head.
- star: the shop's rank.
- goods: informations about all goods of the shop.
- shopcart: the shopping cart in the bottom.
- cartcontrol: the controller of  goods' count.
- ratings: ratings about the shop.
- seller: informations about the seller.
- ratingSelect: a tab component about ratings.
- split: partition bar.

## Problems in dev
#### 0x01: sticky-footer
Parent element use *position:fixed; padding-bottom*, the footer use *margin-top*.

#### 0x02: Adaptive layout
Parent element use *display:fixed*, the left use *flex:0 0 80px* and the right use *flex:1* for the left is fixed and the right is adaptive.

#### 0x03: transition by vue2.x
The popup's apear process is v-enter -> v-enter-to what is called v-enter-active. the disapear process is v-leave -> v-leave-to what called v-leave-actve. Transition prosperity should be in v-\*-active.

#### 0x04: Left and right interrelated
In this demo, we should asynchronously init the better-scroll in 'created' property first. If the left is clicked, the click listener will calculate the index of menu list. Then find the type 'ul' of goods by index and make scroll to the 'ul'. We should put every type 'ul' of goods' absolute height in 'ul' list and add a 'scroll' event listener when we init the right scroll. So we can know the viewport's y number. I use a function in 'computed' to compare the y number and the absolute height in 'ul' list to return the index what the left needs.

#### 0x05: Event triggering and listening between child and parent components
We can create a new Vue object named eventHub and put it in data prosperity in the main.js where we begin createing new Vue object named App. So we can use this.$root.eventHub.$emit and this.$root.eventHub.$on in any component whatever the components' level and relationship.

#### 0x06: Black magic about padding-top&padding-bottom
In 'food' component, I wanted to avoid that header might be smaller if the image dosen't load. So I give the header-wrapper a *padding-top:100%*. 

#### 0x07: Communication between parent component and child component
The child component can get peoperty from its parent by 'props'. Child component use '$emit()' to trigger events and its parent can listen the events by listener binding on the child components elements.

## The End
I'll constantly update this small Demo to imporve my skills. Hey, I'm just a newbie, but I have a geek heart.
