



#### 设定行数,超出部分不显示(需要设定宽度)

```css
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 2;
overflow: hidden;
```

#### 消除input标签在移动端的默认效果

```css
input[type="text"],
button {
  outline: none;
  -webkit-appearance: none;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
```

#### 移动端父元素设置border-radius和overflow-hidden,遮罩失效

```css
transform: rotate(0deg);
```

#### 移动端底部有fixed导航栏挡住内容

```css
margin-bottom: 导航栏高度;
/* padding-bottom: 导航栏高度 */
```

#### flex瀑布流布局

```css
.waterfall {
  width: 100%;
  column-count: 2; 
  column-gap: 0;
}

.waterfall .item {
  break-inside: avoid;
  /* 防止截断 */  
}
```

#### 对象是否为空

```js
Object.keys(obj).length == 0
```

```
Object.keys(obj)
参数：要返回其枚举自身属性的对象
返回值：一个表示给定对象的所有可枚举属性的字符串数组
```

#### 监听图片加载

```vue
img.onload = function() {}
@load='methods'
```

#### 事件总线

```vue
this.$bus.$emit()
Vue.prototype.$bus = new Vue()
this.$bus.$on()
this.$bus.$off()
```

#### 记录位置

keep-alive

因为轮播图和better-scroll的transform有冲突

所以用deactivated记录离开时的位置

用activated恢复回来时的位置