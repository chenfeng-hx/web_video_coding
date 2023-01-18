// 静态 import
// import hello from './05.动态import暴露';
// hello()

// 动态
var btn = document.querySelector('button');
btn.addEventListener('click', function () {
    import('./05.动态import暴露').then(module => {
        module.hello();

    })
})